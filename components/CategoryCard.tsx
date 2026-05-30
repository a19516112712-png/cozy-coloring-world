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
      className="group block rounded-xl overflow-hidden bg-white shadow-card hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
    >
      {/* Cover Image — 16:9 */}
      <div className="relative aspect-[16/9] overflow-hidden bg-cream">
        <Image
          src={category.imageUrl}
          alt={`${category.name} — ${category.description}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Emoji badge */}
        <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-lg shadow-sm">
          {category.emoji}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-1">
          {category.name}
        </h3>
        <p className="mt-1 text-xs text-cocoa/55 line-clamp-2 leading-relaxed">
          {category.description}
        </p>

        {/* Bottom row */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] font-medium text-rose bg-rose/10 px-2.5 py-1 rounded-full">
            {category.count} pages
          </span>
          <span className="text-xs text-cocoa/30 group-hover:text-rose group-hover:translate-x-0.5 transition-all">
            Browse →
          </span>
        </div>
      </div>
    </Link>
  );
}
