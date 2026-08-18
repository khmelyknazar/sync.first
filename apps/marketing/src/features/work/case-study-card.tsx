import Link from "next/link";

import { cn } from "@axioma/design-system/cn";

import { caseStudyHref } from "@/lib/case-study";
import { ProjectTypeBadge } from "@/features/work/project-type-badge";
import { TechnologyTags } from "@/features/work/technology-tags";
import type { CaseStudy } from "@/types/case-study";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={caseStudyHref(caseStudy.slug)}
      className={cn(
        "flex flex-col gap-4 rounded-[var(--card-radius)] border border-[var(--card-border)]",
        "bg-[var(--card-bg)] p-6 transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
        "hover:border-[var(--color-border-strong)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--color-focus-ring)]",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[15px] font-medium text-[var(--color-text-primary)]">
          {caseStudy.clientName ?? caseStudy.title}
        </span>
        <ProjectTypeBadge type={caseStudy.type} />
      </div>

      <p className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
        {caseStudy.summary}
      </p>

      <TechnologyTags technology={caseStudy.technology} limit={4} />

      {caseStudy.result?.metric && (
        <div className="mt-auto border-t border-[var(--color-divider)] pt-4">
          <span className="block text-[20px] font-semibold text-[var(--color-brand-primary)]">
            {caseStudy.result.metric.value}
          </span>
          <span className="text-[12px] text-[var(--color-text-secondary)]">
            {caseStudy.result.metric.label}
          </span>
        </div>
      )}
    </Link>
  );
}
