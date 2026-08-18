import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationCta, primaryNavLinks } from "@/config/navigation";
import { ProductsMenu } from "@/features/navigation/products-menu";

/**
 * Visible from `lg` breakpoint up (Design System Grid, §7) — below
 * that, `MobileNav` takes over entirely rather than the two
 * coexisting and fighting over space.
 */
export function DesktopNav() {
  return (
    <div className="hidden items-center gap-6 lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Продукти</NavigationMenuTrigger>
            <NavigationMenuContent className="md:w-[560px] md:max-w-[90vw]">
              <ProductsMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>

          {primaryNavLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-3">
        <Button asChild variant="primary" size="sm">
          <Link href={navigationCta.href}>{navigationCta.label}</Link>
        </Button>
      </div>
    </div>
  );
}
