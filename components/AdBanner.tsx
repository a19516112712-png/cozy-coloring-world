interface AdBannerProps {
  slot?: string;
  className?: string;
}

export default function AdBanner({ slot = "1234567890", className = "" }: AdBannerProps) {
  return (
    <div className={`rounded-cozy overflow-hidden bg-white/50 border border-dashed border-blush/30 p-4 ${className}`}>
      <div className="flex flex-col items-center justify-center min-h-[90px] text-center">
        <p className="text-xs text-cocoa/40 font-medium uppercase tracking-wider mb-1">
          Advertisement
        </p>
        {/* Google AdSense placeholder — replace with actual AdSense code */}
        <ins
          className="adsbygoogle block"
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
          style={{ display: "block", minHeight: "90px" }}
        />
        <p className="text-xs text-cocoa/30 mt-1">
          Your ad here — support free coloring pages! 🎨
        </p>
      </div>
    </div>
  );
}
