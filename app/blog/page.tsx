import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog | Cozy Coloring World",
  description: "Coloring tips, ideas, and inspiration for kids and adults. Learn about the benefits of coloring and get creative ideas!",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">Coloring Blog 🩷</h1>
        <p className="mt-3 text-cocoa/60 max-w-lg mx-auto">
          Tips, ideas, and inspiration for your coloring journey
        </p>
      </div>
      <div className="text-center py-16">
        <span className="text-5xl block mb-4">📝</span>
        <p className="text-cocoa/60 text-lg">Blog posts coming soon! Subscribe to our newsletter for updates.</p>
      </div>
    </div>
  );
}
