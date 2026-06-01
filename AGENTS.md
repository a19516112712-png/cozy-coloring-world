# AGENTS.md — Cozy Coloring World

> Entry point for Codex agents. Read this first.

## Project

Large-scale SEO coloring page website. Next.js + TypeScript + Tailwind CSS + Static Generation.

- **Domain**: `https://tinyanimalworlds.com`
- **Repo**: `a19516112712-png/cozy-coloring-world`
- **Monetization**: Google AdSense + Amazon Associates

## Quick Start

Read only these files to understand the project:

1. `PROJECT_STATUS.md` — Current stats (pages, blogs, pins, build)
2. `PROJECT_RULES.md` — Full workflow rules
3. `PINTEREST_STRATEGY.md` — Pinterest schedule & boards
4. `project-config.json` — Machine-readable state

**Do NOT scan**: `data/`, `app/`, `public/`, `components/` unless explicitly required.

## Critical Rules

- **Incremental only** — Never rescan/reprocess existing content
- **Assume valid** — Existing pages, blogs, pins are already correct
- **Minimal tokens** — Direct edits, targeted updates, concise output
- **Build once** — Only build after all changes, before commit
- **Git after build** — `git add . && git commit && git push`

## Key Files

| File | Purpose |
|---|---|
| `data/coloring-pages.ts` | All coloring page entries |
| `data/categories.ts` | Category definitions & counts |
| `data/blogPosts.ts` | Blog post entries |
| `data/pinterest-schedule/used_pins.json` | Published pin URLs |
| `pinterest-final.csv` | All Pinterest pins |
| `app/sitemap.ts` | Dynamic sitemap (auto from data) |
| `public/pinterest/` | Pinterest images (by slug) |

## Common Tasks

### New coloring pages
1. Copy images to `public/pinterest/` and `public/images/coloring/`
2. Append entries to `data/coloring-pages.ts`
3. Update `data/categories.ts` counts (+N for matching categories)
4. Build → commit → push → update `PROJECT_STATUS.md`

### New Pinterest day
1. Check `used_pins.json` for dedup
2. Pick 10 unused images (one per board, newest first)
3. Copy to `public/pinterest/dayXX/`
4. Generate CSV → update `used_pins.json` → append `pinterest-final.csv`
5. Build → commit → push → update status files

### New blogs (max 3 at a time)
1. Append to `data/blogPosts.ts`
2. Build → commit → push → update `PROJECT_STATUS.md`
