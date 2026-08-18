import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface PageSeoInput {
  title: string;
  description: string;
  /** Route path, e.g. "/product" — used to build canonical + OG URLs. */
  path: string;
  /** Set false only for utility pages that must not be indexed
   * (e.g. auth flows) — indexing is the default per Business First
   * (every marketing page exists to be found). */
  index?: boolean;
  ogImage?: string;
}

/**
 * SEO foundation: the one function every route's `generateMetadata`
 * (or static `metadata` export) calls to produce a `Metadata` object.
 *
 * Next.js App Router has no runtime "SEO provider" component — SEO is
 * a build-time/request-time data concern (the `Metadata` API), not
 * something rendered into the tree. This factory is the functional
 * equivalent: it guarantees every page ships a canonical URL, a
 * consistent OG/Twitter payload, and correct robots directives
 * without each page re-deriving that logic — the same "single source
 * of truth" principle the design tokens use, applied to metadata.
 *
 * Root-level defaults (site name template, metadataBase, default OG
 * image) already live in `app/layout.tsx`; this only supplies the
 * per-page overrides.
 */
export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  ogImage = siteConfig.ogImage,
}: PageSeoInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index,
      follow: index,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
