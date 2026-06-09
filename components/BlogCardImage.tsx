"use client";

import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

export default function BlogCardImage({ src, alt }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="absolute inset-0 bg-cream flex flex-col items-center justify-center">
        <span className="text-4xl">📝</span>
        <span className="text-xs text-cocoa/40 mt-1">Blog Post</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
