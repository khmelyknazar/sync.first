import { caseStudies } from "@/config/case-studies";
import type { CaseStudy } from "@/types/case-study";

/** The one place `/work/${slug}` is written — no case study data
 * object carries its own `href`, so the URL structure can't drift
 * out of sync with the actual route file. */
export function caseStudyHref(slug: string): string {
  return `/work/${slug}`;
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

/** At most one featured case study — if more than one is marked
 * `featured: true`, this returns the first and that's a config bug
 * to fix in the data, not something the UI should silently paper
 * over by picking one at random. */
export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return caseStudies.find((item) => item.featured);
}

export function getNonFeaturedCaseStudies(): CaseStudy[] {
  const featured = getFeaturedCaseStudy();
  return caseStudies.filter((item) => item.slug !== featured?.slug);
}
