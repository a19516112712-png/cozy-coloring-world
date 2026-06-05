import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = generatePageMetadata({
  title: "Otter Coloring Pages: 30 Free Printable Riverside Adventures",
  description: "Discover 30 adorable free printable otter coloring pages featuring riverside picnics, tea parties, fishing docks, and cozy cottage scenes. Download and print today!",
  path: "/blog/otter-riverside-coloring",
});

export default function BlogPost() {
  const title = "Otter Coloring Pages: Free Printable Riverside Adventures";
  const date = "2026-06-05";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Otter Coloring Pages: Free Printable Riverside Adventures",
    "description": "Discover 30 adorable free printable otter coloring pages featuring riverside picnics, tea parties, fishing docks, and cozy cottage scenes. Download and print today!",
    "url": "https://tinyanimalworlds.com/blog/otter-riverside-coloring",
    "datePublished": "2026-06-05",
    "dateModified": "2026-06-05",
    "author": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" },
    "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com", "logo": { "@type": "ImageObject", "url": "https://tinyanimalworlds.com/apple-touch-icon.png" } }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://tinyanimalworlds.com" },
    { name: "Blog", url: "https://tinyanimalworlds.com/blog" },
    { name: "Otter Coloring Pages: Free Printable Riverside Adventures", url: "https://tinyanimalworlds.com/blog/otter-riverside-coloring" }
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
        <p className="text-sm text-cocoa/40 mb-8">Published {date} · 7 min read</p>
        <AdBanner slot="blog-top" className="mb-8" />
        <div className="prose prose-cocoa max-w-none">
          <p className="text-lg text-cocoa/70 leading-relaxed mb-6">Otters are some of the most playful and charming animals in the woodland world, and our new collection of 30 otter coloring pages captures their riverside adventures perfectly! From family picnics by the river to cozy cottage porch scenes, these free printable coloring pages bring the magic of otter life to your coloring table.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Why Otter Coloring Pages Are So Popular</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Otters have exploded in popularity as a coloring subject. Their expressive faces, playful poses, and love of water create dynamic scenes that are endlessly fun to color. Whether they are fishing from a wooden dock, enjoying afternoon tea, or relaxing in a hammock by the river, each otter coloring page tells a story.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">New Otter Scenes You Will Love</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Our latest collection includes 30 brand-new otter designs: Grand Otter Riverside Festival, Panoramic Otter Riverside Village, Otter Family Riverside Picnic, Otter Gardening Beside Cottage, Otter Riverside Bakery Visit, Otter Lantern Evening Scene, and many more! Each page is a window into the cozy world of riverside otter life.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Tips for Coloring Otter Pages</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Use warm browns and soft grays for otter fur, with bright blues and greens for the river and surrounding nature. Add pops of color with picnic baskets, flower gardens, and glowing lanterns. These pages work beautifully with colored pencils for detailed shading or markers for bold, vibrant results.</p>

          <AdBanner slot="blog-mid" className="my-8" />
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Related Coloring Pages to Download</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">
            Ready to start coloring? Download these free printable pages from our collection — no sign-up required! Browse more in our <Link href="/categories/cute-animals" className="text-rose hover:underline">category</Link> <Link href="/categories/cozy-coloring" className="text-rose hover:underline">category</Link> <Link href="/categories/tea-party-coloring" className="text-rose hover:underline">category</Link> sections.
          </p>
          <ul className="space-y-2 mb-6">
            <li><Link href="/coloring/otter-family-riverside-picnic" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-riverside-tea-table" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-fishing-dock-scene" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/grand-otter-riverside-festival" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-cottage-porch-scene" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/otter-relaxing-in-hammock" className="text-rose hover:underline">Free Printable Coloring Page</Link></li>
          </ul>
          <p className="text-cocoa/75 leading-relaxed mb-6">
            With 1,400+ free printable coloring pages and growing every week, you will always find something new to color. All pages are free JPG downloads — print as many copies as you like for personal use, classrooms, or coloring parties!
          </p>
        </div>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-6">Related Coloring Pages</h2>
          <RelatedArticles categoryId="cute-animals" type="coloring" count={6} title="Coloring Pages You Will Love" />
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2>
          <RelatedArticles currentSlug="otter-riverside-coloring" type="article" count={3} title="More Articles to Explore" />
        </section>
        <Newsletter className="mb-12" />
      </div>
    </article>
  </>);
}
