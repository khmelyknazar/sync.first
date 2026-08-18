import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Only POST is exported — Next.js App Router route handlers return a
 * 405 automatically for any HTTP method with no matching export, so
 * there's no need to hand-write that check.
 */

interface ContactPayload {
  name: string;
  workEmail: string;
  company: string;
  need: string;
  context?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT_FIELD_LENGTH = 200;
const MAX_LONG_FIELD_LENGTH = 5000;

type ValidationResult =
  | { valid: true; data: ContactPayload }
  | { valid: false; errors: string[] };

/**
 * Never trusts the client-side validation already done in
 * `ContactForm` — that exists purely for UX; this is the real check.
 * Every field is re-derived from an untyped `unknown` body rather
 * than cast, so a malformed or malicious payload (wrong types, huge
 * strings, extra fields) can't reach the delivery step.
 */
function validatePayload(body: unknown): ValidationResult {
  const errors: string[] = [];

  if (typeof body !== "object" || body === null) {
    return { valid: false, errors: ["Payload must be a JSON object."] };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const workEmail = typeof record.workEmail === "string" ? record.workEmail.trim() : "";
  const company = typeof record.company === "string" ? record.company.trim() : "";
  const need = typeof record.need === "string" ? record.need.trim() : "";
  const rawContext = typeof record.context === "string" ? record.context.trim() : "";

  if (!name) errors.push("name is required");
  else if (name.length > MAX_SHORT_FIELD_LENGTH) errors.push("name is too long");

  if (!workEmail) errors.push("workEmail is required");
  else if (!EMAIL_PATTERN.test(workEmail)) errors.push("workEmail is not a valid email");
  else if (workEmail.length > MAX_SHORT_FIELD_LENGTH) errors.push("workEmail is too long");

  if (!company) errors.push("company is required");
  else if (company.length > MAX_SHORT_FIELD_LENGTH) errors.push("company is too long");

  if (!need) errors.push("need is required");
  else if (need.length > MAX_LONG_FIELD_LENGTH) errors.push("need is too long");

  if (rawContext.length > MAX_LONG_FIELD_LENGTH) errors.push("context is too long");

  if (errors.length > 0) return { valid: false, errors };

  return {
    valid: true,
    data: { name, workEmail, company, need, context: rawContext || undefined },
  };
}

/**
 * Escapes user-supplied text before it goes into the HTML email body
 * — the submission fields are rendered as HTML below, so this is a
 * real injection boundary, not decoration.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Integration boundary — delivers via Gmail SMTP (nodemailer),
 * authenticated with an App Password (Gmail requires this over a
 * regular account password for SMTP once 2-Step Verification is on,
 * which it must be to generate one: Google Account → Security → 2-Step
 * Verification → App passwords). Reads `GMAIL_USER` and
 * `GMAIL_APP_PASSWORD` from the environment; until both are set, this
 * honestly reports "not delivered" rather than faking success — see
 * `.env.example`.
 */
async function deliverContactRequest(data: ContactPayload): Promise<boolean> {
  const user = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!user || !appPassword) return false;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass: appPassword },
    });

    await transporter.sendMail({
      from: `"Sync Industry — сайт" <${user}>`,
      to: user,
      replyTo: data.workEmail,
      subject: `Нова заявка з сайту: ${data.company}`,
      text: [
        `Ім'я: ${data.name}`,
        `Email: ${data.workEmail}`,
        `Компанія: ${data.company}`,
        `Що потрібно: ${data.need}`,
        data.context ? `Контекст: ${data.context}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Ім'я:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.workEmail)}</p>
        <p><strong>Компанія:</strong> ${escapeHtml(data.company)}</p>
        <p><strong>Що потрібно:</strong> ${escapeHtml(data.need)}</p>
        ${data.context ? `<p><strong>Контекст:</strong> ${escapeHtml(data.context)}</p>` : ""}
      `,
    });
    return true;
  } catch (error) {
    // Delivery failure (bad credentials, Gmail rejecting the send,
    // network issue) — logged without PII, surfaced to the caller as
    // "not delivered" so the honest 503 path below still applies.
    console.error("[contact] email delivery failed", error instanceof Error ? error.message : error);
    return false;
  }
}

/**
 * Best-effort in-memory rate limit — 5 requests per IP per 10
 * minutes. Deliberately labeled "best-effort": this `Map` lives in
 * one serverless function instance's memory, so on a host that runs
 * multiple instances (which most serverless platforms do under real
 * traffic) each instance tracks its own counts independently — a
 * determined abuser can exceed the intended limit by hitting
 * different instances. This still stops the common case (a script
 * hammering the same warm instance) with zero external dependencies
 * or credentials. A shared store (Upstash Redis, etc.) is the correct
 * upgrade once this endpoint sees real traffic, and needs its own
 * credentials when that happens.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  // Honeypot check — `website` is never shown to real users
  // (`ContactForm`'s hidden field); a filled value means a bot
  // auto-filled every input it found. Respond exactly like a real
  // success so the bot has no signal it was caught, but skip
  // validation and delivery entirely — this is deliberately checked
  // before validation so spam never even reaches that logic.
  if (typeof body === "object" && body !== null && "website" in body) {
    const honeypot = (body as Record<string, unknown>).website;
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return NextResponse.json({ status: "received" }, { status: 200 });
    }
  }

  const result = validatePayload(body);
  if (!result.valid) {
    return NextResponse.json(
      { error: "Validation failed.", details: result.errors },
      { status: 400 },
    );
  }

  // No PII in logs — a submission was received and passed validation,
  // that's the entire signal; name/email/company/need are not logged.
  console.info("[contact] validated submission received");

  const delivered = await deliverContactRequest(result.data);
  if (!delivered) {
    // Honest, non-2xx response: the payload was valid, but there is
    // nowhere configured to send it yet. This is what lets the
    // frontend's existing error state be correct rather than a lie —
    // see `ContactForm`'s `!response.ok` branch.
    return NextResponse.json(
      { error: "Contact delivery is not configured yet." },
      { status: 503 },
    );
  }

  return NextResponse.json({ status: "received" }, { status: 200 });
}
