import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import AdBanner from "@/components/AdBanner";
import CategoryColoringCard from "@/components/CategoryColoringCard";
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
    title: `${category.name} Coloring Pages | Free Printable PDF Downloads`,
    description: `Download free printable ${category.name.toLowerCase()} coloring pages. ${category.description}. All PDFs are free for personal use!`,
    path: `/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const pages = coloringPages.filter((p) => p.category === category.id);
  const totalPages = Math.ceil(pages.length / 12);

  return (
    <div className="page-container py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/" className="text-rose hover:underline">Home</Link>
        <span className="mx-2 text-cocoa/30">/</span>
        <Link href="/categories" className="text-rose hover:underline">Categories</Link>
        <span className="mx-2 text-cocoa/30">/</span>
        <span className="text-cocoa/60">{category.name}</span>
      </nav>

      {/* Hero Header */}
      <div className="text-center mb-10">
        <div
          className="inline-flex w-20 h-20 rounded-3xl items-center justify-center text-4xl mb-5"
          style={{ backgroundColor: `${category.color}60` }}
        >
          {category.emoji}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa">
          {category.name} Coloring Pages
        </h1>
        <p className="mt-4 text-lg text-cocoa/70 max-w-2xl mx-auto leading-relaxed">
          {category.description}. Browse our collection of {pages.length} free printable {category.name.toLowerCase()} coloring pages — download, print, and start coloring!
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-rose bg-rose/10 px-4 py-1.5 rounded-pill">
            {pages.length} free printable pages
          </span>
          <span className="text-sm text-cocoa/40">📥 Instant PDF download</span>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slot="1111111111" className="mb-10" />

      {/* Coloring Pages Grid */}
      {pages.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {pages.map((page) => (
              <CategoryColoringCard key={page.id} page={page} />
            ))}
          </div>

          {/* Pagination info */}
          {totalPages > 1 && (
            <div className="text-center text-sm text-cocoa/40">
              Showing all {pages.length} coloring pages in {category.name}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20">
          <span className="text-6xl block mb-4">📝</span>
          <p className="text-lg text-cocoa/60">New {category.name.toLowerCase()} coloring pages coming soon!</p>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-pill bg-rose text-white font-semibold hover:bg-rose/90 transition-all"
          >
            Browse All Categories
          </Link>
        </div>
      )}

      {/* Bottom Ad */}
      <AdBanner slot="2222222222" className="mt-10" />

      {/* All Categories Quick Links */}
      <section className="mt-16 pt-10 border-t border-blush/20">
        <h3 className="text-lg font-semibold text-cocoa mb-5 text-center">Explore More Categories</h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.filter(c => c.id !== category.id).map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill border border-blush/30 bg-white text-cocoa text-sm font-medium hover:border-rose hover:text-rose transition-all shadow-card"
            >
              <span>{cat.emoji}</span>
              {cat.name}
              <span className="text-xs text-cocoa/30">({cat.count})</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
