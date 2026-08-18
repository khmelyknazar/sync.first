import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { techStack } from "@/config/trust-system/tech-stack";

const HEADING_ID = "architecture-proof-heading";

/**
 * BUSINESS GOAL: give a technical evaluator (CTO, engineering lead)
 * something concrete to assess instead of trusting marketing copy —
 * shortens enterprise sales cycles by pre-answering "what is this
 * actually built on."
 *
 * PROVES: real, current technology choices with real reasons — not a
 * generic "modern tech stack" claim.
 *
 * CONTENT: `techStack` config — exactly the stack decided at project
 * start (Build Phase Stage 1), each with the actual rationale from
 * this project's own architecture decisions.
 *
 * CTA: none directly here — technical readers self-select toward
 * `/company/engineering` (linked from Documentation Transparency,
 * §5) once they want depth; forcing a CTA on a spec-reading audience
 * reads as sales pressure at the wrong moment.
 *
 * TRUST SIGNAL: named technology + specific reason, laid out as data
 * (a table-like list) rather than prose — inspectable, not narrated.
 *
 * AVOIDING MARKETING BULLSHIT: no "enterprise-grade," "battle-
 * tested," or "cutting-edge" adjectives attached to any entry — the
 * name and the reason are the entire claim.
 */
export function ArchitectureProofSection() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="На чому це побудовано"
          title="Технологічний стек і причини вибору"
          description="Кожен вибір — з конкретною причиною, а не за замовчуванням."
        />
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-divider)] sm:grid-cols-2">
          {techStack.map((item) => (
            <div key={item.name} className="flex flex-col gap-1.5 bg-[var(--color-bg-surface)] p-5">
              <div className="flex items-center gap-2">
                <dt className="text-[14px] font-medium text-[var(--color-text-primary)]">
                  {item.name}
                </dt>
                <span className="rounded-[var(--radius-sm)] bg-[var(--graphite-700)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--color-text-secondary)]">
                  {item.category}
                </span>
              </div>
              <dd className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
                {item.rationale}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
