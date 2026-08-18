import { ProcessDeliverable } from "@/features/process/process-deliverable";
import type { ProcessStage } from "@/types/process";

export function ProcessStep({ stage, isLast }: { stage: ProcessStage; isLast: boolean }) {
  return (
    <div className="flex gap-4 lg:flex-col lg:gap-0">
      {/* Connector rail — vertical, mobile/tablet only (below `lg`,
          where stages stack). The `lg` grid composition (see
          ProcessFlow) intentionally drops the connector line: a
          straight line across a wrapped 3x2 grid reads as broken,
          not precise — the numbering carries the sequence instead. */}
      <div className="flex w-6 shrink-0 flex-col items-center lg:hidden" aria-hidden="true">
        <span className="z-10 size-2.5 rounded-full border-2 border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]" />
        {!isLast && <span className="w-px flex-1 bg-[var(--color-border-strong)]" />}
      </div>

      <div className="mb-6 flex flex-1 flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5 transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)] hover:border-[var(--color-border-strong)] lg:mb-0 lg:h-full">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[13px] text-[var(--color-text-disabled)]">
            {stage.code}
          </span>
          <h3 className="text-[16px] font-semibold text-[var(--color-text-primary)]">
            {stage.title}
          </h3>
        </div>

        <p className="text-[13px] leading-[19px] text-[var(--color-text-secondary)]">
          {stage.description}
        </p>

        <dl className="flex flex-col gap-2 text-[12px] leading-[17px]">
          <div className="flex flex-col gap-0.5">
            <dt className="font-medium uppercase tracking-[0.03em] text-[var(--color-text-disabled)]">
              Бізнес-мета
            </dt>
            <dd className="text-[var(--color-text-secondary)]">{stage.businessGoal}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="font-medium uppercase tracking-[0.03em] text-[var(--color-text-disabled)]">
              Результат етапу
            </dt>
            <dd className="text-[var(--color-text-secondary)]">{stage.stageResult}</dd>
          </div>
        </dl>

        <ProcessDeliverable>{stage.clientReceives}</ProcessDeliverable>

        {stage.transitionCriterion && (
          <p className="mt-auto border-t border-[var(--color-divider)] pt-3 text-[12px] leading-[17px] text-[var(--color-text-secondary)]">
            <span className="font-medium text-[var(--color-text-primary)]">
              Критерій переходу далі:
            </span>{" "}
            {stage.transitionCriterion}
          </p>
        )}
      </div>
    </div>
  );
}
