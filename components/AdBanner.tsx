import Script from "next/script";

interface AdBannerProps {
  slot?: string;
  className?: string;
}

const ADSENSE_CLIENT = "ca-pub-6710458178434465";

// Google Auto Ads handles all ad injection automatically.
// This component only loads the AdSense script and reserves
// layout space to prevent CLS (Cumulative Layout Shift).
export default function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div className={className} />
    </>
  );
}
