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

  return (
    <>
      {/* ===== SCREEN VIEW ===== */}
      <div className="word-search-grid-container overflow-x-auto screen-only">
        {/* Word List Header */}
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
                  <span className="text-cocoa/40 ml-1">— {pw.direction.replace(/-/g, " ")}</span>
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>

      {/* ===== PRINT VIEW ===== */}
      <div id="word-search-print" className="print-only">
        <div className="print-header">
          <h2 className="print-title">{title || "Word Search Puzzle"}</h2>
          <p className="print-difficulty">Difficulty: {difficulty} • {wordList.length} words</p>
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
              gridTemplateColumns: `repeat(${size}, 1fr)`,
            }}
          >
            {grid.map((row, ri) =>
              row.map((cell, ci) => (
                <div key={`p-${ri}-${ci}`} className="print-cell">
                  {cell}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="print-footer">
          <p className="print-url">tinyanimalworlds.com/word-search</p>
          <p className="print-free">Free Printable Word Search — For Personal &amp; Classroom Use</p>
        </div>
      </div>

      {/* ===== PRINT CSS ===== */}
      <style jsx>{`
        /* Default: hide print-only, show screen-only */
        .print-only {
          display: none;
        }
        .screen-only {
          display: block;
        }

        @media print {
          /* Hide everything outside our print container */
          body * {
            visibility: hidden;
          }

          /* Show only the print container */
          #word-search-print,
          #word-search-print * {
            visibility: visible;
          }

          /* Position the print container */
          #word-search-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0.3in 0.4in;
            box-sizing: border-box;
            color: #000;
            font-family: 'Georgia', 'Times New Roman', serif;
          }

          /* Print Header */
          .print-header {
            text-align: center;
            margin-bottom: 18px;
            padding-bottom: 12px;
            border-bottom: 2px solid #333;
          }
          .print-title {
            font-size: 24pt;
            font-weight: bold;
            margin: 0 0 6px 0;
            color: #1a1a1a;
            line-height: 1.2;
          }
          .print-difficulty {
            font-size: 11pt;
            color: #666;
            margin: 0;
          }

          /* Print Words */
          .print-words {
            margin-bottom: 16px;
          }
          .print-words-label {
            font-size: 11pt;
            font-weight: bold;
            margin: 0 0 6px 0;
            color: #333;
          }
          .print-words-list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }
          .print-word-tag {
            font-size: 10pt;
            background: #f0f0f0;
            padding: 3px 10px;
            border-radius: 4px;
            border: 1px solid #ddd;
            text-transform: capitalize;
          }

          /* Print Grid */
          .print-grid-container {
            margin: 16px 0;
            text-align: center;
          }
          .print-grid {
            display: inline-grid;
            border: 2px solid #333;
            max-width: 100%;
          }
          .print-cell {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Courier New', monospace;
            font-size: 12pt;
            font-weight: bold;
            border: 0.5px solid #ccc;
            width: 36px;
            height: 36px;
            background: #fff;
          }
          /* Larger grid = smaller cells */
          ${size > 12 ? `
          .print-cell {
            width: 30px;
            height: 30px;
            font-size: 10pt;
          }
          ` : ''}

          /* Print Footer */
          .print-footer {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #ccc;
            text-align: center;
          }
          .print-url {
            font-size: 9pt;
            color: #888;
            margin: 0 0 4px 0;
          }
          .print-free {
            font-size: 8pt;
            color: #aaa;
            margin: 0;
          }

          /* Page setup */
          @page {
            size: A4;
            margin: 0.3in;
          }
        }
      `}</style>
    </>
  );
}
