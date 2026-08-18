import { EngineeringNotation } from "@/features/engineering-proof/engineering-notation";
import type { EngineeringPrincipleProof } from "@/types/engineering-proof";

/**
 * Editorial row, not a card — no border/bg/shadow wrapper around the
 * whole item, only a top divider between rows. Left column: number +
 * statement (the "big label" the brief asks for). Right: explanation,
 * business consequence, optional notation. Deliberately not the
 * connector-rail/dot pattern used in Hero and Process — a different
 * visual construction so this doesn't read as a repeat of either.
 */
export function EngineeringPrincipleRow({
  principle,
}: {
  principle: EngineeringPrincipleProof;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-[var(--color-divider)] py-8 first:border-t-0 first:pt-0 lg:grid-cols-[160px_1fr] lg:gap-10">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[13px] text-[var(--color-text-disabled)]">
          {principle.code}
        </span>
        <h3 className="text-[22px] font-semibold leading-[28px] text-[var(--color-text-primary)]">
          {principle.statement}
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        <p className="max-w-[560px] text-[15px] leading-[22px] text-[var(--color-text-secondary)]">
          {principle.explanation}
        </p>
        <p className="text-[13px] font-medium text-[var(--color-brand-primary)]">
          {principle.businessConsequence}
        </p>
        {principle.notation && <EngineeringNotation lines={principle.notation} />}
      </div>
    </div>
  );
}
