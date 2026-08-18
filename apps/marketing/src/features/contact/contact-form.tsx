"use client";

import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { navigationCta } from "@/config/navigation";
import { FormField } from "@/features/contact/form-field";
import type { ContactFormStatus, ContactFormValues } from "@/types/contact";

const EMPTY_VALUES: ContactFormValues = {
  name: "",
  workEmail: "",
  company: "",
  need: "",
  context: "",
};

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Вкажіть ім'я.";
  if (!values.workEmail.trim()) {
    errors.workEmail = "Вкажіть робочий email.";
  } else if (!EMAIL_PATTERN.test(values.workEmail)) {
    errors.workEmail = "Перевірте формат email.";
  }
  if (!values.company.trim()) errors.company = "Вкажіть компанію.";
  if (!values.need.trim()) errors.need = "Опишіть коротко, що потрібно.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  // Honeypot — not part of `ContactFormValues` (it's anti-spam
  // plumbing, not a real form field a person fills in). Real visitors
  // never see or fill this input (see the field's own styling below);
  // most bots fill every input they find. If it's non-empty, the
  // server (`/api/contact`) silently discards the submission.
  const [honeypot, setHoneypot] = useState("");

  function updateField<K extends keyof ContactFormValues>(field: K, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field: keyof ContactFormValues) {
    const fieldErrors = validate(values);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");

    try {
      // The endpoint exists (`app/api/contact/route.ts`) and validates
      // server-side, but no delivery provider (email/Telegram/CRM) is
      // configured yet — it honestly responds 503 until one is wired
      // via `CONTACT_DELIVERY_WEBHOOK_URL`. That correctly lands here
      // in the `error` branch instead of a faked success.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6"
      >
        <div className="flex items-center gap-2 text-[var(--color-success)]">
          <CheckCircle2 aria-hidden="true" className="size-5" />
          <span className="text-[15px] font-medium text-[var(--color-text-primary)]">
            Заявку надіслано
          </span>
        </div>
        <p className="text-[14px] leading-[20px] text-[var(--color-text-secondary)]">
          Ми зв&apos;яжемося з вами на вказаний email.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      aria-busy={status === "submitting"}
    >
      {/* Honeypot — off-screen, aria-hidden, unreachable by Tab.
          Never rendered as a visible/labeled field, so it can't be
          mistaken for a real one by a sighted user, keyboard user, or
          screen reader — the accessibility bar this form otherwise
          holds every field to doesn't apply to a field no human is
          meant to interact with. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <FormField id="contact-name" label="Ім'я" error={errors.name}>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          onBlur={() => handleBlur("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
      </FormField>

      <FormField id="contact-email" label="Робочий email" error={errors.workEmail}>
        <Input
          id="contact-email"
          name="workEmail"
          type="email"
          autoComplete="email"
          value={values.workEmail}
          onChange={(event) => updateField("workEmail", event.target.value)}
          onBlur={() => handleBlur("workEmail")}
          aria-invalid={Boolean(errors.workEmail)}
          aria-describedby={errors.workEmail ? "contact-email-error" : undefined}
        />
      </FormField>

      <FormField id="contact-company" label="Компанія" error={errors.company}>
        <Input
          id="contact-company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
          onBlur={() => handleBlur("company")}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "contact-company-error" : undefined}
        />
      </FormField>

      <FormField
        id="contact-need"
        label="Що потрібно автоматизувати чи побудувати"
        error={errors.need}
      >
        <Textarea
          id="contact-need"
          name="need"
          rows={4}
          value={values.need}
          onChange={(event) => updateField("need", event.target.value)}
          onBlur={() => handleBlur("need")}
          aria-invalid={Boolean(errors.need)}
          aria-describedby={errors.need ? "contact-need-error" : undefined}
        />
      </FormField>

      <FormField id="contact-context" label="Орієнтовний масштаб або контекст" optional>
        <Textarea
          id="contact-context"
          name="context"
          rows={3}
          value={values.context}
          onChange={(event) => updateField("context", event.target.value)}
        />
      </FormField>

      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-2 rounded-[var(--radius-md)] bg-[var(--danger-500)]/12 p-3 text-[13px] text-[var(--color-danger)]"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <span>
            Не вдалося надіслати форму. Спробуйте, будь ласка, ще раз трохи пізніше.
          </span>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" && (
          <Loader2 aria-hidden="true" className="size-4 animate-spin" />
        )}
        {status === "submitting" ? "Надсилаємо…" : navigationCta.label}
      </Button>
    </form>
  );
}
