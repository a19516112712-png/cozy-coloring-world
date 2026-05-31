import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from '@/components/LegalNav';
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Cozy Coloring World | Free Printable Coloring Pages",
  description: "Learn more about Cozy Coloring World and our mission to provide free printable coloring pages for kids and adults. 300+ cute, cozy, and relaxing designs.",
  path: "/about",
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cozy Coloring World",
  url: "https://tinyanimalworlds.com",
  description: "Free printable coloring pages for kids and adults — 300+ cute, cozy, and relaxing designs.",
  email: "hello@tinyanimalworlds.com",
  foundingDate: "2026",
  sameAs: [
    "https://www.pinterest.com/tinyanimalworlds",
    "https://tinyanimalworlds.com",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <div className="page-container py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-rose hover:underline">Home</Link>
            <span className="mx-2 text-cocoa/30">/</span>
            <span className="text-cocoa/60">About</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-6">
            About Cozy Coloring World
          </h1>

          <p className="text-lg text-cocoa/80 leading-relaxed mb-10">
            Welcome to Cozy Coloring World — your destination for free printable coloring 
            pages for kids and adults. Our mission is simple: to provide relaxing, 
            high-quality coloring pages that inspire creativity, mindfulness, and fun.
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Who We Are</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              We&apos;re a small, passionate team dedicated to creating the coziest coloring 
              experience on the internet. Every coloring page on our site is carefully 
              designed to bring a moment of calm and joy to your day.
            </p>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              Our collections span a variety of beloved themes:
            </p>
            <ul className="space-y-2 text-cocoa/70">
              <li className="flex items-center gap-2">
                <span className="text-rose">🏡</span>
                <Link href="/category/cozy-coloring" className="text-rose hover:underline">Cozy Coloring Pages</Link>
                <span>— warm interiors, reading nooks, and rainy day scenes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose">🐭</span>
                <Link href="/category/tiny-animal-worlds" className="text-rose hover:underline">Tiny Animal Worlds</Link>
                <span>— miniature villages with adorable animal communities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose">🌿</span>
                <Link href="/category/cottagecore-coloring" className="text-rose hover:underline">Cottagecore Coloring</Link>
                <span>— charming cottages, flower gardens, and countryside living</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose">🌸</span>
                <Link href="/category/cute-animals" className="text-rose hover:underline">Kawaii Coloring Pages</Link>
                <span>— super cute, Japanese-inspired adorable designs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose">🦄</span>
                <Link href="/category/fantasy-coloring" className="text-rose hover:underline">Fantasy Coloring Pages</Link>
                <span>— dragons, unicorns, and enchanted realms</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "🎨", title: "300+ Free Coloring Pages", desc: "A growing library of printable JPG downloads" },
                { icon: "🖨️", title: "Printable JPG Downloads", desc: "High-resolution images ready to print at home" },
                { icon: "📅", title: "New Pages Weekly", desc: "Fresh designs added every week for endless creativity" },
                { icon: "📝", title: "Blog Articles & Tips", desc: "Coloring resources, guides, and inspiration" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-blush/20 shadow-card">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <h3 className="font-semibold text-cocoa mb-1">{item.title}</h3>
                  <p className="text-sm text-cocoa/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Our Vision</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              We believe that coloring is for everyone — it&apos;s a simple, screen-free activity 
              that helps children develop fine motor skills and creativity, while giving adults 
              a peaceful way to de-stress and practice mindfulness.
            </p>
            <p className="text-cocoa/70 leading-relaxed">
              Our vision is to make high-quality, beautiful coloring pages accessible to everyone, 
              everywhere — completely free. Whether you&apos;re a parent looking for screen-free 
              activities, a teacher seeking classroom resources, or an adult exploring coloring 
              for relaxation, we&apos;re here to help you find your perfect page.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Contact</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              We&apos;d love to hear from you! Whether you have a question, suggestion, or just 
              want to say hello — reach out anytime.
            </p>
            <a
              href="mailto:hello@tinyanimalworlds.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose/10 text-rose font-semibold hover:bg-rose/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@tinyanimalworlds.com
            </a>
          </section>

          {/* Affiliate Disclosure */}
          <section className="mb-10 p-6 bg-cream/50 rounded-xl">
            <h2 className="text-lg font-bold text-cocoa mb-3">Amazon Affiliate Disclosure</h2>
            <p className="text-sm text-cocoa/60 leading-relaxed">
              Cozy Coloring World is a participant in the Amazon Services LLC Associates Program,
              an affiliate advertising program designed to provide a means for sites to earn advertising
              fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from
              qualifying purchases at no additional cost to you.
            </p>
          </section>
          {/* Back to Home */}
          <div className="text-center pt-6 border-t border-blush/20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream text-cocoa font-medium hover:bg-blush/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
          {/* Affiliate Disclosure */}
          <section className="mb-10 p-6 bg-cream/50 rounded-xl">
            <h2 className="text-lg font-bold text-cocoa mb-3">Amazon Affiliate Disclosure</h2>
            <p className="text-sm text-cocoa/60 leading-relaxed">
              Cozy Coloring World is a participant in the Amazon Services LLC Associates Program,
              an affiliate advertising program designed to provide a means for sites to earn advertising
              fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from
              qualifying purchases at no additional cost to you.
            </p>
          </section>
              Back to Home
            </Link>
          </div>
          <LegalNav current="/about" />
        </div>
      </div>
    </>
  );
}
