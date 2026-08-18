import { GitBranch, Layers, ShieldCheck, Workflow } from "lucide-react";

import type { PrincipleItem } from "@/types/trust";

/**
 * These four principles are the real ones the Product Architecture
 * and Design Philosophy stages established for Sync Industry's own build —
 * not generic "we value quality" filler. Each is independently
 * verifiable against the architecture documents this project
 * actually produced, which is the whole point: proof through
 * demonstrated decisions, not claims.
 */
export const engineeringPrinciples: PrincipleItem[] = [
  {
    icon: Layers,
    title: "Один Core, багато поверхонь",
    description:
      "Identity, дані та дизайн-система визначені один раз і використовуються кожним продуктом — нове не дублює те, що вже існує.",
  },
  {
    icon: Workflow,
    title: "Business First як фільтр",
    description:
      "Кожне архітектурне рішення перевіряється на вплив на продажі, довіру чи конверсію — не на технічну цікавість саму по собі.",
  },
  {
    icon: GitBranch,
    title: "Масштаб через попит, не наперед",
    description:
      "Нові продукти й розділи з'являються тоді, коли є конкретна бізнес-причина — фундамент готовий прийняти їх без переписування.",
  },
  {
    icon: ShieldCheck,
    title: "Документовані рішення",
    description:
      "Кожне архітектурне рішення має письмове пояснення «чому» — доступне команді, а не усну домовленість, яку легко забути.",
  },
];
