import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block rounded-cozy border border-blush/20 bg-white overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={category.imageUrl}
          alt={`${category.name} coloring pages — free printable ${category.name.toLowerCase()} PDF downloads`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-cocoa group-hover:text-rose transition-colors">
          {category.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-cocoa/55 line-clamp-2">
          {category.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-rose bg-rose/10 px-2.5 py-1 rounded-pill">
            {category.count} pages
          </span>
          <span className="text-xs text-cocoa/30 group-hover:text-rose/60 transition-colors">
            Browse →
          </span>
        </div>
      </div>
    </Link>
  );
}
