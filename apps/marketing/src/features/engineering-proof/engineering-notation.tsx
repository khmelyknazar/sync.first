/**
 * `aria-hidden` — the notation restates what `explanation` already
 * says in prose; it's a visual reinforcement for sighted readers, not
 * additional information a screen reader user would be missing
 * without it (contrast with Hero's system diagram, which needed a
 * `sr-only` text equivalent because it *was* the primary content in
 * that spot).
 */
export function EngineeringNotation({ lines }: { lines: string[] }) {
  return (
    <pre
      aria-hidden="true"
      className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--graphite-950)] px-4 py-3 font-mono text-[12px] leading-[18px] text-[var(--graphite-200)]"
    >
      {lines.join("\n")}
    </pre>
  );
}
