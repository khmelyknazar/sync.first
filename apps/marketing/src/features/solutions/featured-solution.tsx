import Link from "next/link";

import { cn } from "@axioma/design-system/cn";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import { SolutionCapabilityList } from "@/features/solutions/solution-capability";
import { SolutionStatus } from "@/features/solutions/solution-status";
import type { Product } from "@/types/product";

/**
 * CTA points at `navigationCta.href` (`/contact`) — the one CTA
 * target every other section already routes conversions through —
 * not `/product`/`/product/crm` (that route now exists, but the CTA
 * stays on `/contact` for the same conversion-consistency reason
 * documented across the rest of the site).
 *
 * v2 (Redesign, Stage 4): background changed from a solid light
 * `--ultramarine-50` fill — a bright patch on the new dark-first
 * surface — to the dark raised surface with a restrained radial glow
 * and a glowing border, the same "translucent accent over dark
 * surface" pattern used everywhere else in this pass, scaled up for
 * the one card in the product that's meant to read as premium/
 * dominant.
 */
export function FeaturedSolution({ product }: { product: Product }) {
  return (
    <ScrollReveal
      className={cn(
        "relative flex flex-col gap-6 overflow-hidden rounded-[var(--radius-xl)]",
        "border border-[var(--color-brand-primary)]/30 bg-[var(--color-bg-surface-raised)]",
        "p-8 shadow-[var(--glow-primary-sm)] sm:p-10",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[var(--ultramarine-500)]/12 blur-3xl"
      />

      <div className="relative z-10 flex items-center gap-3">
        <SolutionStatus status={product.status} />
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-[length:var(--font-heading-lg-size)] leading-[var(--font-heading-lg-line)] font-semibold text-[var(--color-text-primary)]">
          {product.title}
        </h3>
        <p className="max-w-[520px] text-[15px] leading-[22px] text-[var(--color-text-secondary)]">
          {product.description} Операційна система взаємодії бізнесу з клієнтами — не
          просто база контактів.
        </p>
      </div>

      {product.businessProblem && (
        <div className="relative z-10 flex flex-col gap-1.5">
          <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--color-text-disabled)]">
            Проблема, яку вирішує
          </span>
          <p className="max-w-[520px] text-[14px] leading-[20px] text-[var(--color-text-secondary)]">
            {product.businessProblem}
          </p>
        </div>
      )}

      {product.capabilities && (
        <div className="relative z-10">
          <SolutionCapabilityList capabilities={product.capabilities} />
        </div>
      )}

      <div className="relative z-10">
        <Button asChild variant="primary">
          <Link href={navigationCta.href}>{navigationCta.label}</Link>
        </Button>
      </div>
    </ScrollReveal>
  );
}
