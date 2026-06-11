import { getAffiliateLink } from "@/lib/affiliate";
import Image from "next/image";

interface AmazonBookPromoProps {
  className?: string;
  categoryId?: string;
}

const FEATURES = [
  "50+ exclusive coloring pages",
  "Single-sided printing",
  "Large 8.5×11 format",
  "Perfect gift idea",
  "Beginner friendly",
];

export default function AmazonBookPromo({ className = "", categoryId }: AmazonBookPromoProps) {
  const link = getAffiliateLink(categoryId || "");

  return (
    <div className={`mx-auto max-w-[1100px] ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-peach/20 via-cream to-lavender/20 border border-pink/20 p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Cover Image */}
          <div className="flex-shrink-0 w-[220px]">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-pink/10">
              <Image
                src="/images/kdp-cover.webp"
                alt="Cozy Coloring World — Premium Coloring Book on Amazon"
                width={220}
                height={294}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block text-xs font-semibold text-rose bg-rose/10 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              📚 Premium Coloring Book
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-cocoa mb-3">
              Love These Coloring Pages?
            </h2>
            <p className="text-cocoa/70 text-base mb-5 leading-relaxed">
              Get the <strong>complete cozy coloring book collection</strong> on Amazon — a beautiful
              paperback filled with adorable, relaxing designs for kids and adults alike.
            </p>

            {/* Feature List */}
            <ul className="space-y-2 mb-6">
              {FEATURES.map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-cocoa/70">
                  <svg className="w-4 h-4 text-rose flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={link}
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-base font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md"
              style={{ backgroundColor: "#C97B63" }}
            >
              Get the Full Coloring Book
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className="mt-4 text-xs text-cocoa/40">
              As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
