"use client";

import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * Eyebrow + heading + optional description, with a caller-supplied
 * heading level and id. Every Trust System section (and future Home
 * sections) uses this instead of hand-writing its own heading markup
 * — keeps heading hierarchy consistent (H2 for sections, this
 * component never renders H1) and spacing identical across sections.
 *
 * v2 (Redesign, Stage 3 "Scroll Experience"): wrapped in `ScrollReveal`.
 * This is a deliberate single choke-point — every section that
 * already uses `SectionHeading` (Solutions, Process, EngineeringProof,
 * Case Studies, Documentation Transparency, and both new pages)
 * gets a scroll-triggered heading reveal with this one change,
 * without editing each section file individually. This is also why
 * `SectionHeading` becomes a Client Component: scroll-reveal is
 * inherently `IntersectionObserver`-driven, so the boundary has to
 * live somewhere — concentrating it here (one file) is deliberately
 * better than pushing `"use client"` onto every section that renders
 * a heading.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <ScrollReveal className="flex max-w-[640px] flex-col gap-3">
      {eyebrow && (
        <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-primary)]">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-[length:var(--font-heading-lg-size)] leading-[var(--font-heading-lg-line)] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]"
      >
        {title}
      </h2>
      {description && (
        <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
