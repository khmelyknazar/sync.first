import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@axioma/design-system/cn";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-24 w-full resize-y rounded-[var(--input-radius)] border bg-[var(--color-bg-surface)] px-3 py-2.5",
      "text-[14px] leading-[20px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)]",
      "border-[var(--input-border)] transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      "focus-visible:outline-[var(--input-border-focus)]",
      "aria-[invalid=true]:border-[var(--color-danger)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
