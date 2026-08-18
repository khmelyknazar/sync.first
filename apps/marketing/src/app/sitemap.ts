import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllCaseStudies } from "@/lib/case-study";

/**
 * Sitemap foundation. Real routes as of this pass: `/`, `/work` (+
 * its published case studies), `/contact`, `/product`,
 * `/company/engineering`. Every future static route from the
 * Marketing Website Specification (§1 Sitemap) gets appended here as
 * it's built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyEntries = getAllCaseStudies().map((caseStudy) => ({
    url: new URL(`/work/${caseStudy.slug}`, siteConfig.url).toString(),
    lastModified: caseStudy.publishedAt ? new Date(caseStudy.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/product", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: new URL("/work", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: new URL("/company/engineering", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: new URL("/contact", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...caseStudyEntries,
  ];
}
