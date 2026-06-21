import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = generatePageMetadata({
  imageUrl: "/images/coloring/10_Beaver_Hosting_a_River_Enginee.webp",
  imageWidth: 1200,
  imageHeight: 1500,
  title: "Riverside Otter Coloring Pages: 30 Cozy River Bank Scenes Free Printable",
  description: "Download 30 free printable riverside otter coloring pages! Fishing docks, tea tables, cottage porches, and sunset scenes — perfect cozy coloring for all ages.",
  path: "/blog/riverside-otter-coloring",
});

export default function BlogPost() {
  const title = "Riverside Otter Coloring Pages: Cozy River Bank Scenes";
  const date = "2026-06-05";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Riverside Otter Coloring Pages: Cozy River Bank Scenes",
    "description": "Download 30 free printable riverside otter coloring pages! Fishing docks, tea tables, cottage porches, and sunset scenes — perfect cozy coloring for all ages.",
    "url": "https://tinyanimalworlds.com/blog/riverside-otter-coloring",
    "datePublished": "2026-06-05",
    "dateModified": "2026-06-05",
    "author": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" },
    "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com", "logo": { "@type": "ImageObject", "url": "https://tinyanimalworlds.com/apple-touch-icon.webp" } }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://tinyanimalworlds.com" },
    { name: "Blog", url: "https://tinyanimalworlds.com/blog" },
    { name: "Riverside Otter Coloring Pages: Cozy River Bank Scenes", url: "https://tinyanimalworlds.com/blog/riverside-otter-coloring" }
  ]);

  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <article className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <Link href="/blog" className="text-rose hover:underline">Blog</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa leading-tight mb-3">{title}</h1>
        <p className="text-sm text-cocoa/40 mb-8">Published {date} · 6 min read</p>
        <AdBanner slot="blog-top" className="mb-8" />
        <div className="prose prose-cocoa max-w-none">
          <p className="text-lg text-cocoa/70 leading-relaxed mb-6">There is nothing quite as peaceful as a riverside scene with adorable otters enjoying life by the water. Our new collection of 30 otter coloring pages captures every cozy riverside moment — from quiet fishing docks to lively tea parties on the riverbank.</p>
          <div className="my-6 p-4 bg-cream rounded-lg border border-mocha/10">
            <p className="text-cocoa/70 leading-relaxed text-sm"><strong>Quick Facts About This Collection:</strong> Part of our <Link href="/blog" className="text-rose hover:underline">Kids Activities</Link> series · Free to download and print · No sign-up required · Unlimited copies for personal and classroom use · New content added regularly.</p>
          </div>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">The Beauty of Riverside Coloring</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Riverside scenes offer a unique coloring experience. The flowing water, grassy banks, wooden docks, and cozy cottages create a soothing backdrop. Add playful otters — fishing, reading, boating, or sipping tea — and you have a coloring page that feels like a mini vacation.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Highlights from the Collection</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Do not miss Otter Sunset Dock Scene with its warm golden light, Otter Drinking Tea on Dock with its charming tea setup, Otter Rowing Small Boat for adventure lovers, and Otter Reading Beside River for quiet, cozy moments. Each page is designed with bold outlines perfect for all coloring skill levels.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Best Materials for Water Scenes</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">For riverside coloring pages, watercolor pencils create beautiful flowing effects for the river. Colored pencils allow detailed shading on cottage textures and otter fur. Markers give bold, vibrant results for flower gardens and sunny skies. Try different materials on different pages!</p>

          <AdBanner slot="blog-mid" className="my-8" />
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Related Coloring Pages to Download</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">
            Ready to start coloring? Download these free printable pages from our collection — no sign-up required! Browse more in our <Link href="/category/tiny-animal-worlds" className="text-rose hover:underline">category</Link> <Link href="/category/cute-animals" className="text-rose hover:underline">category</Link> <Link href="/category/cottagecore-coloring" className="text-rose hover:underline">category</Link> <Link href="/category/rainy-day-coloring" className="text-rose hover:underline">category</Link> sections.
          </p>
          <ul className="space-y-2 mb-6">
            <li><Link href="/coloring/otter-sunset-dock-scene" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-drinking-tea-on-dock" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-rowing-small-boat" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-reading-beside-river" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-fishing-by-riverbank" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-riverside-cottage" className="text-rose hover:underline">Free Printable Coloring Page</Link></li>
          </ul>
          <p className="text-cocoa/75 leading-relaxed mb-6">
            With 1,400+ free printable coloring pages and growing every week, you will always find something new to color. All pages are free JPG downloads — print as many copies as you like for personal use, classrooms, or coloring parties!
          </p>
        </div>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-6">Related Coloring Pages</h2>
          <RelatedArticles categoryId="cozy-coloring" type="coloring" count={6} title="Coloring Pages You Will Love" />
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2>
          <RelatedArticles currentSlug="riverside-otter-coloring" type="article" count={3} title="More Articles to Explore" />
        </section>
        <Newsletter className="mb-12" />
      </div>
    </article>
  </>);
}
