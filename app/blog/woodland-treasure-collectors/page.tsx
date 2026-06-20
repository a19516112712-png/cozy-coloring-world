import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = generatePageMetadata({
  imageUrl: "/images/coloring/10_fox_book_club_gathering.webp",
  imageWidth: 1200,
  imageHeight: 1500, title: "Woodland Treasure Collectors Coloring Pages: Free Printable Animal Collecting Scenes", description: "Discover woodland treasure collectors! Deer organizing butterfly gardens, raccoons gathering driftwood, mice arranging seashells — free printable collecting and organizing coloring pages.", path: "/blog/woodland-treasure-collectors" });

export default function BlogPost() {
  const title = "Woodland Treasure Collectors: Animal Gathering Coloring Pages"; const date = "2026-06-08";
  const bs = { "@context": "https://schema.org", "@type": "Article", "headline": "Woodland Treasure Collectors: Animal Gathering Coloring Pages", "description": "Discover woodland treasure collectors! Deer organizing butterfly gardens, raccoons gathering driftwood, mice arranging seashells — free printable collecting and organizing coloring pages.", "url": "https://tinyanimalworlds.com/blog/woodland-treasure-collectors", "datePublished": "2026-06-08", "dateModified": "2026-06-08", "author": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" }, "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com", "logo": { "@type": "ImageObject", "url": "https://tinyanimalworlds.com/apple-touch-icon.webp" } } };
  const br = generateBreadcrumbSchema([{ name: "Home", url: "https://tinyanimalworlds.com" }, { name: "Blog", url: "https://tinyanimalworlds.com/blog" }, { name: "Woodland Treasure Collectors: Animal Gathering Coloring Pages", url: "https://tinyanimalworlds.com/blog/woodland-treasure-collectors" }]);
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(br) }} />
    <article className="page-container py-12 sm:py-16"><div className="max-w-3xl mx-auto">
      <nav className="mb-6 text-sm"><Link href="/" className="text-rose hover:underline">Home</Link><span className="mx-2 text-cocoa/30">/</span><Link href="/blog" className="text-rose hover:underline">Blog</Link></nav>
      <h1 className="text-3xl sm:text-4xl font-bold text-cocoa leading-tight mb-3">{title}</h1>
      <p className="text-sm text-cocoa/40 mb-8">Published {date} &middot; 7 min read</p>
      <AdBanner slot="blog-top" className="mb-8" />
      <div className="prose prose-cocoa max-w-none"><p className="text-lg text-cocoa/70 leading-relaxed mb-6">Every tiny animal has a passion for collecting! Whether it&rsquo;s butterflies, driftwood, seashells, or shiny treasures, these woodland creatures take joy in gathering and organizing nature&rsquo;s gifts. Our newest coloring pages celebrate the art of collecting — each scene filled with carefully arranged natural treasures waiting to be brought to life with color.</p>
          <div className="my-6 p-4 bg-cream rounded-lg border border-mocha/10">
            <p className="text-cocoa/70 leading-relaxed text-sm"><strong>Quick Facts About This Collection:</strong> Part of our <Link href="/blog" className="text-rose hover:underline">Kids Activities</Link> series · Free to download and print · No sign-up required · Unlimited copies for personal and classroom use · New content added regularly.</p>
          </div>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Nature&rsquo;s Curators</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Tiny Deer Organizing a Butterfly Garden captures gentle care for delicate winged creatures. Little Fox Arranging Treasure Collection shows a clever fox curating a beautiful display. Tiny Raccoon Collecting Driftwood features a resourceful raccoon gathering nature&rsquo;s sculptural pieces. Each page reveals the personality of the collector through the treasures they choose.</p>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Libraries and Collections</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Little Mouse Organizing a Seed Library is a cozy scene of cataloging and care. Cute Mouse Arranging Seashell Collection brings the beach to the forest with delicate shells. Baby Hedgehog Collecting Shiny objects sparkles with iridescent treasures. These pages are perfect for anyone who loves organizing, sorting, and displaying beautiful things.</p>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Collector Color Palettes</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Let each collection shine with its own color story! Seashells in soft pinks, creams, and pearly whites. Butterflies in brilliant oranges, blues, and yellows. Driftwood in weathered grays and warm browns. Shiny treasures in metallic golds and silvers. The variety of collections means endless color possibilities.</p>
      <AdBanner slot="blog-mid" className="my-8" />
      <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Download Free Pages</h2>
      <p className="text-cocoa/75 leading-relaxed mb-4">All free — no sign-up. Browse <Link href="/categories/cute-animals" className="text-rose hover:underline">Cute Animals</Link>, <Link href="/categories/cozy-coloring" className="text-rose hover:underline">Cozy Coloring</Link>, <Link href="/categories/cottagecore-coloring" className="text-rose hover:underline">Cottagecore Coloring</Link>.</p>
      <ul className="space-y-2 mb-6">            <li><Link href="/coloring/tiny-deer-organizing-a-butterf" className="text-rose hover:underline">Free Printable Tiny Deer Organizing a Butterfly Garden Coloring Page</Link></li>
            <li><Link href="/coloring/little-fox-arranging-treasure-" className="text-rose hover:underline">Free Printable Little Fox Arranging Treasure Collection Coloring Page</Link></li>
            <li><Link href="/coloring/tiny-raccoon-collecting-driftw" className="text-rose hover:underline">Free Printable Tiny Raccoon Collecting Driftwood Coloring Page</Link></li>
            <li><Link href="/coloring/little-mouse-organizing-a-seed" className="text-rose hover:underline">Free Printable Little Mouse Organizing a Seed Library Coloring Page</Link></li>
            <li><Link href="/coloring/cute-mouse-arranging-seashell-" className="text-rose hover:underline">Free Printable Cute Mouse Arranging Seashell Collection Coloring Page</Link></li>
            <li><Link href="/coloring/baby-hedgehog-collecting-shiny" className="text-rose hover:underline">Free Printable Baby Hedgehog Collecting Shiny Treasures Coloring Page</Link></li></ul>
      <p className="text-cocoa/75 leading-relaxed mb-6">1,480+ free coloring pages. Print unlimited copies!</p>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-6">Related Pages</h2><RelatedArticles categoryId="cute-animals" type="coloring" count={6} title="More to Color" /></section>
      <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2><RelatedArticles currentSlug="woodland-treasure-collectors" type="article" count={3} title="More Articles" /></section>
      <Newsletter className="mb-12" />
    </div></article>
  </>);
}
