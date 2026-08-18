import { Database, KeyRound, Lock, Rocket } from "lucide-react";

import type { PrincipleItem } from "@/types/trust";

/**
 * Principles and real practices only — deliberately no ISO 27001,
 * SOC 2, PCI DSS, or any other certification badge. Sync Industry does not
 * hold these certifications; claiming them would be exactly the
 * "неправдива сертифікація" this stage explicitly forbids. This list
 * describes how access, data, and deployment are actually handled —
 * verifiable in the architecture, not asserted for effect.
 */
export const securityPrinciples: PrincipleItem[] = [
  {
    icon: KeyRound,
    title: "Один Identity-провайдер",
    description:
      "Автентифікація й авторизація живуть в одному Core-сервісі — жоден продукт не веде власну паралельну систему логіну.",
  },
  {
    icon: Lock,
    title: "Права доступу на рівні даних",
    description:
      "RBAC перевіряється на рівні Core API, а не лише приховується в інтерфейсі — обмеження застосовується там, де видаються дані.",
  },
  {
    icon: Database,
    title: "Ізоляція даних клієнтів",
    description:
      "Multi-tenant архітектура з чіткою межею на рівні даних для кожного клієнта — з першого дня, а не як пізніший рефакторинг.",
  },
  {
    icon: Rocket,
    title: "Контрольовані деплої",
    description:
      "Кожна зміна проходить типізовану перевірку й огляд коду перед випуском у продакшн — без прямих правок на проді.",
  },
];
