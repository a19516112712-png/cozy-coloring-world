import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cozy Coloring World | Free Printable Coloring Pages JPG',
  description: 'Download free cute printable coloring pages for kids and adults. Cozy, kawaii, and cottagecore designs. 300+ free JPG downloads added weekly!',
  path: '/',
});

import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ColoringCard from "@/components/ColoringCard";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import { categories } from "@/data/categories";
import { coloringPages } from "@/data/coloring-pages";

export default function HomePage() {
  const latestPages = [...coloringPages]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 8);
  const popularPages = [...coloringPages]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
  const trendingPages = [...coloringPages]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <>
      <Hero />

      {/* Latest Coloring Pages — 8 cards, immediately below Hero */}
      <section className="page-container py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
              <span>🆕</span> Latest Coloring Pages
            </h2>
            <p className="mt-1 text-sm text-cocoa/55">
              Fresh free printable coloring pages — download and start coloring today
            </p>
          </div>
          <Link
            href="/coloring-pages"
            className="text-sm font-medium text-rose hover:underline whitespace-nowrap"
          >
            View All {coloringPages.length} Pages →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {latestPages.map((page) => (
            <ColoringCard key={page.id} page={page} />
          ))}
        </div>
      </section>

      {/* Categories — image card style */}
      <section className="page-container py-10 sm:py-14">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
            <span>🎨</span> Choose Your Coloring Adventure
          </h2>
          <p className="mt-1 text-sm text-cocoa/55">
            Browse our cozy collections — cute animals, kawaii, fantasy, and more
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Popular Coloring Pages */}
      <section className="page-container py-10 sm:py-14 bg-gradient-to-b from-transparent to-blush/10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
              <span>💖</span> Popular Coloring Pages
            </h2>
            <p className="mt-1 text-sm text-cocoa/55">
              Most loved by our community — free to download and print
            </p>
          </div>
          <Link
            href="/coloring-pages"
            className="text-sm font-medium text-rose hover:underline whitespace-nowrap"
          >
            See All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularPages.map((page) => (
            <ColoringCard key={page.id} page={page} />
          ))}
        </div>
      </section>

      {/* Trending This Week */}
      <section className="page-container py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
              <span>🔥</span> Trending This Week
            </h2>
            <p className="mt-1 text-sm text-cocoa/55">
              What everyone&apos;s coloring right now — catch the trend
            </p>
          </div>
          <Link
            href="/category/cute-animals"
            className="text-sm font-medium text-rose hover:underline whitespace-nowrap"
          >
            Explore Cute Animals →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trendingPages.map((page) => (
            <ColoringCard key={page.id} page={page} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="page-container py-10 sm:py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-cocoa text-center mb-2">How It Works 🩷</h2>
        <p className="text-center text-sm text-cocoa/55 mb-8">Get coloring in three easy steps</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { emoji: "🔍", title: "Browse & Choose", desc: "Pick from our cozy collections of 29+ free designs" },
            { emoji: "📥", title: "Download Free JPG", desc: "One click — no sign-up, no subscription needed" },
            { emoji: "🖍️", title: "Print & Color", desc: "Print at home and enjoy relaxing coloring time" },
          ].map((item, i) => (
            <div key={i} className="text-center p-5 rounded-cozy border border-blush/20 bg-white shadow-card">
              <span className="text-3xl block mb-3">{item.emoji}</span>
              <h3 className="font-semibold text-cocoa text-sm">{item.title}</h3>
              <p className="mt-1.5 text-xs text-cocoa/55">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Banner — moved below main content, not in first viewport */}
      <div className="page-container py-6">
        <AdBanner slot="mid-content" />
      </div>

      {/* Amazon Book Promo */}
      <div className="page-container py-6">
      </div>

      {/* SEO Content + FAQ */}
      <section className="page-container py-10 sm:py-14">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-cocoa max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-cocoa text-center mb-2">
              Free Printable Coloring Pages for Kids and Adults
            </h2>
            <p className="text-center text-cocoa/45 text-sm mb-8">
              Discover the joy of coloring — download, print, and relax with our free JPG collection
            </p>

            <h3 className="text-xl font-semibold text-cocoa mt-8 mb-3">What Are Coloring Pages?</h3>
            <p className="text-cocoa/70 text-sm leading-relaxed mb-5">
              Coloring pages are printable black-and-white illustrations for filling with colors. Our free printable coloring pages feature cozy, kawaii, and cottagecore designs — from cute animals and woodland villages to fantasy castles. Every page is a free JPG download with no sign-up required.
            </p>

            <h3 className="text-xl font-semibold text-cocoa mt-8 mb-3">Benefits of Coloring</h3>
            <ul className="space-y-2 text-sm text-cocoa/70">
              <li><strong>Stress relief</strong> — Coloring reduces anxiety by focusing attention on a creative task</li>
              <li><strong>Improves focus</strong> — Building attention spans for both children and adults</li>
              <li><strong>Fine motor skills</strong> — Gripping crayons builds hand coordination for kids</li>
              <li><strong>Screen-free fun</strong> — A calming analog break from digital devices</li>
            </ul>

            <h3 className="text-xl font-semibold text-cocoa mt-8 mb-3">How to Print</h3>
            <p className="text-cocoa/70 text-sm leading-relaxed mb-5">
              Use standard 8.5×11 letter paper or A4. For markers and watercolors, use cardstock (80lb+). Select &ldquo;High Quality&rdquo; in printer settings. Click download, open JPG, print — as many copies as you want!
            </p>

            <h3 className="text-xl font-semibold text-cocoa mt-8 mb-3">Frequently Asked Questions</h3>
            <div className="space-y-2 not-prose">
              {[
                { q: "Are these coloring pages really free?", a: "Yes! All pages are 100% free — no sign-up, no subscription, no hidden costs." },
                { q: "Can I use these in my classroom?", a: "Absolutely! Teachers can print for classroom use. Kids pages have simple bold outlines." },
                { q: "How often do you add new pages?", a: "Weekly! Subscribe to our newsletter or check back for fresh free coloring pages." },
                { q: "What materials work best?", a: "Crayons, colored pencils, markers, gel pens, watercolors. Use cardstock for wet media." },
                { q: "Can I share colored pages online?", a: "We love seeing your work! Tag us and link back to our site so others can download originals." },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-blush/20 shadow-card overflow-hidden">
                  <summary className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-cream/50 transition-colors font-medium text-cocoa text-xs sm:text-sm">
                    {faq.q}
                    <span className="text-rose text-[10px] group-open:rotate-180 transition-transform ml-2">▼</span>
                  </summary>
                  <p className="px-3.5 pb-3.5 text-xs sm:text-sm text-cocoa/65 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner — before footer */}
      <div className="page-container py-6">
        <AdBanner slot="above-footer" />
      </div>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
