const HEADLINE_ID = "contact-heading";

export function ContactHero() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-primary)]">
        Почати розмову
      </p>
      <h1
        id={HEADLINE_ID}
        className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]"
      >
        Побудуємо систему, яка справді потрібна вашому бізнесу.
      </h1>
      <p className="max-w-[440px] text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
        Перший контакт — це розбір вашого поточного процесу чи проблеми, а не продаж
        абстрактної розробки.
      </p>
    </div>
  );
}
