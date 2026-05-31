# PROJECT_RULES.md

## PROJECT OVERVIEW

This project is a large-scale SEO coloring page website built with:

* Next.js
* TypeScript
* Tailwind CSS
* Static Generation
* Pinterest SEO
* Google SEO
* Amazon Affiliate

Current scale:

* 300+ coloring pages
* 30+ blog posts
* Pinterest automation
* Dynamic sitemap
* Category pages
* Related content system

Primary goal:

Generate traffic from:

* Google Search
* Pinterest
* Image Search

Monetization:

* Google AdSense
* Amazon Associates

---

# CRITICAL PERFORMANCE RULES

NEVER scan the entire project unless explicitly requested.

NEVER reprocess all coloring pages.

NEVER regenerate all blog posts.

NEVER rebuild all Pinterest records.

ONLY process newly added content.

Assume existing content is already valid.

Always perform incremental updates.

---

# COLORING PAGE WORKFLOW

When new images are added:

ONLY:

1. Generate slug
2. Generate metadata
3. Create coloring page
4. Update sitemap
5. Update category page
6. Update latest pages section
7. Generate related pages

DO NOT:

* Scan all existing pages
* Rewrite existing pages
* Recalculate all categories
* Rebuild all metadata

---

# PAGE TEMPLATE

For every coloring page generate:

* slug
* title
* meta description
* h1
* alt text
* canonical url

SEO title length:

50-65 characters

Meta description:

120-160 characters

Alt text:

Descriptive and unique

Canonical:

Must point to page URL

---

# RELATED PAGES

Each coloring page should show:

6 related coloring pages

Selection priority:

1. Same category
2. Similar keywords
3. Similar animals
4. Similar theme

Do not scan entire website.

Use category-level matching only.

---

# PINTEREST RULES

Generate Pinterest data ONLY for new pages.

Fields:

* title
* description
* link
* board
* alt_text

Append to:

pinterest-final.csv

Never recreate the entire CSV.

Never regenerate old pins.

Only append new rows.

---

# BOARD ASSIGNMENT

Use existing boards.

Examples:

* Kawaii Coloring Pages
* Tiny Animal Worlds
* Cottagecore Coloring
* Bakery Coloring Pages
* Bookstore Coloring Pages
* Garden Coloring Pages
* Cozy Coloring Pages
* Tea Party Coloring Pages
* Fantasy Coloring Pages
* Rainy Day Coloring Pages

Assign the best matching board.

Do not create duplicate boards.

---

# BLOG RULES

Blog generation is expensive.

NEVER generate more than 3 blog posts at one time.

If more are needed:

Generate in batches.

Use reusable templates.

Do not scan all coloring pages.

Only use:

* newest pages
* newest categories
* newest keywords

Blog length:

1000-1500 words

Structure:

* H1
* Introduction
* Multiple H2 sections
* FAQ
* Conclusion

Generate SEO title and meta description.

Add internal links.

Add related coloring pages.

---

# CATEGORY RULES

When new pages are added:

Update ONLY affected categories.

Do not rebuild all category pages.

Do not scan all categories.

Only append new entries.

---

# HOMEPAGE RULES

When new coloring pages are added:

Update:

Latest Coloring Pages

Only insert newest pages.

Do not reorder entire homepage.

Do not rebuild historical sections.

---

# SITEMAP RULES

Append new URLs only.

Do not regenerate all sitemap entries.

Keep sitemap generation incremental.

Always include:

* coloring pages
* blog posts
* categories
* legal pages

---

# SEO RULES

Every page must include:

* title
* description
* canonical
* Open Graph
* Twitter Card

Maintain:

* internal linking
* breadcrumbs
* sitemap coverage

Avoid duplicate metadata.

---

# BUILD RULES

After modifications:

Run:

npm run build

Only build once after all changes.

Do not repeatedly build during processing.

Fix build errors before continuing.

---

# GIT RULES

After successful build:

git add .

git commit -m "content update"

git push

Only push after build succeeds.

---

# TOKEN SAVING RULES

Always minimize token usage.

Prefer:

* direct file edits
* targeted updates
* incremental processing

Avoid:

* project-wide scans
* printing large files
* repeating existing content
* regenerating unchanged data

When reporting results:

Provide summary only.

Do not output entire datasets.

Use concise reporting.

---

# OUTPUT FORMAT

After task completion output only:

* New pages created
* New blog posts created
* New Pinterest pins created
* Updated categories
* Updated sitemap
* Build status
* Push status

Keep reports short and concise.

---

# DEFAULT ASSUMPTION

Unless explicitly requested:

Assume all existing pages, blogs, Pinterest records, metadata, sitemap entries, and categories are already correct.

Only process newly added content.
