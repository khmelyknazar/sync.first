import type { TechStackItem } from "@/types/trust";

/**
 * Exactly the stack decided at project start — nothing added for
 * appearance. Each rationale is the real reason from this project's
 * own architecture decisions (see repo READMEs), not retrofitted
 * marketing language.
 */
export const techStack: TechStackItem[] = [
  {
    name: "Next.js 15",
    category: "Framework",
    rationale: "App Router і Server Components — продуктивність без ручної оптимізації.",
  },
  {
    name: "TypeScript (strict)",
    category: "Мова",
    rationale: "Суворий компілятор ловить помилки до code review, не після.",
  },
  {
    name: "Tailwind CSS v4",
    category: "Стилі",
    rationale: "CSS-first токени — design tokens лишаються єдиним джерелом правди.",
  },
  {
    name: "shadcn/ui + Radix",
    category: "Компоненти",
    rationale: "Accessibility (keyboard, focus trap, ARIA) вбудована в примітиви, не дописана зверху.",
  },
  {
    name: "Motion",
    category: "Анімація",
    rationale: "Централізована motion-архітектура — жодної довільної анімації в компонентах.",
  },
  {
    name: "Turborepo + pnpm",
    category: "Monorepo",
    rationale: "Кешування задач між apps і packages при частих змінах design-system.",
  },
];
