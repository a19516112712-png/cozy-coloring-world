import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { collections } from "@/data/collections";

export const metadata: Metadata = generatePageMetadata({
  title: "Coloring Page Collections | Themed Bundles for Kids & Adults | Tiny Animal Worlds",
  description: "Browse curated collections of themed coloring pages — foxes, bunnies, bears, cottagecore scenes, and more. Free printable JPG bundles organized by theme for easy discovery.",
  path: "/collections",
});

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Coloring Page Collections | Tiny Animal Worlds",
  "description": "Curated collections of themed coloring pages organized by animal, scene, and season. Browse 100+ themed bundles.",
  "url": "https://tinyanimalworlds.com/collections",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": collections.map((col, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://tinyanimalworlds.com/collections/${col.slug}`,
      "name": col.title,
    })),
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://tinyanimalworlds.com" },
  { name: "Collections", url: "https://tinyanimalworlds.com/collections" },
]);

export default function CollectionsPage() {
  const animalCollections = collections.filter((c) => c.type === "animal");
  const themeCollections = collections.filter((c) => c.type !== "animal");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="page-container py-12 sm:py-16">
        <Breadcrumb items={[
          { name: "Home", url: "https://tinyanimalworlds.com" },
          { name: "Collections", url: "https://tinyanimalworlds.com/collections" },
        ]} />

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">
            Coloring Page Collections 📚
          </h1>
          <p className="mt-3 text-cocoa/60 max-w-2xl mx-auto text-lg">
            Browse our curated collections of themed coloring pages. Each collection groups related pages together so you can explore entire themes — from foxes and bunnies to cottagecore villages and seasonal scenes. All pages are free printable JPGs.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="text-sm font-medium text-rose bg-rose/10 px-4 py-1.5 rounded-pill">
              {collections.length} themed collections
            </span>
            <span className="text-sm text-cocoa/40">📥 Free JPG downloads</span>
          </div>
        </div>

        <AdBanner slot="blog-top" className="mb-10" />

        {/* === Animal Collections === */}
        {animalCollections.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
              <span>🐾</span> Animal Collections
              <span className="text-sm font-normal text-cocoa/40 ml-2">({animalCollections.length} collections)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {animalCollections.map((col) => (
                <Link
                  key={col.slug}
                  href={`/collections/${col.slug}`}
                  className="group bg-white rounded-xl border border-blush/20 p-5 hover:shadow-md hover:border-rose/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">
                      {col.theme === "fox" ? "🦊" :
                       col.theme === "bunny" ? "🐰" :
                       col.theme === "rabbit" ? "🐇" :
                       col.theme === "deer" ? "🦌" :
                       col.theme === "hedgehog" ? "🦔" :
                       col.theme === "mouse" ? "🐭" :
                       col.theme === "cat" ? "🐱" :
                       col.theme === "bear" ? "🐻" :
                       col.theme === "frog" ? "🐸" :
                       col.theme === "hamster" ? "🐹" :
                       col.theme === "squirrel" ? "🐿️" :
                       col.theme === "raccoon" ? "🦝" :
                       col.theme === "otter" ? "🦦" :
                       col.theme === "ferret" ? "🐾" :
                       col.theme === "mole" ? "🐀" :
                       col.theme === "chinchilla" ? "🐿️" :
                       col.theme === "duck" ? "🦆" :
                       col.theme === "penguin" ? "🐧" :
                       col.theme === "owl" ? "🦉" :
                       col.theme === "panda" ? "🐼" :
                       col.theme === "dragon" ? "🐉" :
                       col.theme === "unicorn" ? "🦄" :
                       "🐾"}
                    </span>
                    <h3 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-1">
                      {col.title}
                    </h3>
                  </div>
                  <p className="text-xs text-cocoa/50 line-clamp-2 mb-3">{col.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-rose bg-rose/10 px-2.5 py-1 rounded-full">
                      {col.pageCount} pages
                    </span>
                    <span className="text-xs text-cocoa/40 group-hover:text-rose transition-colors">
                      Browse →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* === Theme Collections === */}
        {themeCollections.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
              <span>🎨</span> Theme Collections
              <span className="text-sm font-normal text-cocoa/40 ml-2">({themeCollections.length} collections)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {themeCollections.map((col) => (
                <Link
                  key={col.slug}
                  href={`/collections/${col.slug}`}
                  className="group bg-white rounded-xl border border-blush/20 p-5 hover:shadow-md hover:border-rose/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">📚</span>
                    <h3 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-1">
                      {col.title}
                    </h3>
                  </div>
                  <p className="text-xs text-cocoa/50 line-clamp-2 mb-3">{col.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-rose bg-rose/10 px-2.5 py-1 rounded-full">
                      {col.pageCount} pages
                    </span>
                    <span className="text-xs text-cocoa/40 group-hover:text-rose transition-colors">
                      Browse →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* === Bottom Quick Links === */}
        <section className="mt-12 pt-10 border-t border-blush/20">
          <h2 className="text-xl font-bold text-cocoa text-center mb-6">
            <span>🔗</span> Explore More
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/coloring-pages" className="px-5 py-2.5 bg-rose text-white rounded-pill text-sm font-semibold hover:bg-rose/90 transition-all">
              🎨 All Coloring Pages
            </Link>
            <Link href="/categories" className="px-5 py-2.5 bg-white border border-blush/20 text-cocoa rounded-pill text-sm font-semibold hover:border-rose/30 transition-all">
              🏷️ Categories
            </Link>
            <Link href="/word-search" className="px-5 py-2.5 bg-white border border-blush/20 text-cocoa rounded-pill text-sm font-semibold hover:border-rose/30 transition-all">
              🔍 Word Search
            </Link>
            <Link href="/blog" className="px-5 py-2.5 bg-white border border-blush/20 text-cocoa rounded-pill text-sm font-semibold hover:border-rose/30 transition-all">
              📝 Blog
            </Link>
          </div>
        </section>

        <AdBanner slot="below-content" className="mt-10" />
      </div>
    </>
  );
}
