import { Blocks, Boxes, Building2, Users, Workflow } from "lucide-react";

import type { Product } from "@/types/product";

/**
 * THE single source of truth for product metadata across the site.
 * `config/navigation.ts` re-exports this array as `productNavItems`
 * (unchanged name, unchanged shape for its two existing consumers —
 * the mega-menu and Hero's system visualization); `features/solutions`
 * reads the same array directly for the richer fields. There is no
 * second copy anywhere — a status change, a new icon, or a corrected
 * description happens here once.
 *
 * Per Product Architecture v2 (§4, Latent modules) and this stage's
 * explicit instruction: statuses are fixed. CRM is the only
 * `"available"` product. The other four are real ecosystem
 * directions, not fabricated products — they carry no capabilities
 * or business-problem copy (that would overstate what exists today),
 * only `ecosystemRole`, explaining how they'd extend the same Core
 * once built.
 */
export const products: Product[] = [
  {
    slug: "crm",
    title: "CRM",
    description: "Продажі, ліди та воронки в одній системі.",
    icon: Users,
    status: "available",
    href: "/product",
    businessProblem:
      "Дані про ліди, клієнтів і задачі розкидані по чатах, таблицях і головах менеджерів — рішення приймаються без повної картини.",
    capabilities: [
      "Ліди",
      "Клієнти",
      "Угоди",
      "Задачі",
      "Комунікація",
      "Воронка продажів",
      "Звітність",
      "Інтеграції",
    ],
  },
  {
    slug: "erp",
    title: "ERP",
    description: "Фінанси, ресурси та операційне управління.",
    icon: Boxes,
    status: "comingSoon",
    href: "/product/erp",
    ecosystemRole:
      "Розширює той самий Core фінансовими й ресурсними даними — без окремого логіну чи міграції.",
  },
  {
    slug: "automation",
    title: "Business Automation",
    description: "Автоматизація повторюваних бізнес-процесів.",
    icon: Workflow,
    status: "comingSoon",
    href: "/product/automation",
    ecosystemRole:
      "З'єднує дані CRM, ERP та зовнішніх сервісів у наскрізні автоматизовані процеси.",
  },
  {
    slug: "internal-systems",
    title: "Internal Systems",
    description: "Внутрішні портали й корпоративні кабінети.",
    icon: Building2,
    status: "comingSoon",
    href: "/product/internal-systems",
    ecosystemRole:
      "Внутрішні інструменти команди на тому самому фундаменті — не окрема система з нуля.",
  },
  {
    slug: "integrations",
    title: "Integrations",
    description: "Підключення до інструментів, якими вже користуєтесь.",
    icon: Blocks,
    status: "comingSoon",
    href: "/product/integrations",
    ecosystemRole: "З'єднує екосистему Sync Industry з інструментами, що вже працюють у бізнесі.",
  },
];
