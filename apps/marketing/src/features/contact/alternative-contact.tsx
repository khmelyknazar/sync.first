import { Send } from "lucide-react";

import { telegramContact } from "@/config/contact";

/**
 * Renders nothing when `telegramContact` is `null` — the same
 * "correct at zero" pattern used for empty case studies (Build Phase
 * Stage 4/6): an honestly absent alternative channel, not a
 * placeholder link pointing nowhere real.
 */
export function AlternativeContact() {
  if (!telegramContact) return null;

  return (
    <a
      href={telegramContact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-default)] px-4 py-2.5 text-[14px] font-medium text-[var(--color-text-primary)] transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)] hover:border-[var(--color-border-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]"
    >
      <Send aria-hidden="true" className="size-4" strokeWidth={1.75} />
      {telegramContact.label}
    </a>
  );
}
