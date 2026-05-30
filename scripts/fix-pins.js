const fs = require('fs');
const BASE_URL = 'https://tinyanimalworlds.com';

// Slug → natural English title
function slugToTitle(slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim()
    + ' Coloring Page';
}

// Unique description per pin
const descTemplates = [
  'Free printable coloring page featuring {scene}. Download and print instantly at Tiny Animal Worlds.',
  'Cute coloring page of {scene}. Perfect for kids and adults — free JPG download!',
  'Adorable printable coloring page: {scene}. Relax and enjoy this cozy scene today.',
  'Download this free coloring page of {scene}. High-quality JPG for all ages.',
  'Cozy coloring page with {scene}. Print at home and start coloring for free!',
  '{scene} — a free printable coloring page from Tiny Animal Worlds. Download now!',
  'Free JPG coloring page: {scene}. Great for creative fun and relaxation.',
  'Printable coloring page featuring {scene}. Download, print, and color today!',
  'Free download: {scene} coloring page. Cute, cozy, and ready to print.',
  'Coloring page of {scene}. Free printable JPG — perfect for kids, teens, and adults.',
  'Relaxing coloring page: {scene}. Download this free printable at Tiny Animal Worlds.',
  'Free printable {scene}. A cozy coloring page for all ages. Download JPG now!',
];

function description(title, index) {
  const scene = title.replace(/ Coloring Page$/i, '').toLowerCase();
  return descTemplates[index % descTemplates.length].replace('{scene}', scene);
}

// Board assignment by keyword
function assignBoard(slug, category) {
  const s = slug.toLowerCase();
  if (s.includes('bakery') || s.includes('baking') || s.includes('bread') || s.includes('cupcake') || s.includes('cookie'))
    return 'Bakery Coloring Pages';
  if (s.includes('bookstore') || s.includes('library') || s.includes('reading') || s.includes('book'))
    return 'Bookstore Coloring Pages';
  if (s.includes('tea'))
    return 'Tea Party Coloring Pages';
  if (s.includes('fantasy') || s.includes('dragon') || s.includes('unicorn') || s.includes('magic') || s.includes('wizard') || s.includes('crystal') || s.includes('potion'))
    return 'Fantasy Coloring Pages';
  if (s.includes('rain'))
    return 'Rainy Day Coloring Pages';
  if (s.includes('christmas') || s.includes('snow'))
    return 'Christmas Coloring Pages';
  if (s.includes('halloween'))
    return 'Halloween Coloring Pages';
  if (s.includes('coffee') || s.includes('cafe'))
    return 'Coffee Shop Coloring Pages';
  if (s.includes('tiny') || s.includes('village') || s.includes('mini'))
    return 'Tiny Animal Worlds';
  if (s.includes('garden') || s.includes('flower') || s.includes('greenhouse') || s.includes('herb'))
    return 'Garden Coloring Pages';
  if (s.includes('cottage') || s.includes('cottagecore') || s.includes('cabin'))
    return 'Cottagecore Coloring';
  if (s.includes('cozy') || s.includes('bedroom') || s.includes('nook'))
    return 'Cozy Coloring Pages';
  if (s.includes('kawaii') || s.includes('cute'))
    return 'Kawaii Coloring Pages';
  if (s.includes('seasonal') || s.includes('spring') || s.includes('summer') || s.includes('autumn') || s.includes('winter'))
    return 'Seasonal Coloring Pages';
  if (s.includes('market') || s.includes('shop'))
    return 'Cozy Coloring Pages';
  return 'Cute Animal Coloring Pages';
}

function pinterestKeywords(title) {
  const base = title.replace(/ Coloring Page$/i, '').toLowerCase();
  const words = base.split(' ');
  return words.join(', ') + ', coloring page, free printable, cute coloring, JPG download, Tiny Animal Worlds';
}

function altText(title) {
  return 'Free printable coloring page: ' + title.toLowerCase() + '. Cute JPG download for kids and adults from Tiny Animal Worlds.';
}

