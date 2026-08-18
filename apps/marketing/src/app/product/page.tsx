import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import { products } from "@/config/products";
import { SolutionsGrid } from "@/features/solutions/solutions-grid";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Продукт",
  description:
    "CRM — поточна точка входу в екосистему Sync Industry. ERP, Business Automation, Internal Systems та Integrations розширюють той самий Core, коли на них є бізнес-потреба.",
  path: "/product",
});

/**
 * Reuses `SolutionsGrid` as-is — the exact "CRM dominant, comingSoon
 * surrounding" composition already built for Home's Solutions
 * section satisfies this page's requirement precisely (CRM the only
 * available product; ERP/Automation/Internal Systems/Integrations
 * stay comingSoon, never rendered as clickable fake product pages —
 * `SolutionCard` renders them as non-interactive `<div>`s by
 * construction). No new product presentation was built for this
 * page.
 */
export default function ProductPage() {
  const crm = products.find((product) => product.status === "available");

  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          <header className="flex max-w-[640px] flex-col gap-4">
            <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-primary)]">
              Продукт
            </p>
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              {crm?.title ?? "CRM"} — точка входу в екосистему Sync Industry
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              {crm?.businessProblem}
            </p>
          </header>

          <SolutionsGrid />

          <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-8">
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Готові розібрати, чи підходить це вашому бізнесу?
            </p>
            <Button asChild variant="primary">
              <Link href={navigationCta.href}>{navigationCta.label}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
}
