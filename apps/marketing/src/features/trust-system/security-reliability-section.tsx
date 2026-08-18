import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { securityPrinciples } from "@/config/trust-system/security-principles";
import { PrincipleList } from "@/features/trust-system/principle-list";

const HEADING_ID = "security-heading";

/**
 * BUSINESS GOAL: pre-answer the security/procurement objection that
 * otherwise surfaces late in an enterprise sales cycle, without
 * claiming compliance status Sync Industry doesn't hold.
 *
 * PROVES: how access, data, and deployments are actually handled —
 * architecture-level facts, not a badge.
 *
 * CONTENT: `securityPrinciples` — reuses the same `PrincipleList`
 * renderer as Engineering Principles (§1); different config, same
 * component, per this stage's "reusable Trust System" requirement.
 *
 * CTA: none inline — a real security/compliance conversation belongs
 * in `/company/security` or a direct sales conversation, not a
 * homepage button.
 *
 * TRUST SIGNAL: precise, falsifiable statements ("RBAC перевіряється
 * на рівні Core API") instead of a certification badge that would
 * currently be false.
 *
 * AVOIDING MARKETING BULLSHIT: explicitly no ISO 27001 / SOC 2 / PCI
 * DSS badges or any other certification claim — none exist yet, so
 * none are shown. This section is checked against that rule every
 * time it's edited, not just at creation.
 */
export function SecurityReliabilitySection() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Безпека та надійність"
          title="Як ми поводимось із доступом і даними"
          description="Без сертифікаційних бейджів, яких у нас поки немає — лише те, що реально влаштовано в архітектурі."
        />
        <PrincipleList items={securityPrinciples} />
      </Container>
    </section>
  );
}
