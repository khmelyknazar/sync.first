import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class names and resolves Tailwind conflicts
 * (e.g. `cn("p-2", condition && "p-4")` → `"p-4"`, not both).
 * Every component in the design system and every app imports this
 * single implementation — never a local re-declaration.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
