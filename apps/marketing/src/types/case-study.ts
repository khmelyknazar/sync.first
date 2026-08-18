import type { LucideIcon } from "lucide-react";

/**
 * `client`  — real, named client, shown only with explicit permission
 *              to publish. Never inferred.
 * `demo`    — Sync Industry's own demonstration project, built to show
 *              technical competency, not delivered for a paying client.
 * `internal`— built for Sync Industry's own internal use.
 *
 * Every consumer of this type (`ProjectTypeBadge`, `CaseStudyCard`,
 * detail layout) must render the type distinctly — a `demo`/`internal`
 * entry must never visually pass as `client` work.
 */
export type CaseStudyType = "client" | "demo" | "internal";

export interface CaseStudyAsset {
  type: "architecture" | "workflow" | "ui" | "dataFlow" | "screenshot";
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyResult {
  /** Preferred field — a plain description of what changed. Used
   * whenever a specific number isn't confirmed or doesn't exist. */
  qualitative?: string;
  /** Only set when a specific figure is confirmed and could be shown
   * to the subject of the case study without dispute. Omit rather
   * than estimate. */
  metric?: { label: string; value: string };
}

/**
 * Full structure a detail page (`/work/[slug]`) can render. Every
 * narrative field below `slug`/`title`/`summary`/`type`/`technology`
 * is optional — a case study with only Context and Approach filled in
 * is still valid and renders correctly; sections with no content
 * simply don't render (see `CaseStudySections`). This is what lets a
 * case study go live before every field has real content, instead of
 * blocking publication on a field nobody has an honest answer for
 * yet.
 */
export interface CaseStudy {
  slug: string;
  title: string;
  /** One or two sentences — used on the card/grid, not the detail page. */
  summary: string;
  type: CaseStudyType;
  /** Only for `type: "client"`, only with explicit permission to name them. */
  clientName?: string;
  /** At most one featured case at a time — enforced by `getFeaturedCaseStudy`, not by convention. */
  featured?: boolean;
  technology: string[];
  /** ISO date. Omit for drafts not yet ready to publish. */
  publishedAt?: string;

  context?: string;
  problem?: string;
  constraints?: string[];
  approach?: string;
  architecture?: string;
  implementation?: string;
  result?: CaseStudyResult;
  lessonsLearned?: string;

  /** Only real, existing assets — never a placeholder image path. An
   * empty/omitted array means the detail page's visual section
   * doesn't render, not that it renders with a broken image. */
  assets?: CaseStudyAsset[];
}

export interface ProjectTypeMeta {
  label: string;
  icon: LucideIcon;
}
