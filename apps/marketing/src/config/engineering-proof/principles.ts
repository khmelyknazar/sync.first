import type { EngineeringPrincipleProof } from "@/types/engineering-proof";

export const engineeringProofPrinciples: EngineeringPrincipleProof[] = [
  {
    index: 1,
    code: "01",
    statement: "Architecture first",
    explanation:
      "Рішення приймаються з урахуванням майбутнього масштабування, а не лише поточної задачі.",
    businessConsequence: "→ менше дорогих переписувань при масштабуванні.",
    notation: ["Core", "└─ CRM (available)", "└─ ERP (planned)"],
  },
  {
    index: 2,
    code: "02",
    statement: "One system, not isolated tools",
    explanation:
      "CRM, внутрішні процеси, інтеграції та майбутні модулі працюють як одна екосистема, а не окремі інструменти, з'єднані вручну.",
    businessConsequence: "→ менше ручної передачі даних між відділами.",
    notation: ["Organization", "├─ CRM", "├─ ERP", "└─ Internal Systems"],
  },
  {
    index: 3,
    code: "03",
    statement: "Reliable by design",
    explanation:
      "Обробка помилок, валідація, спостережуваність і права доступу — частина системи із самого початку, а не пізній патч.",
    businessConsequence: "→ менше операційних помилок і непередбачуваної поведінки.",
    notation: ["input → validate → authorize → persist", "                     └─ reject (typed error)"],
  },
  {
    index: 4,
    code: "04",
    statement: "Documented decisions",
    explanation:
      "Архітектурні рішення зрозумілі команді й задокументовані — систему можна підтримувати незалежно від однієї людини.",
    businessConsequence: "→ система не стає заручником одного розробника.",
    notation: ["/decisions/<slug>.md", "context → decision → consequence"],
  },
];
