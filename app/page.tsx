import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cozy Coloring World | Free Printable Coloring Pages JPG',
  description: 'Download free cute printable coloring pages for kids and adults. Cozy, kawaii, and cottagecore designs. 1700+ free downloads added weekly!',
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
import { blogPosts } from "@/data/blogPosts";
import { collections } from "@/data/collections";
import { faqPages } from "@/data/faqs";
import { wordSearches } from "@/data/wordSearches";

export default function HomePage() {
  const latestPages = (() => {
    const indexMap = new Map(coloringPages.map((p, i) => [p.slug, i]));
    return [...coloringPages].sort((a, b) => {
      const dateCmp = b.createdAt.localeCompare(a.createdAt);
      if (dateCmp !== 0) return dateCmp;
      return (indexMap.get(b.slug) ?? 0) - (indexMap.get(a.slug) ?? 0);
    });
  })().slice(0, 12);

  const popularPages = [...coloringPages]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  const trendingPages = [...coloringPages]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  const latestWordSearches = [...wordSearches]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 6);

  const recentBlogs = [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  const topCollections = collections.slice(0, 8);

  const topFaqs = faqPages.slice(0, 6);

  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Tiny Animal Worlds - Free Printable Coloring Pages",
      "description": "Download 1700+ free printable coloring pages. Cute animals, cozy cottages, tea parties, gardens, and more!",
      "url": "https://tinyanimalworlds.com"
    }) }} />

    <Hero />

    {/* ===== Latest Coloring Pages — 12 cards ===== */}
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
        <Link href="/coloring-pages" className="text-sm font-medium text-rose hover:underline whitespace-nowrap">
          View All {coloringPages.length} Pages →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {latestPages.map((page) => (
          <ColoringCard key={page.id} page={page} />
        ))}
      </div>
    </section>

    
    {/* ===== Latest Word Searches — 6 cards ===== */}
    <section className="page-container py-10 sm:py-14 bg-cream/30">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
            <span>🔍</span> Latest Word Search Puzzles
          </h2>
          <p className="mt-1 text-sm text-cocoa/55">
            Free printable word search puzzles — fun educational activities for kids
          </p>
        </div>
        <Link href="/word-search" className="text-sm font-medium text-rose hover:underline whitespace-nowrap">
          View All {wordSearches.length} Puzzles →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {latestWordSearches.map((ws) => (
          <Link
            key={ws.id}
            href={`/word-search/${ws.slug}`}
            className="bg-white rounded-cozy border border-blush/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">
                {ws.animal === "fox" ? "🦊" : ws.animal === "bunny" ? "🐰" : ws.animal === "bear" ? "🐻" : ws.animal === "duck" ? "🦆" : ws.animal === "cat" ? "🐱" : ws.animal === "dog" ? "🐶" : ws.animal === "hedgehog" ? "🦔" : ws.animal === "squirrel" ? "🐿️" : ws.animal === "raccoon" ? "🦝" : ws.animal === "deer" ? "🦌" : ws.animal === "owl" ? "🦉" : ws.animal === "penguin" ? "🐧" : ws.animal === "koala" ? "🐨" : ws.animal === "panda" ? "🐼" : ws.animal === "tiger" ? "🐯" : ws.animal === "lion" ? "🦁" : ws.animal === "elephant" ? "🐘" : ws.animal === "monkey" ? "🐵" : ws.animal === "giraffe" ? "🦒" : ws.animal === "zebra" ? "🦓" : "🔍"}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-2">
                  {ws.title}
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-cocoa/50">
              <span className="px-2 py-0.5 bg-cream/50 rounded-full">{ws.difficulty}</span>
              <span>{ws.wordCount} words</span>
              <span>Ages {ws.ageRange}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
{/* ===== Explore Hub — Quick Links ===== */}
    <section className="page-container py-8 sm:py-10 bg-cream/50">
      <h2 className="text-xl sm:text-2xl font-bold text-cocoa text-center mb-6">
        <span>🧭</span> Explore Tiny Animal Worlds
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-4xl mx-auto">
        {[
          { emoji: "🎨", label: "All Pages", href: "/coloring-pages" },
          { emoji: "🏷️", label: "Categories", href: "/categories" },
          { emoji: "📚", label: "Collections", href: "/collections" },
          { emoji: "📝", label: "Blog", href: "/blog" },
          { emoji: "❓", label: "FAQ", href: faqPages.length > 0 ? `/faq/${faqPages[0].slug}` : "/faq" },
          { emoji: "🔍", label: "Word Search", href: "/word-search" },
        { emoji: "📌", label: "Pinterest", href: "/collections" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white rounded-xl border border-blush/20 p-3 sm:p-4 hover:shadow-md hover:-translate-y-0.5 transition-all text-center group"
          >
            <span className="text-xl sm:text-2xl block mb-1">{item.emoji}</span>
            <span className="text-xs sm:text-sm font-medium text-cocoa group-hover:text-rose transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* ===== Categories ===== */}
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

    {/* ===== Popular Categories — Text Quick Links ===== */}
    <section className="page-container py-8 sm:py-10">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-cocoa mb-4 flex items-center gap-2">
          <span>🏷️</span> Popular Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blush/20 rounded-full text-xs sm:text-sm text-cocoa/70 hover:text-rose hover:border-rose hover:bg-blush/10 transition-all"
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
              <span className="text-cocoa/30">({cat.count})</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ===== Popular Coloring Pages — 8 cards ===== */}
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
        <Link href="/coloring-pages" className="text-sm font-medium text-rose hover:underline whitespace-nowrap">
          See All →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {popularPages.map((page) => (
          <ColoringCard key={page.id} page={page} />
        ))}
      </div>
    </section>

    {/* ===== Trending This Week — 8 cards ===== */}
    <section className="page-container py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
            <span>🔥</span> Trending This Week
          </h2>
          <p className="mt-1 text-sm text-cocoa/55">
            What&apos;s hot — hand-picked coloring pages everyone is downloading
          </p>
        </div>
        <Link href="/coloring-pages" className="text-sm font-medium text-rose hover:underline whitespace-nowrap">
          Discover More →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trendingPages.map((page) => (
          <ColoringCard key={page.id} page={page} />
        ))}
      </div>
    </section>

    {/* ===== Top Collections ===== */}
    <section className="page-container py-10 sm:py-14 bg-cream/30">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
            <span>📚</span> Top Coloring Collections
          </h2>
          <p className="mt-1 text-sm text-cocoa/55">
            Curated sets of themed coloring pages — download entire collections
          </p>
        </div>
        <Link href="/collections" className="text-sm font-medium text-rose hover:underline whitespace-nowrap">
          All Collections →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {topCollections.map((col) => (
          <Link
            key={col.slug}
            href={`/collections/${col.slug}`}
            className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <span className="text-2xl block mb-2">📚</span>
            <h3 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-2">
              {col.title}
            </h3>
            <p className="text-xs text-cocoa/40 mt-1">{col.pageCount}+ pages</p>
          </Link>
        ))}
      </div>
    </section>

    {/* ===== From Our Blog — 6 recent posts ===== */}
    <section className="page-container py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
            <span>📝</span> From Our Coloring Blog
          </h2>
          <p className="mt-1 text-sm text-cocoa/55">
            Tips, ideas, and inspiration for coloring enthusiasts
          </p>
        </div>
        <Link href="/blog" className="text-sm font-medium text-rose hover:underline whitespace-nowrap">
          Read All {blogPosts.length} Articles →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentBlogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-xl border border-blush/20 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <span className="text-xs text-cocoa/40">{post.date}</span>
            <h3 className="text-sm font-semibold text-cocoa mt-1 group-hover:text-rose transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-xs text-cocoa/50 mt-2 line-clamp-2">{post.description}</p>
            <span className="inline-block mt-3 text-xs font-medium text-rose group-hover:underline">
              Read Article →
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* ===== FAQ Quick Answers ===== */}
    <section className="page-container py-10 sm:py-14 bg-gradient-to-b from-transparent to-lavender/10">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cocoa flex items-center gap-2">
              <span>❓</span> Frequently Asked Questions
            </h2>
            <p className="mt-1 text-sm text-cocoa/55">
              Quick answers to common coloring questions
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {topFaqs.map((faq) => (
            <Link
              key={faq.slug}
              href={`/faq/${faq.slug}`}
              className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <h3 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors">
                {faq.title}
              </h3>
              <p className="text-xs text-cocoa/50 mt-1 line-clamp-2">{faq.description}</p>
              <span className="inline-block mt-2 text-xs font-medium text-rose group-hover:underline">
                Read More →
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog" className="text-sm font-medium text-rose hover:underline">
            Browse All Resources →
          </Link>
        </div>
      </div>
    </section>

    {/* ===== Pinterest Save Board ===== */}
    <section className="page-container py-10 sm:py-14">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-cocoa mb-3 flex items-center justify-center gap-2">
          <span>📌</span> Save to Pinterest
        </h2>
        <p className="text-sm text-cocoa/55 mb-6 max-w-lg mx-auto">
          Love our coloring pages? Save them to your Pinterest boards and share with friends!
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/collections" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e60023] text-white rounded-full text-sm font-semibold hover:bg-[#cc001f] transition-colors shadow-md">
            <span>📌</span> Browse Pinterest Pins
          </Link>
          <a
            href="https://www.pinterest.com/tinyanimalworlds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#e60023] text-[#e60023] rounded-full text-sm font-semibold hover:bg-red-50 transition-colors"
          >
            Follow on Pinterest ↗
          </a>
        </div>
      </div>
    </section>

    {/* ===== How It Works ===== */}
    <section className="page-container py-10 sm:py-14 bg-cream/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-cocoa text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-2xl mx-auto">
          {[
            { emoji: "🔍", title: "Browse & Choose", desc: "Pick from our cozy collections of 1700+ free designs" },
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
      </div>
    </section>

    {/* ===== Ad Banner ===== */}
    <div className="page-container py-6">
      <AdBanner slot="mid-content" />
    </div>

    {/* ===== SEO Content + FAQ ===== */}
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
            Coloring pages are printable black-and-white illustrations for filling with colors. Our free printable coloring pages feature cozy, kawaii, and cottagecore designs — from cute animals and woodland villages to fantasy castles. Every page is a free JPG download with no sign-up required. Browse our <Link href="/coloring-pages" className="text-rose hover:underline">complete collection of {coloringPages.length}+ pages</Link>, explore <Link href="/categories" className="text-rose hover:underline">all categories</Link>, or check out our <Link href="/blog" className="text-rose hover:underline">coloring blog</Link> for tips and inspiration.
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
            Use standard 8.5×11 letter paper or A4. For markers and watercolors, use cardstock (80lb+). Select &ldquo;High Quality&rdquo; in printer settings. Click download, open JPG, print — as many copies as you want! Check our <Link href="/faq/faq-what-paper-is-best-for-coloring-pages" className="text-rose hover:underline">paper guide FAQ</Link> for detailed recommendations.
          </p>

          <h3 className="text-xl font-semibold text-cocoa mt-8 mb-3">Popular Coloring Categories</h3>
          <div className="flex flex-wrap gap-2 mb-5 not-prose">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-cream border border-blush/20 rounded-full text-xs text-cocoa/70 hover:text-rose hover:border-rose transition-all"
              >
                {cat.emoji} {cat.name}
              </Link>
            ))}
            <Link href="/categories" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-blush/20 rounded-full text-xs text-rose hover:underline transition-all">
              + More Categories →
            </Link>
          </div>

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
          <p className="text-center mt-6">
            <Link href="/blog" className="text-sm font-medium text-rose hover:underline">
              Browse More FAQs & Resources →
            </Link>
          </p>
        </div>
      </div>
    </section>

    {/* ===== Bottom Quick Links ===== */}
    <section className="page-container py-10 sm:py-14 bg-cocoa/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-cocoa text-center mb-8">
          <span>🔗</span> Quick Links
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-cocoa mb-3">🎨 Coloring</h3>
            <ul className="space-y-1.5">
              <li><Link href="/coloring-pages" className="text-xs text-cocoa/60 hover:text-rose transition-colors">All Pages</Link></li>
              <li><Link href="/categories" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Categories</Link></li>
              <li><Link href="/collections" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Collections</Link></li>
              <li><Link href="/coloring-pages" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Latest</Link></li>
              <li><Link href="/word-search" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Word Search</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cocoa mb-3">📝 Resources</h3>
            <ul className="space-y-1.5">
              <li><Link href="/blog" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Blog</Link></li>
              <li><Link href="/faq/faq-what-paper-is-best-for-coloring-pages" className="text-xs text-cocoa/60 hover:text-rose transition-colors">FAQ</Link></li>
              <li><Link href="/collections" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Pinterest</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cocoa mb-3">🐾 Top Categories</h3>
            <ul className="space-y-1.5">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`} className="text-xs text-cocoa/60 hover:text-rose transition-colors">
                    {cat.emoji} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cocoa mb-3">📄 Info</h3>
            <ul className="space-y-1.5">
              <li><Link href="/privacy-policy" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Terms</Link></li>
              <li><Link href="/contact" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Contact</Link></li>
              <li><a href="https://www.pinterest.com/tinyanimalworlds" target="_blank" rel="noopener noreferrer" className="text-xs text-cocoa/60 hover:text-rose transition-colors">Pinterest ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Ad Banner — before footer ===== */}
    <div className="page-container py-6">
      <AdBanner slot="above-footer" />
    </div>

    {/* ===== Newsletter ===== */}
    <Newsletter />

  </>);
}
