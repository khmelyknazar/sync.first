import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageWrapper } from "@/components/page-wrapper";
import { CaseStudyDetailLayout } from "@/features/work/case-study-detail-layout";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-study";
import { createPageMetadata } from "@/lib/seo";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-renders every known case study at build time — the route list
 * comes from the same config the grid/index page read, so a new case
 * study file is automatically a new static page, no route file
 * changes required. */
export function generateStaticParams() {
  return getAllCaseStudies().map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return createPageMetadata({
      title: "Кейс не знайдено",
      description: "Цей кейс не існує або більше не опублікований.",
      path: `/work/${slug}`,
      index: false,
    });
  }

  return createPageMetadata({
    title: caseStudy.clientName ?? caseStudy.title,
    description: caseStudy.summary,
    path: `/work/${caseStudy.slug}`,
  });
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <PageWrapper>
      <CaseStudyDetailLayout caseStudy={caseStudy} />
    </PageWrapper>
  );
}
