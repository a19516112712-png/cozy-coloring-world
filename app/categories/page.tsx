import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import AdBanner from "@/components/AdBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { categories } from "@/data/categories";

export const metadata: Metadata = generatePageMetadata({
  title: "Coloring Categories Directory | Browse by Theme | Cozy Coloring World",
  description: "Find your perfect coloring page by browsing our curated category directory. 15 themes — cute animals, cozy scenes, fantasy, seasonal, and more.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <Breadcrumb items={[
        { name: "Home", url: "https://tinyanimalworlds.com" },
        { name: "Categories", url: "https://tinyanimalworlds.com/categories" },
      ]} />

      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">
          Coloring Categories Directory
        </h1>
        <p className="mt-3 text-cocoa/60 max-w-xl mx-auto text-lg">
          Browse by theme — find the perfect coloring pages for your mood
        </p>
      </div>

      {/* Category Directory — horizontal card layout */}
      <div className="space-y-4 max-w-3xl mx-auto mb-12">
        {categories.map((category) => (
          <Link
            key={category.id + category.slug}
            href={`/category/${category.slug}`}
            className="group flex items-center gap-5 p-4 sm:p-5 bg-white rounded-2xl border border-blush/20 shadow-card hover:shadow-xl hover:border-rose/30 transition-all duration-300"
          >
            {/* Category Thumbnail */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-cream flex-shrink-0">
              <Image
                src={category.imageUrl}
                alt={`${category.name} coloring pages`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="112px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute top-1.5 left-1.5 w-7 h-7 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-base shadow-sm">
                {category.emoji}
              </div>
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg font-bold text-cocoa group-hover:text-rose transition-colors line-clamp-1">
                {category.name}
              </h2>
              <p className="mt-1 text-sm text-cocoa/55 line-clamp-2 leading-relaxed">
                {category.description}
              </p>
              <div className="mt-2.5 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose bg-rose/10 px-2.5 py-1 rounded-full">
                  {category.count} pages
                </span>
                <span className="text-xs text-cocoa/30 group-hover:text-rose group-hover:translate-x-0.5 transition-all">
                  Browse collection →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdBanner slot="3333333333" />

      {/* Bottom CTA */}
      <div className="text-center mt-12 pt-8 border-t border-blush/20">
        <p className="text-cocoa/50 text-sm mb-3">
          Can not decide? Browse all pages at once.
        </p>
        <Link
          href="/coloring-pages"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-rose text-white font-semibold hover:bg-rose/90 transition-all shadow-card"
        >
          View All Coloring Pages ✨
        </Link>
      </div>
    </div>
  );
}
