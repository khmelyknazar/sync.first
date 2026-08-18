import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navigationCta, secondaryCta } from "@/config/navigation";

/**
 * Both CTAs route to real, existing pages and now both read from
 * `config/navigation.ts` — this used to hand-type "Подивитись
 * рішення" separately from Hero's "Дивитись рішення"; both now
 * import the same `secondaryCta` object (Redesign pass).
 */
export function ProcessCta() {
  return (
    <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-10">
      <h3 className="text-[18px] font-semibold text-[var(--color-text-primary)]">
        Є процес, який працює не так, як повинен?
      </h3>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="primary">
          <Link href={navigationCta.href}>{navigationCta.label}</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
        </Button>
      </div>
    </div>
  );
}
