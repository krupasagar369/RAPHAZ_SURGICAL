import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  onViewDetails?: (product: Product) => void;
}

export function ProductGrid({ products, onViewDetails }: ProductGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} onViewDetails={onViewDetails} />
        </li>
      ))}
    </ul>
  );
}
