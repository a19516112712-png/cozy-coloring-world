"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/categories", label: "Categories" },
  { href: "/coloring-pages", label: "All Pages" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-blush/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🎨</span>
            <span className="text-lg font-bold text-cocoa tracking-tight">
              Cozy Coloring <span className="text-rose">World</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cocoa/80 hover:text-rose transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/categories"
              className="inline-flex items-center px-4 py-2 rounded-pill bg-rose text-white text-sm font-semibold hover:bg-rose/90 transition-all shadow-cozy hover:shadow-hover"
            >
              Start Coloring ✨
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-cocoa hover:text-rose transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-blush/30 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-cocoa/80 hover:text-rose transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/categories"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-pill bg-rose text-white text-sm font-semibold hover:bg-rose/90 transition-all"
              >
                Start Coloring ✨
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
