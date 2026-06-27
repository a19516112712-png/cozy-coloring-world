import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from "@/components/LegalNav";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Editorial Policy | How We Create & Curate Coloring Pages | Tiny Animal Worlds",
  description: "Learn about our editorial standards — how we design, select, and publish free printable coloring pages. Quality, originality, and safety are our priorities.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">Editorial Policy</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-6">Editorial Policy</h1>
        <p className="text-sm text-cocoa/50 mb-10">Last updated: June 2026</p>

        <div className="prose prose-cocoa max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cocoa">Our Mission</h2>
            <p className="text-cocoa/70 leading-relaxed">
              At Tiny Animal Worlds, we create and curate high-quality, free printable coloring pages for kids and adults. Our mission is to make creative coloring accessible to everyone — no sign-up required, no hidden costs. Every page we publish is designed to be safe, appropriate for all ages, and enjoyable to color.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">Content Creation Standards</h2>
            <ul className="space-y-2 text-cocoa/70">
              <li><strong>Original Designs</strong> — All coloring pages are created with original artwork and unique compositions.</li>
              <li><strong>Age-Appropriate</strong> — Content is suitable for all ages. We avoid mature, violent, or frightening themes.</li>
              <li><strong>High Resolution</strong> — Images are rendered at high quality (1000×1500px minimum) for crisp printing.</li>
              <li><strong>Clear Outlines</strong> — Every page features bold, clear outlines that are easy to color within.</li>
              <li><strong>Variety of Difficulty</strong> — We offer Easy, Medium, and Hard difficulty levels to suit every age and skill.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">Selection & Curation</h2>
            <p className="text-cocoa/70 leading-relaxed">
              We carefully curate each coloring page to ensure it meets our quality bar. Pages are organized into themed categories and collections so visitors can easily find what they love — from cute animals and cottagecore scenes to fantasy castles and cozy interiors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">Factual Accuracy</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Our blog posts and educational content are researched and written to be accurate and helpful. We cite sources where applicable and update content regularly to maintain freshness and relevance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">Advertising & Affiliate Disclosure</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Tiny Animal Worlds is supported by advertising (Google AdSense) and affiliate partnerships (Amazon Associates). Sponsored content is clearly labeled. Advertisements do not influence our content selection or editorial decisions. Read our full{" "}
              <Link href="/affiliate-disclosure" className="text-rose hover:underline">Affiliate Disclosure</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">Updates & Corrections</h2>
            <p className="text-cocoa/70 leading-relaxed">
              We regularly review and update our content. If you find an error or have a concern, please{" "}
              <Link href="/contact" className="text-rose hover:underline">contact us</Link>.
            </p>
          </section>
        </div>

        <LegalNav />

        <div className="mt-12 p-6 bg-cream rounded-xl border border-blush/20">
          <h3 className="font-semibold text-cocoa mb-2">📧 Have Feedback?</h3>
          <p className="text-sm text-cocoa/60">
            We value your input. <Link href="/contact" className="text-rose hover:underline">Contact us</Link> with any suggestions or concerns about our content.
          </p>
        </div>
      </div>
    </div>
  );
}
