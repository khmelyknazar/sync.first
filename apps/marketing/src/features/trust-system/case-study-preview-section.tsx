import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import { getAllCaseStudies } from "@/lib/case-study";
import { CaseStudyGrid } from "@/features/work/case-study-grid";

const HEADING_ID = "case-studies-heading";

/**
 * Now a thin Home-page wrapper around the real Work System
 * (`CaseStudyGrid`, sourced from `config/case-studies`) — the
 * Stage-4 stand-in implementation (separate `CaseStudy` type, its own
 * card, an empty local array) is retired. One case study model, one
 * set of components, used both here and on `/work`.
 *
 * BUSINESS GOAL / PROVES / TRUST SIGNAL / AVOIDING MARKETING
 * BULLSHIT — unchanged from Stage 4's original documentation of this
 * section; only the implementation moved to the shared system.
 */
export function CaseStudyPreviewSection() {
  const hasCaseStudies = getAllCaseStudies().length > 0;

  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id={HEADING_ID}
            eyebrow="Результати"
            title="Кейси"
            description={
              hasCaseStudies
                ? "Реальна робота — з чітким маркуванням, де це клієнтський, демонстраційний чи внутрішній проєкт."
                : undefined
            }
          />
          {hasCaseStudies && (
            <Link
              href="/work"
              className="text-[14px] font-medium text-[var(--color-brand-primary)] hover:underline"
            >
              Усі кейси
            </Link>
          )}
        </div>

        {hasCaseStudies ? (
          <CaseStudyGrid />
        ) : (
          <div
            className={[
              "flex flex-col items-start gap-4 rounded-[var(--radius-lg)] border border-dashed",
              "border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-8",
            ].join(" ")}
          >
            <p className="max-w-[520px] text-[15px] leading-[22px] text-[var(--color-text-primary)]">
              Ми ще не опублікували жодного кейсу — публікуємо лише реальну роботу з
              чітким маркуванням типу проєкту.
            </p>
            <Button asChild variant="secondary">
              <Link href={navigationCta.href}>{navigationCta.label}</Link>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
