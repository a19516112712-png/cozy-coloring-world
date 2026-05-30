import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import DownloadButton from "@/components/DownloadButton";
import AdBanner from "@/components/AdBanner";
import { coloringPages } from "@/data/coloring-pages";
import { categories } from "@/data/categories";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return coloringPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = coloringPages.find((p) => p.slug === slug);
  if (!page) return {};
  return generatePageMetadata({
    title: `${page.title} | Free Printable Coloring Page`,
    description: page.description,
    path: `/coloring-pages/${slug}`,
    imageUrl: page.imageUrl,
  });
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-mint/60 text-cocoa",
  Medium: "bg-butter text-cocoa",
  Hard: "bg-lavender/60 text-cocoa",
};

export default async function ColoringPageDetail({ params }: Props) {
  const { slug } = await params;
  const page = coloringPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const category = categories.find((c) => c.id === page.category);
  const relatedPages = coloringPages
    .filter((p) => p.category === page.category && p.id !== page.id)
    .slice(0, 3);

  return (
    <div className="page-container py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-rose hover:underline">Home</Link>
        <span className="mx-2 text-cocoa/30">/</span>
        <Link href="/categories" className="text-rose hover:underline">Categories</Link>
        {category && (
          <>
            <span className="mx-2 text-cocoa/30">/</span>
            <Link href={`/categories/${category.slug}`} className="text-rose hover:underline">
              {category.name}
            </Link>
          </>
        )}
        <span className="mx-2 text-cocoa/30">/</span>
        <span className="text-cocoa/60">{page.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Image Preview */}
          <div className="aspect-[4/3] bg-cream rounded-cozy border border-blush/20 overflow-hidden flex items-center justify-center mb-6">
            <span className="text-8xl opacity-15">
              {category?.emoji || "🎨"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-sm font-medium px-3 py-1 rounded-pill ${difficultyColors[page.difficulty]}`}>
              {page.difficulty}
            </span>
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="text-sm font-medium px-3 py-1 rounded-pill bg-cream border border-blush/30 text-cocoa/70 hover:text-rose hover:border-rose transition-colors"
              >
                {category.emoji} {category.name}
              </Link>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-cocoa/70 leading-relaxed mb-8">
            {page.description}
          </p>

          <DownloadButton pdfUrl={page.pdfUrl} title={page.title} />

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {page.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-cocoa/50 bg-cream px-3 py-1 rounded-full border border-blush/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-2 space-y-6">
          <AdBanner slot="6666666666" className="lg:sticky lg:top-24" />

          {/* Related Pages */}
          {relatedPages.length > 0 && (
            <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card">
              <h3 className="font-semibold text-cocoa mb-4">
                More {category?.name} Pages
              </h3>
              <div className="space-y-3">
                {relatedPages.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/coloring-pages/${rp.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-xl flex-shrink-0">
                      {category?.emoji}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">
                        {rp.title}
                      </p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[rp.difficulty]}`}>
                        {rp.difficulty}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
