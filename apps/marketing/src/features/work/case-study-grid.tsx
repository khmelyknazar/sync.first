import { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/scroll-stagger";
import { getFeaturedCaseStudy, getNonFeaturedCaseStudies } from "@/lib/case-study";
import { CaseStudyCard } from "@/features/work/case-study-card";
import { FeaturedCaseStudy } from "@/features/work/featured-case-study";

/**
 * Not a uniform 3-column grid of identical cards — the brief is
 * explicit about this. Featured case (if any) renders full-width via
 * `FeaturedCaseStudy` above the grid; everything else fills a
 * standard grid below. At 1 total case study (today's real state),
 * this renders exactly the featured block and an empty grid — no
 * placeholder cards inserted to "fill out" the layout.
 *
 * v2 (Redesign, Stage 4): the "rest" grid now uses `ScrollStagger` —
 * added for architectural consistency with `SolutionsGrid`'s
 * identical pattern, not new Case Study functionality (the Work
 * System's content/data stays frozen per standing instruction; this
 * is the same site-wide motion pass every other grid got).
 */
export function CaseStudyGrid() {
  const featured = getFeaturedCaseStudy();
  const rest = getNonFeaturedCaseStudies();

  return (
    <div className="flex flex-col gap-8">
      {featured && <FeaturedCaseStudy caseStudy={featured} />}
      {rest.length > 0 && (
        <ScrollStaggerContainer
          staggerMs={90}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((caseStudy) => (
            <ScrollStaggerItem key={caseStudy.slug}>
              <CaseStudyCard caseStudy={caseStudy} />
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      )}
    </div>
  );
}
