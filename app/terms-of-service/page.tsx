import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from '@/components/LegalNav';
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service | TinyAnimalWorlds",
  description: "Terms of Service for TinyAnimalWorlds. All coloring pages, word searches, and printables are free for personal and educational use.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <div className="page-container py-12 sm:py-16 max-w-3xl">
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/" className="text-rose hover:underline">Home</Link>
        <span className="mx-2 text-cocoa/30">/</span>
        <span className="text-cocoa/60">Terms of Service</span>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-8">Terms of Service</h1>
      <div className="prose prose-cocoa max-w-none space-y-4 text-cocoa/80 leading-relaxed">
        <p><strong>Last updated:</strong> June 29, 2026</p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">1. Acceptance of Terms</h2>
        <p>
          By accessing and using TinyAnimalWorlds, you accept and agree to be bound by
          these Terms of Service. If you do not agree to these terms, please do not use
          our website.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">2. Free Printables &amp; Coloring Pages</h2>
        <p>
          All coloring pages, word search puzzles, and printable activities on
          TinyAnimalWorlds are 100% free to download and print for personal,
          non-commercial, and educational use. You may print as many copies as you
          like for yourself, your family, your classroom, or your homeschool.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">3. Restrictions</h2>
        <p>
          You may not sell, redistribute, resell, sublicense, or claim ownership of
          any content from TinyAnimalWorlds. You may not use our printables for
          commercial purposes or in products for sale without prior written permission.
          If you share our pages online, please link back to www.tinyanimalworlds.com.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">4. Intellectual Property</h2>
        <p>
          All content on TinyAnimalWorlds, including but not limited to coloring page
          designs, word search puzzles, blog articles, illustrations, logos, and website
          code, is the intellectual property of TinyAnimalWorlds and is protected by
          applicable copyright and trademark laws.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">5. User Conduct</h2>
        <p>
          You agree to use TinyAnimalWorlds only for lawful purposes. You may not
          use the website in any way that could damage, disable, overburden, or impair
          our servers or interfere with any other party's use of the website.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">6. Disclaimer of Warranties</h2>
        <p>
          All content on TinyAnimalWorlds is provided &ldquo;as is&rdquo; for
          entertainment and educational purposes. We make no warranties, expressed or
          implied, regarding the accuracy, completeness, or suitability of the content
          for any particular purpose.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">7. Limitation of Liability</h2>
        <p>
          TinyAnimalWorlds and its owners shall not be liable for any direct, indirect,
          incidental, consequential, or punitive damages arising from your use of, or
          inability to use, this website or its content.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">8. Third-Party Links &amp; Affiliate Disclosure</h2>
        <p>
          TinyAnimalWorlds may contain links to third-party websites and participates
          in affiliate advertising programs, including the Amazon Services LLC Associates
          Program. As an Amazon Associate, we earn from qualifying purchases. We are not
          responsible for the content or practices of any third-party sites. Read our full{" "}
          <Link href="/affiliate-disclosure" className="text-rose hover:underline">Affiliate Disclosure</Link>.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes
          will be effective immediately upon posting to this page. Your continued use
          of the website after any changes constitutes acceptance of the new terms.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">10. Contact</h2>
        <p>
          If you have any questions about these Terms of Service, please visit our{" "}
          <Link href="/contact" className="text-rose hover:underline">Contact page</Link>
          {" "}or read our{" "}
          <Link href="/about" className="text-rose hover:underline">About page</Link>.
        </p>
      </div>
      <LegalNav current="/terms-of-service" />
    </div>
  );
}
