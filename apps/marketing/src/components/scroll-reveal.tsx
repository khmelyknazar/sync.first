"use client";

import { m, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { scrollRevealVariants } from "@axioma/design-system/motion";

import { useReducedMotionVariants } from "@/hooks/use-reduced-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds — for revealing several ScrollReveals
   * in sequence without wrapping them all in a stagger container. */
  delay?: number;
  /** Element type to render — `SectionHeading` needs a `div` wrapper
   * that doesn't disturb its own internal layout; other call sites
   * may want something else. */
  as?: "div" | "span";
}

/**
 * The one scroll-triggered reveal implementation in the product.
 * `whileInView` + `viewport={{ once: true }}` — animates in the first
 * time the element enters the viewport and never again (a reveal
 * that re-fires on every scroll up/down reads as flickering, not
 * cinematic). `margin: "-80px"` starts the reveal slightly before
 * the element is fully visible, so it feels timed to the scroll
 * rather than lagging behind it.
 *
 * `delay` is merged into a per-instance variants object rather than
 * passed as a separate `transition` prop — Motion's top-level
 * `transition` prop can override a variant's own `transition` object
 * outright instead of merging into it, which would silently drop the
 * cinematic duration/easing below and fall back to Motion's default
 * spring — exactly the "bounce/overshoot" the motion architecture
 * forbids (Design System §8).
 */
export function ScrollReveal({ children, className, delay = 0, as = "div" }: ScrollRevealProps) {
  const baseVariants = useReducedMotionVariants(scrollRevealVariants) as Variants;
  const animate = baseVariants.animate;
  const variants: Variants =
    delay > 0 && typeof animate === "object" && animate !== null
      ? {
          ...baseVariants,
          animate: {
            ...animate,
            transition: {
              ...("transition" in animate ? animate.transition : {}),
              delay,
            },
          },
        }
      : baseVariants;

  const Component = as === "span" ? m.span : m.div;

  return (
    <Component
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
}
