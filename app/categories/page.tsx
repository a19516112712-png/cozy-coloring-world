import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import AdBanner from "@/components/AdBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { categories } from "@/data/categories";
import { blogPosts } from "@/data/blogPosts";
import { wordSearches } from "@/data/wordSearches";

export const metadata: Metadata = generatePageMetadata({
  title: "Categories Directory | Coloring Pages, Word Search & More | Tiny Animal Worlds",
  description: "Browse all categories — 15+ coloring themes, 1000+ word search puzzles, and 120+ blog articles. Find free printable activities for kids and adults.",
  path: "/categories",
});

export default function CategoriesPage() {
  const coloringCats = categories.filter(c => c.slug !== "word-search");
  const wordSearchCat = categories.find(c => c.slug === "word-search");
  const recentBlogs = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <div className="page-container py-12 sm:py-16">
      <Breadcrumb items={[
        { name: "Home", url: "https://tinyanimalworlds.com" },
        { name: "Categories", url: "https://tinyanimalworlds.com/categories" },
      ]} />

      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">
          Categories Directory
        </h1>
        <p className="mt-3 text-cocoa/60 max-w-xl mx-auto text-lg">
          Browse all content types — coloring pages, word searches, and more
        </p>
      </div>

      {/* === Coloring Categories === */}
      <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
        <span>🎨</span> Coloring Categories
        <span className="text-sm font-normal text-cocoa/40 ml-2">({coloringCats.length} themes)</span>
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto mb-12">
        {coloringCats.map((category) => (
          <Link
            key={category.id + category.slug}
            href={`/category/${category.slug}`}
            className="group flex items-center gap-5 p-4 sm:p-5 bg-white rounded-2xl border border-blush/20 shadow-card hover:shadow-xl hover:border-rose/30 transition-all duration-300"
          >
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
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-cocoa group-hover:text-rose transition-colors line-clamp-1">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-cocoa/55 line-clamp-2 leading-relaxed">
                {category.description}
              </p>
              <div className="mt-2.5 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose bg-rose/10 px-2.5 py-1 rounded-full">
                  {category.count} pages
                </span>
                <span className="text-xs text-cocoa/30 group-hover:text-rose group-hover:translate-x-0.5 transition-all">
                  Browse →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* === Word Search Section === */}
      {wordSearchCat && (
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
            <span>🔍</span> Word Search
            <span className="text-sm font-normal text-cocoa/40 ml-2">({wordSearches.length} puzzles)</span>
          </h2>
          <Link
            href="/word-search"
            className="group flex items-center gap-5 p-4 sm:p-5 bg-white rounded-2xl border border-blush/20 shadow-card hover:shadow-xl hover:border-rose/30 transition-all duration-300"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-cream flex-shrink-0 flex items-center justify-center text-4xl">
              🔍
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-cocoa group-hover:text-rose transition-colors">
                {wordSearchCat.name}
              </h3>
              <p className="mt-1 text-sm text-cocoa/55 line-clamp-2 leading-relaxed">
                {wordSearchCat.description}
              </p>
              <div className="mt-2.5 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose bg-rose/10 px-2.5 py-1 rounded-full">
                  {wordSearches.length} puzzles
                </span>
                <span className="text-xs text-cocoa/30 group-hover:text-rose group-hover:translate-x-0.5 transition-all">
                  Browse Word Searches →
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* === Recent Blog Posts === */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
          <span>📝</span> Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recentBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-4 bg-white rounded-xl border border-blush/20 hover:shadow-md hover:border-rose/20 transition-all"
            >
              <h4 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="mt-1 text-xs text-cocoa/50">{post.category} · {post.readTime}</p>
            </Link>
          ))}
        </div>
      </div>

      <AdBanner slot="categories-bottom" />

      {/* === All Content Types Quick Links === */}
      <div className="text-center mt-12 pt-8 border-t border-blush/20 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-cocoa mb-4">Explore All Content</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/coloring-pages" className="px-5 py-2.5 bg-rose text-white rounded-pill text-sm font-semibold hover:bg-rose/90 transition-all">
            🎨 All Coloring Pages
          </Link>
          <Link href="/word-search" className="px-5 py-2.5 bg-white border border-blush/20 text-cocoa rounded-pill text-sm font-semibold hover:border-rose/30 transition-all">
            🔍 Word Search Puzzles
          </Link>
          <Link href="/blog" className="px-5 py-2.5 bg-white border border-blush/20 text-cocoa rounded-pill text-sm font-semibold hover:border-rose/30 transition-all">
            📝 Blog Articles
          </Link>
          <Link href="/collections" className="px-5 py-2.5 bg-white border border-blush/20 text-cocoa rounded-pill text-sm font-semibold hover:border-rose/30 transition-all">
            📚 Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
