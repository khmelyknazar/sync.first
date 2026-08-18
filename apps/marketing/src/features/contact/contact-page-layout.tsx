import { Container } from "@/components/container";
import { AlternativeContact } from "@/features/contact/alternative-contact";
import { ContactForm } from "@/features/contact/contact-form";
import { ContactHero } from "@/features/contact/contact-hero";
import { WhatHappensNext } from "@/features/contact/what-happens-next";

/**
 * Left column: message + trust + alternative channel. Right: form.
 * Mobile: single column, hero/trust first, form after — matches the
 * brief exactly. Only `ContactForm` is a Client Component; everything
 * else here, including this layout, is server-rendered.
 */
export function ContactPageContent() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col gap-8">
          <ContactHero />
          <WhatHappensNext />
          <AlternativeContact />
        </div>

        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
