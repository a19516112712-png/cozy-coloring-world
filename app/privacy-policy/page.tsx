import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from '@/components/LegalNav';
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | Cozy Coloring World",
  description: "Privacy Policy for Cozy Coloring World. Learn how we collect, use, and protect your personal information when you visit our free printable coloring pages website.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-4">Privacy Policy</h1>
        <p className="text-sm text-cocoa/50 mb-10">Last Updated: June 19, 2026</p>

        <div className="prose prose-cocoa max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cocoa">1. Introduction</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Cozy Coloring World (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website 
              located at <strong>tinyanimalworlds.com</strong> (the &quot;Site&quot;). This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our Site. Please read this policy carefully. By using the Site, you agree to the 
              practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">2. Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-cocoa mt-4">2.1 Information You Provide</h3>
            <p className="text-cocoa/70 leading-relaxed">
              We do not require users to create accounts or provide personal information to access 
              our free coloring pages and word search puzzles. However, you may voluntarily provide 
              information when you:
            </p>
            <ul className="space-y-1 text-cocoa/70">
              <li>Contact us via email (hello@tinyanimalworlds.com)</li>
              <li>Submit feedback or content suggestions</li>
            </ul>

            <h3 className="text-lg font-medium text-cocoa mt-4">2.2 Automatically Collected Information</h3>
            <p className="text-cocoa/70 leading-relaxed">
              When you visit our Site, certain information is automatically collected, including:
            </p>
            <ul className="space-y-1 text-cocoa/70">
              <li><strong>Log Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, and time stamps.</li>
              <li><strong>Cookies and Similar Technologies:</strong> See our{" "}
                <Link href="/cookie-policy" className="text-rose hover:underline">Cookie Policy</Link> for details.</li>
              <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, and interaction patterns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">3. How We Use Your Information</h2>
            <p className="text-cocoa/70 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="space-y-1 text-cocoa/70">
              <li><strong>To operate and maintain the Site</strong> — ensuring pages load correctly and content is accessible.</li>
              <li><strong>To improve user experience</strong> — understanding which content is most popular helps us create better resources.</li>
              <li><strong>To display relevant advertisements</strong> — through Google AdSense (see Section 6).</li>
              <li><strong>To analyze traffic and trends</strong> — using Google Analytics.</li>
              <li><strong>To respond to inquiries</strong> — when you contact us via email.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">4. Cookies</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Cookies are small text files stored on your device by your web browser. We use cookies 
              for essential site functionality and analytics. For detailed information about the 
              cookies we use and how to manage them, please see our{" "}
              <Link href="/cookie-policy" className="text-rose hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">5. Third-Party Services</h2>
            <p className="text-cocoa/70 leading-relaxed mb-2">
              We use the following third-party services that may collect information about you:
            </p>
            
            <div className="space-y-3">
              <div className="bg-cream/50 rounded-xl p-4">
                <h3 className="font-semibold text-cocoa">Google Analytics (GA4)</h3>
                <p className="text-sm text-cocoa/70">
                  We use Google Analytics to understand how visitors interact with our Site. Google 
                  Analytics collects information such as pages visited, time on site, and geographic 
                  location. Google may use cookies to collect this data. Learn more at{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">Google&apos;s Privacy Policy</a>.
                </p>
              </div>

              <div className="bg-cream/50 rounded-xl p-4">
                <h3 className="font-semibold text-cocoa">Google AdSense</h3>
                <p className="text-sm text-cocoa/70">
                  We display advertisements through Google AdSense. Google uses cookies to serve ads 
                  based on your prior visits to our Site and other websites. Google&apos;s use of 
                  advertising cookies enables it and its partners to serve ads based on your visit 
                  to our Site and/or other sites on the Internet. You may opt out of personalized 
                  advertising by visiting{" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">Google Ads Settings</a>.
                </p>
              </div>

              <div className="bg-cream/50 rounded-xl p-4">
                <h3 className="font-semibold text-cocoa">Amazon Associates</h3>
                <p className="text-sm text-cocoa/70">
                  As an Amazon Associate, we earn from qualifying purchases. Amazon may use cookies 
                  to track referrals from our Site. See our{" "}
                  <Link href="/affiliate-disclosure" className="text-rose hover:underline">Affiliate Disclosure</Link> for more information.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">6. Advertising</h2>
            <p className="text-cocoa/70 leading-relaxed">
              We use Google AdSense to display advertisements on our Site. Google AdSense may use 
              the DoubleClick cookie to serve more relevant ads across the web and limit the number 
              of times a given ad is shown to you. For more information about Google AdSense, 
              please visit the{" "}
              <a href="https://support.google.com/adsense/answer/1348695" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">Google AdSense Privacy FAQ</a>.
            </p>
            <p className="text-cocoa/70 leading-relaxed mt-2">
              Third-party vendors, including Google, use cookies to serve ads based on your prior 
              visits to our Site. You can opt out of some third-party vendors&apos; use of cookies 
              for personalized advertising by visiting{" "}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">www.aboutads.info</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">7. Children&apos;s Privacy</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Our Site is intended for general audiences, including children, and we are committed 
              to protecting children&apos;s privacy. We do not knowingly collect personal information 
              from children under 13. All content on our Site is age-appropriate and family-friendly. 
              We do not enable social features, user accounts, or interactive communication features 
              that could compromise children&apos;s privacy.
            </p>
            <p className="text-cocoa/70 leading-relaxed mt-2">
              If you believe we have inadvertently collected information from a child under 13, 
              please contact us immediately at{" "}
              <a href="mailto:hello@tinyanimalworlds.com" className="text-rose hover:underline">hello@tinyanimalworlds.com</a>{" "}
              and we will promptly delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">8. Data Security</h2>
            <p className="text-cocoa/70 leading-relaxed">
              We implement reasonable security measures to protect your information. However, no 
              method of transmission over the Internet is 100% secure. We cannot guarantee absolute 
              security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">9. Your Rights</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal 
              information, including:
            </p>
            <ul className="space-y-1 text-cocoa/70">
              <li>The right to access information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt-out of certain data processing activities</li>
            </ul>
            <p className="text-cocoa/70 leading-relaxed mt-2">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:hello@tinyanimalworlds.com" className="text-rose hover:underline">hello@tinyanimalworlds.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">10. CCPA Compliance (California Residents)</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Under the California Consumer Privacy Act (CCPA), California residents have the right 
              to know what personal information is collected, to request deletion, and to opt-out of 
              the sale of personal information. We do not sell personal information. To exercise 
              your CCPA rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">11. GDPR Compliance (EU/EEA Residents)</h2>
            <p className="text-cocoa/70 leading-relaxed">
              For residents of the European Union and European Economic Area, we process personal 
              data based on legitimate interests (operating and improving the Site) and consent 
              (for cookies and advertising). You have the right to withdraw consent at any time, 
              request access to your data, and request erasure of your data under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">12. Changes to This Policy</h2>
            <p className="text-cocoa/70 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this 
              page with an updated &quot;Last Updated&quot; date. We encourage you to review this 
              policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">13. Contact Us</h2>
            <p className="text-cocoa/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-cream/50 rounded-xl p-4 mt-2">
              <p className="text-cocoa/70"><strong>Email:</strong>{" "}
                <a href="mailto:hello@tinyanimalworlds.com" className="text-rose hover:underline">hello@tinyanimalworlds.com</a>
              </p>
              <p className="text-cocoa/70"><strong>Website:</strong>{" "}
                <a href="https://tinyanimalworlds.com" className="text-rose hover:underline">tinyanimalworlds.com</a>
              </p>
            </div>
          </section>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-cocoa">Related Policies</h2>
          <ul className="space-y-2 text-cocoa/70 mt-3">
            <li><Link href="/cookie-policy" className="text-rose hover:underline">Cookie Policy</Link> — Details about cookies we use</li>
            <li><Link href="/terms" className="text-rose hover:underline">Terms of Use</Link> — Rules for using our site</li>
            <li><Link href="/about" className="text-rose hover:underline">About Us</Link> — Learn who we are</li>
            <li><Link href="/contact" className="text-rose hover:underline">Contact</Link> — Get in touch</li>
          </ul>
        </section>

        <LegalNav current="/privacy-policy" />
      </div>
    </div>
  );
}
