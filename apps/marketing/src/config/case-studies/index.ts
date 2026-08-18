import type { CaseStudy } from "@/types/case-study";

import { documentAutomationCaseStudy } from "./document-automation-n8n";

/**
 * One file per case study (this project's established pattern —
 * same as `config/trust-system/`), aggregated here. Adding a demo or
 * client case study later is: new file + one line here — no other
 * file changes, per this stage's "architecture must allow adding
 * demo projects later" requirement.
 */
export const caseStudies: CaseStudy[] = [documentAutomationCaseStudy];
