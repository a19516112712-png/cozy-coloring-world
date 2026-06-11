import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = generatePageMetadata({
  title: "Woodland Friends Coloring Pages: Otters, Raccoons & More Free Printables",
  description: "Download free printable woodland animal coloring pages featuring otters, raccoons, deer, foxes, and more. 60+ new pages added — cute, cozy, and free!",
  path: "/blog/woodland-friends-coloring",
});

export default function BlogPost() {
  const title = "Woodland Friends Coloring Pages: Otters, Raccoons & More";
  const date = "2026-06-05";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Woodland Friends Coloring Pages: Otters, Raccoons & More",
    "description": "Download free printable woodland animal coloring pages featuring otters, raccoons, deer, foxes, and more. 60+ new pages added — cute, cozy, and free!",
    "url": "https://tinyanimalworlds.com/blog/woodland-friends-coloring",
    "datePublished": "2026-06-05",
    "dateModified": "2026-06-05",
    "author": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" },
    "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com", "logo": { "@type": "ImageObject", "url": "https://tinyanimalworlds.com/apple-touch-icon.webp" } }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://tinyanimalworlds.com" },
    { name: "Blog", url: "https://tinyanimalworlds.com/blog" },
    { name: "Woodland Friends Coloring Pages: Otters, Raccoons & More", url: "https://tinyanimalworlds.com/blog/woodland-friends-coloring" }
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
        <p className="text-sm text-cocoa/40 mb-8">Published {date} · 8 min read</p>
        <AdBanner slot="blog-top" className="mb-8" />
        <div className="prose prose-cocoa max-w-none">
          <p className="text-lg text-cocoa/70 leading-relaxed mb-6">Woodland animals have captured the hearts of coloring enthusiasts everywhere. With our latest additions — 30 otter pages and 30 raccoon pages — our woodland friends collection has grown to over 1,400 free printable coloring pages! Let us explore the cozy world of woodland animal coloring.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Meet the Woodland Friends</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Our woodland animal collection features a delightful cast of characters: playful otters by the river, industrious raccoons at the market, gentle deer in flower meadows, curious foxes in bookstores, and cozy hedgehogs in garden scenes. Each animal brings its own personality and charm to every coloring page.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Why Woodland Animals Make Perfect Coloring Subjects</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">Woodland animals offer incredible variety for coloring. Forest greens, river blues, warm browns, and pops of flower colors create rich, satisfying coloring experiences. The natural settings — cottages, markets, rivers, and gardens — provide beautiful backgrounds that make every page feel like a storybook illustration.</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Building Your Woodland Collection</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">With 1,400+ pages to choose from, you can build themed collections: all the otters, all the market animals, all the tea party scenes, or mix and match your favorite characters. Print multiple copies and experiment with different color schemes. Our pages are always free — no subscription needed!</p>

          <AdBanner slot="blog-mid" className="my-8" />
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Related Coloring Pages to Download</h2>
          <p className="text-cocoa/75 leading-relaxed mb-4">
            Ready to start coloring? Download these free printable pages from our collection — no sign-up required! Browse more in our <Link href="/categories/cute-animals" className="text-rose hover:underline">category</Link> <Link href="/categories/cozy-coloring" className="text-rose hover:underline">category</Link> <Link href="/categories/cottagecore-coloring" className="text-rose hover:underline">category</Link> <Link href="/categories/garden-coloring" className="text-rose hover:underline">category</Link> sections.
          </p>
          <ul className="space-y-2 mb-6">
            <li><Link href="/coloring/otter-family-riverside-picnic" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/raccoon-village-marketplace" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/deer-cottage-porch-swing" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/fox-library-window-seat" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/hedgehog-flower-fence-scene" className="text-rose hover:underline">Free Printable Coloring Page</Link></li> <li><Link href="/coloring/bunny-mushroom-cottage" className="text-rose hover:underline">Free Printable Coloring Page</Link></li>
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
          <RelatedArticles currentSlug="woodland-friends-coloring" type="article" count={3} title="More Articles to Explore" />
        </section>
        <Newsletter className="mb-12" />
      </div>
    </article>
  </>);
}
