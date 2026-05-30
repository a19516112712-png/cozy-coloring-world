const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BASE_URL = 'https://tinyanimalworlds.com';

// Parse coloring pages data
const cpData = fs.readFileSync('data/coloring-pages.ts', 'utf8');
const coloringPages = [];
const cpRegex = /{\s*id:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?imageUrl:\s*"([^"]+)"/g;
let m;
while ((m = cpRegex.exec(cpData)) !== null) {
  coloringPages.push({ id: m[1], slug: m[2], title: m[3], category: m[4], description: m[5], imageUrl: m[6] });
}
console.log(`Parsed ${coloringPages.length} coloring pages`);

// Parse categories
const catData = fs.readFileSync('data/categories.ts', 'utf8');
const categories = [];
const catRegex = /{\s*id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"/g;
while ((m = catRegex.exec(catData)) !== null) {
  categories.push({ id: m[1], name: m[2], slug: m[3], description: m[4] });
}
console.log(`Parsed ${categories.length} categories`);

// Parse blog posts
const blogData = fs.readFileSync('data/blogPosts.ts', 'utf8');
const blogPosts = [];
const blogRegex = /{\s*slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?coverImage:\s*"([^"]+)"/g;
while ((m = blogRegex.exec(blogData)) !== null) {
  blogPosts.push({ slug: m[1], title: m[2], description: m[3], category: m[4], coverImage: m[5] });
}
console.log(`Parsed ${blogPosts.length} blog posts`);

// Generate 300 pins: all 280 coloring pages + 16 categories + 4 blogs
const pins = [];

// Board name from category
function boardName(category) {
  const mapping = {
    'cute-animals': 'Cute Animal Coloring Pages',
    'cozy-coloring': 'Cozy Coloring Pages',
    'tiny-animal-worlds': 'Tiny Animal Worlds',
    'fantasy-coloring': 'Fantasy Coloring Pages',
    'cottagecore-coloring': 'Cottagecore Coloring',
    'rainy-day-coloring': 'Rainy Day Coloring',
    'seasonal-coloring': 'Seasonal Coloring Pages',
    'bakery-coloring': 'Bakery Coloring Pages',
    'tea-party-coloring': 'Tea Party Coloring',
    'garden-coloring': 'Garden Coloring Pages',
    'bookstore-coloring': 'Bookstore Coloring',
    'coffee-shop': 'Coffee Shop Coloring',
    'Cozy Coloring': 'Cozy Coloring Pages',
    'Cute Animals': 'Cute Animal Coloring Pages',
    'Tiny Animal': 'Tiny Animal Worlds',
    'Fantasy': 'Fantasy Coloring Pages',
    'Cottagecore': 'Cottagecore Coloring',
    'Rainy Day': 'Rainy Day Coloring',
    'Bakery': 'Bakery Coloring Pages',
    'Bookstore': 'Bookstore Coloring',
    'Printable': 'Best Coloring Pages',
    'Adults': 'Adult Coloring Pages',
    'Relaxing': 'Relaxing Coloring Pages',
    'Free Printable': 'Best Coloring Pages',
    'Best Free': 'Best Coloring Pages',
    'Kawaii': 'Kawaii Coloring Pages',
    'Garden': 'Garden Coloring Pages',
    'Tea Party': 'Tea Party Coloring',
    'Animal Worlds': 'Tiny Animal Worlds',
    'Coffee Shop': 'Coffee Shop Coloring',
    'Cute Frog': 'Cute Animal Coloring Pages',
    'Cute Bunny': 'Cute Animal Coloring Pages',
    'Cute Bear': 'Cute Animal Coloring Pages',
    'Cute Cat': 'Cute Animal Coloring Pages',
    'Seasonal': 'Seasonal Coloring Pages',
  };
  return mapping[category] || 'Best Coloring Pages';
}

