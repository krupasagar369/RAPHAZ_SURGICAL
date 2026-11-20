import Image from "next/image";
import { business } from "@/lib/business-config";
import { cn } from "@/lib/utils";

export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={business.logo.src}
      alt={business.logo.alt}
      width={business.logo.width}
      height={business.logo.height}
      priority={priority}
      unoptimized
      className={cn("h-10 w-auto sm:h-11", className)}
    />
  );
}
