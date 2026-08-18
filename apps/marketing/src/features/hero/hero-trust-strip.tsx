import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * The "subtle proof" element from the brief — deliberately not a fake
 * logo strip. Trust System (Marketing Website Spec §13) is explicit
 * that no trust signal is forced; a young company has no public
 * client roster to display yet, and a row of placeholder logos would
 * be the exact "decorative trust badge" the spec forbids. The honest
 * substitute: a principle the visitor can go verify themselves.
 */
export function HeroTrustStrip() {
  return (
    <Link
      href="/company/engineering"
      className={[
        "group inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-secondary)]",
        "transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
        "hover:text-[var(--color-text-primary)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--color-focus-ring)] rounded-[var(--radius-sm)]",
      ].join(" ")}
    >
      Без шаблонів — кожна система проєктується під логіку конкретного бізнесу.
      <span className="inline-flex items-center gap-1 font-medium text-[var(--color-brand-primary)]">
        Як ми працюємо
        <ArrowRight
          aria-hidden="true"
          className="size-3.5 transition-transform duration-[var(--motion-instant)] group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
