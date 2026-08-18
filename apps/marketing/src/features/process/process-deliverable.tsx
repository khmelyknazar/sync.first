import { PackageCheck } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Visually distinct from the other stage fields — the deliverable is
 * the one thing a prospective client cares about most concretely
 * ("what do I actually get"), so it gets its own icon treatment
 * instead of blending into the same `dl` rhythm as businessGoal/
 * stageResult.
 */
export function ProcessDeliverable({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-[var(--radius-md)] bg-[var(--ultramarine-500)]/12 p-3">
      <PackageCheck
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-[var(--color-brand-primary)]"
        strokeWidth={1.75}
      />
      <span className="text-[13px] leading-[18px] text-[var(--color-text-primary)]">
        {children}
      </span>
    </div>
  );
}
