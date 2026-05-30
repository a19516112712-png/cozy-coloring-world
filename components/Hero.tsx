import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blush/30 via-cream to-mint/20">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-lavender/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-peach/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 left-1/2 w-64 h-64 bg-mint/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-white/70 backdrop-blur-sm border border-blush mb-5">
              <span className="text-xs">🎨</span>
              <span className="text-[11px] font-medium text-cocoa">100% Free Printables</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-cocoa leading-tight tracking-tight">
              Free Cozy{" "}
              <span className="bg-gradient-to-r from-rose via-blush to-lavender bg-clip-text text-transparent">
                Coloring Pages
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-cocoa/65 leading-relaxed max-w-xl lg:max-w-none">
              Download cute printable coloring pages for kids and adults. 
              Cozy, kawaii, and cottagecore designs to brighten your day! ✨
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <Link
                href="/coloring-pages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill bg-rose text-white text-base font-semibold hover:bg-rose/90 transition-all shadow-cozy hover:shadow-hover hover:-translate-y-0.5"
              >
                Download Free PDFs 📥
              </Link>
              <Link
                href="/categories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill bg-white text-cocoa text-base font-semibold border-2 border-blush hover:border-rose hover:text-rose transition-all shadow-cozy hover:shadow-hover"
              >
                Browse Categories 🎨
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center lg:items-start justify-center lg:justify-start gap-6 text-sm text-cocoa/50">
              <span>✨ {29}+ Pages</span>
              <span className="hidden sm:inline">·</span>
              <span>🖨️ Free to Print</span>
              <span className="hidden sm:inline">·</span>
              <span>📅 New Weekly</span>
            </div>
          </div>

          {/* Right — Hero Cover Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-cozy shadow-hover overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/hero-cover.svg"
                alt="Cozy Coloring World — free printable coloring pages for kids and adults. Cute cottagecore and kawaii designs."
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-pill bg-rose/90 backdrop-blur-sm text-white text-xs font-semibold shadow-lg">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Free PDF Download
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
