import type { ContactChannel } from "@/types/contact";

/**
 * Confirmed by the user (not fabricated): https://t.me/syncindustry.
 */
export const telegramContact: ContactChannel | null = {
  label: "Telegram",
  href: "https://t.me/syncindustry",
};

/**
 * No SLA or timeframe promised — none has been defined, and the
 * brief is explicit that none should be invented. Each step
 * describes what happens, not how fast.
 */
export const whatHappensNextSteps: string[] = [
  "Ви описуєте процес або проблему, яку потрібно вирішити.",
  "Ми розбираємо контекст і задаємо уточнювальні питання.",
  "Узгоджуємо наступний крок.",
];
