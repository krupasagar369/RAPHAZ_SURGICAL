"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { business, navLinks } from "@/lib/business-config";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  id: string;
  open: boolean;
  pathname: string;
  onClose: () => void;
}

export function MobileNavigation({ id, open, pathname, onClose }: MobileNavigationProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div id={id} hidden={!open} className="border-t border-brand-charcoal/10 bg-white lg:hidden">
      <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-semibold transition",
                    active
                      ? "bg-brand-light text-brand-orange-deep"
                      : "text-brand-charcoal hover:bg-brand-light",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <ButtonLink href={`tel:${business.phone.tel}`} size="lg" onClick={onClose}>
            <Phone className="size-5" aria-hidden="true" />
            Call Now
          </ButtonLink>
          <ButtonLink href={whatsappUrl(generalEnquiryMessage)} variant="whatsapp" size="lg" onClick={onClose}>
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
}
