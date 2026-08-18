import { cn } from "@axioma/design-system/cn";

/**
 * "Skip to content" link — first focusable element in the document.
 * Visually hidden until keyboard-focused, then rendered on top of
 * the header. Required for WCAG 2.1 AA (2.4.1 Bypass Blocks); without
 * it, keyboard users must tab through the entire nav on every page.
 * Targets `#main-content`, rendered by `PageWrapper`.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus-visible:not-sr-only",
        "focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50",
        "focus-visible:rounded-md focus-visible:bg-[var(--color-bg-surface-raised)]",
        "focus-visible:px-4 focus-visible:py-2 focus-visible:text-[var(--color-text-primary)]",
        "focus-visible:shadow-[var(--shadow-lg)]",
      )}
    >
      Перейти до основного контенту
    </a>
  );
}
