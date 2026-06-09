import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { wordSearches } from "@/data/wordSearches";

export const metadata: Metadata = generatePageMetadata({
  title: "Free Printable Word Search Puzzles | 100+ Animal Word Searches",
  description: "Download free printable word search puzzles for kids! 100+ animal-themed word searches featuring foxes, bunnies, bears, ducks, and more. Perfect for classrooms and homeschool!",
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

export default function WordSearchListPage() {
  const sorted = [...wordSearches].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const animals = [...new Set(wordSearches.map(ws => ws.animal))];

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
              Free Printable Word Search Puzzles
            </h1>
            <p className="text-cocoa/60 text-lg leading-relaxed">
              100+ animal-themed word search puzzles for kids ages 4-12. Perfect for classrooms, homeschool, and rainy day fun!
            </p>
          </div>
        </div>
      </section>

      {/* Animals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
          <span>🐾</span> Choose Your Animal
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {animals.map((animal) => {
            const name = animal.charAt(0).toUpperCase() + animal.slice(1);
            const count = wordSearches.filter(ws => ws.animal === animal).length;
            return (
              <Link
                key={animal}
                href={`/word-search/${animal}-habitats-word-search`}
                className="bg-white rounded-cozy border border-blush/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all text-center group"
              >
                <span className="text-3xl block mb-2">{animalEmojis[animal] || "🔍"}</span>
                <p className="text-sm font-semibold text-cocoa group-hover:text-rose transition-colors">{name}</p>
                <p className="text-xs text-cocoa/40">{count} puzzles</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* All Puzzles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-cocoa mb-6 flex items-center gap-2">
          <span>📋</span> All Word Search Puzzles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((ws) => (
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
    </div>
  );
}
