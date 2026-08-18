import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { SkipLink } from "@/components/skip-link";
import { siteConfig } from "@/config/site";
import { Footer } from "@/features/navigation/footer";
import { Header } from "@/features/navigation/header";
import { fontMono, fontSans } from "@/lib/fonts";
import { MotionProvider } from "@/lib/motion-provider";
import { createPageMetadata } from "@/lib/seo";
import { ThemeProvider } from "@/lib/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  ...createPageMetadata({
    title: siteConfig.name,
    description: siteConfig.tagline,
    path: "/",
  }),
};

/**
 * `<Analytics />` (Vercel Analytics): counts page views and basic,
 * anonymized traffic stats — no cookies, no personal data, nothing to
 * configure. It's inert everywhere except when the site is actually
 * deployed on Vercel, where it starts working automatically and the
 * numbers show up in the Vercel dashboard under the project's
 * "Analytics" tab. Chosen because it's the zero-setup default for
 * this stack — no account signup or API key needed beyond deploying
 * to Vercel itself, which this project already assumes (see README).
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider>
          <MotionProvider>
            <SkipLink />
            <Header />
            {children}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
