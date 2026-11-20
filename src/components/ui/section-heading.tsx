import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
  as: Tag = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-orange-deep uppercase">{eyebrow}</p>
      ) : null}
      <Tag id={id} className="text-3xl leading-tight font-extrabold text-brand-charcoal sm:text-4xl">{title}</Tag>
      {description ? <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
