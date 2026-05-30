import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { coloringPages } from "@/data/coloring-pages";

interface Props {
  categoryId?: string;
  categoryName?: string;
  currentSlug?: string;
  type?: "blog" | "article" | "coloring";
  count?: number;
  title?: string;
}

export default function RelatedArticles({
  categoryId,
  currentSlug,
  type = "article",
  count = 6,
  title,
}: Props) {
  let items: Array<{ slug: string; title: string; subtitle?: string }> = [];

  if (type === "article" || type === "blog") {
    const all = [...blogPosts];
    if (currentSlug) {
      const filtered = all.filter((p) => p.slug !== currentSlug);
      if (categoryId) {
        const keyword = categoryId.replace(/-/g, " ").toLowerCase();
        items = filtered
          .sort((a, b) => {
            const aMatch = a.slug.toLowerCase().includes(keyword) ? 1 : 0;
            const bMatch = b.slug.toLowerCase().includes(keyword) ? 1 : 0;
            return bMatch - aMatch;
          })
          .slice(0, count)
          .map((p) => ({ slug: p.slug, title: p.title, subtitle: p.category }));
      } else {
        items = filtered.slice(0, count).map((p) => ({ slug: p.slug, title: p.title, subtitle: p.category }));
      }
    } else {
      items = all.slice(0, count).map((p) => ({ slug: p.slug, title: p.title, subtitle: p.category }));
    }
  } else if (type === "coloring") {
    const all = [...coloringPages];
    if (currentSlug) {
      const filtered = all.filter((p) => p.slug !== currentSlug);
      if (categoryId) {
        items = filtered
          .filter((p) => p.category === categoryId)
          .slice(0, count)
          .map((p) => ({ slug: p.slug, title: p.title, subtitle: p.category.replace(/-/g, " ") }));
      } else {
        items = filtered.slice(0, count).map((p) => ({ slug: p.slug, title: p.title, subtitle: p.category.replace(/-/g, " ") }));
      }
    } else {
      items = all.slice(0, count).map((p) => ({ slug: p.slug, title: p.title, subtitle: p.category.replace(/-/g, " ") }));
    }
  }

  if (items.length === 0) return null;

  const displayTitle = title || (type === "article" ? "Related Articles" : "You May Also Like");

  return (
    <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
      <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
        <span>{type === "article" ? "📝" : "✨"}</span> {displayTitle}
      </h3>
      <div className="space-y-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={type === "coloring" ? `/coloring/${item.slug}` : `/blog/${item.slug}`}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-lg flex-shrink-0 border border-blush/10">
              {type === "article" ? "📝" : "🎨"}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">
                {item.title}
              </p>
              {item.subtitle && (
                <span className="text-xs text-cocoa/40">{item.subtitle}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
