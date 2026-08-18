import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { documentationLinks } from "@/config/trust-system/documentation-links";

const HEADING_ID = "documentation-heading";

/**
 * BUSINESS GOAL: let a skeptical visitor go verify claims themselves
 * instead of asking them to trust the homepage — the strongest form
 * of proof available to a company without a large public reference
 * list yet.
 *
 * PROVES: nothing here is asserted without something the visitor can
 * click through and actually read.
 *
 * CONTENT: `documentationLinks` — three real, resolvable routes from
 * the Marketing Website Specification, not a promise of docs that
 * don't exist yet.
 *
 * CTA: each card IS the CTA — a direct link, no secondary "learn
 * more" wrapper needed.
 *
 * TRUST SIGNAL: verifiability itself — the section's only claim is
 * "you can check," which is either true (the link resolves) or
 * false, unlike a subjective marketing statement.
 *
 * AVOIDING MARKETING BULLSHIT: no link to a page that doesn't exist
 * or is a stub with no content — if a linked page isn't ready, it's
 * removed from this list until it is, not launched half-empty behind
 * a trust claim.
 */
export function DocumentationTransparencySection() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Прозорість"
          title="Перевірте самі"
          description="Не просимо повірити на слово — ось що можна прочитати напряму."
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {documentationLinks.map(({ title, description, href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={[
                  "flex h-full flex-col gap-3 rounded-[var(--card-radius)] border",
                  "border-[var(--card-border)] bg-[var(--card-bg)] p-6",
                  "transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
                  "hover:border-[var(--color-border-strong)]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  "focus-visible:outline-[var(--color-focus-ring)]",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-[var(--radius-md)] bg-[var(--graphite-700)] text-[var(--color-text-secondary)]"
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
                  {title}
                </span>
                <span className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
                  {description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
