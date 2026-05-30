import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import CategoryCard from "@/components/CategoryCard";
import AdBanner from "@/components/AdBanner";
import { categories } from "@/data/categories";

export const metadata: Metadata = generatePageMetadata({
  title: "Coloring Categories | Cozy Coloring World",
  description: "Browse all our free coloring page categories — cute animals, cozy scenes, kawaii, fantasy, and kids coloring.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <div className="page-container py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">All Categories 🎨</h1>
        <p className="mt-3 text-cocoa/60 max-w-lg mx-auto">
          Find the perfect coloring pages by browsing our cozy collections
        </p>
      </div>

      <div className="card-grid mb-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <AdBanner slot="3333333333" />
    </div>
  );
}
