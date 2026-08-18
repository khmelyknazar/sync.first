import { SolutionStatus } from "@/features/solutions/solution-status";
import type { Product } from "@/types/product";

/**
 * Deliberately a `<div>`, never a `<Link>`/`<a>`/`<button>` — a
 * comingSoon product has nothing to navigate to, so it must not
 * expose link/button semantics to assistive tech or keyboard focus
 * (brief: "comingSoon elements не повинні поводитись як справжні
 * links"). `aria-disabled` communicates "this exists but isn't
 * actionable" without pretending it's interactive.
 */
export function SolutionCard({ product }: { product: Product }) {
  return (
    <div
      aria-disabled="true"
      className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
          {product.title}
        </span>
        <SolutionStatus status={product.status} />
      </div>

      <p className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
        {product.description}
      </p>

      {product.ecosystemRole && (
        <p className="border-t border-[var(--color-divider)] pt-3 text-[12px] leading-[17px] text-[var(--color-text-disabled)]">
          {product.ecosystemRole}
        </p>
      )}
    </div>
  );
}
