"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@axioma/design-system/cn";

import { useReducedMotionVariants } from "@/hooks/use-reduced-motion";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  /** Entrance stagger delay in seconds. */
  delay?: number;
  /** Continuous idle float after entrance — small, slow, deliberate
   * (brief explicitly asks for "subtle floating UI"; amplitude/
   * duration are kept small precisely so it stays subtle, not a
   * decorative bounce). Disabled entirely under reduced motion. */
  floatDistance?: number;
  floatDuration?: number;
  glow?: boolean;
}

/**
 * The one glass surface implementation in the product — every
 * floating panel in the Hero visualization uses this, never a
 * one-off `backdrop-blur` in a panel-specific file. Reads `--glass-*`
 * tokens exclusively (Design System v2), so the glass treatment
 * itself is centrally tunable.
 */
export function GlassPanel({
  children,
  className,
  delay = 0,
  floatDistance = 8,
  floatDuration = 6,
  glow = false,
}: GlassPanelProps) {
  const entrance = useReducedMotionVariants({
    initial: { opacity: 0, y: 24, scale: 0.96 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.2, 0, 0, 1],
      },
    },
  });

  const idleFloat = useReducedMotionVariants({
    animate: {
      y: [0, -floatDistance, 0],
      transition: {
        duration: floatDuration,
        delay: delay + 0.7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  });

  return (
    <m.div initial="initial" animate="animate" variants={entrance}>
      <m.div
        animate={idleFloat.animate}
        className={cn(
          "rounded-[var(--radius-lg)] border backdrop-blur-[var(--glass-blur)]",
          "[background:var(--glass-bg)] [border-color:var(--glass-border)]",
          "shadow-[var(--shadow-lg)]",
          glow && "shadow-[var(--glow-primary-md),var(--shadow-lg)]",
          className,
        )}
      >
        {/* Faint top highlight — the one place a gradient is used,
            and only as a 1px inner sheen, not a filled surface
            gradient (brief: "very subtle gradients... reflections"). */}
        <div
          aria-hidden="true"
          className="h-px w-full rounded-t-[var(--radius-lg)] [background:linear-gradient(90deg,transparent,var(--glass-highlight),transparent)]"
        />
        {children}
      </m.div>
    </m.div>
  );
}
