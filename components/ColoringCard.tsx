import Link from "next/link";
import Image from "next/image";
import type { ColoringPage } from "@/data/coloring-pages";
import DownloadButton from "./DownloadButton";

interface ColoringCardProps {
  page: ColoringPage;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-mint/60 text-cocoa",
  Medium: "bg-butter text-cocoa",
  Hard: "bg-lavender/60 text-cocoa",
};

export default function ColoringCard({ page }: ColoringCardProps) {
  return (
    <div className="group rounded-cozy border border-blush/20 bg-white overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-1">
      {/* Image */}
      <Link
        href={`/coloring/${page.slug}`}
        className="block relative aspect-[4/5] bg-cream overflow-hidden"
      >
        <Image
          src={page.imageUrl}
          alt={page.altText}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Difficulty badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-pill ${difficultyColors[page.difficulty]}`}>
            {page.difficulty}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <Link href={`/coloring/${page.slug}`}>
          <h3 className="font-semibold text-cocoa text-sm group-hover:text-rose transition-colors line-clamp-1">
            {page.title}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-cocoa/55 line-clamp-2">{page.description}</p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {page.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-cocoa/45 bg-cream px-1.5 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Download Button */}
        <DownloadButton pdfUrl={page.pdfUrl} title={page.title} />
      </div>
    </div>
  );
}
