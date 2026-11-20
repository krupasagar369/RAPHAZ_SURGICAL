"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { ProductFilters, type AvailabilityFilter, type CategoryFilter } from "@/components/products/product-filters";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductModal } from "@/components/products/product-modal";
import { products } from "@/data/products";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

interface ProductCatalogProps {
  initialCategory?: CategoryFilter;
}

function matchesQuery(product: Product, query: string) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return true;
  const haystack = [product.name, product.shortDescription, ...product.keywords].join(" ").toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

export function ProductCatalog({ initialCategory = "all" }: ProductCatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>(initialCategory);
  const [availability, setAvailability] = useState<AvailabilityFilter>("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "all" || product.category === category) &&
          (availability === "all" || product.availability.includes(availability)) &&
          matchesQuery(product, query),
      ),
    [query, category, availability],
  );

  const reset = () => {
    setQuery("");
    setCategory("all");
    setAvailability("all");
  };

  return (
    <div className="space-y-8">
      <ProductFilters
        query={query}
        category={category}
        availability={availability}
        resultCount={filtered.length}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onAvailabilityChange={setAvailability}
        onReset={reset}
      />

      {filtered.length > 0 ? (
        <ProductGrid products={filtered} onViewDetails={setSelected} />
      ) : (
        <div className="rounded-3xl border border-dashed border-brand-charcoal/20 bg-brand-light px-6 py-14 text-center">
          <SearchX className="mx-auto size-10 text-brand-orange-deep" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold">No matching products found</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-brand-muted">
            Try a different search or clear the filters. If you are looking for something specific, message us and we
            will confirm availability.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="outline" onClick={reset}>
              Clear filters
            </Button>
            <ButtonLink href={whatsappUrl(generalEnquiryMessage)} variant="whatsapp">
              <WhatsAppIcon className="size-4" />
              Ask on WhatsApp
            </ButtonLink>
          </div>
        </div>
      )}

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
