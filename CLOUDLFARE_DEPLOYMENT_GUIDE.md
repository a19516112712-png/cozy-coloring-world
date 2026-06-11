# Cloudflare Pages Deployment Guide

## Prerequisites

- Cloudflare account with Pages enabled
- GitHub repo connected: `a19516112712-png/cozy-coloring-world`
- Domain: `tinyanimalworlds.com` (managed in Cloudflare DNS)

## Quick Deploy

### 1. Connect Repository

In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git

Select `a19516112712-png/cozy-coloring-world`.

### 2. Build Configuration

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js (Static Export) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Node.js version** | 20.x or 22.x |

### 3. Environment Variables

None required — all content is static.

### 4. Custom Domain

1. Cloudflare Pages → your project → Custom domains
2. Add `tinyanimalworlds.com`
3. Cloudflare DNS will auto-configure the CNAME

### 5. Deploy

Push to `main` branch — Cloudflare Pages auto-deploys on every push.

## Redirects

Legacy URL redirects are handled via `public/_redirects` (Cloudflare-native format):

```
/coloring-pages/:slug → /coloring/:slug  (308 Permanent)
/categories/:slug     → /category/:slug  (308 Permanent)
```

These are copied to `out/_redirects` during build.

## File Structure (out/)

```
out/
├── index.html                  # Homepage
├── about.html                  # About page
├── blog.html                   # Blog listing
├── blog/
│   ├── cozy-coloring-pages.html
│   └── ... (150+ blog posts)
├── categories.html             # Categories hub
├── category/
│   ├── cute-animals.html
│   └── ... (17 categories)
├── collections/
│   └── ... (collections)
├── coloring/
│   ├── cute-frog-fishing.html
│   └── ... (1,658 pages)
├── coloring-pages.html         # All pages listing
├── word-search.html            # Word search hub
├── word-search/
│   └── ... (1,201 puzzles)
├── faq/
│   └── ... (100 FAQs)
├── sitemap.xml                 # Auto-generated
├── robots.txt                  # Auto-generated
├── _redirects                  # Cloudflare redirect rules
└── _next/static/               # JS/CSS assets
```

## Post-Deployment Checklist

- [ ] Verify `https://tinyanimalworlds.com` loads
- [ ] Check `/sitemap.xml` returns valid XML
- [ ] Test legacy redirect: `/coloring-pages/any-slug` → `/coloring/any-slug`
- [ ] Test legacy redirect: `/categories/any-slug` → `/category/any-slug`
- [ ] Verify Google Search Console — submit new sitemap
- [ ] Check all images load (WebP, unoptimized)
- [ ] Verify no 404s on key pages

## Rollback

To revert to Vercel SSR deployment:
1. Remove `output: "export"` from `next.config.ts`
2. Remove `images: { unoptimized: true }`
3. Redeploy to Vercel

## Notes

- **No server required** — all pages are static HTML
- **Images** — already optimized WebP, no server-side optimization needed
- **Redirects** — handled by Cloudflare's edge network, zero latency
- **Build size** — ~131MB (mostly WebP images)
- **Page count** — ~3,100+ static HTML pages
