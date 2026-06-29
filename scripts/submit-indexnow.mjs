#!/usr/bin/env node

/**
 * IndexNow Bulk URL Submission — Tiny Animal Worlds
 * ==================================================
 * Reads the statically exported sitemap (out/sitemap.xml),
 * extracts all canonical <loc> URLs, batches them (max
 * 10,000 per request per IndexNow spec), and POSTs each
 * batch to the IndexNow API.
 *
 * DESIGN PRINCIPLES:
 *  – Zero external dependencies (Node 18+ native fetch).
 *  – Reads the *actual built artefact* (sitemap.xml), not
 *    source data, so it always matches what is deployed.
 *  – Strict fail‑safe: every network path is wrapped in
 *    try/catch.  Errors are logged but the process always
 *    exits 0 so it can NEVER break a CI/CD pipeline.
 *  – Respects IndexNow rate guidance (one POST per batch,
 *    sequential, with a modest inter‑batch delay).
 *
 * USAGE:
 *   node scripts/submit-indexnow.mjs
 *
 * POSTBUILD (package.json):
 *   "postbuild": "node scripts/submit-indexnow.mjs"
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ── Configuration ──────────────────────────────────────
const KEY         = "1958eaf875a989809075f5f5f346bcc5";
const HOST        = "www.tinyanimalworlds.com";
const KEY_LOCATION= `https://${HOST}/${KEY}.txt`;
const API_URL     = "https://api.indexnow.org/indexnow";
const BATCH_SIZE  = 10_000;            // IndexNow hard limit
const DELAY_MS    = 1_000;             // Polite delay between batches

const __filename  = fileURLToPath(import.meta.url);
const __dirname   = dirname(__filename);
const SITEMAP_PATH = resolve(__dirname, "..", "out", "sitemap.xml");

// ── Helpers ────────────────────────────────────────────

/** Extract all <loc> URLs from a sitemap XML string. */
function extractUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    urls.push(m[1].trim());
  }
  return urls;
}

/** Split an array into chunks of at most `size`. */
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/** Minimal sleep helper. */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Main ───────────────────────────────────────────────

async function main() {
  console.log("[IndexNow] Starting submission for", HOST);
  console.log("[IndexNow] Sitemap path:", SITEMAP_PATH);

  // 1. Read sitemap --------------------------------------------------
  let xml;
  try {
    if (!existsSync(SITEMAP_PATH)) {
      console.warn("[IndexNow] ⚠  sitemap.xml not found at", SITEMAP_PATH);
      console.warn("[IndexNow] Skipping (build may not have run yet).");
      process.exit(0);
    }
    xml = readFileSync(SITEMAP_PATH, "utf8");
  } catch (err) {
    console.error("[IndexNow] Failed to read sitemap:", err.message);
    process.exit(0);  // fail-safe
  }

  // 2. Parse URLs ----------------------------------------------------
  const allUrls = extractUrls(xml);
  console.log(`[IndexNow] Extracted ${allUrls.length} URLs from sitemap`);

  if (allUrls.length === 0) {
    console.warn("[IndexNow] ⚠  No URLs found in sitemap — nothing to submit.");
    process.exit(0);
  }

  // 3. Batch ---------------------------------------------------------
  const batches = chunk(allUrls, BATCH_SIZE);
  console.log(`[IndexNow] Split into ${batches.length} batch(es) ≤ ${BATCH_SIZE} URLs`);

  // 4. Submit batches ------------------------------------------------
  let submitted = 0;
  let failed    = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch    = batches[i];
    const batchNum = i + 1;

    const payload = {
      host:        HOST,
      key:         KEY,
      keyLocation: KEY_LOCATION,
      urlList:     batch,
    };

    console.log(`[IndexNow] Batch ${batchNum}/${batches.length} (${batch.length} URLs) → POST ${API_URL}?key=${KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`);

    try {
      const controller = new AbortController();
      const timeout    = setTimeout(() => controller.abort(), 30_000); // 30 s

      const res = await fetch(
        `${API_URL}?key=${KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body:    JSON.stringify(payload),
          signal:  controller.signal,
        },
      );

      clearTimeout(timeout);

      if (res.ok) {
        submitted += batch.length;
        console.log(`[IndexNow]   ✓  Batch ${batchNum} accepted (HTTP ${res.status})`);
      } else {
        failed += batch.length;
        const body = await res.text().catch(() => "(no body)");
        console.warn(`[IndexNow]   ✗  Batch ${batchNum} rejected (HTTP ${res.status}): ${body.slice(0, 200)}`);
      }
    } catch (err) {
      failed += batch.length;
      const msg = err.cause?.code || err.message || String(err);
      console.warn(`[IndexNow]   ✗  Batch ${batchNum} network/error: ${msg}`);
      // Continue to next batch — never abort the pipeline
    }

    // Polite delay between batches (skip after last)
    if (i < batches.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  // 5. Report --------------------------------------------------------
  console.log("─".repeat(50));
  console.log(`[IndexNow] Done.  Submitted: ${submitted}  Failed: ${failed}  Total: ${allUrls.length}`);
  if (failed > 0) {
    console.warn(`[IndexNow] ⚠  ${failed} URL(s) could not be submitted this run.`);
    console.warn("[IndexNow] This is non-fatal — IndexNow will retry on next build.");
  }

  // Always exit 0 — NEVER break the pipeline
  process.exit(0);
}

main();
