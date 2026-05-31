import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo";
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
    title: `${category.name} Coloring Pages | Free Printable JPGs`,
    description: category.description,
    path: `/categories/${slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const pages = coloringPages.filter((p) => p.category === category.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="page-container py-12 sm:py-16">
      <div className="text-center mb-10">
        <span className="text-4xl block mb-3">{category.emoji}</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">{category.name}</h1>
        <p className="mt-2 text-cocoa/60">{category.description}</p>
        <span className="inline-block mt-3 text-sm font-medium text-rose bg-rose/10 px-4 py-1.5 rounded-pill">
          {pages.length} coloring pages
        </span>
      </div>

      {pages.length > 0 ? (
        <div className="card-grid mb-8">
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

      <AdBanner slot="4444444444" />
    </div>
  );
}
