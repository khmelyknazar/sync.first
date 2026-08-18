import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Two-typeface system per Design System §3.1: one geometric-humanist
 * sans for both Display/Heading and Body (Sync Industry deliberately does not
 * pair a second expressive display face — consistency signals
 * engineering restraint), plus a monospace face reserved for code,
 * IDs, and tabular numeric alignment.
 *
 * Both expose CSS variables consumed by the Tailwind theme bridge
 * (`--font-sans`, `--font-mono` in tokens.css) — never referenced by
 * font-family name directly in components.
 */
export const fontSans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});
