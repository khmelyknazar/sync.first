import Image from "next/image";
import Link from "next/link";

import { cn } from "@axioma/design-system/cn";

/**
 * A designed symbol now exists (`public/logo-mark.png`, provided
 * directly by the user) — the "wordmark IS the mark until a designed
 * symbol exists" rule from v1 no longer applies. Mark + wordmark
 * together, not mark alone, so the brand name is still readable
 * without relying on someone already recognizing the symbol.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 rounded-[var(--radius-sm)]",
        "focus-visible:outline focus-visible:outline-2",
        "focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus-ring)]",
        className,
      )}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={24}
        height={24}
        priority
        className="rounded-[4px]"
      />
      <span className="text-[17px] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]">
        Sync Industry
      </span>
    </Link>
  );
}
