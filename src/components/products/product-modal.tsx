"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { ProductVisual } from "@/components/ui/product-visual";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AvailabilityBadges } from "@/components/products/availability-badges";
import { categories } from "@/data/products";
import { productEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

/** Accessible detail panel built on the native <dialog> element (focus trap and Esc handled by the browser). */
export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [lastProductId, setLastProductId] = useState<string | null>(null);

  // Reset the gallery when a different product is opened (state adjusted during render).
  const currentId = product?.id ?? null;
  if (currentId !== lastProductId) {
    setLastProductId(currentId);
    setActiveImage(0);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  const categoryLabel = product ? categories.find((category) => category.id === product.category)?.label : undefined;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      aria-labelledby="product-modal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-3xl bg-white p-0 text-brand-charcoal shadow-2xl backdrop:bg-brand-charcoal/60"
    >
      {product ? (
        <div className="max-h-[85vh] overflow-y-auto">
          <div className="relative">
            <ProductVisual
              icon={product.icon}
              image={product.images[activeImage]}
              className="aspect-16/9 w-full"
              sizes="(min-width: 768px) 672px, 100vw"
            />
            <Button
              variant="light"
              size="sm"
              className="absolute top-3 right-3 size-10 p-0"
              onClick={onClose}
              aria-label="Close product details"
            >
              <X className="size-5" aria-hidden="true" />
            </Button>
          </div>

          {product.images.length > 1 ? (
            <ul className="flex gap-2 overflow-x-auto px-6 pt-4" aria-label="Product images">
              {product.images.map((image, index) => (
                <li key={image.src}>
                  <button
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-current={index === activeImage}
                    className="relative block size-16 overflow-hidden rounded-xl ring-2 ring-transparent aria-[current=true]:ring-brand-orange-deep"
                  >
                    <Image src={image.src} alt="" fill sizes="64px" className="object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="p-6">
            {categoryLabel ? (
              <p className="text-xs font-semibold tracking-wide text-brand-orange-deep uppercase">{categoryLabel}</p>
            ) : null}
            <h2 id="product-modal-title" className="mt-1 text-2xl font-extrabold">
              {product.name}
            </h2>
            <AvailabilityBadges availability={product.availability} className="mt-3" />
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{product.details}</p>
            {product.indicativePrice ? (
              <p className="mt-4 rounded-2xl bg-brand-light px-4 py-3 text-sm text-brand-charcoal">
                <span className="font-semibold">Indicative price range:</span> {product.indicativePrice}
              </p>
            ) : (
              <p className="mt-4 text-sm text-brand-muted">
                Pricing and availability are confirmed on enquiry.
              </p>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappUrl(productEnquiryMessage(product.name))} variant="primary" size="lg">
                <WhatsAppIcon className="size-5" />
                Enquire on WhatsApp
              </ButtonLink>
              <ButtonLink
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                variant="outline"
                size="lg"
              >
                Send Enquiry Form
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
