import Link from "next/link";

import { cn } from "@axioma/design-system/cn";

import { ParallaxLayer } from "@/components/parallax-layer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";

const HEADING_ID = "trust-cta-heading";

/**
 * BUSINESS GOAL: convert a reader who has been persuaded by the
 * preceding six sections — the last thing on the page before they
 * either act or leave.
 *
 * PROVES: nothing new — this section doesn't introduce a claim, it
 * closes the argument the rest of the Trust System already made.
 *
 * CONTENT: reuses `navigationCta` (the same config the header and
 * Hero use) — the label is never re-typed a third time.
 *
 * CTA: framed as a conversation about the visitor's system, not a
 * generic "book a demo of our product" (Sync Industry sells engineering
 * engagements, not self-serve software, at this stage).
 *
 * TRUST SIGNAL: the copy explicitly sets expectations for what the
 * conversation actually is, instead of a vague "let's talk" — a
 * concrete, checkable promise about the first interaction.
 *
 * AVOIDING MARKETING BULLSHIT: no "join 100+ companies," no urgency
 * pressure ("limited spots," countdown), no fake scarcity.
 *
 * v2 (Redesign, Stage 4): this is the page's Final CTA — the brief
 * asks for "large immersive product visualization + strong CTA"
 * here. A literal second copy of the Hero visualization would be
 * redundant (same reasoning already applied to Solutions, Build
 * Phase Stage 6: Hero owns the one canonical system diagram). The
 * "immersive" quality instead comes from a large glow field + a
 * faint animated grid, scroll-parallaxed for depth, behind the same
 * content this section always had — cinematic without duplicating
 * the product illustration.
 */
export function TrustCtaSection() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 sm:py-24">
      <Container>
        <ScrollReveal
          className={cn(
            "relative flex flex-col items-start gap-6 overflow-hidden rounded-[var(--radius-xl)]",
            "border border-[var(--color-brand-primary)]/25 bg-[var(--color-bg-surface)]",
            "p-10 shadow-[var(--glow-primary-md)] sm:p-16",
          )}
        >
          <ParallaxLayer strength={32} className="pointer-events-none absolute inset-0">
            <div
              aria-hidden="true"
              className={cn(
                "absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full",
                "bg-[var(--ultramarine-500)]/14 blur-[100px]",
              )}
            />
            <div
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-border-default) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
              }}
              className="absolute inset-0 opacity-20"
            />
          </ParallaxLayer>

          <div className="relative z-10 flex flex-col items-start gap-6">
            <h2
              id={HEADING_ID}
              className="max-w-[560px] text-[length:var(--font-heading-lg-size)] leading-[var(--font-heading-lg-line)] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]"
            >
              Перша розмова — про вашу систему, а не про продаж
            </h2>
            <p className="max-w-[520px] text-[15px] leading-[22px] text-[var(--color-text-secondary)]">
              Ви розповідаєте, де саме процеси втрачають контроль — ми чесно кажемо,
              чи можемо тут допомогти і як саме.
            </p>
            <Button asChild variant="primary" size="lg">
              <Link href={navigationCta.href}>{navigationCta.label}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
