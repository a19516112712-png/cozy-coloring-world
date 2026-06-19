import Link from "next/link";

interface Props {
  current?: string;
}

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

export default function LegalNav({ current }: Props) {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-6 mt-6 border-t border-blush/20">
      {links.map((link) =>
        link.href === current ? (
          <span key={link.href} className="text-sm font-medium text-cocoa/40 px-2">
            {link.label}
          </span>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-cocoa/60 hover:text-rose transition-colors px-2"
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}
