import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { caseStudyHref } from "@/lib/case-study";
import { ProjectTypeBadge } from "@/features/work/project-type-badge";
import { TechnologyTags } from "@/features/work/technology-tags";
import type { CaseStudy } from "@/types/case-study";

/**
 * Deliberately not "CaseStudyCard but bigger" — different layout
 * (asymmetric two-column, approach/result shown inline instead of
 * hidden behind a click) so the featured case reads as compositional
 * weight, not just a larger box in the same grid rhythm.
 */
export function FeaturedCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={caseStudyHref(caseStudy.slug)}
      className={[
        "group grid grid-cols-1 gap-8 rounded-[var(--radius-xl)] border border-[var(--color-border-default)]",
        "bg-[var(--color-bg-surface)] p-8 transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
        "hover:border-[var(--color-border-strong)] sm:p-10 lg:grid-cols-[1.2fr_1fr]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--color-focus-ring)]",
      ].join(" ")}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <ProjectTypeBadge type={caseStudy.type} />
        </div>

        <h3 className="text-[length:var(--font-heading-md-size)] leading-[var(--font-heading-md-line)] font-semibold text-[var(--color-text-primary)]">
          {caseStudy.clientName ?? caseStudy.title}
        </h3>

        <p className="max-w-[440px] text-[14px] leading-[20px] text-[var(--color-text-secondary)]">
          {caseStudy.summary}
        </p>

        <span className="inline-flex items-center gap-1 text-[14px] font-medium text-[var(--color-brand-primary)]">
          Детальніше про проєкт
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-[var(--motion-instant)] group-hover:translate-x-0.5"
          />
        </span>
      </div>

      <div className="flex flex-col justify-between gap-6 border-t border-[var(--color-divider)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        {caseStudy.approach && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[var(--color-text-disabled)]">
              Підхід
            </span>
            <p className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
              {caseStudy.approach}
            </p>
          </div>
        )}

        {caseStudy.result?.qualitative && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[var(--color-text-disabled)]">
              Результат
            </span>
            <p className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
              {caseStudy.result.qualitative}
            </p>
          </div>
        )}

        <TechnologyTags technology={caseStudy.technology} />
      </div>
    </Link>
  );
}
