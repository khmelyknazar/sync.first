"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

import { scrollStaggerContainer, staggerItem } from "@axioma/design-system/motion";

import { useReducedMotionVariants } from "@/hooks/use-reduced-motion";

type StaggerElement = "div" | "ul" | "li" | "ol";

/** Returns the right `motion`-wrapped element for `as`. Kept as a
 * function (not a `Record`) because `m.div`/`m.ul`/`m.li`/`m.ol` each
 * have distinct prop types — forcing them into one typed lookup table
 * would require lying about that with a shared type. */
function getMotionElement(as: StaggerElement) {
  switch (as) {
    case "ul":
      return m.ul;
    case "li":
      return m.li;
    case "ol":
      return m.ol;
    default:
      return m.div;
  }
}

/**
 * Pair for scroll-triggered staggered reveals — a grid of cards or a
 * list of principles fading/rising in sequence as it enters view,
 * rather than all at once. `ScrollStaggerContainer` owns the
 * `whileInView` trigger; each direct child should be a
 * `ScrollStaggerItem` (or spread `staggerItem`-shaped variants
 * manually) to participate in the stagger.
 *
 * `as` exists because the first real consumer (`PrincipleList`) is a
 * semantic `<ul>/<li>` — defaulting this to `div` would have quietly
 * downgraded list semantics for screen readers the moment motion was
 * added.
 */
export function ScrollStaggerContainer({
  children,
  className,
  staggerMs = 100,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  as?: StaggerElement;
}) {
  const variants = useReducedMotionVariants(scrollStaggerContainer(staggerMs));
  const Component = getMotionElement(as);

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

export function ScrollStaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: StaggerElement;
}) {
  const variants = useReducedMotionVariants(staggerItem);
  const Component = getMotionElement(as);

  return (
    <Component variants={variants} className={className}>
      {children}
    </Component>
  );
}
