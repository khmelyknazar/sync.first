import { whatHappensNextSteps } from "@/config/contact";

export function WhatHappensNext() {
  return (
    <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6">
      <h2 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
        Що буде далі
      </h2>
      <ol className="flex flex-col gap-3">
        {whatHappensNextSteps.map((step, index) => (
          <li key={step} className="flex items-start gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--ultramarine-500)]/15 font-mono text-[11px] text-[var(--color-brand-primary)]">
              {index + 1}
            </span>
            <span className="text-[14px] leading-[20px] text-[var(--color-text-secondary)]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
