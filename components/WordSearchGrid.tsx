"use client";

import { useMemo } from "react";
import { generateWordSearchGrid } from "@/lib/wordSearchUtils";

interface Props {
  wordList: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  title?: string;
}

export default function WordSearchGrid({ wordList, difficulty }: Props) {
  const { grid, placedWords, size } = useMemo(
    () => generateWordSearchGrid(wordList, difficulty),
    [wordList, difficulty]
  );

  return (
    <div className="word-search-grid-container overflow-x-auto">
      {/* Word List */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="text-xs font-semibold text-cocoa/50 uppercase tracking-wide">Find these words:</span>
        {wordList.map((w) => (
          <span key={w} className="text-xs font-bold text-rose bg-rose/5 px-2 py-0.5 rounded capitalize">
            {w}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div
        className="inline-block border-2 border-cocoa/20 rounded-lg overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, minmax(28px, 36px))`,
          gap: "1px",
        }}
      >
        {grid.map((row, ri) =>
          row.map((cell, ci) => (
            <div
              key={`${ri}-${ci}`}
              className="flex items-center justify-center font-mono text-sm sm:text-base font-bold text-cocoa bg-cream/30 hover:bg-rose/10 transition-colors cursor-default select-none"
              style={{ width: "100%", aspectRatio: "1", minWidth: "26px", minHeight: "26px" }}
            >
              {cell}
            </div>
          ))
        )}
      </div>

      {/* Solution Toggle */}
      <details className="mt-6 group">
        <summary className="inline-flex items-center gap-2 px-4 py-2 bg-cream/50 border border-blush/20 rounded-pill text-sm font-medium text-cocoa cursor-pointer hover:bg-cream transition-colors">
          <span>💡</span> Show Solution
          <span className="text-xs text-cocoa/40 group-open:rotate-180 transition-transform ml-1">▼</span>
        </summary>
        <div className="mt-3 p-4 bg-cream/30 rounded-xl">
          <p className="text-xs text-cocoa/50 mb-2">Words are placed in these directions:</p>
          <div className="flex flex-wrap gap-3">
            {placedWords.map((pw) => (
              <div key={pw.word} className="text-xs bg-white border border-blush/20 rounded-lg px-3 py-1.5">
                <span className="font-bold text-rose">{pw.word}</span>
                <span className="text-cocoa/40 ml-1">&mdash; {pw.direction.replace(/-/g, " ")}</span>
              </div>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}
