import Link from "next/link";

const footerLinks = {
  "Coloring Pages": [
    { href: "/categories", label: "All Categories" },
    { href: "/coloring-pages", label: "All Coloring Pages" },
    { href: "/categories/cute-animals", label: "Cute Animals" },
    { href: "/categories/cottagecore-coloring", label: "Cottagecore" },
    { href: "/categories/cozy-coloring", label: "Cozy Scenes" },
  ],
  "Word Search": [
    { href: "/word-search", label: "All Word Searches" },
    { href: "/word-search/fox-habitats-word-search", label: "Fox Word Search" },
    { href: "/word-search/bunny-spring-animals-word-search", label: "Bunny Word Search" },
    { href: "/word-search/bear-habitats-homes-word-search", label: "Bear Word Search" },
    { href: "/word-search/duck-friends-family-word-search", label: "Duck Word Search" },
  ],
  "Blog & Resources": [
    { href: "/blog", label: "Blog" },
    { href: "/blog/spring-animals-word-search", label: "Spring Word Search Tips" },
    { href: "/blog/winter-animals-word-search", label: "Winter Animal Puzzles" },
    { href: "/blog/cozy-coloring-pages", label: "Cozy Coloring Guide" },
    { href: "/blog/best-free-coloring-pages", label: "Best Free Pages 2026" },
  ],
  Legal: [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/contact", label: "Contact" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream/90 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: Cross-content-type quick links */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 pb-10 border-b border-cream/10">
          <Link href="/coloring-pages" className="px-4 py-2 bg-cream/10 text-cream/80 rounded-pill text-xs font-medium hover:bg-rose/20 hover:text-white transition-all">
            🎨 Coloring Pages
          </Link>
          <Link href="/word-search" className="px-4 py-2 bg-cream/10 text-cream/80 rounded-pill text-xs font-medium hover:bg-rose/20 hover:text-white transition-all">
            🔍 Word Search
          </Link>
          <Link href="/blog" className="px-4 py-2 bg-cream/10 text-cream/80 rounded-pill text-xs font-medium hover:bg-rose/20 hover:text-white transition-all">
            📝 Blog
          </Link>
          <Link href="/categories" className="px-4 py-2 bg-cream/10 text-cream/80 rounded-pill text-xs font-medium hover:bg-rose/20 hover:text-white transition-all">
            🏷️ Categories
          </Link>
          <Link href="/collections" className="px-4 py-2 bg-cream/10 text-cream/80 rounded-pill text-xs font-medium hover:bg-rose/20 hover:text-white transition-all">
            📚 Collections
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎨</span>
              <span className="text-lg font-bold text-white">
                Cozy Coloring <span className="text-rose">World</span>
              </span>
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed">
              Free printable coloring pages and word search puzzles for kids and adults. New cozy, kawaii, and cute designs added every week!
            </p>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-rose transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <p className="text-center text-sm text-cream/40">
            &copy; {new Date().getFullYear()} Cozy Coloring World. All coloring pages and word searches are free for personal use. 🎨
            <br /><span className="text-cocoa/30 text-xs">As an Amazon Associate, we earn from qualifying purchases.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
