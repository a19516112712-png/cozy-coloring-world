import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import AdBanner from "@/components/AdBanner";
import RelatedArticles from "@/components/RelatedArticles";
import { faqPages } from "@/data/faqs";

interface Props { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return faqPages.map((f) => ({ slug: f.slug }));
}

export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faq = faqPages.find((f) => f.slug === slug);
  if (!faq) return {};
  return generatePageMetadata({
    title: `${faq.title} | Tiny Animal Worlds`,
    description: faq.description,
    path: `/faq/${slug}`,
  });
}

const pageFAQs = [
    {
      question: `How do I download and print these coloring pages?`,
      answer: `Simply browse our collection, click the download button on any page to get your free JPG. Print on standard 8.5x11 letter paper or A4. For the best coloring experience, use cardstock (80lb+) to prevent bleed-through, especially with markers or watercolors.`,
    },
    {
      question: `Are these coloring pages really free?`,
      answer: `Yes! All coloring pages on Tiny Animal Worlds are 100% free — no sign-up, subscription, or hidden costs. Print unlimited copies for personal, classroom, or homeschool use. Our collection is updated regularly with new designs.`,
    },
    {
      question: `What makes these coloring pages special?`,
      answer: `Our coloring pages feature detailed, adorable scenes with charming animal characters in cozy, whimsical settings. Each page is designed with clear outlines that work beautifully with crayons, colored pencils, markers, and gel pens. The unique artwork brings personality and warmth to every page.`,
    },
    {
      question: `How many coloring pages do you have for this topic?`,
      answer: `We have dozens of coloring pages for each animal theme — foxes, bunnies, cats, deer, hedgehogs, and more. Each animal features in various charming scenes including bakeries, gardens, tea parties, and village settings. New pages are added weekly!`,
    },
    {
      question: `Can I use these coloring pages in my classroom?`,
      answer: `Absolutely! Teachers love our coloring pages for art centers, early finisher activities, animal-themed units, and quiet time. Print unlimited copies for your students. The animal themes work great for teaching about wildlife, habitats, and creative expression.`,
    },
  ];

export default async function FaqPage({ params }: Props) {
  const { slug } = await params;
  const faq = faqPages.find((f) => f.slug === slug);
  if (!faq) notFound();

  const baseUrl = "https://tinyanimalworlds.com";

  const faqSchema = generateFAQSchema(pageFAQs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Resources", url: `${baseUrl}/blog` },
    { name: faq.title, url: `${baseUrl}/faq/${slug}` },
  ]);

  return (<>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
    <article className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <Link href="/blog" className="text-rose hover:underline">Resources</Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa leading-tight mb-3">{faq.title}</h1>
        <AdBanner slot="blog-top" className="mb-8" />
        <div className="prose prose-cocoa max-w-none">
          <p className="text-lg text-cocoa/70 leading-relaxed mb-6">{faq.description}</p>
          
          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Quick Answer</h2>
          <p className="text-cocoa/75 leading-relaxed mb-6">Our free printable coloring pages are designed to be easy to use for everyone. Simply browse our <Link href="/coloring-pages" className="text-rose hover:underline">collection of 1700+ pages</Link>, click to download the JPG, and print at home. No sign-up required!</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Detailed Guide</h2>
          <p className="text-cocoa/75 leading-relaxed mb-6">For the best coloring experience, we recommend using cardstock paper (80lb or 120gsm) if using markers or watercolors. Regular printer paper works great with crayons and colored pencils. Always set your printer to High Quality mode for the crispest lines.</p>
          <p className="text-cocoa/75 leading-relaxed mb-6">All our coloring pages are completely free for personal use. You can print as many copies as you like for yourself, your family, or your classroom. We add new pages regularly, so check back often for fresh content!</p>

          <h2 className="text-2xl font-bold text-cocoa mt-10 mb-4">Related Resources</h2>
          <ul className="space-y-2 mb-6">
            <li><Link href="/coloring-pages" className="text-rose hover:underline">Browse All 1700+ Coloring Pages</Link></li>
            <li><Link href="/categories" className="text-rose hover:underline">Explore All Categories</Link></li>
            <li><Link href="/blog" className="text-rose hover:underline">Read Our Coloring Blog</Link></li>
          </ul>
        </div>
        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-6">You May Also Like</h2><RelatedArticles currentSlug={slug} type="article" count={3} title="Explore More" /></section>
      </div>
    
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-6">Explore More</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Link href="/collections" className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md transition-all text-center group">
                <span className="text-2xl block mb-1">📚</span><span className="text-sm font-medium text-cocoa group-hover:text-rose">Collections</span>
              </Link>
              <Link href="/categories" className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md transition-all text-center group">
                <span className="text-2xl block mb-1">🏷️</span><span className="text-sm font-medium text-cocoa group-hover:text-rose">Categories</span>
              </Link>
              <Link href="/blog" className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md transition-all text-center group">
                <span className="text-2xl block mb-1">📝</span><span className="text-sm font-medium text-cocoa group-hover:text-rose">Blog</span>
              </Link>
              <Link href="/coloring-pages" className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md transition-all text-center group">
                <span className="text-2xl block mb-1">🎨</span><span className="text-sm font-medium text-cocoa group-hover:text-rose">All Pages</span>
              </Link>
              <Link href="/faq/faq-what-paper-is-best-for-coloring-pages" className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md transition-all text-center group">
                <span className="text-2xl block mb-1">❓</span><span className="text-sm font-medium text-cocoa group-hover:text-rose">FAQ</span>
              </Link>
              <Link href="/" className="bg-white rounded-xl border border-blush/20 p-4 hover:shadow-md transition-all text-center group">
                <span className="text-2xl block mb-1">🏠</span><span className="text-sm font-medium text-cocoa group-hover:text-rose">Home</span>
              </Link>
            </div>
          </section>
    </article>
  </>);
}
