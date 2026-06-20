/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = generatePageMetadata({
  imageUrl: "/images/coloring/1_Tiny_Otter_Hosting_a_Riverside.webp",
  imageWidth: 1200,
  imageHeight: 1500,
  title: "Cute Duck, Otter & Raccoon Coloring Pages | Free Printable JPG Downloads",
  description: "Download free cute duck, otter, and raccoon coloring pages! Adorable water animals in cozy scenes — otters at tea houses, ducks selling bread, raccoons in vintage shops. Free printable JPGs.",
  path: "/blog/duck-otter-raccoon-coloring-pages",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cute Duck, Otter & Raccoon Coloring Pages | Free Printable JPG Downloads",
  description: "Download free cute duck, otter, and raccoon coloring pages! Adorable water animals in cozy scenes — otters at tea houses, ducks selling bread, raccoons in vintage shops. Free printable JPGs.",
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  author: { "@type": "Organization", name: "Tiny Animal Worlds" },
  publisher: { "@type": "Organization", name: "Tiny Animal Worlds" },
  keywords: "cute duck coloring pages, otter coloring pages, raccoon coloring pages, water animal coloring, free printable duck coloring, otter printable coloring",
};

export default function BlogPost() {
  const faqs = [
    { q: "What duck, otter, and raccoon coloring pages do you have?", a: "Our collection features ducks selling fresh bread, otters hosting riverside tea houses, raccoons owning vintage shops, otters driving river cruises, ducks running country kitchens, and many more cozy waterfront and woodland scenes." },
    { q: "Are these coloring pages good for teaching about animals?", a: "Yes! Duck, otter, and raccoon coloring pages are wonderful for teaching kids about different animal habitats — ponds, rivers, and forests. Each page shows the animal in its natural environment with charming, educational details." },
    { q: "What difficulty level are these pages?", a: "Most designs are Medium difficulty, making them great for kids ages 6+ and adults. The water and woodland backgrounds add satisfying detail without being overwhelming, and the cute animal characters keep younger colorists engaged." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <article className="page-container py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-rose hover:underline">Home</Link>
            <span className="mx-2 text-cocoa/30">/</span>
            <Link href="/blog" className="text-rose hover:underline">Blog</Link>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-cocoa leading-tight mb-3">Cute Duck, Otter & Raccoon Coloring Pages</h1>
          <p className="text-sm text-cocoa/40 mb-8">Published 2026-05-31 - 8 min read</p>
          <AdBanner slot="blog-top" className="mb-8" />
          <div className="prose prose-cocoa max-w-none">
            <p className="text-lg text-cocoa/70 leading-relaxed mb-6">Dive into the delightful world of our duck, otter, and raccoon coloring pages! These charming water-loving and woodland creatures bring personality and whimsy to every scene. From otters piloting seaplanes to ducks selling fresh bread at country markets, each page offers a unique story. Free printable JPG downloads for all ages!</p>
          <div className="my-6 p-4 bg-cream rounded-lg border border-mocha/10">
            <p className="text-cocoa/70 leading-relaxed text-sm"><strong>Quick Facts About This Collection:</strong> Part of our <Link href="/blog" className="text-rose hover:underline">Kids Activities</Link> series · Free to download and print · No sign-up required · Unlimited copies for personal and classroom use · New content added regularly.</p>
          </div>
            
            <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">The Charm of Water and Woodland Animals</h2>
            <p className="text-cocoa/75 leading-relaxed mb-6">Ducks, otters, and raccoons each bring their own special magic to coloring pages. Ducks with their cheerful quacks and bright bills, otters with their playful swimming and fishing, and raccoons with their clever paws and masked faces — every animal inspires a different creative palette. Our scenes place them in the coziest settings imaginable.</p>
            
            <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Otter Adventures: Rivers, Lakes, and Tea Houses</h2>
            <p className="text-cocoa/75 leading-relaxed mb-6">Otters are the playful stars of our water-themed collection. Color an otter hosting a riverside tea house, another selling fresh fish at a lakeside market, and a brave otter piloting a seaplane over sparkling waters. These pages invite cool aquatic blues, teal greens, and warm sandy browns that capture the beauty of riverside life.</p>
            
            <AdBanner slot="blog-mid-1" className="my-8" />
            
            <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Duck Delights: Bakeries, Kitchens, and Country Life</h2>
            <p className="text-cocoa/75 leading-relaxed mb-6">Our duck coloring pages celebrate the sweetest side of country life. A duck sells fresh bread at a village bakery, another cooks in a cozy country kitchen, and duck families gather by flower-filled ponds. Use sunny yellows for duck bills, bright whites for feathers, and soft greens for countryside backgrounds.</p>
            
            <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Raccoon Rarities: Vintage Shops and Forest Finds</h2>
            <p className="text-cocoa/75 leading-relaxed mb-6">Raccoons bring a mischievous, vintage charm to our collection. Color a raccoon owning a vintage shop filled with curiosities, another managing a riverside business, and raccoons exploring moonlit forests. Gray tones with dark mask accents create striking, dramatic coloring pages that older kids and adults especially enjoy.</p>
            
            <AdBanner slot="blog-mid-2" className="my-8" />
            
            <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Coloring Tips for Water and Woodland Animals</h2>
            <p className="text-cocoa/75 leading-relaxed mb-6">For water scenes, layer shades of blue and teal for depth, and use white gel pens for water highlights and ripples. Duck feathers benefit from soft gray blending with bright accent colors for bills and feet. Otters look great in rich browns, and raccoons come alive with layered grays and distinctive dark facial masks.</p>
            
            <div className="space-y-4 my-8">
              <h2 className="text-2xl font-bold text-cocoa mb-4">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <details key={i} className="bg-blush/5 rounded-xl border border-blush/10 group">
                  <summary className="px-4 py-3 cursor-pointer font-medium text-cocoa/80 flex justify-between items-center">
                    {faq.q}
                    <span className="text-rose text-xs group-open:rotate-180 transition-transform ml-2">v</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-cocoa/70 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Explore More Free Coloring Pages</h2>
            <p className="text-cocoa/75 leading-relaxed mb-4">Ducks, otters, and raccoons are just a few of the adorable animals in our collection of over 500 free printable coloring pages. Explore our cute animal worlds, woodland animal pages, and cozy village scenes for even more coloring fun. Every page is a free high-quality JPG download.</p>
            <p className="text-cocoa/75 leading-relaxed mb-6">
              Ready to meet more animal friends? Browse our <Link href="/coloring-pages" className="text-rose hover:underline">complete collection of 500+ free printable coloring pages</Link> or dive into our <Link href="/categories" className="text-rose hover:underline">fifteen curated categories</Link>.
            </p>
          </div>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-6">Related Coloring Pages</h2>
            <div className="mb-10">
              <h3 className="text-xl font-bold text-cocoa mb-4">✨ Related Coloring Pages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Link href="/coloring/tiny-otter-hosting-a-riverside" className="group bg-white rounded-xl border border-blush/20 p-3 hover:shadow-md transition-all hover:-translate-y-0.5"><div className="flex items-center gap-2"><span className="text-lg">🍵</span><span className="text-xs text-cocoa/70 group-hover:text-rose transition-colors line-clamp-2">Tiny Otter Hosting a Riverside Tea</span></div></Link>
                <Link href="/coloring/tiny-duck-selling-fresh-bread" className="group bg-white rounded-xl border border-blush/20 p-3 hover:shadow-md transition-all hover:-translate-y-0.5"><div className="flex items-center gap-2"><span className="text-lg">🍞</span><span className="text-xs text-cocoa/70 group-hover:text-rose transition-colors line-clamp-2">Tiny Duck Selling Fresh Bread</span></div></Link>
                <Link href="/coloring/tiny-raccoon-owning-a-vintage" className="group bg-white rounded-xl border border-blush/20 p-3 hover:shadow-md transition-all hover:-translate-y-0.5"><div className="flex items-center gap-2"><span className="text-lg">🏺</span><span className="text-xs text-cocoa/70 group-hover:text-rose transition-colors line-clamp-2">Tiny Raccoon Owning a Vintage Shop</span></div></Link>
                <Link href="/coloring/tiny-otter-piloting-a-seaplane" className="group bg-white rounded-xl border border-blush/20 p-3 hover:shadow-md transition-all hover:-translate-y-0.5"><div className="flex items-center gap-2"><span className="text-lg">✈️</span><span className="text-xs text-cocoa/70 group-hover:text-rose transition-colors line-clamp-2">Tiny Otter Piloting a Seaplane</span></div></Link>
                <Link href="/coloring/duck-country-kitchen" className="group bg-white rounded-xl border border-blush/20 p-3 hover:shadow-md transition-all hover:-translate-y-0.5"><div className="flex items-center gap-2"><span className="text-lg">🍳</span><span className="text-xs text-cocoa/70 group-hover:text-rose transition-colors line-clamp-2">Duck Country Kitchen</span></div></Link>
                <Link href="/coloring/tiny-otter-managing-a-riversid" className="group bg-white rounded-xl border border-blush/20 p-3 hover:shadow-md transition-all hover:-translate-y-0.5"><div className="flex items-center gap-2"><span className="text-lg">🏞️</span><span className="text-xs text-cocoa/70 group-hover:text-rose transition-colors line-clamp-2">Tiny Otter Riverside Business</span></div></Link>
              </div>
            </div>
            <RelatedArticles categoryId="tiny-animal-worlds" type="coloring" count={6} title="Coloring Pages You'll Love" />
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2>
            <RelatedArticles currentSlug="duck-otter-raccoon-coloring-pages" type="article" count={3} title="More Articles to Explore" />
          </section>
          <Newsletter className="mb-12" />
        </div>
      </article>
    </>
  );
}
