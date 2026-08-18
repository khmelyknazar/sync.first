/**
 * Composition happens wherever Home (or another page) needs it —
 * this file only makes the seven Trust System sections importable
 * from one place. No implied order: each section is
 * self-contained (own heading id, own spacing), so a future Home
 * page can sequence, omit, or reorder them without touching this
 * feature folder.
 */
export { EngineeringPrinciplesSection } from "./engineering-principles-section";
export { ArchitectureProofSection } from "./architecture-proof-section";
export { CaseStudyPreviewSection } from "./case-study-preview-section";
export { ProcessSection } from "./process-section";
export { DocumentationTransparencySection } from "./documentation-transparency-section";
export { SecurityReliabilitySection } from "./security-reliability-section";
export { TrustCtaSection } from "./trust-cta-section";
