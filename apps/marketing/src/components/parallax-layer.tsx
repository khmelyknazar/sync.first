"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Subtle scroll-linked vertical shift — the element moves a little
 * slower or faster than the scroll itself as it passes through the
 * viewport, the classic parallax depth cue. `strength` is a pixel
 * range (±strength), kept small by every current call site (Stage 4
 * will decide where this is actually used) — this is depth, not a
 * background image sliding independently.
 *
 * Disabled entirely under reduced motion via the raw `useReducedMotion`
 * hook (not `useReducedMotionVariants`, which resolves a *variants*
 * object — there's no variants shape here, just a transform to skip):
 * renders a plain, unwrapped `div` with no scroll subscription at
 * all, rather than a zeroed transform. A scroll-linked transform
 * still recomputes on every scroll frame even at strength 0, which is
 * wasted work for a user who's opted out of motion entirely.
 */
export function ParallaxLayer({
  children,
  strength = 24,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <m.div ref={ref} style={{ y }} className={className}>
      {children}
    </m.div>
  );
}
