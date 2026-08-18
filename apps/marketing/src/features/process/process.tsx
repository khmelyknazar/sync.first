import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProcessCta } from "@/features/process/process-cta";
import { ProcessFlow } from "@/features/process/process-flow";

const HEADING_ID = "process-heading";

/**
 * Reuses `SectionHeading` (Trust System, Etap 4) instead of a new
 * `process-header.tsx` — the brief's suggested file list is explicitly
 * a suggestion ("структуру можеш змінити, якщо є кращий architectural
 * reason"); a second component with the identical eyebrow/title/
 * description shape would just be `SectionHeading` under a new name.
 */
export function Process() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Процес"
          title="Що відбувається, коли ви приходите в Sync Industry"
          description="Шість стадій. Кожна — з конкретним результатом і критерієм переходу до наступної."
        />
        <ProcessFlow />
        <ProcessCta />
      </Container>
    </section>
  );
}
