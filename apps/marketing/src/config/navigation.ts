import { products } from "@/config/products";
import type { Product, ProductStatus } from "@/types/product";

/**
 * Single source of truth for the navigation layer. No component below
 * hardcodes a label, href, or product list inline — every render maps
 * over these exports, so adding a new primary link or promoting a
 * Latent product to Available (Product Architecture v2 §4) is a
 * one-line change here, never a JSX edit across three components.
 *
 * `productNavItems`/`ProductNavItem` are a re-export of `@/config/products`
 * (Solutions section's data source, Build Phase Stage 6) — kept under
 * their original name so the mega-menu and Hero's system visualization,
 * written before that consolidation, need no changes. There is only
 * one product array in the codebase; this is not a second copy.
 */
export type { ProductStatus };
export type ProductNavItem = Product;

export interface PrimaryNavLink {
  label: string;
  href: string;
}

export const productNavItems: ProductNavItem[] = products;

/**
 * Only real, built routes. `Тарифи` (`/pricing`), `Компанія`
 * (`/company/about`), and `Блог` (`/blog`) are intentionally absent —
 * those pages don't exist yet, and per the dead-link cleanup pass, no
 * active navigation item may point at a route that isn't real. Add a
 * link back here the same day its page ships, not before.
 */
export const primaryNavLinks: PrimaryNavLink[] = [{ label: "Кейси", href: "/work" }];

export const navigationCta: PrimaryNavLink = {
  label: "Обговорити систему",
  href: "/contact",
};

/**
 * Secondary CTA — added in the Redesign pass to fix a standing copy
 * drift: Hero previously said "Дивитись рішення", Process said
 * "Подивитись рішення" — two hand-typed variants of the same intent.
 * Both now import this one object.
 */
export const secondaryCta: PrimaryNavLink = {
  label: "Подивитися продукт",
  href: "/product",
};
