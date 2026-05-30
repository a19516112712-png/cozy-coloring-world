"use client";

import { useState } from "react";

interface DownloadButtonProps {
  imageUrl: string;
  title: string;
}

export default function DownloadButton({ imageUrl, title }: DownloadButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleDownload = () => {
    setClicked(true);
    // Track download for analytics (placeholder)
    setTimeout(() => setClicked(false), 2000);
    
    // Trigger download
    const link = document.createElement("a");
    link.href = imageUrl;
    const ext = imageUrl.split('.').pop();
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-pill bg-rose text-white text-sm font-semibold hover:bg-rose/90 transition-all shadow-cozy hover:shadow-hover"
    >
      {clicked ? (
        <>
          <span>Downloaded! 🎉</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download JPG
        </>
      )}
    </button>
  );
}
