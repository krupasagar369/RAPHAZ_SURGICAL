import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="h-full rounded-3xl border border-brand-charcoal/8 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-light text-brand-orange-deep ring-1 ring-brand-orange/20">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-brand-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
    </div>
  );
}
