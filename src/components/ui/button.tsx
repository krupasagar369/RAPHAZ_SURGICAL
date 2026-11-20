import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition duration-200 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-to-r from-brand-orange-deep to-brand-red-deep text-white shadow-soft hover:shadow-lift hover:brightness-110",
        secondary: "bg-brand-charcoal text-white hover:bg-black",
        outline:
          "border border-brand-charcoal/20 bg-white text-brand-charcoal hover:border-brand-orange-deep hover:text-brand-orange-deep",
        whatsapp: "bg-[#0e7a3f] text-white shadow-soft hover:bg-[#0b6633]",
        light: "bg-white text-brand-charcoal shadow-soft hover:bg-brand-light",
        ghost: "text-brand-charcoal hover:bg-brand-light",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonVariants;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & ButtonVariants & { href: string };

/** Link styled as a button. Internal paths use next/link; http(s) links open in a new tab. */
export function ButtonLink({ href, variant, size, className, children, ...props }: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
