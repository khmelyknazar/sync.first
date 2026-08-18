import { PageWrapper } from "@/components/page-wrapper";
import { EngineeringProof } from "@/features/engineering-proof/engineering-proof";
import { Hero } from "@/features/hero/hero";
import { Process } from "@/features/process/process";
import { Solutions } from "@/features/solutions/solutions";
import { CaseStudyPreviewSection } from "@/features/trust-system/case-study-preview-section";
import { DocumentationTransparencySection } from "@/features/trust-system/documentation-transparency-section";
import { TrustCtaSection } from "@/features/trust-system/trust-cta-section";

/**
 * Home funnel, in order — see the chat response for the full
 * Business-First analysis of what was included, excluded, or
 * considered a duplicate. Summary of what's deliberately NOT here:
 *
 * - `EngineeringPrinciplesSection` (Trust System) — superseded by
 *   `EngineeringProof`, which covers the same ground (architecture
 *   discipline, one system, documented decisions) with a stronger,
 *   more concrete construction (business consequence + notation per
 *   principle). Kept in the codebase, unused on Home.
 * - Trust System's `ProcessSection` (the 5-stage "how this project
 *   itself was built" meta-process) — superseded by `Process`
 *   (the 6-stage client engagement workflow), which answers the
 *   funnel's actual question ("what happens if I come to Sync Industry")
 *   more directly. Kept in the codebase, unused on Home.
 * - `ArchitectureProofSection` (tech stack) — real content, but
 *   speaks to a technical evaluator's depth question rather than
 *   advancing this funnel; its own original rationale already
 *   pointed at `/company/engineering` as its natural home.
 * - `SecurityReliabilitySection` — real content, more relevant to
 *   procurement/security reviewers on a dedicated `/company/security`
 *   page than to the primary Home funnel audience (founder/COO
 *   evaluating CRM) at this stage.
 */
export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Solutions />
      <Process />
      <EngineeringProof />
      <CaseStudyPreviewSection />
      <DocumentationTransparencySection />
      <TrustCtaSection />
    </PageWrapper>
  );
}
