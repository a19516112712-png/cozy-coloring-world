import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = generatePageMetadata({
  imageUrl: "/images/coloring/100_Cozy_Attic_Reading_Nook.webp",
  imageWidth: 1200,
  imageHeight: 1500, title: "Cozy Collection Rooms Coloring Pages: Free Printable Display Room Scenes", description: "Step into cozy collection rooms! Botanical displays, feather collections, lantern rooms, mushroom exhibits, and nature corners — free printable display room coloring pages.", path: "/blog/cozy-collection-rooms" });

export default function BlogPost() {
  const title = "Cozy Collection Rooms: Display Room Coloring Pages"; const date = "2026-06-08";
  const bs = { "@context": "https://schema.org", "@type": "Article", "headline": "Cozy Collection Rooms: Display Room Coloring Pages", "description": "Step into cozy collection rooms! Botanical displays, feather collections, lantern rooms, mushroom exhibits, and nature corners — free printable display room coloring pages.", "url": "https://tinyanimalworlds.com/blog/cozy-collection-rooms", "datePublished": "2026-06-08", "dateModified": "2026-06-08", "author": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" }, "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com", "logo": { "@type": "ImageObject", "url": "https://tinyanimalworlds.com/apple-touch-icon.webp" } } };
  const br = generateBreadcrumbSchema([{ name: "Home", url: "https://tinyanimalworlds.com" }, { name: "Blog", url: "https://tinyanimalworlds.com/blog" }, { name: "Cozy Collection Rooms: Display Room Coloring Pages", url: "https://tinyanimalworlds.com/blog/cozy-collection-rooms" }]);
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(br) }} />
    <article className="page-container py-12 sm:py-16"><div className="max-w-3xl mx-auto">
      <nav className="mb-6 text-sm"><Link href="/" className="text-rose hover:underline">Home</Link><span className="mx-2 text-cocoa/30">/</span><Link href="/blog" className="text-rose hover:underline">Blog</Link></nav>
      <h1 className="text-3xl sm:text-4xl font-bold text-cocoa leading-tight mb-3">{title}</h1>
      <p className="text-sm text-cocoa/40 mb-8">Published {date} &middot; 6 min read</p>
      <AdBanner slot="blog-top" className="mb-8" />
      <div className="prose prose-cocoa max-w-none"><p className="text-lg text-cocoa/70 leading-relaxed mb-6">There&rsquo;s something magical about a room dedicated to collecting and displaying beautiful things! Our cozy collection room coloring pages invite you into specially curated spaces filled with botanical specimens, delicate feathers, glowing lanterns, fascinating mushrooms, and treasured natural wonders. Each room is a miniature museum of woodland beauty.</p>
          <div className="my-6 p-4 bg-cream rounded-lg border border-mocha/10">
            <p className="text-cocoa/70 leading-relaxed text-sm"><strong>Quick Facts About This Collection:</strong> Part of our <Link href="/blog" className="text-rose hover:underline">Kids Activities</Link> series · Free to download and print · No sign-up required · Unlimited copies for personal and classroom use · New content added regularly.</p>
          </div>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Botanical and Nature Collections</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Cozy Botanical Collection Room overflows with pressed flowers, framed specimens, and potted plants. Cozy Bird Feather Collection Room displays iridescent feathers in delicate arrangements. Cozy Nature Collection Corner brings the outdoor world inside with stones, pinecones, and dried herbs beautifully arranged on shelves and tables.</p>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Glowing Collections and Display Rooms</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Cozy Lantern Collection Room glows with warm light from dozens of unique lanterns. Cozy Mushroom Display Room showcases tiny fungi in glass cases and wooden display boxes. Cozy Cottage Display Room features treasured heirlooms, vintage finds, and handmade decorations — a celebration of cozy cottage style.</p>
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Collection Room Color Palettes</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Use warm, cozy lighting tones for lantern rooms — golden yellows, soft ambers, and gentle candlelight glows. For botanical rooms, rich greens, muted florals, and earthy browns. Feather collections shine with soft blues, iridescent purples, and pearly whites. Each collection room has its own personality through color!</p>
      <AdBanner slot="blog-mid" className="my-8" />
      <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Download Free Pages</h2>
      <p className="text-cocoa/75 leading-relaxed mb-4">All free — no sign-up. Browse <Link href="/categories/cozy-coloring" className="text-rose hover:underline">Cozy Coloring</Link>, <Link href="/categories/cottagecore-coloring" className="text-rose hover:underline">Cottagecore Coloring</Link>, <Link href="/categories/cute-animals" className="text-rose hover:underline">Cute Animals</Link>.</p>
      <ul className="space-y-2 mb-6">            <li><Link href="/coloring/cozy-botanical-collection-room" className="text-rose hover:underline">Free Printable Cozy Botanical Collection Room Coloring Page</Link></li>
            <li><Link href="/coloring/cozy-bird-feather-collection-r" className="text-rose hover:underline">Free Printable Cozy Bird Feather Collection Room Coloring Page</Link></li>
            <li><Link href="/coloring/cozy-cottage-display-room" className="text-rose hover:underline">Free Printable Cozy Cottage Display Room Coloring Page</Link></li>
            <li><Link href="/coloring/cozy-nature-collection-corner" className="text-rose hover:underline">Free Printable Cozy Nature Collection Corner Coloring Page</Link></li>
            <li><Link href="/coloring/cozy-lantern-collection-room" className="text-rose hover:underline">Free Printable Cozy Lantern Collection Room Coloring Page</Link></li>
            <li><Link href="/coloring/cozy-mushroom-display-room" className="text-rose hover:underline">Free Printable Cozy Mushroom Display Room Coloring Page</Link></li></ul>
      <p className="text-cocoa/75 leading-relaxed mb-6">1,480+ free coloring pages. Print unlimited copies!</p>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-6">Related Pages</h2><RelatedArticles categoryId="cozy-coloring" type="coloring" count={6} title="More to Color" /></section>
      <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2><RelatedArticles currentSlug="cozy-collection-rooms" type="article" count={3} title="More Articles" /></section>
      <Newsletter className="mb-12" />
    </div></article>
  </>);
}
