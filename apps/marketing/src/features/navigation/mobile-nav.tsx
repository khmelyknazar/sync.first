"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationCta, primaryNavLinks } from "@/config/navigation";
import { ProductsMenu } from "@/features/navigation/products-menu";

/**
 * Visible below the `lg` breakpoint. State is owned here (not lifted
 * to Header) because only this component needs it — the drawer opens
 * and closes independently of the desktop menu, which never mounts
 * at the same viewport width.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden" aria-label="Відкрити меню">
          <Menu aria-hidden="true" className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" title="Навігація Sync Industry" className="flex flex-col">
        <nav aria-label="Мобільна навігація" className="flex flex-1 flex-col gap-6 overflow-y-auto p-6 pt-16">
          <section aria-labelledby="mobile-nav-products-heading" className="flex flex-col gap-3">
            <h2
              id="mobile-nav-products-heading"
              className="text-[13px] font-medium uppercase tracking-[0.02em] text-[var(--color-text-secondary)]"
            >
              Продукти
            </h2>
            <ProductsMenu />
          </section>

          <ul className="flex flex-col gap-1 border-t border-[var(--color-divider)] pt-4">
            {primaryNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[var(--radius-md)] px-3 py-2.5 text-[15px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-hover)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 border-t border-[var(--color-divider)] p-6">
          <Button asChild variant="primary">
            <Link href={navigationCta.href} onClick={() => setOpen(false)}>
              {navigationCta.label}
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
