/**
 * Deliberately not `@/types/trust`'s `PrincipleItem` (icon + title +
 * description) — this section's editorial layout needs a short
 * `statement` distinct from a longer `explanation`, plus an explicit
 * `businessConsequence` and optional code-like `notation`, none of
 * which `PrincipleItem` carries. Reusing that shape would mean
 * cramming fields into a type that doesn't fit, not avoiding
 * duplication.
 */
export interface EngineeringPrincipleProof {
  index: number;
  code: string;
  /** Kept in English by design, same convention as the Process
   * section's stage names (Understand/Architect/...) — a short,
   * precise engineering term rather than a translated slogan. */
  statement: string;
  explanation: string;
  /** Always starts with "→" in the copy — the arrow is the non-color
   * signal that this line is a consequence, not restating the
   * explanation (never rely on color alone). */
  businessConsequence: string;
  /** Optional illustrative code-like notation — only included where
   * it genuinely clarifies the principle, never a fabricated
   * screenshot or diagram asset. */
  notation?: string[];
}
