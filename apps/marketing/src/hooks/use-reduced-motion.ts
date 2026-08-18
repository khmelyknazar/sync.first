"use client";

import { useReducedMotion as useMotionReducedMotion } from "motion/react";

import { reducedMotionVariants } from "@axioma/design-system/motion";

/**
 * Returns the given Motion variants unless the user has requested
 * reduced motion, in which case it returns the shared instant-opacity
 * fallback. Every component that animates via variants (not via
 * `MotionConfig reducedMotion="user"`'s automatic transform-stripping)
 * must branch through this hook rather than checking the media query
 * inline — keeps the "decorative motion disappears entirely" rule
 * (Design System §8.4) enforceable in one place.
 */
export function useReducedMotionVariants<T>(variants: T): T | typeof reducedMotionVariants {
  const prefersReducedMotion = useMotionReducedMotion();
  return prefersReducedMotion ? reducedMotionVariants : variants;
}
