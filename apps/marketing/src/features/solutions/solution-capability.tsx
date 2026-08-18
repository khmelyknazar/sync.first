export function SolutionCapabilityList({ capabilities }: { capabilities: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--color-text-disabled)]">
        Напрямок продукту
      </span>
      <ul className="flex flex-wrap gap-1.5" aria-label="Capability areas">
        {capabilities.map((capability) => (
          <li
            key={capability}
            className="rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-2 py-1 text-[12px] text-[var(--color-text-secondary)]"
          >
            {capability}
          </li>
        ))}
      </ul>
    </div>
  );
}
