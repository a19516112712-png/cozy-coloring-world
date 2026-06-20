import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = generatePageMetadata({
  imageUrl: "/images/coloring/24_camping_fox_family.webp",
  imageWidth: 1200,
  imageHeight: 1500, title: "Lagoon & Ocean Printable Activities: Free Word Search for Elementary Kids", description: "Dive into lagoon and ocean learning with free printable word search puzzles. Coral reefs, mangroves, stingrays!", path: "/blog/lagoon-ocean-printable-activities-elementary" });

export default function BlogPost() {
  const title = "Lagoon & Ocean Printable Activities: Free Word ..."; const date = "2026-06-13";
  const bs = { "@context": "https://schema.org", "@type": "Article", "headline": "Lagoon & Ocean Printable Activities: Free Word Search for Elementary Kids", "description": "Dive into lagoon and ocean learning with free printable word search puzzles. Coral reefs, mangroves, stingrays!", "url": "https://tinyanimalworlds.com/blog/lagoon-ocean-printable-activities-elementary", "datePublished": "2026-06-13", "dateModified": "2026-06-13", "author": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" }, "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com", "logo": { "@type": "ImageObject", "url": "https://tinyanimalworlds.com/apple-touch-icon.webp" } } };
  const br = generateBreadcrumbSchema([{ name: "Home", url: "https://tinyanimalworlds.com" }, { name: "Blog", url: "https://tinyanimalworlds.com/blog" }, { name: "Lagoon & Ocean Printable Activities: Free Word ...", url: "https://tinyanimalworlds.com/blog/lagoon-ocean-printable-activities-elementary" }]);
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(br) }} />
    <article className="page-container py-12 sm:py-16"><div className="max-w-3xl mx-auto">
      <nav className="mb-6 text-sm"><Link href="/" className="text-rose hover:underline">Home</Link><span className="mx-2 text-cocoa/30">/</span><Link href="/blog" className="text-rose hover:underline">Blog</Link></nav>
      <h1 className="text-3xl sm:text-4xl font-bold text-cocoa leading-tight mb-3">{title}</h1>
      <p className="text-sm text-cocoa/40 mb-8">Published {date} &middot; 7 min read</p>
      <AdBanner slot="blog-top" className="mb-8" />
      <div className="prose prose-cocoa max-w-none">
          <p className="text-lg text-cocoa/70 leading-relaxed mb-6">Dive into lagoon and ocean learning with free printable word search puzzles. Coral reefs, mangroves, stingrays! Our ever-growing collection now features 1400+ animal word search puzzles and 1700+ free printable coloring pages.</p>
          <div className="my-6 p-4 bg-cream rounded-lg border border-mocha/10">
            <p className="text-cocoa/70 leading-relaxed text-sm"><strong>Quick Facts About This Collection:</strong> Part of our <Link href="/blog" className="text-rose hover:underline">Kids Activities</Link> series · Free to download and print · No sign-up required · Unlimited copies for personal and classroom use · New content added regularly.</p>
          </div>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Why Printable Activities Matters</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Printable activities like word searches and coloring pages are powerful educational tools. Kids develop fine motor skills, practice letter and word recognition, build vocabulary, and gain confidence.</p>
          <p className="text-cocoa/75 leading-relaxed mb-4">Whether for classroom morning work, homeschool curriculum, or screen-free entertainment, our printable resources are flexible, accessible, and educational.</p>
          <AdBanner slot="blog-mid" className="my-8" />
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Getting Started</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Browse our collection, find the animal or theme your child loves, and download instantly. No sign-up, no subscription — just free printables.</p>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Explore Our Collection</h2>
          <ul className="space-y-2 mb-6">
            <li><Link href="/word-search" className="text-rose hover:underline">1400+ Word Search Puzzles</Link></li>
            <li><Link href="/coloring-pages" className="text-rose hover:underline">1700+ Coloring Pages</Link></li>
            <li><Link href="/categories" className="text-rose hover:underline">Browse Categories</Link></li>
          </ul>
          <h3 className="text-xl font-bold text-cocoa mt-8 mb-3">Featured Word Searches</h3>
          <ul className="space-y-2 mb-6">
            <li><Link href="/word-search/wolf-swamp-word-search" className="text-rose hover:underline">Wolf Swamp Word Search</Link></li>
            <li><Link href="/word-search/otter-lagoon-word-search" className="text-rose hover:underline">Otter Lagoon Word Search</Link></li>
            <li><Link href="/word-search/beaver-orchard-word-search" className="text-rose hover:underline">Beaver Orchard Word Search</Link></li>
          </ul>
          <h3 className="text-xl font-bold text-cocoa mt-8 mb-3">Related Coloring Pages</h3>
          <ul className="space-y-2 mb-6">
            <li><Link href="/coloring/cute-fox-forest-coloring" className="text-rose hover:underline">Cute Fox Forest Coloring</Link></li>
            <li><Link href="/coloring/cute-owl-reading-coloring-page" className="text-rose hover:underline">Cute Owl Reading</Link></li>
            <li><Link href="/coloring/cute-bear-reading-coloring" className="text-rose hover:underline">Cute Bear Reading</Link></li>
          </ul>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-6">FAQ</h2><div className="space-y-3"><details key={0} className="group bg-cream/30 rounded-xl border border-blush/10 overflow-hidden"><summary className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-cream transition-colors font-medium text-cocoa text-sm">Are these free?<span className="text-rose text-xs group-open:rotate-180 transition-transform ml-2">▼</span></summary><p className="px-3.5 pb-3.5 text-xs text-cocoa/65">Yes! All 1400+ puzzles and 1700+ coloring pages are completely free. No sign-up needed.</p></details>
          <details key={1}><summary className="flex items-center justify-between p-3.5 cursor-pointer font-medium text-cocoa text-sm">What ages?<span className="text-rose text-xs group-open:rotate-180 transition-transform ml-2">▼</span></summary><p className="px-3.5 pb-3.5 text-xs text-cocoa/65">Easy (4-7), Medium (6-10), Hard (8-12).</p></details>
          <details key={2}><summary className="flex items-center justify-between p-3.5 cursor-pointer font-medium text-cocoa text-sm">Classroom use?<span className="text-rose text-xs group-open:rotate-180 transition-transform ml-2">▼</span></summary><p className="px-3.5 pb-3.5 text-xs text-cocoa/65">Yes! Print unlimited copies.</p></details></div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are these free?","acceptedAnswer":{"@type":"Answer","text":"Yes! All 1400+ puzzles and 1700+ coloring pages are completely free."}},{"@type":"Question","name":"What ages?","acceptedAnswer":{"@type":"Answer","text":"Easy (4-7), Medium (6-10), Hard (8-12)."}},{"@type":"Question","name":"Classroom use?","acceptedAnswer":{"@type":"Answer","text":"Yes! Print unlimited copies for classroom use."}}]}) }} />
      </section>
      <section className="mb-10"><RelatedArticles currentSlug="lagoon-ocean-printable-activities-elementary" type="article" count={3} title="More Articles" /></section>
      <Newsletter className="mb-12" />
    </div></article>
  </>);
}