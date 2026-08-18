"use client";

import { useEffect } from "react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

/**
 * Next.js requires `error.tsx` to be a Client Component (it receives
 * `error`/`reset` from an error boundary, which only works client-
 * side) — the one legitimate exception to "no page-level use client"
 * in this product, imposed by the framework, not a choice made here.
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // No PII, no request payload — just enough to correlate with
    // server logs via the digest, same logging discipline as
    // `/api/contact`.
    console.error("[error-boundary]", error.digest ?? error.message);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center py-16">
      <Container className="flex flex-col items-start gap-6">
        <span className="font-mono text-[13px] text-[var(--color-text-disabled)]">500</span>
        <h1 className="text-[length:var(--font-heading-lg-size)] leading-[var(--font-heading-lg-line)] font-semibold text-[var(--color-text-primary)]">
          Щось пішло не так
        </h1>
        <p className="max-w-[440px] text-[15px] leading-[22px] text-[var(--color-text-secondary)]">
          Спробуйте оновити сторінку. Якщо проблема повториться — напишіть нам.
        </p>
        <Button variant="primary" onClick={reset}>
          Спробувати ще раз
        </Button>
      </Container>
    </div>
  );
}
