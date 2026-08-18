import type { LucideIcon } from "lucide-react";

/**
 * The one product model for the whole site. `slug`/`title`/
 * `description`/`icon`/`status`/`href` are what the navigation
 * mega-menu and Hero's system visualization already consumed
 * (as `ProductNavItem`, in `config/navigation.ts`) — that shape is
 * preserved exactly so neither file needs to change. The fields below
 * are additions this stage needs (Solutions section) that those two
 * consumers simply don't read.
 */
export type ProductStatus = "available" | "comingSoon";

export interface Product {
  slug: string;
  title: string;
  /** Short — used by the nav mega-menu, Hero diagram, and Solutions cards alike. */
  description: string;
  icon: LucideIcon;
  status: ProductStatus;
  href: string;
  /** `available` products only — the operational problem it addresses. */
  businessProblem?: string;
  /** `comingSoon` products only — how it connects to what already exists. */
  ecosystemRole?: string;
  /** `available` products only — capability areas as product direction,
   * not a claim that every item is fully shipped (Solutions section
   * renders this list under an explicit "напрямок продукту" label). */
  capabilities?: string[];
}
