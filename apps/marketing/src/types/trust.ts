import type { LucideIcon } from "lucide-react";

/**
 * Generic icon+title+description item, rendered by `PrincipleList`.
 * Used for Engineering Principles, Security Principles, and any
 * future principle-style list — one shape, one renderer, many
 * content sources (Design System §11: composition over duplication).
 */
export interface PrincipleItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  /** Why this specific choice, not generic marketing copy — mirrors
   * the "чому" explanations already written into the repo READMEs. */
  rationale: string;
}

export interface ProcessStep {
  index: number;
  title: string;
  description: string;
}

export interface DocLink {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}
