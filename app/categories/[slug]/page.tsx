import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import ColoringCard from "@/components/ColoringCard";
import AdBanner from "@/components/AdBanner";
import { categories } from "@/data/categories";
import { coloringPages } from "@/data/coloring-pages";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return generatePageMetadata({
    title: `${category.name} Coloring Pages | Free Printable JPG Downloads`,
    description: `Download free printable ${category.name.toLowerCase()} coloring pages. ${category.description} Perfect for kids and adults. New pages added weekly!`,
    path: `/categories/${slug}`,
  });
}

const catFAQs = [
  { question: "How do I download coloring pages?", answer: "Click any coloring page to open its detail page, then click the Download JPG button. No sign-up required — your free JPG downloads instantly." },
  { question: "What paper should I use?", answer: "Standard printer paper works great for crayons and colored pencils. For markers or watercolors, use cardstock (80lb+) to prevent bleed-through." },
  { question: "Are these coloring pages free for classrooms?", answer: "Yes! Teachers can print unlimited copies for classroom use. All pages are free for personal and educational use." },
  { question: "How often do you add new pages?", answer: "We add new coloring pages weekly! Bookmark this category or subscribe to stay updated on fresh designs." },
];

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const baseUrl = "https://tinyanimalworlds.com";

  const pages = (() => {
    const indexMap = new Map(coloringPages.map((p, i) => [p.slug, i]));
    return coloringPages.filter((p) => p.category === category.id).sort((a, b) => {
      const dateCmp = b.createdAt.localeCompare(a.createdAt);
      if (dateCmp !== 0) return dateCmp;
      return (indexMap.get(b.slug) ?? 0) - (indexMap.get(a.slug) ?? 0);
    });
  })();

  // Related categories (random 6 other categories)
  const relatedCategories = categories
    .filter((c) => c.id !== category.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Categories", url: `${baseUrl}/categories` },
    { name: category.name, url: `${baseUrl}/categories/${slug}` },
  ]);

  const faqSchema = generateFAQSchema(catFAQs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="page-container py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <Link href="/categories" className="text-rose hover:underline">Categories</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">{category.name}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-4xl block mb-3">{category.emoji}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">
            {category.name} Coloring Pages
          </h1>
          <p className="mt-2 text-lg text-cocoa/60">{category.description}</p>
          <span className="inline-block mt-3 text-sm font-medium text-rose bg-rose/10 px-4 py-1.5 rounded-pill">
            {pages.length} free printable coloring pages
          </span>
        </div>

        {/* SEO Intro Content */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="prose prose-cocoa max-w-none">
            <h2 className="text-2xl font-bold text-cocoa">Free Printable {category.name} Coloring Pages</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Welcome to our collection of {pages.length} free printable {category.name.toLowerCase()} coloring pages! Each page is carefully designed with bold, clear outlines that are perfect for coloring with crayons, colored pencils, markers, or gel pens. Simply click any page to download the high-quality JPG — no sign-up, no subscription, completely free.
            </p>
            <p className="text-cocoa/70 leading-relaxed">
              {category.name} coloring is one of our most popular categories. These charming designs feature adorable characters and cozy scenes that both kids and adults love. Whether you are looking for easy pages for young children or detailed designs for experienced colorists, you will find something special here.
            </p>

            <h3 className="text-xl font-semibold text-cocoa mt-8">Why You Will Love These {category.name} Pages</h3>
            <ul className="space-y-1.5 text-cocoa/70">
              <li><strong>100% Free</strong> — Download and print as many copies as you want</li>
              <li><strong>High Quality</strong> — Crisp 1000×1500px JPG images with bold outlines</li>
              <li><strong>All Ages</strong> — Easy, Medium, and Hard difficulty levels available</li>
              <li><strong>New Weekly</strong> — Fresh designs added regularly to this category</li>
              <li><strong>Screen-Free Fun</strong> — A relaxing creative break from digital devices</li>
            </ul>

            <h3 className="text-xl font-semibold text-cocoa mt-8">How to Print and Color</h3>
            <p className="text-cocoa/70 leading-relaxed">
              Download any page as a JPG, open it on your computer or phone, and print on standard 8.5×11 letter paper or A4. For wet media like markers and watercolors, we recommend cardstock paper (80lb+) to prevent bleed-through. Set your printer to High Quality for the crispest lines.
            </p>
          </div>
        </div>

        {/* Coloring Pages Grid */}
        {pages.length > 0 ? (
          <div className="card-grid mb-10">
            {pages.map((page) => (
              <ColoringCard key={page.id} page={page} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl block mb-4">📝</span>
            <p className="text-cocoa/60">New coloring pages coming soon!</p>
          </div>
        )}

        <AdBanner slot="category-mid" />

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-12 mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-6 text-center">
            ❓ Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {catFAQs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-blush/20 shadow-card overflow-hidden">
                <summary className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-cream/50 transition-colors font-medium text-cocoa text-sm">
                  {faq.question}
                  <span className="text-rose text-xs group-open:rotate-180 transition-transform ml-2">▼</span>
                </summary>
                <p className="px-3.5 pb-3.5 text-sm text-cocoa/65 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related Categories */}
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">🏷️ Explore More Categories</h2>
          <div className="flex flex-wrap gap-2">
            {relatedCategories.map((rc) => (
              <Link
                key={rc.id}
                href={`/categories/${rc.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blush/20 rounded-full text-xs sm:text-sm text-cocoa/70 hover:text-rose hover:border-rose transition-all"
              >
                {rc.emoji} {rc.name} ({rc.count})
              </Link>
            ))}
            <Link
              href="/categories"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-rose/10 border border-rose/20 rounded-full text-xs text-rose hover:underline transition-all"
            >
              + All Categories →
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">🔗 Quick Links</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/coloring-pages" className="text-xs text-cocoa/60 hover:text-rose transition-colors px-2 py-1">All Pages</Link>
            <Link href="/collections" className="text-xs text-cocoa/60 hover:text-rose transition-colors px-2 py-1">Collections</Link>
            <Link href="/blog" className="text-xs text-cocoa/60 hover:text-rose transition-colors px-2 py-1">Blog</Link>
            <Link href="/html-sitemap" className="text-xs text-cocoa/60 hover:text-rose transition-colors px-2 py-1">Sitemap</Link>
            <Link href="/pins" className="text-xs text-cocoa/60 hover:text-rose transition-colors px-2 py-1">Pinterest</Link>
          </div>
        </div>
      </div>
    </>
  );
}
