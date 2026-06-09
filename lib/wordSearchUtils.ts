// Shared word search grid generation utility

export interface PlacedWord {
  word: string;
  row: number;
  col: number;
  direction: string;
}

interface Direction {
  dr: number;
  dc: number;
  name: string;
}

const DIRECTIONS: Direction[] = [
  { dr: 0, dc: 1, name: "right" },
  { dr: 0, dc: -1, name: "left" },
  { dr: 1, dc: 0, name: "down" },
  { dr: -1, dc: 0, name: "up" },
  { dr: 1, dc: 1, name: "diag-down-right" },
  { dr: 1, dc: -1, name: "diag-down-left" },
  { dr: -1, dc: 1, name: "diag-up-right" },
  { dr: -1, dc: -1, name: "diag-up-left" },
];

const GRID_SIZES: Record<string, number> = { Easy: 10, Medium: 12, Hard: 15 };
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function getGridSize(difficulty: string): number {
  return GRID_SIZES[difficulty] || 10;
}

export function generateWordSearchGrid(
  wordList: string[],
  difficulty: string
): { grid: string[][]; placedWords: PlacedWord[]; size: number } {
  const size = getGridSize(difficulty);
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(""));
  const placedWords: PlacedWord[] = [];
  const sorted = [...wordList].sort((a, b) => b.length - a.length).map((w) => w.toUpperCase());

  for (const word of sorted) {
    let placed = false;
    const allowedDirs =
      difficulty === "Easy"
        ? DIRECTIONS.filter((d) => d.name === "right" || d.name === "down")
        : difficulty === "Medium"
        ? DIRECTIONS.filter((d) => d.name === "right" || d.name === "down" || d.name === "diag-down-right")
        : DIRECTIONS;

    const shuffledDirs = [...allowedDirs].sort(() => Math.random() - 0.5);

    for (let attempt = 0; attempt < 50 && !placed; attempt++) {
      const dir = shuffledDirs[Math.floor(Math.random() * shuffledDirs.length)];
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);

      let fits = true;
      for (let i = 0; i < word.length; i++) {
        const r = row + dir.dr * i;
        const c = col + dir.dc * i;
        if (r < 0 || r >= size || c < 0 || c >= size) {
          fits = false;
          break;
        }
        if (grid[r][c] !== "" && grid[r][c] !== word[i]) {
          fits = false;
          break;
        }
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
        grid[r][c] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      }
    }
  }

  return { grid, placedWords, size };
}
