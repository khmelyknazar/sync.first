import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

/**
 * Solves the missing `public/og.png` gap flagged in the deploy
 * checklist — generated via the same `next/og` pattern already used
 * for `icon.png`/`apple-icon.png`, so this file always matches the
 * current brand automatically. Next.js serves this at
 * `/opengraph-image` and wires it into every page's OG metadata that
 * doesn't specify its own image.
 *
 * The mark embedded below is the real logo the user provided (the
 * same source as `app/icon.png`), inlined as base64 — Satori (the
 * renderer behind `next/og`) can only embed images as a data URI or
 * a fetchable absolute URL, and a live URL isn't available before
 * deploy. It's the small 64×64 favicon-sized export (~2.5KB base64),
 * not the full-resolution original, since this only renders at ~40px
 * in the final image.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_MARK_BASE64 =
  "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";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0E16",
          backgroundImage:
            "radial-gradient(circle at 78% 30%, rgba(61,99,255,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${LOGO_MARK_BASE64}`}
            width={40}
            height={40}
            style={{ borderRadius: 8 }}
            alt=""
          />
          <div style={{ color: "#EEF0F4", fontSize: 28, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            color: "#EEF0F4",
            fontSize: 52,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 880,
          }}
        >
          Перетворюємо хаос бізнес-процесів на одну працюючу систему
        </div>
      </div>
    ),
    { ...size },
  );
}
