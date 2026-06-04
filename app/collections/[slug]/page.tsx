import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import AdBanner from "@/components/AdBanner";
import RelatedArticles from "@/components/RelatedArticles";
import { collections } from "@/data/collections";
import { coloringPages } from "@/data/coloring-pages";

interface Props { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return {};
  return generatePageMetadata({
    title: `${collection.title} | Free Printable JPG Downloads`,
    description: collection.description,
    path: `/collections/${slug}`,
  });
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const matchingPages = coloringPages
    .filter((p) => p.slug.includes(collection.theme))
    .slice(0, 24);

  return (
    <article className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <Link href="/coloring-pages" className="text-rose hover:underline">Coloring Pages</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa leading-tight mb-3">{collection.title}</h1>
        <p className="text-cocoa/50 mb-8">{collection.pageCount}+ pages in this collection</p>
        <AdBanner slot="blog-top" className="mb-8" />
        <div className="prose prose-cocoa max-w-none">
          <p className="text-lg text-cocoa/70 leading-relaxed mb-6">{collection.description}</p>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Pages in This Collection</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {matchingPages.map((page) => (
              <Link key={page.slug} href={`/coloring/${page.slug}`} className="group bg-white rounded-xl border border-blush/20 p-3 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎨</span>
                  <span className="text-xs text-cocoa/70 group-hover:text-rose transition-colors line-clamp-2">{page.title.replace(" Coloring Page", "")}</span>
                </div>
              </Link>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Explore More</h2>
          <p className="text-cocoa/75 leading-relaxed mb-6">Browse our <Link href="/coloring-pages" className="text-rose hover:underline">complete collection of 1340+ coloring pages</Link> or <Link href="/categories" className="text-rose hover:underline">all categories</Link>.</p>
        </div>
        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2><RelatedArticles currentSlug={slug} type="article" count={3} title="Explore More" /></section>
      </div>
    </article>
  );
}
