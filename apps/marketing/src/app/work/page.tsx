import type { Metadata } from "next";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { PageWrapper } from "@/components/page-wrapper";
import { createPageMetadata } from "@/lib/seo";
import { CaseStudyGrid } from "@/features/work/case-study-grid";

export const metadata: Metadata = createPageMetadata({
  title: "Кейси",
  description:
    "Реальна робота Sync Industry — з чітким маркуванням клієнтських, демонстраційних і внутрішніх проєктів.",
  path: "/work",
});

const HEADING_ID = "work-index-heading";

export default function WorkIndexPage() {
  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            id={HEADING_ID}
            eyebrow="Робота"
            title="Кейси"
            description="Публікуємо лише реальну роботу — з чітким маркуванням типу проєкту."
          />
          <CaseStudyGrid />
        </Container>
      </div>
    </PageWrapper>
  );
}
