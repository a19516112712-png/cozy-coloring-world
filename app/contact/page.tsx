import type { Metadata } from "next";
import LegalNav from '@/components/LegalNav';
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact | Cozy Coloring World",
  description: "Get in touch with Cozy Coloring World. We'd love to hear from you!",
  path: "/contact",
});


export default function ContactPage() {
  return (
    <div className="page-container py-12 sm:py-16 max-w-3xl">
      <div className="text-center mb-10">
        <span className="text-4xl block mb-3">💌</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">Contact Us</h1>
        <p className="mt-3 text-cocoa/60">
          We&apos;d love to hear from you! Send us a message and we&apos;ll get back to you soon.
        </p>
      </div>

      <div className="bg-white rounded-cozy border border-blush/20 p-8 shadow-card">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3 text-cocoa/80">
            <span className="text-xl">📧</span>
            <span>hello@tinyanimalworlds.com</span>
          </div>
          <p className="text-sm text-cocoa/50 mt-6">
            For business inquiries, collaborations, or just to say hi — we read every message! 🎨
          </p>
        </div>
      </div>
      <LegalNav current="/contact" />
    </div>
  );
}
