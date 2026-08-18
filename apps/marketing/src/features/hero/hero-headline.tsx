/**
 * The page's single H1. v2 (Redesign brief): replaced with the
 * supplied cinematic headline — still result-oriented, still no
 * "We help businesses..." filler, but built to carry the larger
 * `--font-display-xl` scale now available in the token set.
 */
export function HeroHeadline({ id }: { id: string }) {
  return (
    <h1
      id={id}
      className={[
        "text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)]",
        "font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]",
        "sm:text-[length:var(--font-display-lg-size)] sm:leading-[var(--font-display-lg-line)]",
        "xl:text-[length:var(--font-display-xl-size)] xl:leading-[var(--font-display-xl-line)]",
      ].join(" ")}
    >
      Перетворюємо хаос бізнес-процесів
      <br />
      на одну працюючу систему.
    </h1>
  );
}
