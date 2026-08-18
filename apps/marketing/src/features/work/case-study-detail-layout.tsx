import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import { CaseStudyAssets } from "@/features/work/case-study-assets";
import { CaseStudySections } from "@/features/work/case-study-sections";
import { ProjectTypeBadge } from "@/features/work/project-type-badge";
import { TechnologyTags } from "@/features/work/technology-tags";
import type { CaseStudy } from "@/types/case-study";

/**
 * `<article>` — a case study is independently distributable content
 * (syndication, reader mode), the correct semantic than a generic
 * `<div>` section. One `<h1>` (the case study title); `CaseStudySections`
 * renders each narrative block as its own `<h2>`, keeping the
 * heading hierarchy correct without this layout needing to know how
 * many sections exist.
 */
export function CaseStudyDetailLayout({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="py-16 sm:py-24">
      <Container size="narrow" className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <ProjectTypeBadge type={caseStudy.type} />
          <h1 className="text-[length:var(--font-heading-lg-size)] leading-[var(--font-heading-lg-line)] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]">
            {caseStudy.clientName ?? caseStudy.title}
          </h1>
          <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
            {caseStudy.summary}
          </p>
          <TechnologyTags technology={caseStudy.technology} />
        </header>

        <CaseStudyAssets assets={caseStudy.assets} />

        <CaseStudySections caseStudy={caseStudy} />

        <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-8">
          <p className="text-[14px] text-[var(--color-text-secondary)]">
            Є схожа задача, яку варто автоматизувати чи спроєктувати з нуля?
          </p>
          <Button asChild variant="primary">
            <Link href={navigationCta.href}>{navigationCta.label}</Link>
          </Button>
        </div>
      </Container>
    </article>
  );
}
