export function TechnologyTags({
  technology,
  limit,
}: {
  technology: string[];
  /** Card/grid contexts show a truncated list; the detail page passes
   * no limit to show everything. */
  limit?: number;
}) {
  const visible = limit ? technology.slice(0, limit) : technology;
  const remaining = limit ? technology.length - visible.length : 0;

  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Технології">
      {visible.map((tech) => (
        <li
          key={tech}
          className="rounded-[var(--radius-sm)] bg-[var(--graphite-700)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-secondary)]"
        >
          {tech}
        </li>
      ))}
      {remaining > 0 && (
        <li className="rounded-[var(--radius-sm)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-disabled)]">
          +{remaining}
        </li>
      )}
    </ul>
  );
}
