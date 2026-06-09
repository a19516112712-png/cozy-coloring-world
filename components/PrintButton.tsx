"use client";

import { generateWordSearchGrid, getGridSize } from "@/lib/wordSearchUtils";

interface Props {
  wordList: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  title: string;
}

export default function PrintButton({ wordList, difficulty, title }: Props) {
  const handlePrint = () => {
    const { grid, size } = generateWordSearchGrid(wordList, difficulty);

    const cellPx = size > 12 ? 30 : 36;
    const cellFont = size > 12 ? "10pt" : "12pt";
    const gridGap = "0.5px";

    const cellsHtml = grid
      .map(
        (row) =>
          row
            .map(
              (cell) =>
                `<div style="display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;font-size:${cellFont};font-weight:bold;border:${gridGap} solid #ccc;width:${cellPx}px;height:${cellPx}px;background:#fff">${cell}</div>`
            )
            .join("")
      )
      .join("");

    const wordsHtml = wordList
      .map(
        (w) =>
          `<span style="font-size:10pt;background:#f0f0f0;padding:3px 10px;border-radius:4px;border:1px solid #ddd;text-transform:capitalize;margin:3px">${w}</span>`
      )
      .join("");

    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:Georgia,'Times New Roman',serif;color:#000;padding:0.4in;max-width:100%}
  h1{text-align:center;font-size:20pt;font-weight:bold;margin:0 0 4px 0;line-height:1.2}
  .meta{text-align:center;font-size:10pt;color:#555;margin:0 0 14px 0;padding-bottom:10px;border-bottom:2px solid #333}
  .words{margin-bottom:14px}
  .words-label{font-size:10pt;font-weight:bold;margin:0 0 5px 0}
  .words-list{display:flex;flex-wrap:wrap;gap:4px}
  .grid-wrap{text-align:center;margin:14px 0}
  .grid{display:inline-grid;grid-template-columns:repeat(${size},${cellPx}px);gap:${gridGap};border:2px solid #333}
  .footer{margin-top:18px;padding-top:8px;border-top:1px solid #ccc;text-align:center}
  .footer a{font-size:8pt;color:#888;text-decoration:none}
  .footer p{font-size:7pt;color:#aaa;margin:2px 0 0 0}
  @page{size:A4;margin:0.3in}
</style>
</head>
<body>
<h1>${title}</h1>
<p class="meta">Difficulty: ${difficulty} &bull; ${wordList.length} words</p>
<div class="words">
  <p class="words-label">Words to Find:</p>
  <div class="words-list">${wordsHtml}</div>
</div>
<div class="grid-wrap">
  <div class="grid">${cellsHtml}</div>
</div>
<div class="footer">
  <p>tinyanimalworlds.com</p>
  <p>Free Printable Word Search &mdash; For Personal &amp; Classroom Use</p>
</div>
<script>
  window.onload = function() {
    window.print();
    setTimeout(function() { window.close(); }, 500);
  };
<\/script>
</body>
</html>`;

    // Open clean print window — no fallback
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
    }
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-white rounded-pill font-semibold hover:bg-rose/90 transition-all shadow-cozy hover:shadow-hover text-sm"
    >
      <span>🖨️</span> Print Word Search
    </button>
  );
}
