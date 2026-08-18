import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { navigationCta } from "@/config/navigation";

/**
 * Deliberately lean. The Marketing Website Specification originally
 * planned a four-column footer (Product / Company / Resources /
 * Legal) — but populating those columns fully would mean linking
 * `/pricing`, `/company/about`, `/blog`, none of which exist yet,
 * exactly the dead-link pattern the deploy cleanup pass eliminated
 * everywhere else. `/legal/privacy` and `/legal/terms` are real
 * (draft) pages now, so they're linked; the rest return when their
 * pages do.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-divider)]">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-[13px] text-[var(--color-text-disabled)]">
            © {year} Sync Industry. Усі права захищено.
          </p>
        </div>

        <nav aria-label="Футер" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/product"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Продукт
          </Link>
          <Link
            href="/work"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Кейси
          </Link>
          <Link
            href="/company/engineering"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Інженерія
          </Link>
          <Link
            href={navigationCta.href}
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Контакт
          </Link>
          <Link
            href="/legal/privacy"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Конфіденційність
          </Link>
          <Link
            href="/legal/terms"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Умови
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
