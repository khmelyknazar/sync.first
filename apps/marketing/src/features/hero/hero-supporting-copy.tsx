/**
 * v2 (Redesign): copy supplied directly in the brief. Still one
 * short paragraph, still no feature list — sells the outcome
 * (a business that runs as one system), not a technology stack.
 */
export function HeroSupportingCopy() {
  return (
    <p
      className={[
        "max-w-[520px] text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)]",
        "text-[var(--color-text-secondary)]",
      ].join(" ")}
    >
      Проєктуємо внутрішні системи, автоматизації та AI-рішення під те, як реально
      працює ваш бізнес.
    </p>
  );
}
