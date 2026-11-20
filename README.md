# Raphaz Surgical & Medical Equipment Rentals - Website

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, CVA, Motion, React Hook Form + Zod.

## Run

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Things to update before going live

1. **Logo** - replace `public/logo/logo.svg` with the original company logo (SVG or PNG).
   If you use a PNG, update `business.logo.src`, `width` and `height` in `src/lib/business-config.ts`.
   The bundled SVG is only a stand-in using the brand colours.
2. **Product photos** - add images to `public/images/products/` and reference them in
   `src/data/products.ts` (`images: [{ src: "/images/products/wheelchair.jpg", alt: "Wheelchair" }]`).
   Products without photos show a branded icon tile. Add the hero photo in `src/components/home/hero-section.tsx`.
3. **Domain** - set `NEXT_PUBLIC_SITE_URL` to the live domain (canonical URLs, sitemap, Open Graph).
4. **Phone number** - WhatsApp is set to +91 96110 51111 (`NEXT_PUBLIC_WHATSAPP_NUMBER`). Click-to-call uses the same
   number until you set a separate `NEXT_PUBLIC_PHONE_NUMBER`.
5. **Availability labels** - in `src/data/products.ts`, `availability` is shown only for items listed there as
   rent/buy. Edit it to match what the shop actually confirms.

## Where things live

- `src/lib/business-config.ts` - name, address, phone, WhatsApp, map links, navigation
- `src/lib/whatsapp.ts` - product / general / rental / contact-form WhatsApp messages
- `src/data/products.ts` - the product catalogue
- `src/components/products/` - catalogue UI (search, filters, detail panel)
- `src/components/contact/contact-form.tsx` - Zod-validated form; submits via WhatsApp.
  To use email/CRM instead, replace `onSubmit` with a POST to your own API route.
