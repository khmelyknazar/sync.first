import { Building2 } from "lucide-react";

import type { DocLink } from "@/types/trust";

/**
 * Real, navigable pages only. `/docs` and `/company/security` were
 * removed in the dead-link cleanup pass — those pages don't exist
 * yet. Add an entry back the same day its page ships, not before.
 */
export const documentationLinks: DocLink[] = [
  {
    title: "Як ми будуємо",
    description: "Архітектурний підхід, принципи розробки, engineering culture.",
    href: "/company/engineering",
    icon: Building2,
  },
];
