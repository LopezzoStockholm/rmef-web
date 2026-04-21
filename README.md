# RM Entreprenad & Fasad — rmef.se

Best-in-class hemsida för RM Entreprenad & Fasad AB, byggd med Astro 5 + Tailwind 4.

## Stack

- **Astro 5** — SSG, best-in-class för SEO och Core Web Vitals
- **Tailwind 4** — design-system via CSS custom properties
- **Cloudflare Pages** — hosting (CDN, gratis, global edge)
- **Cloudflare Web Analytics** — cookieless, GDPR-vänlig
- **Google Tag Manager** — container för GA4, Meta Pixel, Google Ads

## Utveckling

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # förhandsgranska build
```

## Miljövariabler

Se `.env.example`. Skapas som Environment variables i Cloudflare Pages.

## SEO / GEO

- JSON-LD på varje sida (Organization, WebSite, Service, Project, FAQPage)
- `public/llms.txt` — AI-crawler-manifest
- `public/robots.txt` — whitelist för GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended
- `@astrojs/sitemap` — auto-genererar `sitemap-index.xml`
- Open Graph + Twitter Cards
- `prefetch` för interna länkar (Astro 5)
- `inlineStylesheets: "auto"` — kritisk CSS inline

## Deployment

Koppla repo i Cloudflare Pages → build command: `npm run build` → output: `dist` → framework: Astro.
