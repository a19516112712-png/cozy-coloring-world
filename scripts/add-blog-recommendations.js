const fs = require('fs');
const path = require('path');

// Read categories to map blog posts to categories
const catData = fs.readFileSync('data/categories.ts', 'utf8');

// Map blog slug to category id
function getCategoryForBlog(slug) {
  const mapping = {
    'bakery-coloring-pages': 'bakery-coloring',
    'bakery-coloring-pages-guide': 'bakery-coloring',
    'best-cute-animal-coloring-pages': 'cute-animals',
    'best-free-coloring-pages': 'cozy-coloring',
    'bookstore-coloring-pages-blog': 'bookstore-coloring',
    'bookstore-coloring-pages-guide': 'bookstore-coloring',
    'coffee-shop-coloring-pages': 'coffee-shop',
    'coloring-pages-for-adults': 'cozy-coloring',
    'cottagecore-coloring-pages': 'cottagecore-coloring',
    'cottagecore-coloring-pages-guide': 'cottagecore-coloring',
    'cozy-coloring-pages': 'cozy-coloring',
    'cozy-coloring-pages-collection': 'cozy-coloring',
    'cute-animal-worlds': 'tiny-animal-worlds',
    'cute-bear-coloring-pages': 'cute-animals',
    'cute-bunny-coloring-pages': 'cute-animals',
    'cute-cat-coloring-pages': 'cute-animals',
    'cute-frog-coloring-pages': 'cute-animals',
    'fantasy-coloring-pages': 'fantasy-coloring',
    'fantasy-coloring-pages-guide': 'fantasy-coloring',
    'free-coloring-pages-for-adults-guide': 'cozy-coloring',
    'free-printable-coloring-pages': 'cozy-coloring',
    'garden-coloring-pages': 'garden-coloring',
    'kawaii-coloring-pages': 'cute-animals',
    'printable-coloring-pages': 'cozy-coloring',
    'printable-coloring-pages-guide': 'cozy-coloring',
    'rainy-day-coloring-pages': 'rainy-day-coloring',
    'rainy-day-coloring-pages-guide': 'rainy-day-coloring',
    'relaxing-coloring-pages': 'cozy-coloring',
    'tea-party-coloring-pages': 'tea-party-coloring',
    'tiny-animal-coloring-pages': 'tiny-animal-worlds',
    'tiny-animal-worlds-guide': 'tiny-animal-worlds',
  };
  return mapping[slug] || 'cute-animals';
}

// Determine which blog posts already have related coloring pages
const newPosts = ['bakery-coloring-pages-guide', 'best-cute-animal-coloring-pages', 'bookstore-coloring-pages-guide',
  'cottagecore-coloring-pages-guide', 'cozy-coloring-pages-collection', 'fantasy-coloring-pages-guide',
  'free-coloring-pages-for-adults-guide', 'printable-coloring-pages-guide', 'rainy-day-coloring-pages-guide',
  'tiny-animal-worlds-guide'];

const blogDirs = fs.readdirSync('app/blog').filter(d => d !== 'page.tsx' && fs.statSync(path.join('app/blog', d)).isDirectory());

let totalColoringLinks = 0;
let totalArticleLinks = 0;

blogDirs.forEach(slug => {
  const dir = path.join('app/blog', slug);
  const file = path.join(dir, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');

  // Add import if not present
  if (!content.includes("import RelatedArticles")) {
    // Insert after the Newsletter import or after the last import
    if (content.includes("import Newsletter")) {
      content = content.replace(
        "import Newsletter from '@/components/Newsletter';",
        "import Newsletter from '@/components/Newsletter';\nimport RelatedArticles from '@/components/RelatedArticles';"
      );
    } else if (content.includes("from '@/components/Newsletter'")) {
      content = content.replace(
        "from '@/components/Newsletter';",
        "from '@/components/Newsletter';\nimport RelatedArticles from '@/components/RelatedArticles';"
      );
    }
  }

  const categoryId = getCategoryForBlog(slug);
  const isNewPost = newPosts.includes(slug);

  // Insert related sections before Newsletter JSX
  let sectionsHTML = '';

  if (!isNewPost) {
    // Old posts: need both coloring page recs and article recs
    sectionsHTML = `
          {/* Related Coloring Pages */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-6">Related Coloring Pages</h2>
            <RelatedArticles
              categoryId="${categoryId}"
              type="coloring"
              count={6}
              title="Coloring Pages You'll Love"
            />
          </section>

          {/* You May Also Like */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2>
            <RelatedArticles
              currentSlug="${slug}"
              type="article"
              count={3}
              title="More Articles to Explore"
            />
          </section>

          <Newsletter className="mb-12" />`;
    totalColoringLinks += 6;
    totalArticleLinks += 3;
  } else {
    // New posts: already have coloring pages, just need articles
    sectionsHTML = `
          {/* You May Also Like */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2>
            <RelatedArticles
              currentSlug="${slug}"
              type="article"
              count={3}
              title="More Articles to Explore"
            />
          </section>

          <Newsletter className="mb-12" />`;
    totalArticleLinks += 3;
  }

  // Replace Newsletter JSX + keep the closing structure
  if (content.includes('<Newsletter className="mb-12" />')) {
    content = content.replace('<Newsletter className="mb-12" />', sectionsHTML);
  } else if (content.includes('<Newsletter')) {
    // Different format — replace more carefully
    content = content.replace(
      /<Newsletter[^>]*\/>/,
      sectionsHTML
    );
  }

  fs.writeFileSync(file, content);
  console.log(`Updated: ${slug}`);
});

console.log('\n--- Results ---');
console.log('Total new coloring page links:', totalColoringLinks);
console.log('Total new article links:', totalArticleLinks);
console.log('Blog posts updated:', blogDirs.length);
