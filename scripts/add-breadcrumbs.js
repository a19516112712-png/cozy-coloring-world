const fs = require('fs');

// 1. Update coloring page template
let coloringTemplate = fs.readFileSync('app/coloring/[slug]/page.tsx', 'utf8');

// Add import
coloringTemplate = coloringTemplate.replace(
  "import RelatedArticles from '@/components/RelatedArticles';",
  "import RelatedArticles from '@/components/RelatedArticles';\nimport Breadcrumb from '@/components/Breadcrumb';"
);

// Remove old BreadcrumbList script + breadcrumb schema generation
coloringTemplate = coloringTemplate.replace(
  /\/\/ Breadcrumb schema\n  const breadcrumbSchema[\s\S]*?}\);/,
  ''
);
coloringTemplate = coloringTemplate.replace(
  /\s*<script\n\s*type="application\/ld\+json"\n\s*dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(breadcrumbSchema\) \}\}\n\s*\/>/,
  ''
);

// Replace old breadcrumb nav
const oldBreadcrumb = `        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <Link href="/categories" className="text-rose hover:underline">Categories</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">{page.title}</span>
        </nav>`;

const newBreadcrumb = `        <Breadcrumb items={[
          { name: "Home", url: "https://tinyanimalworlds.com" },
          { name: category?.name || "Categories", url: \`https://tinyanimalworlds.com/category/\${page.category}\` },
          { name: page.title, url: \`https://tinyanimalworlds.com/coloring/\${page.slug}\` },
        ]} />`;

coloringTemplate = coloringTemplate.replace(oldBreadcrumb, newBreadcrumb);
fs.writeFileSync('app/coloring/[slug]/page.tsx', coloringTemplate);
console.log('1. Updated coloring page template');

// 2. Update category page template
let catTemplate = fs.readFileSync('app/category/[slug]/page.tsx', 'utf8');

catTemplate = catTemplate.replace(
  "import RelatedArticles from '@/components/RelatedArticles';",
  "import RelatedArticles from '@/components/RelatedArticles';\nimport Breadcrumb from '@/components/Breadcrumb';"
);

const oldCatBreadcrumb = `      {/* Breadcrumb */}
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/" className="text-rose hover:underline">Home</Link>
        <span className="mx-2 text-cocoa/30">/</span>
        <Link href="/categories" className="text-rose hover:underline">Categories</Link>
        <span className="mx-2 text-cocoa/30">/</span>
        <span className="text-cocoa/60">{category.name}</span>
      </nav>`;

const newCatBreadcrumb = `      <Breadcrumb items={[
        { name: "Home", url: "https://tinyanimalworlds.com" },
        { name: "Categories", url: "https://tinyanimalworlds.com/categories" },
        { name: category.name, url: \`https://tinyanimalworlds.com/category/\${category.slug}\` },
      ]} />`;

catTemplate = catTemplate.replace(oldCatBreadcrumb, newCatBreadcrumb);
fs.writeFileSync('app/category/[slug]/page.tsx', catTemplate);
console.log('2. Updated category page template');

// 3. Add breadcrumb to blog index
let blogIndex = fs.readFileSync('app/blog/page.tsx', 'utf8');
blogIndex = blogIndex.replace(
  "import BlogCardImage from '@/components/BlogCardImage';",
  "import BlogCardImage from '@/components/BlogCardImage';\nimport Breadcrumb from '@/components/Breadcrumb';"
);
blogIndex = blogIndex.replace(
  '<div className="page-container py-12 sm:py-16">',
  `<div className="page-container py-12 sm:py-16">
        <Breadcrumb items={[
          { name: "Home", url: "https://tinyanimalworlds.com" },
          { name: "Blog", url: "https://tinyanimalworlds.com/blog" },
        ]} />`
);
fs.writeFileSync('app/blog/page.tsx', blogIndex);
console.log('3. Updated blog index');

// 4. Categories index
let catsIndex = fs.readFileSync('app/categories/page.tsx', 'utf8');
catsIndex = catsIndex.replace(
  "from '@/data/categories'",
  "from '@/data/categories';\nimport Breadcrumb from '@/components/Breadcrumb'"
);
catsIndex = catsIndex.replace(
  '<div className="page-container py-12 sm:py-16">',
  `<div className="page-container py-12 sm:py-16">
        <Breadcrumb items={[
          { name: "Home", url: "https://tinyanimalworlds.com" },
          { name: "Categories", url: "https://tinyanimalworlds.com/categories" },
        ]} />`
);
fs.writeFileSync('app/categories/page.tsx', catsIndex);
console.log('4. Updated categories index');

// 5. Coloring-pages index
let cpIndex = fs.readFileSync('app/coloring-pages/page.tsx', 'utf8');
cpIndex = cpIndex.replace(
  "from '@/data/coloring-pages'",
  "from '@/data/coloring-pages';\nimport Breadcrumb from '@/components/Breadcrumb'"
);
cpIndex = cpIndex.replace(
  '<div className="page-container py-12 sm:py-16">',
  `<div className="page-container py-12 sm:py-16">
        <Breadcrumb items={[
          { name: "Home", url: "https://tinyanimalworlds.com" },
          { name: "All Coloring Pages", url: "https://tinyanimalworlds.com/coloring-pages" },
        ]} />`
);
fs.writeFileSync('app/coloring-pages/page.tsx', cpIndex);
console.log('5. Updated coloring-pages index');

// 6. Static pages
['contact', 'privacy', 'terms'].forEach(name => {
  let page = fs.readFileSync(`app/${name}/page.tsx`, 'utf8');
  if (!page.includes('import Breadcrumb')) {
    page = page.replace(
      "export default function",
      "import Breadcrumb from '@/components/Breadcrumb';\n\nexport default function"
    );
    const label = name.charAt(0).toUpperCase() + name.slice(1);
    page = page.replace(
      '<div className="page-container py-12 sm:py-16">',
      `<div className="page-container py-12 sm:py-16">
        <Breadcrumb items={[
          { name: "Home", url: "https://tinyanimalworlds.com" },
          { name: "${label}", url: \`https://tinyanimalworlds.com/${name}\` },
        ]} />`
    );
    fs.writeFileSync(`app/${name}/page.tsx`, page);
    console.log(`6. Updated ${name} page`);
  }
});

console.log('\nDone adding breadcrumbs!');
