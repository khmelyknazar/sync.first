import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";

/**
 * Owns the accessibility wiring every field in the form needs
 * identically: `<label for>`, `aria-invalid`, and `aria-describedby`
 * pointing at the error text's id (only when an error exists — never
 * describedby-ing an empty node). `children` renders the actual
 * `Input`/`Textarea` so this stays agnostic to which one is used.
 */
export function FormField({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>
        {label}
        {optional && (
          <span className="ml-1 font-normal text-[var(--color-text-secondary)]">
            (необов&apos;язково)
          </span>
        )}
      </Label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="text-[12px] text-[var(--color-danger)]">
          {error}
        </p>
      )}
    </div>
  );
}
