"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-white rounded-pill font-semibold hover:bg-rose/90 transition-all shadow-cozy hover:shadow-hover text-sm"
    >
      <span>🖨️</span> Print Word Search
    </button>
  );
}
