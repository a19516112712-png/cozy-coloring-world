import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Your Free Coloring Pages | Tiny Animal Worlds",
  },
  description:
    "Your free 100-page cozy animal coloring pack is ready to download.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: undefined,
  },
  openGraph: undefined,
  twitter: undefined,
};

export default function FreeColoringPackThankYouPage() {
  return (
    <section className="bg-cream">
      <div className="page-container py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-cocoa/55">
              Tiny Animal Worlds
            </span>
          </div>

          <div className="mt-6 rounded-cozy border border-blush/30 bg-white px-6 py-10 text-center shadow-card sm:px-10 sm:py-14">
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush/30"
              aria-hidden="true"
            >
              <span className="text-3xl">🎉</span>
            </div>

            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
              Your Free Coloring Pages Are Ready!
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cocoa/70 sm:text-lg">
              Your free coloring pack is ready to download.
            </p>

            <a
              href="/api/download/free-coloring-pack"
              download
              className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center rounded-pill bg-rose px-6 py-4 text-sm font-bold text-white shadow-cozy transition-all hover:-translate-y-0.5 hover:bg-rose/90 hover:shadow-hover sm:w-auto sm:px-8 sm:text-lg"
            >
              Download My Free Coloring Pages
            </a>

            <div className="mx-auto mt-10 max-w-xl border-t border-blush/25 pt-8 text-left">
              <h2 className="text-base font-bold text-cocoa">
                100 Free Coloring Pages
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cocoa/70">
                Cozy animal illustrations made for relaxing creative time.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cocoa/70">
                Save the PDF to your device and enjoy coloring whenever you like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
