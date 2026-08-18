import { CheckCircle2, Clock } from "lucide-react";

import type { ProductStatus } from "@/types/product";

/**
 * Same available/comingSoon visual language already established in
 * the navigation mega-menu and Hero's system diagram (ultramarine for
 * live, muted graphite/warning for latent) — a third, differently-
 * styled status badge here would fracture a pattern users already
 * saw twice on this same page.
 */
export function SolutionStatus({ status }: { status: ProductStatus }) {
  const isAvailable = status === "available";
  const Icon = isAvailable ? CheckCircle2 : Clock;

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-2 py-1 text-[12px] font-medium",
        isAvailable
          ? "bg-[var(--ultramarine-500)]/15 text-[var(--color-brand-primary)]"
          : "bg-[var(--graphite-700)] text-[var(--color-text-secondary)]",
      ].join(" ")}
    >
      <Icon aria-hidden="true" className="size-3.5" strokeWidth={2} />
      {isAvailable ? "Доступно" : "Скоро"}
    </span>
  );
}
