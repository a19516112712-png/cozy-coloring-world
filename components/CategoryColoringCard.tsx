"use client";

import Link from "next/link";
import Image from "next/image";
import type { ColoringPage } from "@/data/coloring-pages";

const difficultyColors: Record<string, string> = {
  Easy: "bg-mint/60 text-cocoa",
  Medium: "bg-butter text-cocoa",
  Hard: "bg-lavender/60 text-cocoa",
};

interface CategoryColoringCardProps {
  page: ColoringPage;
}

export default function CategoryColoringCard({ page }: CategoryColoringCardProps) {
  return (
    <div className="group rounded-cozy border border-blush/20 bg-white overflow-hidden shadow-card hover:shadow-hover transition-all hover:-translate-y-1">
      <Link
        href={`/coloring/${page.slug}`}
        className="block relative aspect-[2/3] bg-cream overflow-hidden"
      >
        <Image
          src={page.imageUrl}
          alt={page.altText}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Pinterest Save on hover */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              const url = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent("https://cozycoloringworld.com/coloring/" + page.slug)}&media=${encodeURIComponent("https://cozycoloringworld.com" + page.imageUrl)}&description=${encodeURIComponent("Free printable " + page.title + " coloring page. " + page.description)}`;
              window.open(url, "_blank", "width=750,height=600");
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-pill bg-[#e60023] text-white text-xs font-semibold hover:bg-[#cc001f] transition-all shadow-lg"
            title="Save to Pinterest"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            Save
          </button>
        </div>
        <div className="absolute top-2 left-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-pill ${difficultyColors[page.difficulty]}`}>
            {page.difficulty}
          </span>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/coloring/${page.slug}`}>
          <h3 className="font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-1 text-sm">
            {page.title}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-cocoa/60 line-clamp-2">{page.description}</p>
        <Link
          href={`/coloring/${page.slug}`}
          className="mt-3 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-pill bg-rose text-white text-xs font-semibold hover:bg-rose/90 transition-all"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download JPG
        </Link>
      </div>
    </div>
  );
}
