"use client";

export default function PrintButton() {
  const handlePrint = () => {
    // Get the puzzle container content
    const printContainer = document.getElementById("word-search-print");
    if (!printContainer) {
      window.print();
      return;
    }

    // Clone the content
    const content = printContainer.innerHTML;

    // Open blank print window
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (!printWindow) {
      window.print();
      return;
    }

    // Write print-optimized HTML
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Word Search Puzzle - Printable</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Georgia', 'Times New Roman', serif;
            color: #000;
            padding: 0.4in;
          }
          .print-header {
            text-align: center;
            margin-bottom: 18px;
            padding-bottom: 12px;
            border-bottom: 2px solid #333;
          }
          .print-title {
            font-size: 22pt;
            font-weight: bold;
            margin: 0 0 6px 0;
            color: #1a1a1a;
            line-height: 1.2;
          }
          .print-difficulty {
            font-size: 11pt;
            color: #555;
            margin: 0;
          }
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
          @page { size: A4; margin: 0.3in; }
        </style>
      </head>
      <body>
        ${content}
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          };
        <\/script>
      </body>
      </html>
    `);
    printWindow.document.close();
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
