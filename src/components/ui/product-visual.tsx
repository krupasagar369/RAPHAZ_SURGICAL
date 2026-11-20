import Image from "next/image";
import {
  Accessibility,
  BedDouble,
  BedSingle,
  Bone,
  CloudFog,
  Droplets,
  Footprints,
  Gauge,
  Layers,
  Package,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { IconKey, ProductImage } from "@/types/product";

export const iconMap: Record<IconKey, LucideIcon> = {
  "bed-single": BedSingle,
  "bed-double": BedDouble,
  wheelchair: Accessibility,
  wind: Wind,
  gauge: Gauge,
  droplets: Droplets,
  "cloud-fog": CloudFog,
  bone: Bone,
  footprints: Footprints,
  package: Package,
  layers: Layers,
};

interface ProductVisualProps {
  icon: IconKey;
  image?: ProductImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** Shows the product photo when one exists, otherwise a branded icon tile. */
export function ProductVisual({ icon, image, className, priority, sizes }: ProductVisualProps) {
  const Icon = iconMap[icon];

  if (image) {
    return (
      <div className={cn("relative overflow-hidden bg-brand-light", className)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-linear-to-br from-brand-light via-white to-brand-yellow/15",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute -top-10 -right-10 size-32 rounded-full bg-brand-orange/10 blur-2xl" />
      <div className="relative flex size-20 items-center justify-center rounded-3xl bg-white text-brand-orange-deep shadow-soft ring-1 ring-brand-orange/15">
        <Icon className="size-10" strokeWidth={1.6} />
      </div>
    </div>
  );
}
