import { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/scroll-stagger";
import { products } from "@/config/products";
import { FeaturedSolution } from "@/features/solutions/featured-solution";
import { SolutionCard } from "@/features/solutions/solution-card";

/**
 * Not five identical cards. CRM renders through `FeaturedSolution` in
 * its own dominant column; the four comingSoon products fill a 2x2
 * grid beside it — visually "surrounding" the featured product
 * without a literal connector diagram. Hero already owns the
 * canonical CRM→ERP→Internal Systems→Integrations system
 * visualization (Build Phase Stage 3); repeating that diagram here
 * would be redundant, not reinforcing — this composition communicates
 * "one ecosystem, one dominant entry point" through layout and shared
 * visual language instead.
 */
export function SolutionsGrid() {
  const featured = products.find((product) => product.status === "available");
  const comingSoon = products.filter((product) => product.status !== "available");

  if (!featured) return null;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
      <FeaturedSolution product={featured} />
      <ScrollStaggerContainer
        staggerMs={90}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
      >
        {comingSoon.map((product) => (
          <ScrollStaggerItem key={product.slug}>
            <SolutionCard product={product} />
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerContainer>
    </div>
  );
}
