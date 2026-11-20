import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { JsonLd } from "@/components/ui/json-ld";
import { business } from "@/lib/business-config";
import { localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Medical Equipment Rentals in Bengaluru | Raphaz Surgical & Medical Equipment Rentals",
    template: `%s | ${business.shortName} Surgical & Medical Equipment Rentals`,
  },
  description:
    "Medical equipment rentals in Bengaluru and RR Nagar: patient cots, wheelchairs, oxygen concentrators, BiPAP, CPAP, nebulizers, orthopedic supports and healthcare products.",
  applicationName: business.name,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#F47A20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-full bg-brand-charcoal px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
