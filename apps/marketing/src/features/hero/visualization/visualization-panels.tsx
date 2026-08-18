import { Bot, CheckCircle2, TrendingUp, Zap } from "lucide-react";

/**
 * All content below is illustrative UI chrome — generic labels
 * ("Лід #1042", status pills, a schematic bar chart) meant to read
 * as "this is what serious software looks like," never as a claim
 * about a specific real client, metric, or shipped CRM screen. No
 * company names, no real numbers. Kept intentionally generic per the
 * redesign brief: "не потрібно видавати це за existing CRM."
 */

export function CorePanelContent() {
  return (
    <div className="flex items-center gap-3 px-5 py-4">
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--ultramarine-400)] opacity-60" />
        <span className="relative inline-flex size-2.5 rounded-full bg-[var(--ultramarine-400)]" />
      </span>
      <span className="font-mono text-[13px] font-medium tracking-[0.02em] text-[var(--graphite-50)]">
        Sync Industry
      </span>
    </div>
  );
}

export function LeadsPanelContent() {
  const rows = [
    { id: "#1042", status: "Новий" },
    { id: "#1041", status: "В обробці" },
    { id: "#1039", status: "Готово" },
  ];
  const statusColor: Record<string, string> = {
    Новий: "text-[var(--ultramarine-300)] bg-[var(--ultramarine-500)]/15",
    "В обробці": "text-[var(--warning-500)] bg-[var(--warning-500)]/15",
    Готово: "text-[var(--success-500)] bg-[var(--success-500)]/15",
  };

  return (
    <div className="flex w-[220px] flex-col gap-3 p-4">
      <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--graphite-400)]">
        Ліди
      </span>
      <div className="flex flex-col gap-1.5">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center justify-between gap-2">
            <span className="font-mono text-[12px] text-[var(--graphite-200)]">{row.id}</span>
            <span
              className={`rounded-[var(--radius-sm)] px-1.5 py-0.5 text-[10px] font-medium ${statusColor[row.status]}`}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AutomationPanelContent() {
  return (
    <div className="flex w-[200px] flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <Zap aria-hidden="true" className="size-3.5 text-[var(--ultramarine-300)]" strokeWidth={2} />
        <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--graphite-400)]">
          Автоматизація
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--success-500)]" />
          <span className="text-[12px] text-[var(--graphite-200)]">Документ оброблено</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--graphite-700)]">
          <div className="h-full w-2/3 rounded-full bg-[var(--ultramarine-400)]" />
        </div>
      </div>
    </div>
  );
}

export function AnalyticsPanelContent() {
  const bars = [40, 65, 50, 80, 60, 90];
  return (
    <div className="flex w-[200px] flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <TrendingUp aria-hidden="true" className="size-3.5 text-[var(--ultramarine-300)]" strokeWidth={2} />
        <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--graphite-400)]">
          Активність
        </span>
      </div>
      <div className="flex h-12 items-end gap-1.5">
        {bars.map((height, index) => (
          <div
            key={index}
            style={{ height: `${height}%` }}
            className="flex-1 rounded-t-[2px] bg-[var(--ultramarine-500)]/60"
          />
        ))}
      </div>
    </div>
  );
}

export function NotificationPanelContent() {
  return (
    <div className="flex w-[220px] items-start gap-3 p-4">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--ultramarine-500)]/20 text-[var(--ultramarine-300)]">
        <Bot aria-hidden="true" className="size-4" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-[12px] font-medium text-[var(--graphite-50)]">
          Оброблено новий запит
        </span>
        <span className="text-[11px] text-[var(--graphite-400)]">щойно</span>
      </div>
    </div>
  );
}
