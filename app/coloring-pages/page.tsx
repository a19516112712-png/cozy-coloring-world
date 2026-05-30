import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import ColoringCard from "@/components/ColoringCard";
import AdBanner from "@/components/AdBanner";
import { coloringPages } from "@/data/coloring-pages";

export const metadata: Metadata = generatePageMetadata({
  title: "All Free Coloring Pages | Cozy Coloring World",
  description: "Browse and download all our free printable coloring pages for kids and adults. New pages added weekly!",
  path: "/coloring-pages",
});

export default function AllPagesPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">All Coloring Pages ✨</h1>
        <p className="mt-3 text-cocoa/60 max-w-lg mx-auto">
          Browse all {coloringPages.length} free printable coloring pages — download and start coloring!
        </p>
      </div>

      <div className="card-grid mb-8">
        {coloringPages.map((page) => (
          <ColoringCard key={page.id} page={page} />
        ))}
      </div>

      <AdBanner slot="5555555555" />
    </div>
  );
}
