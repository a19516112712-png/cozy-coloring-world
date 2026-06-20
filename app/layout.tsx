import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import { defaultMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6710458178434465" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
      </head>
      <body className="min-h-screen flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tiny Animal Worlds",
              "url": SITE_URL,
              "logo": `${SITE_URL}/apple-touch-icon.webp`,
              "sameAs": [
                "https://www.pinterest.com/tinyanimalworlds"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tiny Animal Worlds",
              "url": SITE_URL
            })
          }}
        />

      
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z4SWR4737S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-Z4SWR4737S", {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
