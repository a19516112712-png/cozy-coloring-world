import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Cookie Policy | Cozy Coloring World",
  description: "Cookie Policy for Cozy Coloring World. Learn about the cookies we use, how they work, and how you can manage your cookie preferences on our free printable coloring website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">Cookie Policy</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-4">Cookie Policy</h1>
        <p className="text-sm text-cocoa/50 mb-10">Last Updated: June 19, 2026</p>

        <div className="prose prose-cocoa max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cocoa">1. What Are Cookies?</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when 
              you visit a website. They are widely used to make websites work more efficiently, 
              provide analytical information, and deliver personalized advertising. Cookies may be 
              &quot;persistent&quot; (remaining on your device until they expire or are deleted) 
              or &quot;session&quot; cookies (deleted when you close your browser).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">2. How We Use Cookies</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Cozy Coloring World (tinyanimalworlds.com) uses cookies for the following purposes:
            </p>

            <div className="space-y-3 mt-3">
              <div className="bg-cream/50 rounded-xl p-4">
                <h3 className="font-semibold text-cocoa">Essential Cookies</h3>
                <p className="text-sm text-cocoa/70">
                  These cookies are necessary for the Site to function properly. They enable core 
                  functionality such as page navigation and access to secure areas. The Site cannot 
                  function properly without these cookies.
                </p>
              </div>

              <div className="bg-cream/50 rounded-xl p-4">
                <h3 className="font-semibold text-cocoa">Analytics Cookies (Google Analytics)</h3>
                <p className="text-sm text-cocoa/70">
                  We use Google Analytics to collect information about how visitors use our Site. 
                  These cookies help us understand which pages are most popular, how visitors 
                  navigate the Site, and how we can improve the user experience. The information 
                  collected is aggregated and anonymous. Google Analytics cookies include:{" "}
                  <code className="text-xs bg-white px-1 rounded">_ga</code>,{" "}
                  <code className="text-xs bg-white px-1 rounded">_gid</code>,{" "}
                  <code className="text-xs bg-white px-1 rounded">_gat</code>.
                </p>
              </div>

              <div className="bg-cream/50 rounded-xl p-4">
                <h3 className="font-semibold text-cocoa">Advertising Cookies (Google AdSense)</h3>
                <p className="text-sm text-cocoa/70">
                  We use Google AdSense to display advertisements. Google and its partners use 
                  cookies to serve ads based on your prior visits to our Site and other websites. 
                  These cookies help make advertising more relevant and limit the number of times 
                  you see the same ad. Google AdSense may use the DoubleClick cookie and other 
                  advertising cookies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">3. Third-Party Cookies</h2>
            <p className="text-cocoa/70 leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report 
              usage statistics and deliver advertisements. These third-party services include:
            </p>
            <ul className="space-y-1 text-cocoa/70">
              <li><strong>Google Analytics</strong> — Analytics and performance measurement</li>
              <li><strong>Google AdSense</strong> — Advertising delivery and measurement</li>
              <li><strong>Google Ad Manager</strong> — Ad serving and frequency capping</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">4. How to Manage Cookies</h2>
            <p className="text-cocoa/70 leading-relaxed">
              You can control and manage cookies in several ways:
            </p>
            <ul className="space-y-2 text-cocoa/70">
              <li>
                <strong>Browser Settings:</strong> Most web browsers allow you to manage your cookie 
                preferences. You can usually find these settings in the &quot;Options,&quot; 
                &quot;Preferences,&quot; or &quot;Settings&quot; menu. You can set your browser to 
                refuse cookies, delete cookies, or alert you when cookies are being sent.
              </li>
              <li>
                <strong>Google Analytics Opt-out:</strong> You can opt out of Google Analytics by 
                installing the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </li>
              <li>
                <strong>Advertising Opt-out:</strong> You can opt out of personalized advertising 
                from Google by visiting{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">Google Ads Settings</a>.{" "}
                You can also opt out of many third-party advertising cookies through{" "}
                <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">www.aboutads.info</a>{" "}
                or{" "}
                <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">www.youronlinechoices.com</a>.
              </li>
            </ul>

            <div className="bg-rose/10 rounded-xl p-4 mt-4 border border-rose/20">
              <p className="text-sm text-cocoa/80">
                <strong>⚠️ Important:</strong> Disabling certain cookies may affect the functionality 
                of the Site and your ability to access all features. Essential cookies cannot be 
                disabled as they are required for the Site to work properly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">5. Do Not Track Signals</h2>
            <p className="text-cocoa/70 leading-relaxed">
              Some browsers have a &quot;Do Not Track&quot; feature that signals to websites that 
              you do not want to have your online activity tracked. Our Site currently does not 
              respond to Do Not Track signals. However, you can use the cookie management options 
              described above to control tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">6. Changes to This Cookie Policy</h2>
            <p className="text-cocoa/70 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or applicable laws. Changes will be posted on this page with an updated &quot;Last 
              Updated&quot; date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">7. Contact Us</h2>
            <p className="text-cocoa/70 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="mailto:hello@tinyanimalworlds.com" className="text-rose hover:underline">hello@tinyanimalworlds.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cocoa">8. Related Policies</h2>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy-policy" className="text-rose hover:underline">Privacy Policy</Link>
                <span className="text-cocoa/60"> — Full privacy practices</span>
              </li>
              <li>
                <Link href="/terms" className="text-rose hover:underline">Terms of Use</Link>
                <span className="text-cocoa/60"> — Site usage terms</span>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-rose hover:underline">Affiliate Disclosure</Link>
                <span className="text-cocoa/60"> — Amazon Associates information</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
