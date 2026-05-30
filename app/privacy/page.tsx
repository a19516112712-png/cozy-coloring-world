import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | Cozy Coloring World",
  description: "Privacy policy for Cozy Coloring World. Learn how we handle your data.",
  path: "/privacy",
});


export default function PrivacyPage() {
  return (
    <div className="page-container py-12 sm:py-16 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-8">Privacy Policy</h1>
      <div className="prose prose-cocoa max-w-none space-y-4 text-cocoa/80 leading-relaxed">
        <p><strong>Last updated:</strong> May 30, 2026</p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">1. Information We Collect</h2>
        <p>
          When you subscribe to our newsletter, we collect your email address. 
          We use Google Analytics to understand how visitors use our site. 
          Google AdSense may use cookies to serve personalized ads.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">2. How We Use Information</h2>
        <p>
          Your email is only used to send coloring page updates and related content. 
          Analytics data helps us improve the website experience. 
          We never sell or share your personal information with third parties.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">3. Cookies</h2>
        <p>
          This website uses cookies for analytics and advertising purposes. 
          You can disable cookies in your browser settings. 
          By using this site, you consent to our use of cookies.
        </p>

        <h2 className="text-xl font-semibold text-cocoa mt-8">4. Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{" "}
          hello@tinyanimalworlds.com.
        </p>
      </div>
    </div>
  );
}
