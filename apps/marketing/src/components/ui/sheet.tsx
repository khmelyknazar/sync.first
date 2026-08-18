"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";

import { cn } from "@axioma/design-system/cn";

/**
 * Drawer primitive for the mobile menu. Built on Radix Dialog rather
 * than a hand-rolled overlay: focus trap, Escape-to-close, and
 * scroll-lock come from the primitive, not from app code — the same
 * "accessibility built into the primitive layer" rule as Button and
 * NavigationMenu (Design System §11).
 */
export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;

export const SheetOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-[var(--color-overlay)]",
      "transition-opacity duration-[var(--motion-moderate)] ease-[var(--ease-standard)]",
      "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
      className,
    )}
    {...props}
  />
));
SheetOverlay.displayName = "SheetOverlay";

const sheetVariants = cva(
  [
    "fixed z-50 flex flex-col bg-[var(--modal-bg)]",
    "transition-transform duration-[var(--motion-moderate)] ease-[var(--ease-standard)]",
  ],
  {
    variants: {
      side: {
        right:
          "inset-y-0 right-0 h-full w-full max-w-sm border-l border-[var(--color-border-default)] data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
        bottom:
          "inset-x-0 bottom-0 max-h-[85vh] rounded-t-[var(--radius-xl)] border-t border-[var(--color-border-default)] data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
      },
    },
    defaultVariants: { side: "right" },
  },
);

interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  /** Accessible name — required, since the mobile drawer has no
   * visible heading by default. */
  title: string;
}

export const SheetContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ className, side, title, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>
      {children}
      <DialogPrimitive.Close
        className={cn(
          "absolute right-4 top-4 rounded-[var(--radius-md)] p-2",
          "text-[var(--color-text-secondary)] hover:bg-[var(--color-hover)]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          "focus-visible:outline-[var(--color-focus-ring)]",
        )}
      >
        <X aria-hidden="true" className="size-5" />
        <span className="sr-only">Закрити меню</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = "SheetContent";
