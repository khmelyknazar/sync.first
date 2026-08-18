import Image from "next/image";

import type { CaseStudyAsset } from "@/types/case-study";

const ASSET_TYPE_LABEL: Record<CaseStudyAsset["type"], string> = {
  architecture: "Архітектура",
  workflow: "Workflow",
  ui: "Інтерфейс",
  dataFlow: "Потік даних",
  screenshot: "Скріншот",
};

/**
 * Renders nothing when `assets` is empty/undefined — never a
 * placeholder graphic. The brief is explicit: no fake screenshots.
 * The first real asset is treated as primary (eager-loaded, likely
 * above the fold on the detail page); the rest lazy-load, since nice-
 * to-have supporting diagrams shouldn't cost first-paint budget.
 */
export function CaseStudyAssets({ assets }: { assets?: CaseStudyAsset[] }) {
  if (!assets || assets.length === 0) return null;

  return (
    <div className="flex flex-col gap-8">
      {assets.map((asset, index) => (
        <figure key={asset.src} className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
            <Image
              src={asset.src}
              alt={asset.alt}
              width={1200}
              height={675}
              className="h-auto w-full"
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
            />
          </div>
          <figcaption className="flex items-center gap-2 text-[12px] text-[var(--color-text-secondary)]">
            <span className="rounded-[var(--radius-sm)] bg-[var(--graphite-700)] px-1.5 py-0.5 font-medium">
              {ASSET_TYPE_LABEL[asset.type]}
            </span>
            {asset.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
