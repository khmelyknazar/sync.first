import type { LabelHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@axioma/design-system/cn";

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("text-[13px] font-medium text-[var(--color-text-primary)]", className)}
      {...props}
    />
  ),
);
Label.displayName = "Label";
