/**
 * find-orphan-images.js
 * 
 * Scans public/images/coloring/ and data/coloring-pages.ts to find
 * image files not referenced by any coloring page entry.
 * Outputs results to orphan-images.txt at project root.
 * 
 * Usage: node scripts/find-orphan-images.js
 */

const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, '..', 'public', 'images', 'coloring');
const DATA_FILE = path.join(__dirname, '..', 'data', 'coloring-pages.ts');
const OUTPUT_FILE = path.join(__dirname, '..', 'orphan-images.txt');

function main() {
  // 1. Get all image files
  const allImages = fs.readdirSync(IMG_DIR)
    .filter(f => /\.(jpg|jpeg|png|webp|svg)$/i.test(f))
    .sort();

  // 2. Extract all referenced image filenames from data file
  const dataContent = fs.readFileSync(DATA_FILE, 'utf-8');
  const imageUrlRegex = /imageUrl:\s*"\/images\/coloring\/([^"]+)"/g;
  const referenced = new Set();
  let match;
  while ((match = imageUrlRegex.exec(dataContent)) !== null) {
    referenced.add(match[1]);
  }

  // 3. Find orphans
  const orphans = allImages.filter(img => !referenced.has(img));

  // 4. Write output
  const stats = [
    `Orphan Images Report`,
    `Generated: ${new Date().toISOString()}`,
    ``,
    `Total images:     ${allImages.length}`,
    `Referenced:       ${referenced.size}`,
    `Orphan (unused):  ${orphans.length}`,
    ``,
    ...(orphans.length > 0 ? [`--- ORPHAN IMAGES ---`, ...orphans] : ['No orphan images found.']),
  ];

  fs.writeFileSync(OUTPUT_FILE, stats.join('\n') + '\n', 'utf-8');

  // Console summary
  console.log(`✅ Total images: ${allImages.length}`);
  console.log(`   Referenced:   ${referenced.size}`);
  console.log(`   Orphans:      ${orphans.length}`);
  console.log(`   Output:       ${OUTPUT_FILE}`);

  if (orphans.length > 0) {
    console.log(`\n⚠️  ${orphans.length} orphan image(s) found. See orphan-images.txt for details.`);
  }
}

main();
