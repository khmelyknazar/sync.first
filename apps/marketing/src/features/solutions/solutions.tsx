import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SolutionsGrid } from "@/features/solutions/solutions-grid";

const HEADING_ID = "solutions-heading";

/**
 * Reuses `SectionHeading` — no `solutions-header.tsx`, same reasoning
 * as `Process` (Build Phase Stage 5): a second component with an
 * identical eyebrow/title/description shape isn't a new component,
 * it's a duplicate.
 */
export function Solutions() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Рішення"
          title="Одна платформа, не набір послуг"
          description="CRM — робоча точка входу зараз. Інші напрямки розширюють той самий Core, коли на них з'явиться бізнес-потреба."
        />
        <SolutionsGrid />
      </Container>
    </section>
  );
}
