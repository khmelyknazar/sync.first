/**
 * Single source of truth for site-wide metadata. Route `layout.tsx`/
 * `page.tsx` files read from here rather than hardcoding titles or
 * URLs inline — keeps SEO metadata (Marketing Website Specification
 * §11) consistent and centrally editable.
 */
export const siteConfig = {
  name: "Sync Industry",
  tagline: "Проєктуємо внутрішні системи, автоматизації та AI-рішення під те, як реально працює ваш бізнес.",
  url: "https://syncindustry.com",
  ogImage: "/opengraph-image",
  locale: "uk-UA",
} as const;

export type SiteConfig = typeof siteConfig;
