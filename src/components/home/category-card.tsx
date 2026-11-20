import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductVisual } from "@/components/ui/product-visual";
import type { HomeCategory } from "@/types/product";

export function CategoryCard({ category }: { category: HomeCategory }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-charcoal/8 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <ProductVisual icon={category.icon} className="aspect-16/10 w-full" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-brand-charcoal">{category.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{category.description}</p>
        <Link
          href={`/products?category=${category.category}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange-deep"
        >
          Explore Products
          <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
          <span className="sr-only"> in {category.title}</span>
        </Link>
      </div>
    </article>
  );
}
