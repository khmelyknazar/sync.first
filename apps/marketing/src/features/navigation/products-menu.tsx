import Link from "next/link";

import { cn } from "@axioma/design-system/cn";

import { productNavItems, type ProductNavItem } from "@/config/navigation";

/**
 * Grid of product entries shared by the desktop mega-menu
 * (`NavigationMenuContent`) and the mobile drawer's expanded Products
 * section — same markup, two different containers, so the "available
 * vs comingSoon" rendering rule lives in exactly one place.
 */
export function ProductsMenu() {
  return (
    <div
      role="list"
      className="grid grid-cols-1 gap-1 sm:grid-cols-2"
      aria-label="Продукти Sync Industry"
    >
      {productNavItems.map((item) => (
        <ProductMenuItem key={item.title} item={item} />
      ))}
    </div>
  );
}

function ProductMenuItem({ item }: { item: ProductNavItem }) {
  const { title, description, href, icon: Icon, status } = item;
  const isAvailable = status === "available";

  const content = (
    <div
      className={cn(
        "flex items-start gap-3 rounded-[var(--radius-md)] p-3",
        "transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
        isAvailable
          ? "hover:bg-[var(--color-hover)] focus-visible:bg-[var(--color-hover)]"
          : "cursor-default opacity-60",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-md)]",
          isAvailable
            ? "bg-[var(--ultramarine-500)]/15 text-[var(--color-brand-primary)]"
            : "bg-[var(--graphite-700)] text-[var(--color-text-disabled)]",
        )}
      >
        <Icon className="size-5" strokeWidth={1.5} />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="flex items-center gap-2">
          <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
            {title}
          </span>
          {!isAvailable && (
            <span
              className={cn(
                "rounded-[var(--radius-sm)] bg-[var(--graphite-700)] px-1.5 py-0.5",
                "text-[11px] font-medium text-[var(--color-text-secondary)]",
              )}
            >
              Скоро
            </span>
          )}
        </span>
        <span className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
          {description}
        </span>
      </span>
    </div>
  );

  if (!isAvailable) {
    // Not a link: nothing to navigate to yet. Rendered as a
    // non-interactive list item with `aria-disabled` so screen
    // readers announce it as unavailable rather than silently
    // skipping it or announcing it as an actionable link.
    return (
      <div role="listitem" aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link href={href} role="listitem" className="block rounded-[var(--radius-md)]">
      {content}
    </Link>
  );
}
