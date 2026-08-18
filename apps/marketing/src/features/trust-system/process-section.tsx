import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/config/trust-system/process-steps";

const HEADING_ID = "process-heading";

/**
 * BUSINESS GOAL: reduce the buyer's uncertainty about "what actually
 * happens after I say yes" — a common blocker for engaging a small,
 * unfamiliar team on a business-critical system.
 *
 * PROVES: a repeatable, disciplined process exists — not
 * improvisation per project. Demonstrated rather than asserted: this
 * is the literal process used to build this project's own site.
 *
 * CONTENT: `processSteps` — five real stages with real checkpoint
 * gates between them, not a generic "discover, design, deliver"
 * template applicable to any agency.
 *
 * CTA: none. Process description doesn't need to sell — it needs to
 * be read and believed; a CTA here would interrupt that.
 *
 * TRUST SIGNAL: specificity of stage names and the explicit
 * "checkpoint before the next stage starts" detail — process claims
 * are cheap, procedural detail is harder to fake convincingly.
 *
 * AVOIDING MARKETING BULLSHIT: no invented timeline promises ("done
 * in 2 weeks!"), no numbered-step icons implying more ceremony than
 * actually exists.
 */
export function ProcessSection() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Процес"
          title="Як ми працюємо"
          description="П'ять стадій, кожна з підтвердженням перед тим, як почати наступну."
        />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.index} className="flex flex-col gap-2">
              <span className="font-mono text-[12px] text-[var(--color-text-disabled)]">
                {String(step.index).padStart(2, "0")}
              </span>
              <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
                {step.title}
              </span>
              <span className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
                {step.description}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
