import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@axioma/design-system/cn";

/**
 * Horizontal-rhythm primitive. Every marketing section renders inside
 * a Container instead of hand-rolling max-width/padding — the single
 * place Design System §7 (Grid) translates into code.
 *
 * `size` maps directly to the spec:
 * - `default` — 1200px max-width, marketing content (Marketing
 *   Website Spec, most sections).
 * - `narrow`  — 720px, long-form reading measure (blog posts, docs).
 * - `full`    — no max-width, edge-to-edge (Hero backgrounds, dividers)
 *   while still applying responsive side padding.
 */
const containerVariants = cva("mx-auto w-full px-4 sm:px-8 lg:px-16", {
  variants: {
    size: {
      default: "max-w-[1200px]",
      narrow: "max-w-[720px]",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ContainerProps<T extends ElementType>
  extends VariantProps<typeof containerVariants> {
  /** Renders as this element/component instead of `div` — keeps
   * Container from forcing non-semantic markup (e.g. `as="section"`,
   * `as="header"`). */
  as?: T;
  className?: string;
}

export function Container<T extends ElementType = "div">({
  as,
  size,
  className,
  ...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as ?? "div";
  return <Component className={cn(containerVariants({ size }), className)} {...props} />;
}
