"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import type { PropsWithChildren } from "react";

/**
 * Root motion boundary for the app.
 *
 * - `LazyMotion` + `domAnimation` loads only the animation features
 *   actually used (transform/opacity/etc.) instead of the full Motion
 *   bundle, keeping the animation architecture from costing bundle
 *   size on routes that barely animate — direct consequence of the
 *   "Maximum performance" rule for this stage.
 * - `MotionConfig reducedMotion="user"` is a global safety net: any
 *   `motion.*`/`m.*` element automatically strips transform-based
 *   animation for users who prefer reduced motion, even in
 *   components that don't explicitly branch through
 *   `useReducedMotionVariants`. Components with custom variants still
 *   use that hook for full control (see Design System §8.4).
 *
 * Components elsewhere must import `m` (not `motion`) from
 * "motion/react" to benefit from the LazyMotion bundle split.
 */
export function MotionProvider({ children }: PropsWithChildren) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
