import { Info } from "lucide-react";
import { ButtonLink, Button } from "@/components/ui/button";
import { ProductVisual } from "@/components/ui/product-visual";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AvailabilityBadges } from "@/components/products/availability-badges";
import { productEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  /** When provided, a "View Details" button opens the product detail panel. */
  onViewDetails?: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-charcoal/8 bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <ProductVisual icon={product.icon} image={product.images[0]} className="aspect-4/3 w-full" />
      <div className="flex flex-1 flex-col p-5">
        <AvailabilityBadges availability={product.availability} className="mb-3" />
        <h3 className="text-lg leading-snug font-bold text-brand-charcoal">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{product.shortDescription}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <ButtonLink
            href={whatsappUrl(productEnquiryMessage(product.name))}
            variant="primary"
            size="sm"
            className="flex-1"
          >
            <WhatsAppIcon className="size-4" />
            Enquire Now
          </ButtonLink>
          {onViewDetails ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(product)}
              aria-label={`View details for ${product.name}`}
            >
              <Info className="size-4" aria-hidden="true" />
              Details
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
