"use client";

import { Search, X } from "lucide-react";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";
import type { Availability, ProductCategory } from "@/types/product";

export type CategoryFilter = ProductCategory | "all";
export type AvailabilityFilter = Availability | "all";

interface ProductFiltersProps {
  query: string;
  category: CategoryFilter;
  availability: AvailabilityFilter;
  resultCount: number;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: CategoryFilter) => void;
  onAvailabilityChange: (value: AvailabilityFilter) => void;
  onReset: () => void;
}

const availabilityOptions: { value: AvailabilityFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "rent", label: "Rental" },
  { value: "buy", label: "Purchase" },
];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition",
        active
          ? "border-brand-orange-deep bg-brand-orange-deep text-white"
          : "border-brand-charcoal/15 bg-white text-brand-charcoal hover:border-brand-orange-deep hover:text-brand-orange-deep",
      )}
    >
      {children}
    </button>
  );
}

export function ProductFilters({
  query,
  category,
  availability,
  resultCount,
  onQueryChange,
  onCategoryChange,
  onAvailabilityChange,
  onReset,
}: ProductFiltersProps) {
  const hasFilters = query !== "" || category !== "all" || availability !== "all";

  return (
    <div className="space-y-5 rounded-3xl border border-brand-charcoal/8 bg-white p-5 shadow-soft sm:p-6">
      <div className="relative">
        <label htmlFor="product-search" className="sr-only">
          Search products
        </label>
        <Search
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-brand-muted"
          aria-hidden="true"
        />
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search wheelchair, oxygen, knee support..."
          className="h-12 w-full rounded-full border border-brand-charcoal/15 bg-white pr-4 pl-12 text-base text-brand-charcoal placeholder:text-brand-muted focus:border-brand-orange-deep"
        />
      </div>

      <div className="space-y-4">
        <div role="group" aria-label="Filter by category">
          <p className="mb-2 text-xs font-semibold tracking-wide text-brand-muted uppercase">Category</p>
          <div className="flex flex-wrap gap-2">
            <Chip active={category === "all"} onClick={() => onCategoryChange("all")}>
              All Products
            </Chip>
            {categories.map((item) => (
              <Chip key={item.id} active={category === item.id} onClick={() => onCategoryChange(item.id)}>
                {item.label}
              </Chip>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Filter by rental or purchase">
          <p className="mb-2 text-xs font-semibold tracking-wide text-brand-muted uppercase">Rental / Purchase</p>
          <div className="flex flex-wrap gap-2">
            {availabilityOptions.map((option) => (
              <Chip
                key={option.value}
                active={availability === option.value}
                onClick={() => onAvailabilityChange(option.value)}
              >
                {option.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-charcoal/8 pt-4">
        <p className="text-sm text-brand-muted" role="status" aria-live="polite">
          Showing <span className="font-semibold text-brand-charcoal">{resultCount}</span>{" "}
          {resultCount === 1 ? "product" : "products"}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-brand-orange-deep transition hover:bg-brand-light"
          >
            <X className="size-4" aria-hidden="true" />
            Clear filters
          </button>
        ) : null}
      </div>
    </div>
  );
}
