import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@axioma/design-system/cn";

/**
 * Error state is driven by `aria-invalid` (set by the consumer, e.g.
 * `FormField`) rather than a separate `error` boolean prop — one
 * source of truth for "is this field invalid" that both the border
 * color and assistive tech read from, per Design System §16 ("error
 * state without relying on color alone" — the invalid border is
 * paired with visible error text + `aria-describedby`, never shown
 * by itself).
 */
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-[var(--input-radius)] border bg-[var(--color-bg-surface)] px-3",
        "text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)]",
        "border-[var(--input-border)] transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--input-border-focus)]",
        "aria-[invalid=true]:border-[var(--color-danger)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
