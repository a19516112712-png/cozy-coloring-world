import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from '@/components/LegalNav';
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | Tiny Animal Worlds",
  description: "Get in touch with Tiny Animal Worlds. We welcome your feedback, suggestions, and questions about our free printable coloring pages and word search puzzles.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">Contact</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-6">
          Contact Us
        </h1>

        <p className="text-lg text-cocoa/80 leading-relaxed mb-8">
          We&apos;d love to hear from you! Whether you have feedback, a suggestion for a new 
          coloring theme, a question about our content, or a business inquiry — we&apos;re here to help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-cream/50 rounded-xl p-6">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="font-semibold text-cocoa mb-1">Email Us</h3>
            <p className="text-sm text-cocoa/70 mb-2">For general inquiries, feedback, and support:</p>
            <a href="mailto:hello@tinyanimalworlds.com" className="text-rose hover:underline font-medium">
              hello@tinyanimalworlds.com
            </a>
          </div>

          <div className="bg-cream/50 rounded-xl p-6">
            <div className="text-2xl mb-2">📌</div>
            <h3 className="font-semibold text-cocoa mb-1">Pinterest</h3>
            <p className="text-sm text-cocoa/70 mb-2">Follow us for new coloring pages and inspiration:</p>
            <a href="https://www.pinterest.com/tinyanimalworlds" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline font-medium">
              @tinyanimalworlds
            </a>
          </div>

          <div className="bg-cream/50 rounded-xl p-6">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="font-semibold text-cocoa mb-1">Content Suggestions</h3>
            <p className="text-sm text-cocoa/70">
              Have an idea for a new coloring theme or word search topic? We&apos;d love to hear it! 
              Email us with your suggestions and we&apos;ll do our best to bring them to life.
            </p>
          </div>

          <div className="bg-cream/50 rounded-xl p-6">
            <div className="text-2xl mb-2">🐛</div>
            <h3 className="font-semibold text-cocoa mb-1">Report an Issue</h3>
            <p className="text-sm text-cocoa/70">
              Found a broken link, a typo, or something that doesn&apos;t look right? Let us know 
              and we&apos;ll fix it as quickly as possible.
            </p>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            <details className="bg-cream/50 rounded-xl p-4 group">
              <summary className="font-semibold text-cocoa cursor-pointer">Are the coloring pages really free?</summary>
              <p className="text-sm text-cocoa/70 mt-2">
                Yes! Every coloring page and word search puzzle on Tiny Animal Worlds is completely 
                free to download and print. No sign-up, no subscription, no hidden fees — ever.
              </p>
            </details>
            <details className="bg-cream/50 rounded-xl p-4 group">
              <summary className="font-semibold text-cocoa cursor-pointer">Can I use these in my classroom?</summary>
              <p className="text-sm text-cocoa/70 mt-2">
                Absolutely! Teachers, educators, and homeschoolers are welcome to use our printables 
                in their classrooms. We love supporting education.
              </p>
            </details>
            <details className="bg-cream/50 rounded-xl p-4 group">
              <summary className="font-semibold text-cocoa cursor-pointer">How often do you add new pages?</summary>
              <p className="text-sm text-cocoa/70 mt-2">
                We add new coloring pages and word search puzzles multiple times per week. Check back 
                often or follow us on Pinterest to see our latest additions!
              </p>
            </details>
            <details className="bg-cream/50 rounded-xl p-4 group">
              <summary className="font-semibold text-cocoa cursor-pointer">Can I share your pages on social media?</summary>
              <p className="text-sm text-cocoa/70 mt-2">
                Yes! We encourage sharing links to our pages. Please link back to tinyanimalworlds.com 
                rather than redistributing the files directly. For commercial use, please contact us.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-10 p-6 bg-cream rounded-xl border border-blush/20">
          <h2 className="text-xl font-bold text-cocoa mb-3">Business & Media Inquiries</h2>
          <p className="text-cocoa/70 leading-relaxed text-sm">
            For advertising partnerships, media features, or other business inquiries, please 
            email us at{" "}
            <a href="mailto:hello@tinyanimalworlds.com" className="text-rose hover:underline font-medium">
              hello@tinyanimalworlds.com
            </a>{" "}
            with &quot;Business Inquiry&quot; in the subject line. We typically respond within 
            2-3 business days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-4">Related Pages</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">
            You might also find these pages helpful:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/about" className="bg-cream/50 rounded-xl p-4 hover:bg-cream transition-colors">
              <h3 className="font-semibold text-cocoa text-sm">About Us</h3>
              <p className="text-xs text-cocoa/60 mt-1">Learn about our story and mission</p>
            </Link>
            <Link href="/privacy-policy" className="bg-cream/50 rounded-xl p-4 hover:bg-cream transition-colors">
              <h3 className="font-semibold text-cocoa text-sm">Privacy Policy</h3>
              <p className="text-xs text-cocoa/60 mt-1">How we protect your data</p>
            </Link>
            <Link href="/terms" className="bg-cream/50 rounded-xl p-4 hover:bg-cream transition-colors">
              <h3 className="font-semibold text-cocoa text-sm">Terms of Use</h3>
              <p className="text-xs text-cocoa/60 mt-1">Rules for using our site</p>
            </Link>
            <Link href="/editorial-policy" className="bg-cream/50 rounded-xl p-4 hover:bg-cream transition-colors">
              <h3 className="font-semibold text-cocoa text-sm">Editorial Policy</h3>
              <p className="text-xs text-cocoa/60 mt-1">How we create content</p>
            </Link>
          </div>
        </section>

        <LegalNav current="/contact" />
      </div>
    </div>
  );
}
