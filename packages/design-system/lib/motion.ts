/**
 * Animation architecture for Sync Industry.
 *
 * Every animated surface in the product pulls its timing from here —
 * never from ad-hoc duration/easing values in a component. This keeps
 * the "no bounce/overshoot, motion explains rather than decorates"
 * rule (Design System §8) enforceable in one place instead of by
 * convention across hundreds of components.
 *
 * Consumers use the `motion` package (https://motion.dev) — the
 * successor to Framer Motion, already a project dependency.
 */

import { motionDuration, motionEasing } from "../tokens";

/** Convert a token duration (ms) to seconds for the `motion` library. */
const seconds = (ms: number) => ms / 1000;

/**
 * Hover / press feedback — color/opacity only, per Design System rule:
 * "ніколи transform-scale на hover продуктових елементів".
 */
export const hoverTransition = {
  duration: seconds(motionDuration.instant),
  ease: motionEasing.standard,
};

export const pressTransition = {
  duration: seconds(motionDuration.fast),
  ease: motionEasing.standard,
};

/** Dropdown, popover, tab switch. */
export const baseVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: seconds(motionDuration.base), ease: motionEasing.out },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: seconds(motionDuration.fast), ease: motionEasing.in },
  },
};

/** Modal content — backdrop fades in parallel via `overlayVariants`. */
export const modalVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: seconds(motionDuration.moderate), ease: motionEasing.out },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: seconds(motionDuration.base), ease: motionEasing.in },
  },
};

export const overlayVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: seconds(motionDuration.moderate), ease: motionEasing.standard },
  },
  exit: {
    opacity: 0,
    transition: { duration: seconds(motionDuration.base), ease: motionEasing.standard },
  },
};

/** Drawer — slides from the edge, backdrop fades in sync. */
export const drawerVariants = {
  fromRight: {
    initial: { x: "100%" },
    animate: {
      x: 0,
      transition: { duration: seconds(motionDuration.moderate), ease: motionEasing.out },
    },
    exit: {
      x: "100%",
      transition: { duration: seconds(motionDuration.moderate), ease: motionEasing.in },
    },
  },
  fromBottom: {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: seconds(motionDuration.moderate), ease: motionEasing.out },
    },
    exit: {
      y: "100%",
      transition: { duration: seconds(motionDuration.moderate), ease: motionEasing.in },
    },
  },
};

/** Accordion — height auto-animates; content fades slightly staggered. */
export const accordionContentVariants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: seconds(motionDuration.base), ease: motionEasing.standard },
      opacity: { duration: seconds(motionDuration.base), ease: motionEasing.standard, delay: 0.05 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: seconds(motionDuration.base), ease: motionEasing.standard },
  },
};

/** Table row insert/remove — fade + height collapse, deliberately plain. */
export const tableRowVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: { duration: seconds(motionDuration.fast), ease: motionEasing.standard },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: seconds(motionDuration.fast), ease: motionEasing.standard },
  },
};

/** Marketing-only page transition — fade + slight slide, never full-page slide. */
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: seconds(motionDuration.slow), ease: motionEasing.emphasis },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: seconds(motionDuration.base), ease: motionEasing.standard },
  },
};

/**
 * Scroll-triggered stagger container for marketing sections
 * (Why Sync Industry cards, Case Studies preview, etc.).
 */
export const staggerContainer = (staggerMs = 80) => ({
  initial: {},
  animate: {
    transition: { staggerChildren: seconds(staggerMs) },
  },
});

export const staggerItem = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: seconds(motionDuration.base), ease: motionEasing.out },
  },
};

/**
 * Reduced-motion equivalents. Any component that animates must branch
 * through `useReducedMotionVariants` (see apps/marketing/src/hooks)
 * rather than special-casing `prefers-reduced-motion` inline —
 * page transitions and decorative motion disappear entirely; only
 * an instant opacity change remains, per Design System §8.4.
 */
export const reducedMotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};

/**
 * Scroll-triggered reveal — used by `ScrollReveal` (Redesign, Stage 3
 * "Scroll Experience"). Fade + 16px rise, on the `--motion-cinematic`
 * tier (700ms): slower and more deliberate than the mount-time
 * `staggerItem` (200ms) because a scroll reveal is watched
 * consciously as the user scrolls into it, not glimpsed once on
 * page load — a fast snap here reads as a glitch, not a reveal.
 */
export const scrollRevealVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: seconds(motionDuration.cinematic), ease: motionEasing.emphasis },
  },
};

/**
 * Scroll-triggered stagger container — same shape as `staggerContainer`
 * but intended for `whileInView` rather than mount-time `animate`.
 * Kept as a separate export (not a reuse of `staggerContainer`) only
 * because the two are driven by different Motion props at the call
 * site (`animate` vs `whileInView`); the timing values are
 * intentionally identical so a stagger doesn't feel different
 * depending on whether it fired on load or on scroll.
 */
export const scrollStaggerContainer = (staggerMs = 100) => ({
  initial: {},
  animate: {
    transition: { staggerChildren: seconds(staggerMs) },
  },
});
