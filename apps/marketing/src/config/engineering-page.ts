import { CheckCircle2, Eye, Gauge, PauseCircle } from "lucide-react";

import type { PrincipleItem } from "@/types/trust";

/**
 * Real, verifiable practices used in this codebase — not a generic
 * accessibility checklist. Each line is checkable against the site
 * itself (this page included), consistent with the rest of the
 * Trust System's "reusable renderer, sourced content" pattern —
 * reuses `PrincipleItem` (already defined for Engineering/Security
 * principles) rather than a new type for the same icon+title+
 * description shape.
 */
export const engineeringPagePractices: PrincipleItem[] = [
  {
    icon: Eye,
    title: "Видимий фокус скрізь",
    description:
      "Кожен інтерактивний елемент має focus-visible контур — жодного outline: none без заміни.",
  },
  {
    icon: CheckCircle2,
    title: "WCAG AA за замовчуванням",
    description:
      "Контраст, семантична розмітка й коректна ієрархія заголовків — частина кожного компонента, не пізніший аудит.",
  },
  {
    icon: Gauge,
    title: "Server Components за замовчуванням",
    description:
      "JavaScript на клієнті — лише там, де є реальна інтерактивність: форма, drawer, scroll-стан хедера.",
  },
  {
    icon: PauseCircle,
    title: "prefers-reduced-motion підтримується всюди",
    description:
      "Анімація вимикається повністю для користувачів, які обрали менше руху, — не лише сповільнюється.",
  },
];
