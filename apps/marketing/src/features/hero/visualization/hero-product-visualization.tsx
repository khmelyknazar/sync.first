"use client";

import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";

import { FlowLines } from "@/features/hero/visualization/flow-lines";
import { GlassPanel } from "@/features/hero/visualization/glass-panel";
import {
  AnalyticsPanelContent,
  AutomationPanelContent,
  CorePanelContent,
  LeadsPanelContent,
  NotificationPanelContent,
} from "@/features/hero/visualization/visualization-panels";

/**
 * The Hero's product visualization. Desktop composes five floating
 * glass panels (Core + four modules) around a shared flow-line
 * background, with a subtle cursor-driven parallax on the whole
 * group. Mobile is a genuinely different, simpler composition (a
 * vertical stack of the three most legible panels) — not the desktop
 * layout scaled down, per the brief's explicit mobile requirement.
 */
export function HeroProductVisualization() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20 });
  // Small range (±6px) — a hint of depth on cursor movement, not a
  // swimmy drag-the-scene effect.
  const parallaxX = useTransform(springX, [-1, 1], [-6, 6]);
  const parallaxY = useTransform(springY, [-1, 1], [-6, 6]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    // Reduced-motion guard: skip tracking entirely rather than
    // tracking the pointer and rendering a zero-range transform —
    // this was previously missing (Redesign Stage 5 QA caught it),
    // and every other motion primitive in the product disables
    // itself the same way, not just visually but by not doing the
    // work.
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="w-full max-w-[640px]">
      {/* Screen-reader equivalent — the visualization is illustrative;
          Hero's headline/copy already state everything a reader
          needs, so this stays a single descriptive sentence rather
          than narrating five separate panels. */}
      <p className="sr-only">
        Схематична візуалізація системи Sync Industry: лід надходить у CRM, проходить
        автоматизовану обробку та відображається в аналітиці й сповіщеннях — усе в
        одній системі.
      </p>

      {/* Desktop composition */}
      <div
        aria-hidden="true"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ perspective: 1200 }}
        className="relative hidden h-[480px] w-full lg:block"
      >
        <m.div
          style={prefersReducedMotion ? undefined : { x: parallaxX, y: parallaxY }}
          className="absolute inset-0"
        >
          <FlowLines />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <GlassPanel glow delay={0.1}>
              <CorePanelContent />
            </GlassPanel>
          </div>

          <div className="absolute left-[4%] top-[10%] -rotate-3">
            <GlassPanel delay={0.25} floatDuration={7}>
              <LeadsPanelContent />
            </GlassPanel>
          </div>

          <div className="absolute right-[2%] top-[16%] rotate-2">
            <GlassPanel delay={0.35} floatDuration={6.5}>
              <AutomationPanelContent />
            </GlassPanel>
          </div>

          <div className="absolute bottom-[8%] left-[2%] rotate-2">
            <GlassPanel delay={0.45} floatDuration={7.5}>
              <AnalyticsPanelContent />
            </GlassPanel>
          </div>

          <div className="absolute bottom-[10%] right-[4%] -rotate-2">
            <GlassPanel delay={0.55} floatDuration={6.8}>
              <NotificationPanelContent />
            </GlassPanel>
          </div>
        </m.div>
      </div>

      {/* Mobile/tablet composition — vertical stack, three panels
          only (Leads/Core/Notification), no scattered positioning,
          no cursor parallax (nothing to hover on touch). */}
      <div aria-hidden="true" className="flex flex-col items-center gap-4 lg:hidden">
        <GlassPanel glow delay={0.1}>
          <CorePanelContent />
        </GlassPanel>
        <GlassPanel delay={0.2} floatDuration={6}>
          <LeadsPanelContent />
        </GlassPanel>
        <GlassPanel delay={0.3} floatDuration={6.5}>
          <NotificationPanelContent />
        </GlassPanel>
      </div>
    </div>
  );
}