function pinDescription(title, type) {
  const t = title.replace(/ Coloring Page$/i, '').trim();
  if (type === 'coloring') {
    return `Free printable ${t.toLowerCase()} coloring page! Download this cute JPG for kids and adults. Perfect for cozy coloring sessions. #coloringpages #freeprintable #cute`;
  } else if (type === 'category') {
    return `Browse our ${t.toLowerCase()} collection! Free printable JPG coloring pages for kids and adults. Download and print instantly. #coloringpages #freeprintable`;
  } else {
    return `${t} — read our complete guide with tips, ideas, and free downloads. #coloringblog #freeprintable #coloringpages`;
  }
}

function pinKeywords(title) {
  return title.toLowerCase().replace(/\s+/g, ', ') + ', coloring pages, free printable, cute coloring, JPG download';
}

// Coloring pages (280)
coloringPages.forEach((cp, i) => {
  pins.push({
    title: cp.title,
    description: pinDescription(cp.title, 'coloring'),
    link: `${BASE_URL}/coloring/${cp.slug}`,
    board: boardName(cp.category),
    keywords: pinKeywords(cp.title),
    imageSource: cp.imageUrl,
    slug: cp.slug,
  });
});

// Categories (16)
categories.forEach(cat => {
  pins.push({
    title: `${cat.name} Coloring Pages | Free Printable JPG Downloads`,
    description: pinDescription(cat.name, 'category'),
    link: `${BASE_URL}/category/${cat.slug}`,
    board: boardName(cat.id),
    keywords: pinKeywords(cat.name),
    imageSource: cat.imageUrl || '/images/coloring/1_Cute_animal_village_coloring_p.jpg',
    slug: cat.slug,
  });
});

// Top 4 blog posts
blogPosts.slice(0, 4).forEach(post => {
  pins.push({
    title: post.title,
    description: pinDescription(post.title, 'blog'),
    link: `${BASE_URL}/blog/${post.slug}`,
    board: boardName(post.category),
    keywords: pinKeywords(post.title),
    imageSource: post.coverImage || '/images/coloring/1_Cute_animal_village_coloring_p.jpg',
    slug: post.slug,
  });
});

console.log(`\nTotal pins: ${pins.length}`);

// Generate CSV
let csv = 'Title,Description,Link,Board,Keywords\n';
pins.forEach(p => {
  csv += `"${p.title.replace(/"/g, '""')}","${p.description.replace(/"/g, '""')}","${p.link}","${p.board}","${p.keywords.replace(/"/g, '""')}"\n`;
});
fs.writeFileSync('pins.csv', csv);
console.log('Saved pins.csv');

// Generate Pinterest images (1000x1500) from source images
const pinterestDir = 'public/pinterest';
fs.mkdirSync(pinterestDir, { recursive: true });

async function generateImages() {
  let generated = 0;
  const skipped = [];
  
  // Only generate for coloring pages (280) - they have real images
  const coloringPins = pins.filter(p => p.imageSource && p.imageSource.includes('/coloring/'));
  
  console.log(`Generating ${coloringPins.length} Pinterest images...`);
  
  for (const pin of coloringPins) {
    const srcPath = path.join('public', pin.imageSource);
    const destPath = path.join(pinterestDir, `${pin.slug}.jpg`);
    
    if (fs.existsSync(path.join(__dirname, '..', destPath))) {
      continue; // Already exists
    }
    
    if (!fs.existsSync(path.join(__dirname, '..', srcPath))) {
      skipped.push(pin.slug);
      continue;
    }
    
    try {
      await sharp(path.join(__dirname, '..', srcPath))
        .resize(1000, 1500, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85 })
        .toFile(path.join(__dirname, '..', destPath));
      generated++;
      if (generated % 50 === 0) console.log(`  ${generated}/${coloringPins.length}...`);
    } catch (e) {
      skipped.push(pin.slug);
    }
  }
  
  console.log(`\nImages generated: ${generated}`);
  if (skipped.length > 0) console.log(`Skipped: ${skipped.length}`);
}

generateImages();
