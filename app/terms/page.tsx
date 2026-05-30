import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Use | Cozy Coloring World",
  description: "Terms of use for Cozy Coloring World. All coloring pages are free for personal use only.",
  path: "/terms",
});


export default function TermsPage() {
  return (
    <div className="page-container py-12 sm:py-16 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-8">Terms of Use</h1>
      <div className="prose prose-cocoa max-w-none space-y-4 text-cocoa/80 leading-relaxed">
        <p><strong>Last updated:</strong> May 30, 2026</p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">1. Free Coloring Pages</h2>
        <p>
          All coloring pages on Cozy Coloring World are 100% free to download and print 
          for personal, non-commercial use. You may print as many copies as you like for 
          yourself, your family, or your classroom.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">2. Restrictions</h2>
        <p>
          You may not sell, redistribute, or claim ownership of our coloring pages. 
          You may not use them for commercial purposes without written permission. 
          Please link back to our website if you share our pages online.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">3. Disclaimer</h2>
        <p>
          All content is provided &ldquo;as is&rdquo; for entertainment purposes. 
          Cozy Coloring World is not liable for any damages arising from the use of this website.
        </p>
      </div>
    </div>
  );
}
