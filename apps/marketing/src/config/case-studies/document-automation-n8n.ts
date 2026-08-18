import type { CaseStudy } from "@/types/case-study";

/**
 * TYPE ASSUMPTION: set to "internal" because this was described as
 * "мій existing automation project" with no named client and no
 * stated permission to publish as client work. If this was actually
 * built for a paying client, change `type` to `"client"` and add
 * `clientName` only with their explicit sign-off to publish. If it's
 * meant purely as a public technical showcase rather than a project
 * actually running operationally, `"demo"` may fit better — the
 * distinction is about who it was built for, not how polished it is.
 *
 * FIELDS LEFT INCOMPLETE ON PURPOSE: `problem`, `constraints`,
 * `result`, and `lessonsLearned` need the real narrative only you
 * have — inventing plausible-sounding specifics for them would be
 * exactly the fabrication this stage prohibits. `result.qualitative`
 * is filled with the one outcome directly implied by "automation of
 * an operational process" (manual work replaced by an automated
 * flow) — replace it with what actually changed, or clear it if even
 * that's too specific without your confirmation.
 */
export const documentAutomationCaseStudy: CaseStudy = {
  slug: "document-automation-n8n",
  title: "Автоматизація обробки документів на n8n",
  summary:
    "Операційний процес обробки вхідних документів, автоматизований через n8n, Telegram-бота та розпізнавання зображень.",
  type: "internal",
  featured: true,
  technology: [
    "n8n",
    "Telegram Bot API",
    "Google Gemini Vision",
    "Supabase",
    "PostgreSQL",
    "Google Workspace API",
    "JavaScript",
  ],

  context:
    "Операційний процес вимагав регулярної обробки вхідних документів — прийому, розпізнавання вмісту та внесення даних у систему обліку.",

  // problem: TODO — опишіть конкретну проблему до автоматизації (обсяг документів, частота помилок, витрачений час тощо).

  approach:
    "Telegram-бот приймає документи від користувача й передає їх у workflow n8n. Google Gemini Vision розпізнає вміст документа (текст/дані на зображенні), результат структурується та записується в Supabase (PostgreSQL). За потреби дані синхронізуються із сервісами Google.",

  architecture:
    "n8n виступає оркестратором: тригер від Telegram-бота → виклик Gemini Vision API для розпізнавання → трансформація даних у кастомних JavaScript-нодах → запис у Supabase/PostgreSQL → опційна синхронізація з Google-сервісами.",

  implementation:
    "Кастомна логіка обробки та валідації даних написана на JavaScript всередині n8n workflow-нод; Telegram Bot API — точка входу для користувача без потреби в окремому інтерфейсі.",

  result: {
    qualitative:
      "Ручне внесення даних з документів замінене автоматизованим потоком: документ → розпізнавання → структуровані дані в базі.",
    // metric: додайте лише якщо є підтверджена конкретна цифра (наприклад, час обробки до/після).
  },

  // lessonsLearned: TODO — що б ви зробили інакше, які обмеження n8n/Gemini Vision виявились важливими на практиці.

  // assets: додайте лише за наявності реальних скріншотів/діаграм цього проєкту — плейсхолдери не використовуються.
};
