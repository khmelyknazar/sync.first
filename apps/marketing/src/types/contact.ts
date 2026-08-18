export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormValues {
  name: string;
  workEmail: string;
  company: string;
  need: string;
  /** Optional — the one field explicitly marked non-required in the brief. */
  context: string;
}

export interface ContactChannel {
  label: string;
  href: string;
}
