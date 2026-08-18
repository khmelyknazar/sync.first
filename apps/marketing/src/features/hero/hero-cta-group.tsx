import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navigationCta, secondaryCta } from "@/config/navigation";

/**
 * Answers "what do I do next" — the fifth thing a Hero must convey.
 * Both CTAs now read from `config/navigation.ts` — `secondaryCta`
 * fixes the copy drift this file used to have with Process's
 * secondary button (see that config's comment).
 */
export function HeroCtaGroup() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button asChild variant="primary" size="lg">
        <Link href={navigationCta.href}>{navigationCta.label}</Link>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
      </Button>
    </div>
  );
}
