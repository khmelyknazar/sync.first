import { Container } from "@/components/container";
import { HeroCtaGroup } from "@/features/hero/hero-cta-group";
import { HeroEyebrow } from "@/features/hero/hero-eyebrow";
import { HeroHeadline } from "@/features/hero/hero-headline";
import { HeroSupportingCopy } from "@/features/hero/hero-supporting-copy";
import { HeroTrustStrip } from "@/features/hero/hero-trust-strip";
import { HeroProductVisualization } from "@/features/hero/visualization/hero-product-visualization";

const HEADLINE_ID = "hero-heading";

/**
 * v2 (Redesign): layout ratio flipped from a supporting 420px
 * diagram column to a dominant visualization — the brief is explicit
 * that "the hero should NOT be mostly empty whitespace" and the
 * product visualization "should occupy a major part of the screen."
 * Text column narrows to `1fr` against a visualization column with
 * real width (`max-w-[640px]` inside `HeroProductVisualization`
 * itself), not the other way around.
 */
export function Hero() {
  return (
    <section aria-labelledby={HEADLINE_ID} className="overflow-hidden py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <HeroEyebrow>Продуктова інженерна компанія</HeroEyebrow>
          <HeroHeadline id={HEADLINE_ID} />
          <HeroSupportingCopy />
          <HeroCtaGroup />
          <HeroTrustStrip />
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroProductVisualization />
        </div>
      </Container>
    </section>
  );
}
