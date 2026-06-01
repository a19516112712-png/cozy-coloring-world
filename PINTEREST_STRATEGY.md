# Pinterest Strategy

## Posting Schedule

10 Pins Per Day

Current Progress:

* Day01 Uploaded
* Day02 Uploaded
* Day03 Uploaded
* Day04 Uploaded
* Day05 Uploaded
* Day06 Uploaded
* Day07 Uploaded
* Day08 Uploaded
* Day09 Uploaded
* Day10 Uploaded
* Day11 Uploaded
* Day12 Uploaded
* Day13 Uploaded

## Boards

* Tiny Animal Worlds
* Cute Animal Coloring Pages
* Kawaii Coloring Pages
* Cottagecore Coloring
* Bakery Coloring Pages
* Bookstore Coloring Pages
* Garden Coloring Pages
* Tea Party Coloring Pages
* Cozy Coloring Pages
* Rainy Day Coloring Pages

## Rules

* Never reuse published images
* Never reuse published URLs
* Prefer newest coloring pages
* Use one pin per board per day
* Rotate boards evenly
* Use SEO-friendly titles
* Use keyword-rich descriptions
* Link directly to coloring page URL

## Image URL Generation (Day12+)

### Step 1: Write Images to Public Directory

Before generating any CSV, copy selected images to:

```
public/pinterest/dayXX/slug.jpg
```

Example:
```
public/pinterest/day12/example-page.jpg
```

### Step 2: Generate CSV with Accessible URLs

CSV Media URL field MUST use:

```
https://tinyanimalworlds.com/pinterest/dayXX/slug.jpg
```

Example:
```
https://tinyanimalworlds.com/pinterest/day12/example-page.jpg
```

### Step 3: Build and Deploy

Run npm run build — Next.js includes all files in public/ as static assets.

After deployment, the URL is directly accessible.

### Verification

Every Media URL in the CSV must correspond to a real file:

public/pinterest/dayXX/slug.jpg must exist on disk before CSV generation.

## Tracking Files

used_pins.json — Track all published Pinterest images.

## CSV Format

Required Columns: Title, Media URL, Pinterest board, Description, Link

## Current Status

Pins Generated: 110

Days Generated: Day01–Day11
