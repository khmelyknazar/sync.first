import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { engineeringPagePractices } from "@/config/engineering-page";
import { engineeringProofPrinciples } from "@/config/engineering-proof/principles";
import { navigationCta } from "@/config/navigation";
import { EngineeringPrincipleRow } from "@/features/engineering-proof/engineering-principle-row";
import { PrincipleList } from "@/features/trust-system/principle-list";
import { ArchitectureProofSection } from "@/features/trust-system/architecture-proof-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Інженерія",
  description:
    "Архітектурний підхід Sync Industry: принципи проєктування, технологічний стек, accessibility та шлях від CRM до бізнес-інфраструктури.",
  path: "/company/engineering",
});

/**
 * Composed almost entirely from existing pieces — no new design
 * system, per the brief:
 * - Architecture philosophy + Documented decisions →
 *   `EngineeringPrincipleRow` × `engineeringProofPrinciples` (same
 *   data/component already built for Home's Engineering Proof
 *   section — not duplicated, reused).
 * - Real technology stack → `ArchitectureProofSection` as-is (built
 *   in Build Phase Stage 4, excluded from Home, and explicitly
 *   documented then as belonging here).
 * - Accessibility/performance → `PrincipleList` (Trust System's
 *   existing renderer) with new, page-specific, verifiable content.
 * - Design System / Scalability / CRM evolution → prose only, no new
 *   visual components — these are explanatory sections, not proof
 *   mechanisms that need their own component.
 */
export default function EngineeringPage() {
  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-20">
          <header className="flex max-w-[640px] flex-col gap-4">
            <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-primary)]">
              Інженерія
            </p>
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              Як ми проєктуємо системи, а не сайти
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              Ця сторінка описує реальний архітектурний підхід Sync Industry — без
              сертифікацій, метрик чи клієнтських лого, яких у нас поки немає.
            </p>
          </header>

          <section aria-labelledby="architecture-philosophy-heading" className="flex flex-col gap-8">
            <SectionHeading
              id="architecture-philosophy-heading"
              eyebrow="Філософія архітектури"
              title="Чотири принципи, які визначають кожне рішення"
            />
            <div>
              {engineeringProofPrinciples.map((principle) => (
                <EngineeringPrincipleRow key={principle.code} principle={principle} />
              ))}
            </div>
          </section>

          <section aria-labelledby="design-system-heading" className="flex flex-col gap-4">
            <SectionHeading
              id="design-system-heading"
              eyebrow="Design System"
              title="Один набір токенів, уся екосистема"
            />
            <p className="max-w-[680px] text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
              Кольори, типографіка, spacing, radius і motion визначені один раз як
              CSS-токени й використовуються без винятків — від цього тексту до кожної
              кнопки на сайті. Немає окремої «дизайн-системи для маркетингу» і
              «дизайн-системи для продукту»: щільність компонування відрізняється між
              поверхнями, токени — ні.
            </p>
          </section>

          <section aria-labelledby="scalability-heading" className="flex flex-col gap-4">
            <SectionHeading
              id="scalability-heading"
              eyebrow="Масштабованість"
              title="CRM зараз, бізнес-інфраструктура — коли буде потреба"
            />
            <p className="max-w-[680px] text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
              Архітектура побудована навколо одного спільного Core (ідентичність,
              дані, права доступу) і продуктових поверхонь над ним. CRM — перша
              поверхня і поточна точка входу. ERP, Business Automation, Internal
              Systems та Integrations спроєктовані як розширення того самого Core, а
              не окремі системи — вони позначені «Скоро» й з&apos;являються лише тоді,
              коли для них є реальна бізнес-потреба, без переписування того, що вже
              працює.
            </p>
          </section>

          <ArchitectureProofSection />

          <section aria-labelledby="accessibility-performance-heading" className="flex flex-col gap-8">
            <SectionHeading
              id="accessibility-performance-heading"
              eyebrow="Accessibility та Performance"
              title="Перевірювані практики, не обіцянки"
            />
            <PrincipleList items={engineeringPagePractices} />
          </section>

          <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-8">
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Є система, яку варто спроєктувати правильно з самого початку?
            </p>
            <Button asChild variant="primary">
              <Link href={navigationCta.href}>{navigationCta.label}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
}
