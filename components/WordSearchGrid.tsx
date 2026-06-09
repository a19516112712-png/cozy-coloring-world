"use client";

import { useMemo } from "react";

interface Props {
  wordList: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  title?: string;
}

const GRID_SIZES: Record<string, number> = { Easy: 10, Medium: 12, Hard: 15 };

function generateGrid(wordList: string[], size: number, difficulty: string): { grid: string[][]; placedWords: { word: string; row: number; col: number; direction: string }[] } {
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(""));
  const placedWords: { word: string; row: number; col: number; direction: string }[] = [];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const directions: { dr: number; dc: number; name: string }[] = [
    { dr: 0, dc: 1, name: "right" },
    { dr: 0, dc: -1, name: "left" },
    { dr: 1, dc: 0, name: "down" },
    { dr: -1, dc: 0, name: "up" },
    { dr: 1, dc: 1, name: "diag-down-right" },
    { dr: 1, dc: -1, name: "diag-down-left" },
    { dr: -1, dc: 1, name: "diag-up-right" },
    { dr: -1, dc: -1, name: "diag-up-left" },
  ];

  const sorted = [...wordList].sort((a, b) => b.length - a.length).map(w => w.toUpperCase());

  for (const word of sorted) {
    let placed = false;
    const allowedDirs = difficulty === "Easy"
      ? directions.filter(d => d.name === "right" || d.name === "down")
      : difficulty === "Medium"
      ? directions.filter(d => d.name === "right" || d.name === "down" || d.name === "diag-down-right")
      : directions;

    const shuffledDirs = [...allowedDirs].sort(() => Math.random() - 0.5);

    for (let attempt = 0; attempt < 50 && !placed; attempt++) {
      const dir = shuffledDirs[Math.floor(Math.random() * shuffledDirs.length)];
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);

      let fits = true;
      for (let i = 0; i < word.length; i++) {
        const r = row + dir.dr * i;
        const c = col + dir.dc * i;
        if (r < 0 || r >= size || c < 0 || c >= size) { fits = false; break; }
        if (grid[r][c] !== "" && grid[r][c] !== word[i]) { fits = false; break; }
      }

      if (fits) {
        for (let i = 0; i < word.length; i++) {
          grid[row + dir.dr * i][col + dir.dc * i] = word[i];
        }
        placedWords.push({ word, row, col, direction: dir.name });
        placed = true;
      }
    }
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === "") {
        grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }

  return { grid, placedWords };
}

export default function WordSearchGrid({ wordList, difficulty, title }: Props) {
  const size = GRID_SIZES[difficulty] || 10;
  const { grid, placedWords } = useMemo(() => generateGrid(wordList, size, difficulty), [wordList, size, difficulty]);

  const cellSize = size > 12 ? 30 : 36;
  const fontSize = size > 12 ? "10pt" : "12pt";

  return (
    <>
      {/* ===== SCREEN VIEW ===== */}
      <div className="word-search-grid-container overflow-x-auto">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-xs font-semibold text-cocoa/50 uppercase tracking-wide">Find these words:</span>
          {wordList.map((w) => (
            <span key={w} className="text-xs font-bold text-rose bg-rose/5 px-2 py-0.5 rounded capitalize">
              {w}
            </span>
          ))}
        </div>

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

      {/* ===== PRINT DATA (hidden, extracted by PrintButton) ===== */}
      <div id="word-search-print" style={{ display: "none" }}>
        <div className="print-header">
          <h2 className="print-title">{title || "Word Search Puzzle"}</h2>
          <p className="print-difficulty">Difficulty: {difficulty} &bull; {wordList.length} words</p>
        </div>

        <div className="print-words">
          <p className="print-words-label">Words to Find:</p>
          <div className="print-words-list">
            {wordList.map((w) => (
              <span key={w} className="print-word-tag">{w}</span>
            ))}
          </div>
        </div>

        <div className="print-grid-container">
          <div
            className="print-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
            }}
          >
            {grid.map((row, ri) =>
              row.map((cell, ci) => (
                <div
                  key={`p-${ri}-${ci}`}
                  className="print-cell"
                  style={{ width: `${cellSize}px`, height: `${cellSize}px`, fontSize }}
                >
                  {cell}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="print-footer">
          <p className="print-url">tinyanimalworlds.com</p>
          <p className="print-free">Free Printable Word Search &mdash; For Personal &amp; Classroom Use</p>
        </div>
      </div>
    </>
  );
}
