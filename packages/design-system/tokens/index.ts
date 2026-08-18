/**
 * Programmatic token access for contexts CSS variables can't reach —
 * chart series config, canvas rendering, email templates.
 * The CSS custom properties in `tokens.css` remain the source of truth
 * for anything that renders in the DOM; this file mirrors the same
 * values for JS-only consumers and must be kept in sync manually.
 */

export const chartSeries = [
  "var(--ultramarine-500)",
  "var(--brass-500)",
  "var(--success-500)",
  "var(--graphite-400)",
  "var(--ultramarine-200)",
  "var(--warning-500)",
] as const;

export const motionDuration = {
  instant: 100,
  fast: 150,
  base: 200,
  moderate: 300,
  slow: 450,
  cinematic: 700,
} as const;

export const motionEasing = {
  standard: [0.4, 0, 0.2, 1],
  out: [0, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  emphasis: [0.2, 0, 0, 1],
} as const satisfies Record<string, [number, number, number, number]>;

export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type MotionDurationToken = keyof typeof motionDuration;
export type MotionEasingToken = keyof typeof motionEasing;
export type Breakpoint = keyof typeof breakpoints;
