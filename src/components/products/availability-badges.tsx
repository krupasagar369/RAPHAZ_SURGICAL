import { cn } from "@/lib/utils";
import type { Availability } from "@/types/product";

const labels: Record<Availability, string> = {
  rent: "Rental enquiries",
  buy: "Purchase enquiries",
};

export function AvailabilityBadges({ availability, className }: { availability: Availability[]; className?: string }) {
  if (availability.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="Availability">
      {availability.map((item) => (
        <li
          key={item}
          className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-orange-deep ring-1 ring-brand-orange/25"
        >
          {labels[item]}
        </li>
      ))}
    </ul>
  );
}
