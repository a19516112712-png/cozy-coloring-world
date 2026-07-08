import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import LegalNav from "@/components/LegalNav";

export const metadata: Metadata = generatePageMetadata({
  title: "Affiliate Disclosure | Cozy Coloring World",
  description: "Learn about our participation in the Amazon Associates affiliate program and how affiliate links help support Cozy Coloring World.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="page-container py-12 sm:py-16 max-w-3xl">
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/" className="text-rose hover:underline">Home</Link>
        <span className="mx-2 text-cocoa/30">/</span>
        <span className="text-cocoa/60">Affiliate Disclosure</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-8">
        Affiliate Disclosure
      </h1>

      <div className="prose prose-cocoa max-w-none space-y-6 text-cocoa/80 leading-relaxed">
        <p>
          Cozy Coloring World participates in the Amazon Services LLC Associates Program,
          an affiliate advertising program designed to provide a means for sites to earn
          advertising fees by advertising and linking to Amazon.com.
        </p>

        <p>
          As an Amazon Associate, we earn from qualifying purchases. This means we may
          receive a small commission when you purchase products through affiliate links
          on our website, at no additional cost to you.
        </p>

        <p>
          We only recommend products that we believe may be useful to our visitors.
          Our affiliate partnerships do not influence the content, topics, or posts
          made on this website. All opinions and recommendations are our own.
        </p>

        <p>
          Affiliate commissions help support the maintenance and growth of this website,
          allowing us to continue providing free printable coloring pages and resources
          to our community.
        </p>

        <p>
          If you have any questions about our affiliate relationships or this disclosure,
          please contact us at{" "}
          <a href="mailto:hello@tinyanimalworlds.com" className="text-rose hover:underline">
            hello@tinyanimalworlds.com
          </a>
          .
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-cocoa">Related Pages</h2>
        <ul className="space-y-2 text-cocoa/70 mt-3">
          <li><Link href="/about" className="text-rose hover:underline">About Us</Link> — Learn about Cozy Coloring World</li>
          <li><Link href="/editorial-policy" className="text-rose hover:underline">Editorial Policy</Link> — How we create content</li>
          <li><Link href="/terms" className="text-rose hover:underline">Terms of Use</Link> — Site usage terms</li>
          <li><Link href="/contact" className="text-rose hover:underline">Contact</Link> — Get in touch</li>
        </ul>
      </section>

      <LegalNav current="/affiliate-disclosure" />
    </div>
  );
}
