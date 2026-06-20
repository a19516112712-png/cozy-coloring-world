import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { wordSearches } from "@/data/wordSearches";

export const metadata: Metadata = generatePageMetadata({
  title: "Animal Word Search Printables | Free Printable Word Searches",
  description: "Browse all printable animal word search puzzles. Perfect for kids, classrooms, homeschool activities, and animal lovers. 100+ free puzzles to download and print!",
  path: "/word-search",
});

const animalEmojis: Record<string, string> = {
  fox: "🦊", bunny: "🐰", bear: "🐻", duck: "🦆", cat: "🐱", dog: "🐶",
  hedgehog: "🦔", squirrel: "🐿️", raccoon: "🦝", deer: "🦌", owl: "🦉",
  penguin: "🐧", koala: "🐨", panda: "🐼", tiger: "🐯", lion: "🦁",
  elephant: "🐘", monkey: "🐵", giraffe: "🦒", zebra: "🦓",
};

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const popularThemes = [
  { animal: "fox", label: "Fox", emoji: "🦊" },
  { animal: "bunny", label: "Bunny", emoji: "🐰" },
  { animal: "bear", label: "Bear", emoji: "🐻" },
  { animal: "duck", label: "Duck", emoji: "🦆" },
  { animal: "cat", label: "Cat", emoji: "🐱" },
  { animal: "dog", label: "Dog", emoji: "🐶" },
  { animal: "deer", label: "Forest Animals", emoji: "🦌" },
  { animal: "penguin", label: "Farm Animals", emoji: "🐧" },
];

export default function WordSearchListPage() {
  const sorted = [...wordSearches].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const latest = sorted.slice(0, 24);
  const totalPages = Math.ceil(sorted.length / 24);

  const easyCount = wordSearches.filter(ws => ws.difficulty === "Easy").length;
  const mediumCount = wordSearches.filter(ws => ws.difficulty === "Medium").length;
  const hardCount = wordSearches.filter(ws => ws.difficulty === "Hard").length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-cream/50 border-b border-blush/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-rose bg-rose/10 px-3 py-1 rounded-full mb-4">
              🔍 Word Search Puzzles
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-4">
              Free Printable Animal Word Searches
            </h1>
            <p className="text-cocoa/60 text-lg leading-relaxed mb-6">
              Browse all printable animal word search puzzles. Perfect for kids, classrooms, homeschool activities, and animal lovers.
            </p>
            {/* Stats */}
            <div className="flex justify-center gap-6 sm:gap-10">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-rose">{wordSearches.length}+</p>
                <p className="text-xs text-cocoa/50">Puzzles</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cocoa">{easyCount}</p>
                <p className="text-xs text-cocoa/50">Easy</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cocoa">{mediumCount}</p>
                <p className="text-xs text-cocoa/50">Medium</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cocoa">{hardCount}</p>
                <p className="text-xs text-cocoa/50">Hard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Themes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
          <span>⭐</span> Popular Themes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {popularThemes.map((theme) => {
            const count = wordSearches.filter(ws => ws.animal === theme.animal).length;
            return (
              <Link
                key={theme.animal}
                href={`/word-search/${theme.animal}-habitats-word-search`}
                className="bg-white rounded-cozy border border-blush/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all text-center group"
              >
                <span className="text-3xl block mb-2">{theme.emoji}</span>
                <p className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors">{theme.label}</p>
                <p className="text-xs text-cocoa/40">{count} puzzles</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest Word Searches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-cream/20">
        <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
          <span>🆕</span> Latest Word Searches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latest.map((ws) => (
            <Link
              key={ws.id}
              href={`/word-search/${ws.slug}`}
              className="bg-white rounded-cozy border border-blush/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{animalEmojis[ws.animal] || "🔍"}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-2">
                    {ws.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className={`px-2 py-0.5 rounded-full ${difficultyColors[ws.difficulty]}`}>
                  {ws.difficulty}
                </span>
                <span className="text-cocoa/40">{ws.wordCount} words</span>
                <span className="text-cocoa/40">Ages {ws.ageRange}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Word Searches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
          <span>📋</span> All Word Searches
          <span className="text-sm font-normal text-cocoa/40 ml-2">({sorted.length} puzzles — {totalPages} pages)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.slice(0, 50).map((ws) => (
            <Link
              key={ws.id}
              href={`/word-search/${ws.slug}`}
              className="bg-white rounded-cozy border border-blush/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{animalEmojis[ws.animal] || "🔍"}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors line-clamp-2">
                    {ws.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className={`px-2 py-0.5 rounded-full ${difficultyColors[ws.difficulty]}`}>
                  {ws.difficulty}
                </span>
                <span className="text-cocoa/40">{ws.wordCount} words</span>
                <span className="text-cocoa/40">Ages {ws.ageRange}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Activities */}
      <section className="bg-cream/30 border-t border-blush/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cocoa mb-6 text-center">
            <span>🎯</span> Related Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "🎨", label: "Coloring Pages", desc: "Explore 1500+ free printable coloring pages", href: "/coloring-pages" },
              { icon: "🏷️", label: "Categories", desc: "Browse all categories and themes", href: "/categories" },
              { icon: "📝", label: "Blog", desc: "Read tips, guides, and creative ideas", href: "/blog" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-cozy border border-blush/20 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all text-center group"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <p className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors">{item.label}</p>
                <p className="text-xs text-cocoa/50 mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
