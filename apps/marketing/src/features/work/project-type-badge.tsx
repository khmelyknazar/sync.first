import { Code2, FlaskConical, Users } from "lucide-react";

import type { CaseStudyType, ProjectTypeMeta } from "@/types/case-study";

/**
 * The single source of truth for how each `CaseStudyType` is
 * labeled. Every place a case study's type is shown — card, featured,
 * detail page — imports this instead of re-deriving the label, so
 * "demo project" can never accidentally read as something softer in
 * one place and not another.
 */
const PROJECT_TYPE_META: Record<CaseStudyType, ProjectTypeMeta> = {
  client: { label: "Клієнтський проєкт", icon: Users },
  demo: { label: "Demo project", icon: FlaskConical },
  internal: { label: "Internal project", icon: Code2 },
};

export function ProjectTypeBadge({ type }: { type: CaseStudyType }) {
  const { label, icon: Icon } = PROJECT_TYPE_META[type];
  const isClient = type === "client";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-2 py-1 text-[12px] font-medium",
        isClient
          ? "bg-[var(--ultramarine-500)]/15 text-[var(--color-brand-primary)]"
          : "bg-[var(--warning-500)]/15 text-[var(--warning-500)]",
      ].join(" ")}
    >
      <Icon aria-hidden="true" className="size-3.5" strokeWidth={2} />
      {label}
    </span>
  );
}
