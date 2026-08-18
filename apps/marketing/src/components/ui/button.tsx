import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@axioma/design-system/cn";

/**
 * Closed variant set per Design System §11 (Component Philosophy):
 * "кожен компонент документує закритий список variants, а не
 * довільні комбінації стилів". No ad-hoc className color overrides —
 * a new visual treatment means a new variant here, not a one-off
 * className at the call site.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--button-radius)]",
    "text-[length:var(--font-button-size,14px)] font-medium leading-5 tracking-[0.01em]",
    "transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-[var(--color-focus-ring)]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--button-primary-bg)] text-white",
          "hover:bg-[var(--button-primary-bg-hover)]",
          "active:bg-[var(--button-primary-bg-pressed)]",
        ],
        secondary: [
          "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-default)]",
          "hover:bg-[var(--color-hover)]",
          "active:bg-[var(--color-pressed)]",
        ],
        ghost: [
          "bg-transparent text-[var(--color-text-secondary)]",
          "hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)]",
          "active:bg-[var(--color-pressed)]",
        ],
        danger: [
          "bg-[var(--color-danger)] text-white",
          "hover:opacity-90",
          "active:opacity-80",
        ],
      },
      size: {
        sm: "h-8 px-3 text-[13px]",
        md: "h-10 px-4",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renders the child element instead of a `<button>`, merging props
   * onto it (Radix Slot) — used to make a `Link` look like a Button
   * without nesting an interactive element inside another. */
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
