import type { CaseStudy } from "@/types/case-study";

interface SectionDef {
  heading: string;
  content: React.ReactNode;
}

/**
 * Renders the full Context → Lessons Learned structure the brief
 * requires the detail page to support — but only the sections that
 * actually have content. A case study with three filled fields and
 * six empty ones renders three sections, not six empty headings; this
 * is what lets a case study be published honestly before every field
 * has a confirmed answer (see the TODO comments in
 * `document-automation-n8n.ts`).
 */
export function CaseStudySections({ caseStudy }: { caseStudy: CaseStudy }) {
  const sections: SectionDef[] = [];

  if (caseStudy.context) {
    sections.push({ heading: "Контекст", content: caseStudy.context });
  }
  if (caseStudy.problem) {
    sections.push({ heading: "Проблема", content: caseStudy.problem });
  }
  if (caseStudy.constraints?.length) {
    sections.push({
      heading: "Обмеження",
      content: (
        <ul className="list-disc space-y-1 pl-5">
          {caseStudy.constraints.map((constraint) => (
            <li key={constraint}>{constraint}</li>
          ))}
        </ul>
      ),
    });
  }
  if (caseStudy.approach) {
    sections.push({ heading: "Підхід", content: caseStudy.approach });
  }
  if (caseStudy.architecture) {
    sections.push({ heading: "Архітектура", content: caseStudy.architecture });
  }
  if (caseStudy.implementation) {
    sections.push({ heading: "Реалізація", content: caseStudy.implementation });
  }
  if (caseStudy.result?.qualitative || caseStudy.result?.metric) {
    sections.push({
      heading: "Результат",
      content: (
        <div className="flex flex-col gap-3">
          {caseStudy.result.qualitative && <p>{caseStudy.result.qualitative}</p>}
          {caseStudy.result.metric && (
            <div>
              <span className="block text-[28px] font-semibold text-[var(--color-brand-primary)]">
                {caseStudy.result.metric.value}
              </span>
              <span className="text-[13px] text-[var(--color-text-secondary)]">
                {caseStudy.result.metric.label}
              </span>
            </div>
          )}
        </div>
      ),
    });
  }
  if (caseStudy.lessonsLearned) {
    sections.push({ heading: "Висновки", content: caseStudy.lessonsLearned });
  }

  if (sections.length === 0) return null;

  return (
    <div className="flex flex-col gap-10">
      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-3">
          <h2 className="text-[length:var(--font-heading-sm-size)] leading-[var(--font-heading-sm-line)] font-semibold text-[var(--color-text-primary)]">
            {section.heading}
          </h2>
          <div className="max-w-[680px] text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
}
