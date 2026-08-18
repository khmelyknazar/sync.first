"use client";

import { m } from "motion/react";

import { useReducedMotionVariants } from "@/hooks/use-reduced-motion";

/**
 * Background flow-trace layer for the Hero visualization — three
 * soft curved paths spanning the composition, each with a moving
 * dash segment (`stroke-dashoffset` animating continuously) to read
 * as "data moving through the system," per the brief. Deliberately
 * NOT anchored to specific panel corners: exact panel positions are
 * tuned in Tailwind's percentage-based layout and can't be reliably
 * pixel-matched to hardcoded SVG endpoints without visually
 * previewing the rendered page — an atmospheric layer behind the
 * panels avoids a misalignment that would look like a bug rather
 * than a feature. Purely decorative → `aria-hidden`.
 */
export function FlowLines() {
  const dashVariants = useReducedMotionVariants({
    animate: {
      strokeDashoffset: [0, -40],
      transition: { duration: 3.5, repeat: Infinity, ease: "linear" },
    },
  });

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 560 480"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    >
      <defs>
        <linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--ultramarine-400)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--ultramarine-400)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--ultramarine-400)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M 60 100 C 180 60, 260 180, 300 240 S 420 380, 500 400"
        fill="none"
        stroke="url(#flow-gradient)"
        strokeWidth="1.5"
      />
      <m.path
        d="M 60 100 C 180 60, 260 180, 300 240 S 420 380, 500 400"
        fill="none"
        stroke="var(--ultramarine-300)"
        strokeWidth="1.5"
        strokeDasharray="6 14"
        initial="initial"
        animate="animate"
        variants={dashVariants}
      />

      <path
        d="M 500 90 C 380 120, 340 200, 280 240 S 140 340, 70 380"
        fill="none"
        stroke="url(#flow-gradient)"
        strokeWidth="1.5"
      />
      <m.path
        d="M 500 90 C 380 120, 340 200, 280 240 S 140 340, 70 380"
        fill="none"
        stroke="var(--ultramarine-300)"
        strokeWidth="1.5"
        strokeDasharray="6 14"
        initial="initial"
        animate="animate"
        variants={dashVariants}
      />

      <path
        d="M 280 40 C 280 120, 280 160, 280 240 S 280 360, 280 440"
        fill="none"
        stroke="url(#flow-gradient)"
        strokeWidth="1"
      />
    </svg>
  );
}
