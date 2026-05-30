interface AmazonBookPromoProps {
  className?: string;
}

export default function AmazonBookPromo({ className = "" }: AmazonBookPromoProps) {
  return (
    <div className={`relative overflow-hidden rounded-cozy bg-gradient-to-br from-peach/30 via-cream to-lavender/30 border-2 border-blush/20 p-8 sm:p-10 ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute -top-6 -right-6 text-7xl opacity-[0.07] rotate-12">📖</div>
      <div className="absolute -bottom-4 -left-4 text-6xl opacity-[0.07] -rotate-12">🎨</div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Book Cover Area */}
          <div className="flex-shrink-0">
            <div className="w-40 h-56 sm:w-48 sm:h-64 rounded-cozy bg-white shadow-hover border-2 border-blush/30 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder cover design */}
              <div className="absolute inset-0 bg-gradient-to-b from-blush/20 via-cream to-lavender/20" />
              <div className="relative text-center p-4">
                <span className="text-4xl block mb-2">🎨</span>
                <p className="text-xs font-bold text-cocoa/80 leading-tight">
                  Cozy<br />Coloring<br />Book
                </p>
                <p className="text-[10px] text-cocoa/40 mt-2">50+ Designs</p>
              </div>
              {/* Spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/5 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold text-rose bg-rose/10 px-3 py-1 rounded-pill uppercase tracking-wider mb-3">
              📚 Premium Coloring Book
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-cocoa mb-3">
              Love These Coloring Pages?
            </h2>
            <p className="text-cocoa/70 text-base mb-5 leading-relaxed max-w-lg">
              Get the <strong>complete cozy coloring book collection</strong> on Amazon! Over 50 beautifully designed 
              pages in a premium 8.5×11 paperback — perfect for cozy coloring at home or gifting to someone special.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 max-w-md lg:max-w-none">
              {[
                { emoji: "📄", text: "50+ unique designs" },
                { emoji: "📐", text: "8.5×11 large format" },
                { emoji: "🖍️", text: "Single-sided pages" },
                { emoji: "🎁", text: "Perfect gift idea" },
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-cocoa/70">
                  <span>{feat.emoji}</span>
                  <span>{feat.text}</span>
                </div>
              ))}
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-5 justify-center lg:justify-start">
              <div className="flex text-yellow-400">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-lg">{s}</span>
                ))}
              </div>
              <span className="text-sm text-cocoa/50">4.8 out of 5 stars</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.amazon.com/dp/YOUR_BOOK_ASIN?tag=YOUR_ASSOCIATE_TAG"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-pill bg-cocoa text-white text-base font-semibold hover:bg-cocoa/90 transition-all shadow-cozy hover:shadow-hover hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.35 13.35l-2.8-2.8c-.2-.2-.2-.51 0-.71l2.8-2.8c.2-.2.51-.2.71 0l2.8 2.8c.2.2.2.51 0 .71l-2.8 2.8c-.2.2-.51.2-.71 0z"/>
              </svg>
              View Coloring Book on Amazon
            </a>

            <p className="mt-4 text-xs text-cocoa/40">
              As an Amazon Associate, we earn from qualifying purchases at no extra cost to you. 💛
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
