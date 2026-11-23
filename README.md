# Akvera Universal

Premium dry-fruit export and international trading website, updated from the existing [Akvera-Universal repository](https://github.com/TridevSharma1/Akvera-Universal).

## Existing application stack

The supplied repository uses React 19, TanStack Start file-based routing, Vite and Tailwind CSS v4. The framework, dependency versions, shared UI components and mock admin approach are retained. This is not a new SPA template.

## Development and verification

```sh
bun install
bun run dev
bun run test
bun run build
```

## Pages

- `/` — Home
- `/about` — Company story
- `/products` and `/products/:slug` — Ten dry-fruit varieties and product details
- `/gallery` — Eight distinct illustrative photos with filters and lightbox
- `/contact` — Company contact details and demo enquiry form
- `/quality#quality-assurance`, `/quality#industries`, `/quality#export-process` — Three sections on one Quality page
- `/industries` and `/export-process` redirect to their respective Quality sections
- Existing insights, FAQs, countries, legal and admin URLs remain available

## Demo admin and enquiries

The original application has **no authentication provider, database or email submission service**. `/admin/login` remains an explicitly labelled demonstration, not a protected production login. Catalogue edits and submitted contact/quote enquiries are shared with the admin through the existing React demo provider for the current session only. Refreshing clears changes. No emails are sent and no delivery claim is made. No new backend was added.

## Photography

Exactly 25 distinct generated WebP photos are committed under `public/images/`: two hero images, ten products, eight gallery images, two About images and three quality/export images. All displayed photos use root-relative `/images/*.webp` paths, without cross-project asset hosts or temporary URLs. Gallery and operational imagery is illustrative, not evidence of company-owned facilities or certifications. Below-fold photos are lazy-loaded.

## Vercel deployment

Import the existing repository into Vercel and use the existing build command (`bun run build` or `npm run build`). The existing Vite/TanStack configuration uses Nitro, which detects the Vercel environment; do not configure this application as a static `dist`-only SPA or add a catch-all HTML rewrite. Keep the existing package versions pinned. `public/images` is included in the deployment as static content.

Before production sign-off, verify the actual Vercel deployment URL: open all six primary pages and a product detail directly, confirm both legacy Quality redirects and request all 25 `/images/*.webp` URLs. Local preview checks do not substitute for testing the deployed URL. The automated checks in `src/test/local-images.test.ts` verify the exact photo counts, file format and unique bytes.
