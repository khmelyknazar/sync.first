import type { ProcessStep } from "@/types/trust";

/**
 * This is literally the process this project followed, stage by
 * stage — not a generic "discovery, design, delivery" template. Each
 * step corresponds to a real, reviewed deliverable before the next
 * one started (each ended with an explicit approval checkpoint).
 */
export const processSteps: ProcessStep[] = [
  {
    index: 1,
    title: "Продуктове бачення",
    description:
      "Позиціонування, характер бренду й дизайн-філософія — до того, як обговорюється хоч один піксель",
  },
  {
    index: 2,
    title: "Архітектура продукту",
    description:
      "Як система масштабується, що будується зараз, а що свідомо відкладено — під конкретний розмір команди й бізнесу",
  },
  {
    index: 3,
    title: "Design System",
    description:
      "Токени, компоненти, motion — фундамент, з якого виводиться кожен наступний екран",
  },
  {
    index: 4,
    title: "Специфікація",
    description:
      "Кожна сторінка й секція описана — навіщо існує, який CTA, яку задачу вирішує — до першого рядка коду",
  },
  {
    index: 5,
    title: "Реалізація ітераціями",
    description:
      "Production-ready код, невеликими перевірюваними кроками — з підтвердженням після кожного",
  },
];
