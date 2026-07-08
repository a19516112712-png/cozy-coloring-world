import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
  openGraph: undefined,
  twitter: undefined,
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <span className="text-6xl block mb-6">🖍️</span>
        <h1 className="text-4xl font-bold text-cocoa mb-4">Page Not Found</h1>
        <p className="text-cocoa/60 mb-8 max-w-md mx-auto">
          Oops! This coloring page seems to have wandered off. Let&apos;s get you back to the fun!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-rose text-white font-semibold hover:bg-rose/90 transition-all shadow-cozy hover:shadow-hover"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
