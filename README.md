# Easy Brands

Hobart-based design studio website. Built with Next.js 16 (App Router), Tailwind CSS v4, and deployed to Cloudflare Pages.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Fonts:** Zalando Sans Expanded (headings), Manrope (body)
- **Forms:** Web3Forms
- **Analytics:** Google Analytics 4 (G-5OSY2M99EO)
- **Deployment:** Cloudflare Pages — `main` branch → Production

## Local Development

```bash
npm run dev       # dev server at localhost:3000
npm run stage     # production build + restart staging service
npm run build     # production build only
```

## Deployment

Push to `main` to trigger a Cloudflare Pages production deployment:

```bash
git add .
git commit -m "your message"
git push origin main
```

## Project Structure

```
app/
  (main pages)        — About, Brand, Contact, Print, Projects, Website
  hobart/             — Standalone landing page (/hobart)
  layout.tsx          — Root layout with GA4, fonts, ConditionalLayout
  globals.css         — Global styles, CSS variables, colour palette

components/
  Page-*.tsx          — Full page components
  Section-*.tsx       — Reusable section components (Header, Footer, etc.)
  ConditionalLayout   — Hides global header/footer on landing pages
  ui/                 — Shared UI primitives (H1, H2, H3, Button, BleedImage)

public/
  Logo.svg            — Primary logo
  projects/           — Project photography organised by client
```

## Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `eb-800` | #2D1008 | Dark backgrounds, primary buttons |
| `eb-600` | #8B2E12 | Heading colour |
| `eb-500` | #E83D0F | Accent / brand orange |
| `eb-50`  | #FCF0EA | Light section backgrounds, header |

## Key Pages

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | `Page-Home` | Hero, services, projects grid |
| `/about` | `Page-About` | Studio info |
| `/contact` | `Page-Contact` | Web3Forms contact form |
| `/projects` | `Page-Projects` | Filterable project grid with tag filters |
| `/hobart` | `Page-Hobart` | Standalone landing page — $1,500 website + photos deal |

## /hobart Landing Page

Standalone marketing page targeting Hobart businesses. Has its own header/footer — no global nav shown. Sections (in order):

1. Hero — headline + BleedImage (SVC001.webp)
2. Why — two-column with body copy + SVG checklist
3. Pricing — single card, $1,500, includes list
4. Projects — full-width auto-scrolling carousel, two rows opposite directions
5. About — dark section with three cards (Locally Based, Fast Turnaround, You Own Everything)
6. Contact form — Name*, Email*, Phone*, Description* (all required)
7. FAQ — BleedImage left (ABT001.webp) + accordion right
8. Contact CTA banner
9. Footer

Email subject: `[Hobart $1,500 Deal] New enquiry from {name}`

## Environment Variables

```
NEXT_PUBLIC_WEB3FORMS_KEY=   # Web3Forms access key for contact forms
```
