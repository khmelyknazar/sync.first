"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Thin wrapper around next-themes, configured to toggle the
 * `data-theme` attribute that `tokens.css` keys its light-mode
 * overrides off (see Design System §2.6/§20.5) — not the default
 * `class` strategy, so the same attribute works identically whether
 * the value is read by CSS or by a non-Tailwind consumer later.
 *
 * v2: `defaultTheme` flipped from `"light"` to `"dark"` — dark is now
 * the brand-primary experience (Redesign brief, "dark-first"), shown
 * to every first-time visitor regardless of OS preference.
 * `enableSystem` stays on so a future theme toggle can still offer a
 * "system" option; it no longer decides the first-visit default.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
