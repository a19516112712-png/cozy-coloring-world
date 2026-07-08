import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import LegalNav from "@/components/LegalNav";

export const metadata: Metadata = generatePageMetadata({
  title: "Educational Purpose | Why We Create Free Learning Resources | Tiny Animal Worlds",
  description: "Tiny Animal Worlds exists to provide free, high-quality educational printables for classrooms, homeschools, and families. Discover our educational mission and how our resources support real learning.",
  path: "/educational-purpose",
});

export default function EducationalPurposePage() {
  const schema = {
    "@context": "https://schema.org", "@type": "Article",
    "headline": "Educational Purpose of Tiny Animal Worlds",
    "description": "Tiny Animal Worlds exists to provide free, high-quality educational printables for classrooms, homeschools, and families. Discover our educational mission and how our resources support real learning.",
    "url": "https://tinyanimalworlds.com/educational-purpose",
    "datePublished": "2026-06-24", "dateModified": "2026-06-24",
    "author": { "@type": "Person", "name": "Sarah", "description": "Creator of Tiny Animal Worlds" },
    "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" }
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://tinyanimalworlds.com" },
    { name: "Educational Purpose", url: "https://tinyanimalworlds.com/educational-purpose" }
  ]);
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8 text-sm"><Link href="/" className="text-rose hover:underline">Home</Link><span className="mx-2 text-cocoa/30">/</span><span className="text-cocoa/60">Educational Purpose</span></nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-6">Our Educational Purpose</h1>
        <p className="text-lg text-cocoa/80 leading-relaxed mb-10">Tiny Animal Worlds exists for one reason: to make high-quality educational resources freely available to every child, every teacher, and every family who needs them. This isn't a marketing statement — it's the actual reason this site exists, born from a parent's real experience.</p>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Why Free Matters</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">I started creating free printables because I couldn't find what my kids needed without hitting a paywall. As a parent, I know how it feels to search for 'free coloring pages' and find subscription-only content. As a former teacher, I know how many educators spend their own money on classroom materials. Free, genuinely free, changes who can access quality learning resources.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4">A teacher in an underfunded school district can print our word searches for 30 students without budget approval. A homeschool parent can access thousands of activities without monthly fees. A family anywhere in the world can download coloring pages for quiet afternoon activities. This is the version of educational access we believe in.</p>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Real Educational Value</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">Our resources are designed for actual learning, not just entertainment:</p>
          <div className="space-y-4 mt-4">
            <div className="bg-cream/50 rounded-xl p-5">
              <h3 className="font-semibold text-cocoa mb-1">🧩 Word Searches</h3>
              <p className="text-sm text-cocoa/70">Build vocabulary, spelling, pattern recognition, and visual scanning skills. Each puzzle includes learning goals, teacher notes, and age-appropriate difficulty levels. Browse our <Link href="/word-search" className="text-rose hover:underline">word search collection</Link>.</p>
            </div>
            <div className="bg-cream/50 rounded-xl p-5">
              <h3 className="font-semibold text-cocoa mb-1">🎨 Coloring Pages</h3>
              <p className="text-sm text-cocoa/70">Develop fine motor skills, hand-eye coordination, creative expression, and sustained focus. Difficulty levels from preschool to adult ensure appropriate challenge. Explore <Link href="/categories" className="text-rose hover:underline">all categories</Link>.</p>
            </div>
            <div className="bg-cream/50 rounded-xl p-5">
              <h3 className="font-semibold text-cocoa mb-1">📝 Blog Articles</h3>
              <p className="text-sm text-cocoa/70">Evidence-based educational guides written by real teachers and parents. Practical tips for classroom management, homeschool routines, and screen-free learning. Read our <Link href="/blog" className="text-rose hover:underline">latest articles</Link>.</p>
            </div>
          </div>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Who Uses Our Resources</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4"><strong>Elementary teachers</strong> use our word searches for morning work, literacy centers, early finisher activities, and vocabulary instruction. Our coloring pages serve art centers, indoor recess, and take-home packets.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4"><strong>Homeschool families</strong> integrate our printables into daily routines — word searches for vocabulary and spelling, coloring pages for fine motor practice and creative breaks. The free model means families can access unlimited resources regardless of curriculum budget.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4"><strong>Parents and caregivers</strong> use our printables for quiet time, travel activities, rainy day projects, and screen-free alternatives. Every resource is designed to be something a parent can confidently hand to their child — no inappropriate content, no hidden costs, no complicated instructions.</p>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Our Educational Philosophy</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">We believe learning should be joyful, accessible, and screen-free whenever possible. Our resources are designed to create moments of focused engagement — a child absorbed in a coloring page, a student determined to find every word in a puzzle, a family working together at the kitchen table. These moments are where real learning happens.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4">Learn more about <Link href="/how-we-create-content" className="text-rose hover:underline">how we create our content</Link> or <Link href="/about" className="text-rose hover:underline">read our full story</Link>.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-4">Related Pages</h2>
          <ul className="space-y-2 text-cocoa/70">
            <li><Link href="/about" className="text-rose hover:underline">About Us</Link> — Our story and mission</li>
            <li><Link href="/how-we-create-content" className="text-rose hover:underline">How We Create Content</Link> — Our quality process</li>
            <li><Link href="/editorial-policy" className="text-rose hover:underline">Editorial Policy</Link> — Content standards</li>
            <li><Link href="/privacy-policy" className="text-rose hover:underline">Privacy Policy</Link> — How we protect your data</li>
            <li><Link href="/contact" className="text-rose hover:underline">Contact</Link> — Get in touch</li>
          </ul>
        </section>

        <LegalNav />
      </div>
    </div>
  </>);
}
