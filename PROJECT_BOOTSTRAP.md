# PROJECT_BOOTSTRAP.md — New Conversation Bootstrap

> Read this when starting a fresh Codex conversation in this project.

## Step 1: Read Project Context (3 files)

```
PROJECT_RULES.md       — Workflow, templates, constraints
PROJECT_STATUS.md      — Current counts & latest actions
PINTEREST_STRATEGY.md  — Pinterest schedule, boards, Day progress
```

## Step 2: Check project-config.json

Machine-readable state with current counts and paths.

## Step 3: Determine Next Action

Based on PROJECT_STATUS.md, the next action is typically:

| If | Then |
|---|---|
| New images in `public/images/coloring/` (check `git status`) | Create coloring pages |
| Pages added but no recent Pinterest day | Generate next Pinterest day |
| 100+ new pages since last blog batch | Generate up to 3 blogs |
| Nothing pending | Report status, await instruction |

## Step 4: Follow PROJECT_RULES.md

All workflow rules are in PROJECT_RULES.md. Key constraints:

- **Incremental only** — process only new content
- **Use `used_pins.json`** for Pinterest dedup — never scan day dirs
- **Build once** after all changes
- **Commit after successful build**

## Do NOT Do

- ❌ Scan `data/coloring-pages.ts` in full
- ❌ Scan `app/` directory tree
- ❌ Scan `public/pinterest/day*/` directories
- ❌ Re-read all blog posts
- ❌ Verify existing page metadata
- ❌ Regenerate sitemap manually (it's dynamic)
