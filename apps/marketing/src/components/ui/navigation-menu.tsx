"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "@axioma/design-system/cn";

/**
 * Thin styling layer over Radix's NavigationMenu. All keyboard
 * behavior (Arrow keys between top-level items, Escape to close,
 * Tab moving predictably through open content) and focus management
 * come from Radix itself — this file only maps Sync Industry tokens onto
 * it, per Design System §11 ("accessibility вбудована в primitive-
 * рівень, не додається по факту зверху").
 */

export const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative flex items-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = "NavigationMenu";

export const NavigationMenuList = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.List>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("flex items-center gap-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

const triggerStyles = cn(
  "inline-flex items-center gap-1 rounded-[var(--radius-md)] px-3 py-2",
  "text-[14px] font-medium text-[var(--color-text-secondary)]",
  "transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
  "hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)]",
  "data-[state=open]:bg-[var(--color-hover)] data-[state=open]:text-[var(--color-text-primary)]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  "focus-visible:outline-[var(--color-focus-ring)]",
);

export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(triggerStyles, "group", className)}
    {...props}
  >
    {children}
    <ChevronDown
      aria-hidden="true"
      className="size-3.5 transition-transform duration-[var(--motion-instant)] group-data-[state=open]:rotate-180"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuLink = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Link>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link ref={ref} className={cn(triggerStyles, className)} {...props} />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

export const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full p-6 md:absolute md:w-auto",
      "transition-opacity duration-[var(--motion-base)] ease-[var(--ease-standard)]",
      "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

function NavigationMenuViewport() {
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full",
          "origin-top overflow-hidden rounded-[var(--radius-lg)]",
          "border border-[var(--color-border-default)] bg-[var(--dropdown-bg)]",
          "shadow-[var(--dropdown-shadow)]",
          "transition-[width,height] duration-[var(--motion-base)] ease-[var(--ease-standard)]",
          // Below `md`, the viewport falls back to `w-full` (matches
          // Content's mobile fallback above). From `md` up, it reads
          // Radix's own `--radix-navigation-menu-viewport-width` — a
          // CSS variable Radix computes via ResizeObserver from the
          // currently active Content's real, natural width. Without
          // this, the viewport's `w-full` had no sized ancestor to
          // resolve against (its parent is an unsized `flex
          // justify-center` wrapper) and collapsed toward min-content,
          // which is what squeezed/overlapped the Products mega-menu.
          "md:w-[var(--radix-navigation-menu-viewport-width)]",
        )}
      />
    </div>
  );
}

export const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-10 flex h-2 items-end justify-center overflow-hidden",
      "transition-opacity duration-[var(--motion-base)] ease-[var(--ease-standard)]",
      "data-[state=visible]:opacity-100 data-[state=hidden]:opacity-0",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-[var(--color-border-default)]" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";
