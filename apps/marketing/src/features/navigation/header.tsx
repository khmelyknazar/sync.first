"use client";

import { cn } from "@axioma/design-system/cn";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { DesktopNav } from "@/features/navigation/desktop-nav";
import { MobileNav } from "@/features/navigation/mobile-nav";
import { useScrollState } from "@/hooks/use-scroll-state";

/**
 * Sticky header, compact after 80px of scroll (Design System §9:
 * height reduction + `shadow-sm`, `motion-base`/`ease-standard`
 * transition — no layout jump). `banner` landmark role is implicit
 * from `<header>` at the top level of the page, which is why this
 * must only ever render once per page, in the route-group layout —
 * never inside a page body.
 */
export function Header() {
  const isScrolled = useScrollState();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-[background-color,border-color,box-shadow,height]",
        "duration-[var(--motion-base)] ease-[var(--ease-standard)]",
        "bg-[var(--color-bg-surface)]",
        isScrolled
          ? "border-[var(--color-border-default)] shadow-[var(--shadow-sm)]"
          : "border-transparent shadow-none",
      )}
    >
      <Container className={cn("flex items-center justify-between", isScrolled ? "h-14" : "h-16")}>
        <Logo />
        <DesktopNav />
        <MobileNav />
      </Container>
    </header>
  );
}
