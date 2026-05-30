const fs = require('fs');

// Read existing data
let dataContent = fs.readFileSync('data/coloring-pages.ts', 'utf8');

// Count existing entries
const existingCount = (dataContent.match(/slug:/g) || []).length;
console.log('Existing entries:', existingCount);

// Get used images
const usedMatches = dataContent.match(/imageUrl: "\/images\/coloring\/([^"]+)"/g);
const usedImages = new Set();
if (usedMatches) usedMatches.forEach(m => { usedImages.add(m.match(/\/images\/coloring\/([^"]+)"/)[1]); });
console.log('Used images:', usedImages.size);

// Get all JPGs
const allJpgs = fs.readdirSync('public/images/coloring').filter(f => f.endsWith('.jpg'));
const unused = allJpgs.filter(f => !usedImages.has(f));
console.log('Unused images:', unused.length);

function filenameToTitle(filename) {
  let name = filename.replace(/\.jpg$/i, '');
  name = name.replace(/^\d+_/, '');
  name = name.replace(/^(fantasy_|cottagecore_|cozy_|cute_|tiny_)/, '');
  name = name.replace(/__+/g, ' ');
  name = name.replace(/_+/g, ' ');
  name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  return name.trim() + ' Coloring Page';
}

function toSlug(title) {
  return title.toLowerCase()
    .replace(/ coloring page$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/-+/g, '-')
    .substring(0, 80);
}

function detectCategory(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes('fantasy') || lower.includes('dragon') || lower.includes('unicorn') || lower.includes('wizard'))
    return 'fantasy-coloring';
  if (lower.includes('cottagecore') || lower.includes('cottage'))
    return 'cottagecore-coloring';
  if (/^\d+_cozy_/.test(lower))
    return 'cozy-coloring';
  if (/^\d+_tiny_/.test(lower))
    return 'tiny-animal-worlds';
  if (lower.includes('christmas') || lower.includes('halloween') || lower.includes('easter') || lower.includes('valentine'))
    return 'seasonal-coloring';
  if (lower.includes('snowy') || lower.includes('winter') || lower.includes('hot_cocoa'))
    return 'seasonal-coloring';
  if (lower.includes('summer') || lower.includes('spring'))
    return 'seasonal-coloring';
  if (lower.includes('autumn'))
    return 'seasonal-coloring';
  if (lower.includes('bakery') || lower.includes('baking') || lower.includes('cookie') || lower.includes('cupcake'))
    return 'bakery-coloring';
  if (lower.includes('tea_party') || lower.includes('tea_room') || lower.includes('hot_chocolate'))
    return 'tea-party-coloring';
  if (lower.includes('garden') || lower.includes('flower') || lower.includes('herb') || lower.includes('greenhouse'))
    return 'garden-coloring';
  if (lower.includes('bookstore') || lower.includes('book') || lower.includes('library') || lower.includes('reading'))
    return 'bookstore-coloring';
  if (lower.includes('coffee') || lower.includes('cafe'))
    return 'coffee-shop-coloring';
  if (lower.includes('rain') && (lower.includes('window') || lower.includes('boots') || lower.includes('cabin')))
    return 'rainy-day-coloring';
  if (lower.includes('village') || lower.includes('market'))
    return 'tiny-animal-worlds';
  return 'cute-animals';
}

function generateDescription(title, cat) {
  const base = title.replace(/ Coloring Page$/i, '').trim();
  return `Download this free printable ${base.toLowerCase()} coloring page! Perfect for kids and adults who love cute, cozy coloring scenes. High-quality JPG download.`;
}

function generateLongDesc(title, cat) {
  const base = title.replace(/ Coloring Page$/i, '').trim();
  return `Dive into the adorable world of ${base.toLowerCase()} with this free printable coloring page! This high-quality JPG design is perfect for coloring enthusiasts of all ages. Whether you're a kid who loves cute animals and magical scenes, or an adult looking for a relaxing and cozy coloring session, this page has something special for everyone. Simply download, print, and start coloring! Grab your favorite pencils or markers and bring this charming scene to life.`;
}

function generateTags(filename) {
  const lower = filename.toLowerCase();
  const name = lower.replace(/\.jpg$/, '').replace(/^\d+_/, '').replace(/^(fantasy_|cottagecore_|cozy_|cute_|tiny_)/, '');
  const words = name.replace(/__+/g, ' ').split(/[_ ]/).filter(w => w.length > 2 && !['and','the','for','with','jpg'].includes(w));
  const tags = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
  tags.push('Printable', 'Free', 'Coloring Page', 'JPG');
  return [...new Set(tags)].slice(0, 8);
}

function generateKeywords(title) {
  const base = title.replace(/ Coloring Page$/i, '').trim().toLowerCase();
  return `${base} coloring page, free printable ${base} coloring, ${base} JPG download, cute coloring pages, free coloring pages`;
}

function generateAltText(title) {
  return `Free printable coloring page: ${title.toLowerCase()}. Cute and cozy design for kids and adults to download and print.`;
}

function generatePinterestPin(page) {
  return {
    pinTitle: page.title,
    pinDescription: `Free printable ${page.title.toLowerCase()}! Download this cute JPG coloring page for kids and adults. #coloringpages #freeprintable #cutecoloring`,
    pinKeywords: `${page.title.toLowerCase()}, coloring page, free printable, cute coloring, PDF download`
  };
}

const newPages = [];
let counter = existingCount + 1;

unused.forEach(filename => {
  const title = filenameToTitle(filename);
  const slug = toSlug(title);
  const category = detectCategory(filename);
  const desc = generateDescription(title, category);
  const longDesc = generateLongDesc(title, category);
  const tags = generateTags(filename);
  const keywords = generateKeywords(title);
  const altText = generateAltText(title);
  const difficulty = Math.random() > 0.5 ? 'Easy' : 'Medium';

  newPages.push({
    id: slug,
    slug,
    title,
    category,
    description: desc,
    longDescription: longDesc,
    difficulty,
    imageUrl: '/images/coloring/' + filename,
    tags,
    keywords,
    altText,
    createdAt: '2026-06-01',
  });

  counter++;
});

const catCounts = {};
newPages.forEach(p => { catCounts[p.category] = (catCounts[p.category] || 0) + 1; });
console.log('New pages:', newPages.length);
console.log('Categories:', JSON.stringify(catCounts, null, 2));

// Show some examples
console.log('\n--- Examples ---');
newPages.slice(0, 5).forEach(p => console.log(p.slug, '→', p.category));

fs.writeFileSync('/tmp/new-pages.json', JSON.stringify(newPages, null, 2));
console.log('\nSaved to /tmp/new-pages.json');
