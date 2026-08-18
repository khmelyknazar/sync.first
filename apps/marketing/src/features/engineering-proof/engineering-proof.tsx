import Link from "next/link";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import { engineeringProofPrinciples } from "@/config/engineering-proof/principles";
import { EngineeringPrincipleRow } from "@/features/engineering-proof/engineering-principle-row";

const HEADING_ID = "engineering-proof-heading";

/**
 * CTA reuses `navigationCta` verbatim — the canonical label
 * ("Обговорити систему" as of the Redesign pass) is never re-typed
 * per section. The old copy drift this comment used to describe
 * (Hero's "Дивитись рішення" vs Process's "Подивитись рішення") was
 * fixed in the Redesign by introducing `secondaryCta` alongside
 * `navigationCta` — both CTA labels in the product now live in
 * exactly one config.
 */
export function EngineeringProof() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Інженерні принципи"
          title="Створено для бізнесу, який стоїть за програмним забезпеченням"
          description="Ми не продаємо години розробки чи окремі автоматизації. Ми продаємо систему з фундаментом, здатним витримати зростання бізнесу."
        />

        <div>
          {engineeringProofPrinciples.map((principle) => (
            <EngineeringPrincipleRow key={principle.code} principle={principle} />
          ))}
        </div>

        <div className="border-t border-[var(--color-divider)] pt-8">
          <Button asChild variant="primary">
            <Link href={navigationCta.href}>{navigationCta.label}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
