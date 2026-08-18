import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";

/**
 * `DraftNotice` is not decoration — it's the honesty boundary this
 * whole product has held to everywhere else (no fabricated case
 * results, no invented certifications) applied to legal text: this
 * content was generated, not drafted or reviewed by a lawyer, and
 * says so plainly before a single clause of it.
 */
function DraftNotice() {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--warning-500)]/30 bg-[var(--warning-500)]/10 p-4 text-[13px] leading-[19px] text-[var(--color-text-secondary)]">
      <strong className="text-[var(--warning-500)]">Це чернетка.</strong> Текст
      згенеровано як типовий шаблон і не є юридичною консультацією. Перед публічним
      використанням його потрібно погодити з юристом — особливо якщо плануєте
      працювати з клієнтами з ЄС (GDPR) чи інших юрисдикцій з власними вимогами.
    </div>
  );
}

export function LegalPageLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container size="narrow" className="flex flex-col gap-8">
          <header className="flex flex-col gap-3">
            <h1 className="text-[length:var(--font-heading-lg-size)] leading-[var(--font-heading-lg-line)] font-semibold text-[var(--color-text-primary)]">
              {title}
            </h1>
            <p className="text-[13px] text-[var(--color-text-disabled)]">
              Востаннє оновлено: {updatedAt}
            </p>
          </header>

          <DraftNotice />

          <div className="flex flex-col gap-6 text-[14px] leading-[22px] text-[var(--color-text-secondary)] [&_h2]:mt-2 [&_h2]:text-[16px] [&_h2]:font-semibold [&_h2]:text-[var(--color-text-primary)] [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-[var(--color-brand-primary)] [&_a]:underline">
            {children}
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
}
