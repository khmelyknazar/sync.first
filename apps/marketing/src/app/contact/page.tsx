import type { Metadata } from "next";

import { PageWrapper } from "@/components/page-wrapper";
import { ContactPageContent } from "@/features/contact/contact-page-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Обговорити систему",
  description:
    "Розкажіть, який процес чи проблему потрібно вирішити — перший контакт із Sync Industry починається з розбору контексту, не з продажу.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactPageContent />
    </PageWrapper>
  );
}
