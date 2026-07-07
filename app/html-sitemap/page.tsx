import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { categories } from "@/data/categories";
import { coloringPages } from "@/data/coloring-pages";
import { blogPosts } from "@/data/blogPosts";
import { collections } from "@/data/collections";
import { faqPages } from "@/data/faqs";

export const metadata: Metadata = generatePageMetadata({
  title: "HTML Sitemap | All Coloring Pages, Categories & Resources | Tiny Animal Worlds",
  description: "Browse our complete HTML sitemap — all coloring pages, categories, collections, FAQ pages, and blog posts. Find every page on Tiny Animal Worlds.",
  path: "/html-sitemap",
});

export default function HtmlSitemapPage() {
  const sortedPages = [...coloringPages].sort((a, b) => a.title.localeCompare(b.title));
  const latestPages = [...coloringPages].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 50);

  return (
    <div className="page-container py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">HTML Sitemap</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-4">HTML Sitemap</h1>
        <p className="text-cocoa/60 mb-10">Complete index of all pages on Tiny Animal Worlds — {coloringPages.length} coloring pages, {categories.length} categories, {collections.length} collections, {faqPages.length} FAQs, and {blogPosts.length} blog posts.</p>

        {/* Main Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">📄 Main Pages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "🏠 Home", href: "/" },
              { label: "🎨 All Coloring Pages", href: "/coloring-pages" },
              { label: "🏷️ Categories", href: "/categories" },
              { label: "📚 Collections", href: "/collections" },
              { label: "📝 Blog", href: "/blog" },
              { label: "📌 Pinterest", href: "/collections" },
              { label: "ℹ️ About", href: "/about" },
              { label: "📧 Contact", href: "/contact" },
              { label: "🔒 Privacy", href: "/privacy" },
              { label: "📜 Terms", href: "/terms" },
              { label: "📋 Editorial Policy", href: "/editorial-policy" },
              { label: "🗺️ HTML Sitemap", href: "/html-sitemap" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-cocoa/70 hover:text-rose transition-colors py-1">
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">
            <Link href="/categories" className="hover:text-rose transition-colors">🏷️ Categories ({categories.length})</Link>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="flex items-center gap-2 text-sm text-cocoa/70 hover:text-rose transition-colors py-1">
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="text-xs text-cocoa/30">({cat.count})</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Collections */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">
            <Link href="/collections" className="hover:text-rose transition-colors">📚 Collections ({collections.length})</Link>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {collections.map((col) => (
              <Link key={col.slug} href={`/collections/${col.slug}`} className="text-sm text-cocoa/70 hover:text-rose transition-colors py-1">
                📚 {col.title}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Pages */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">
            <Link href="/blog" className="hover:text-rose transition-colors">❓ FAQ Pages ({faqPages.length})</Link>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {faqPages.map((faq) => (
              <Link key={faq.slug} href={`/faq/${faq.slug}`} className="text-sm text-cocoa/70 hover:text-rose transition-colors py-1">
                ❓ {faq.title}
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Coloring Pages (50) */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">🆕 Latest Coloring Pages (50)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {latestPages.map((page) => (
              <Link key={page.id} href={`/coloring/${page.slug}`} className="text-sm text-cocoa/70 hover:text-rose transition-colors py-1 truncate">
                🎨 {page.title}
              </Link>
            ))}
          </div>
        </section>

        {/* All Coloring Pages A-Z */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">🎨 All Coloring Pages A-Z ({coloringPages.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sortedPages.map((page) => (
              <Link key={page.id} href={`/coloring/${page.slug}`} className="text-sm text-cocoa/70 hover:text-rose transition-colors py-1 truncate">
                🎨 {page.title}
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-cocoa mb-4">
            <Link href="/blog" className="hover:text-rose transition-colors">📝 Blog Posts ({blogPosts.length})</Link>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="text-sm text-cocoa/70 hover:text-rose transition-colors py-1 truncate">
                📝 {post.title}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