// Parse data
function parseEntries(data) {
  const lines = data.split('\n');
  const entries = [];
  let block = '', capturing = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!capturing && line.trim().startsWith('{') && i > 20) { block = line + '\n'; capturing = true; }
    else if (capturing) {
      block += line + '\n';
      if (line.trim().startsWith('},') || line.trim() === '},') {
        const slug = (block.match(/slug:\s*"([^"]+)"/) || [])[1];
        const title = (block.match(/title:\s*"([^"]+)"/) || [])[1];
        const category = (block.match(/category:\s*"([^"]+)"/) || [])[1];
        if (slug) entries.push({ slug, title: title || '', category: category || '' });
        block = ''; capturing = false;
      }
    }
  }
  return entries;
}

const coloringPages = parseEntries(fs.readFileSync('data/coloring-pages.ts', 'utf8'));
const categories = parseEntries(fs.readFileSync('data/categories.ts', 'utf8'));
const blogPosts = parseEntries(fs.readFileSync('data/blogPosts.ts', 'utf8'));

console.log('CP:', coloringPages.length, 'Cat:', categories.length, 'Blog:', blogPosts.length);

// Build all pins
const pins = [];
let idx = 0;

coloringPages.forEach(p => {
  const title = p.title && p.title !== p.slug ? p.title : slugToTitle(p.slug);
  pins.push({
    title,
    description: description(title, idx),
    link: BASE_URL + '/coloring/' + p.slug,
    board: assignBoard(p.slug, p.category),
    keywords: pinterestKeywords(title),
    altText: altText(title),
    slug: p.slug,
  });
  idx++;
});

categories.forEach(c => {
  const title = c.title || slugToTitle(c.slug).replace(/ Coloring Page$/, ' Coloring Pages');
  pins.push({
    title,
    description: 'Browse our ' + title.toLowerCase() + ' collection! Free printable JPG downloads for kids and adults.',
    link: BASE_URL + '/category/' + c.slug,
    board: assignBoard(c.slug, c.category || ''),
    keywords: title.toLowerCase() + ', coloring pages, free printable, category',
    altText: title + ' category page with free printable coloring pages from Tiny Animal Worlds.',
    slug: c.slug,
  });
});

blogPosts.slice(0, blogPosts.length > 10 ? 10 : blogPosts.length).forEach(b => {
  const title = b.title || slugToTitle(b.slug);
  pins.push({
    title,
    description: title + ' — read our complete guide with tips, ideas, and free downloads!',
    link: BASE_URL + '/blog/' + b.slug,
    board: assignBoard(b.slug, b.category || ''),
    keywords: title.toLowerCase() + ', coloring blog, free printable, coloring tips',
    altText: 'Blog post: ' + title + ' on Tiny Animal Worlds coloring blog.',
    slug: b.slug,
  });
});

// CSV
let csv = 'Title,Description,Link,Board,Keywords,Alt Text\n';
pins.forEach(p => {
  csv += '"' + p.title.replace(/"/g, '""') + '","' + p.description.replace(/"/g, '""') + '","' + p.link + '","' + p.board + '","' + p.keywords + '","' + p.altText.replace(/"/g, '""') + '"\n';
});
fs.writeFileSync('pins.csv', csv);

// Stats
const boardStats = {};
pins.forEach(p => { boardStats[p.board] = (boardStats[p.board] || 0) + 1; });

console.log('\n=== Total Pins:', pins.length, '===');
console.log('\nBoard Distribution:');
Object.entries(boardStats).sort((a,b) => b[1] - a[1]).forEach(([k,v]) => console.log('  ' + k + ': ' + v));

console.log('\n=== First 20 Preview ===');
pins.slice(0, 20).forEach((p, i) => {
  console.log((i+1) + '. [' + p.board + '] ' + p.title);
  console.log('   ' + p.description.substring(0, 100));
});
