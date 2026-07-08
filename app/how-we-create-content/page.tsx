import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import LegalNav from "@/components/LegalNav";

export const metadata: Metadata = generatePageMetadata({
  title: "How We Create Content | Our Quality Process | Tiny Animal Worlds",
  description: "Learn how we create every coloring page and word search — from concept to final printable. Real human review, child testing, and quality checks ensure every resource meets educational standards.",
  path: "/how-we-create-content",
});

export default function HowWeCreateContentPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "Article",
    "headline": "How We Create Content at Tiny Animal Worlds",
    "description": "Learn how we create every coloring page and word search — from concept to final printable. Real human review, child testing, and quality checks ensure every resource meets educational standards.",
    "url": "https://tinyanimalworlds.com/how-we-create-content",
    "datePublished": "2026-06-24", "dateModified": "2026-06-24",
    "author": { "@type": "Person", "name": "Sarah", "description": "Creator of Tiny Animal Worlds" },
    "publisher": { "@type": "Organization", "name": "Tiny Animal Worlds", "url": "https://tinyanimalworlds.com" }
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://tinyanimalworlds.com" },
    { name: "How We Create Content", url: "https://tinyanimalworlds.com/how-we-create-content" }
  ]);
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="page-container py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8 text-sm"><Link href="/" className="text-rose hover:underline">Home</Link><span className="mx-2 text-cocoa/30">/</span><span className="text-cocoa/60">How We Create Content</span></nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-6">How We Create Content</h1>
        <p className="text-lg text-cocoa/80 leading-relaxed mb-10">Every coloring page and word search on Tiny Animal Worlds goes through a multi-step creation process with real human oversight at every stage. This is not automated content — real people, including actual children, are involved in making sure each resource is genuinely useful, engaging, and educationally sound.</p>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Step 1: Theme Selection</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">Every printable starts with a real question: What would kids actually enjoy? What do teachers need for their classrooms? What do parents actually search for? We choose themes based on genuine interest areas — animals, nature, seasons, and cozy scenes that children naturally gravitate toward. No keyword stuffing, no algorithm-chasing. Just content we'd want our own kids to use.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4">Our current priorities: educational animal themes, vocabulary-building puzzles, seasonal learning activities, and screen-free creative resources.</p>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Step 2: Design and Creation</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">For coloring pages, Sarah — the creator and a mom of two — designs each concept personally. The design process focuses on creating warm, inviting illustrations with clear outlines and appropriate detail levels for different ages. Every design is made with real coloring in mind: lines can't be too thin (frustrating for young children), can't be too thick (loses detail), and must create satisfying completed pictures.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4">For word searches, Sarah selects vocabulary words related to the animal or theme, creates the puzzle grid, and writes the accompanying educational materials — learning goals, teacher notes, and usage instructions. Each word list is reviewed to ensure words are age-appropriate, educational, and interesting.</p>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Step 3: Child Testing (Our Secret Quality Control)</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">This step sets us apart: every new coloring page and word search is tested with real children before publication. Sarah's own children — ages 5 and 7 — are the primary testers. If they don't want to color it, we redesign it. If they can't complete the word search, we adjust the difficulty. If they fight over who gets to use it first, we know we have a winner.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4">Additional testers include children of friends, a local elementary teacher who uses our materials, and homeschool families who provide feedback. This testing loop catches issues that algorithmic generation never would: Are the lines clear enough? Is the puzzle actually fun? Does the theme resonate with real kids?</p>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Step 4: Educational Review</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">Each resource receives educational metadata: suggested age range, learning goals, difficulty level, and teacher notes. For word searches, we ensure vocabulary words connect to real curriculum topics — animal science, habitats, seasons, and grade-appropriate language development. For coloring pages, we consider fine motor skill development, creative expression, and age-appropriate complexity.</p>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Step 5: Publication and Updates</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">Content is published as high-quality printable downloads. We regularly review older resources and update them based on user feedback. If a teacher emails us with a suggestion, we take it seriously. If parents tell us their kids love a certain animal theme, we create more of it.</p>
          <p className="text-cocoa/70 leading-relaxed mb-4">We add new coloring pages, word searches, and educational blog articles every week. Visit our <Link href="/" className="text-rose hover:underline">homepage</Link> for the latest additions, browse <Link href="/categories" className="text-rose hover:underline">categories</Link> for themed collections, or check the <Link href="/word-search" className="text-rose hover:underline">word search hub</Link> for all our puzzles.</p>
        </section>

        <section className="mb-10"><h2 className="text-2xl font-bold text-cocoa mb-4">Our Commitment to Quality</h2>
          <p className="text-cocoa/70 leading-relaxed mb-4">We believe free educational resources should still be high-quality educational resources. Every page on this site reflects that commitment. If you ever find a resource that doesn't meet your expectations, <Link href="/contact" className="text-rose hover:underline">please tell us</Link>. We read every message and make improvements based on what real users tell us.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-cocoa mb-4">Related Pages</h2>
          <ul className="space-y-2 text-cocoa/70">
            <li><Link href="/about" className="text-rose hover:underline">About Us</Link> — Our story and mission</li>
            <li><Link href="/educational-purpose" className="text-rose hover:underline">Educational Purpose</Link> — Why we create free resources</li>
            <li><Link href="/editorial-policy" className="text-rose hover:underline">Editorial Policy</Link> — Content standards</li>
            <li><Link href="/contact" className="text-rose hover:underline">Contact</Link> — Get in touch</li>
          </ul>
        </section>

        <LegalNav />
      </div>
    </div>
  </>);
}
