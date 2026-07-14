"use client";

import { useEffect } from "react";
import Script from "next/script";

interface AdBannerProps {
  slot?: string;
  className?: string;
}

type AdSenseWindow = Window & {
  adsbygoogle?: unknown[];
};

const ADSENSE_CLIENT = "ca-pub-6710458178434465";

export default function AdBanner({ className = "" }: AdBannerProps) {
  useEffect(() => {
    const adsenseWindow = window as AdSenseWindow;
    adsenseWindow.adsbygoogle = adsenseWindow.adsbygoogle || [];
    adsenseWindow.adsbygoogle.push({});
  }, []);

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div className={`rounded-cozy overflow-hidden bg-white/50 border border-dashed border-blush/30 p-4 ${className}`}>
        <div className="flex flex-col items-center justify-center min-h-[90px] text-center">
          <p className="text-xs text-cocoa/40 font-medium uppercase tracking-wider mb-1">
            Advertisement
          </p>
          <ins
            className="adsbygoogle block"
            data-ad-client={ADSENSE_CLIENT}
            data-ad-format="auto"
            data-full-width-responsive="true"
            style={{ display: "block", minHeight: "90px" }}
          />
        </div>
      </div>
    </>
  );
}
