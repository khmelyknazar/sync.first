import { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/scroll-stagger";
import type { PrincipleItem } from "@/types/trust";

/**
 * Renders any `PrincipleItem[]` as a responsive grid. One renderer,
 * two content sources so far (engineering principles, security
 * principles) — a third source never means a third component.
 *
 * v2 (Redesign, Stage 4): items now reveal via `ScrollStagger` instead
 * of appearing all at once — a small but real motion upgrade this
 * pattern gets "for free" in both of its call sites.
 */
export function PrincipleList({ items }: { items: PrincipleItem[] }) {
  return (
    <ScrollStaggerContainer
      as="ul"
      staggerMs={80}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {items.map(({ icon: Icon, title, description }) => (
        <ScrollStaggerItem
          key={title}
          as="li"
          className="flex flex-col gap-3 rounded-[var(--card-radius)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6"
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-[var(--radius-md)] bg-[var(--ultramarine-500)]/15 text-[var(--color-brand-primary)]"
          >
            <Icon className="size-5" strokeWidth={1.5} />
          </span>
          <span className="text-[15px] font-medium text-[var(--color-text-primary)]">
            {title}
          </span>
          <span className="text-[14px] leading-[var(--font-body-md-line)] text-[var(--color-text-secondary)]">
            {description}
          </span>
        </ScrollStaggerItem>
      ))}
    </ScrollStaggerContainer>
  );
}
