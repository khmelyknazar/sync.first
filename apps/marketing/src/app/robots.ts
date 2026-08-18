import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates /robots.txt. `/api/` is disallowed pre-emptively — no API
 * routes exist yet, but crawl budget on internal endpoints is never
 * useful once they do, so the rule is correct from day one rather
 * than added reactively later.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
