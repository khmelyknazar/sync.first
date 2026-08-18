import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { engineeringPrinciples } from "@/config/trust-system/engineering-principles";
import { PrincipleList } from "@/features/trust-system/principle-list";

const HEADING_ID = "engineering-principles-heading";

/**
 * BUSINESS GOAL: replace "trusted by" social proof (which Sync Industry
 * doesn't have enough of yet) with something a technical buyer can
 * evaluate directly — the actual rules the team holds itself to.
 *
 * PROVES: that decisions are made by a consistent, named set of
 * principles rather than ad hoc — a proxy for "this team will still
 * make sound decisions on your project, not just this website."
 *
 * CONTENT: `engineeringPrinciples` config — sourced from this
 * project's own Product Architecture/Design Philosophy documents,
 * not generic "we care about quality" copy.
 *
 * CTA: none. This section's job is to be evaluated, not clicked —
 * adding a CTA here would dilute it into another sales pitch.
 *
 * TRUST SIGNAL: specificity. Each principle names a real constraint
 * ("Business First як фільтр", not "customer-focused") that a
 * skeptical reader could push back on if it were empty.
 *
 * AVOIDING MARKETING BULLSHIT: no superlatives ("world-class",
 * "cutting-edge"), no unverifiable claims, no numbers. If a principle
 * can't be explained in one concrete sentence, it doesn't belong
 * here.
 */
export function EngineeringPrinciplesSection() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Як ми приймаємо рішення"
          title="Принципи, а не обіцянки"
          description="Це не список цінностей на стіні — це правила, за якими справді приймаються архітектурні рішення в кожному проєкті."
        />
        <PrincipleList items={engineeringPrinciples} />
      </Container>
    </section>
  );
}
