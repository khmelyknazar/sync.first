import Link from "next/link";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="flex min-h-[60vh] items-center py-16">
        <Container className="flex flex-col items-start gap-6">
          <span className="font-mono text-[13px] text-[var(--color-text-disabled)]">404</span>
          <h1 className="text-[length:var(--font-heading-lg-size)] leading-[var(--font-heading-lg-line)] font-semibold text-[var(--color-text-primary)]">
            Такої сторінки не існує
          </h1>
          <p className="max-w-[440px] text-[15px] leading-[22px] text-[var(--color-text-secondary)]">
            Можливо, посилання застаріло або сторінку ще не опубліковано.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="primary">
              <Link href="/">На головну</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={navigationCta.href}>{navigationCta.label}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
}
