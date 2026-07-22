import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import DownloadButton from "@/components/DownloadButton";
import PinterestSaveButton from "@/components/PinterestSaveButton";
import AdBanner from "@/components/AdBanner";
import AmazonBookPromo from "@/components/AmazonBookPromo";
import RelatedArticles from "@/components/RelatedArticles";
import { coloringPages } from "@/data/coloring-pages";
import { generateFAQSchema, generateImageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { categories } from "@/data/categories";

interface Props {
  params: Promise<{ slug: string }>;
}
export const dynamicParams = false;

export function generateStaticParams() {
  return coloringPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = coloringPages.find((p) => p.slug === slug);
  if (!page) return {};
  return generatePageMetadata({
    title: `${page.title} | Free Printable Coloring Page JPG`,
    description: `Download and print this free ${page.title.toLowerCase()} coloring page. ${page.description}. Perfect for kids and adults who love coloring!`,
    path: `/coloring/${slug}`,
    imageUrl: page.imageUrl,
  });
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-mint/60 text-cocoa",
  Medium: "bg-butter text-cocoa",
  Hard: "bg-lavender/60 text-cocoa",
};

const pageFAQs = [
  {
    question: "How do I download and print this coloring page?",
    answer: "Click the 'Download JPG' button to get your free high-quality JPG image. Open the file and print on standard 8.5x11 letter paper or A4 size. For best results, use cardstock or thicker paper, especially if using markers or watercolors.",
  },
  {
    question: "Are these coloring pages really free?",
    answer: "Yes! All coloring pages on Tiny Animal Worlds are 100% free to download and print for personal use. You can print as many copies as you like for yourself, your family, or your classroom.",
  },
  {
    question: "What materials work best for coloring these pages?",
    answer: "These coloring pages work great with colored pencils, crayons, gel pens, fine-tip markers, and even watercolor paints. We recommend printing on slightly thicker paper if you plan to use markers or paints to prevent bleed-through.",
  },
  {
    question: "Can I share my colored pages online?",
    answer: "Absolutely! We love seeing your creativity. Share your finished coloring pages on social media and tag us. Please link back to tinyanimalworlds.com when sharing so others can download the original pages too.",
  },
  {
    question: "Are these coloring pages suitable for both kids and adults?",
    answer: "Yes! We design pages with varying difficulty levels. Easy pages with bold outlines are perfect for young children, while Medium and Hard pages with intricate details are ideal for older kids and adults who enjoy detailed coloring.",
  },
];

export default async function ColoringDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = coloringPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const category = categories.find((c) => c.slug === page.category);
  const baseUrl = "https://tinyanimalworlds.com";

  // Detect animal from slug
  const animals = ["fox", "bunny", "rabbit", "deer", "hedgehog", "mouse", "cat", "bear", "frog", "hamster", "squirrel", "raccoon", "otter", "ferret", "mole", "chinchilla", "duck", "penguin", "owl", "panda", "dragon", "unicorn"];
  const pageAnimal = animals.find((a) => page.slug.includes(a));

  // Same animal pages
  const sameAnimalPages = pageAnimal
    ? coloringPages
        .filter((p) => p.slug.includes(pageAnimal) && p.id !== page.id)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, 5)
    : [];

  // Same category pages
  const relatedPages = coloringPages
    .filter((p) => p.category === page.category && p.id !== page.id)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5);

  // Related theme pages (based on keyword overlap in title)
  const titleWords = page.title.toLowerCase().replace(/coloring page/gi, "").split(/\s+/).filter(w => w.length > 3);
  const themePages = coloringPages
    .filter((p) => {
      if (p.id === page.id || p.category === page.category) return false;
      if (sameAnimalPages.find(s => s.id === p.id)) return false;
      return titleWords.some(w => p.title.toLowerCase().includes(w));
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5);

  // Popular from other categories
  const popularPages = coloringPages
    .filter((p) => p.category !== page.category)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 4);
  const faqSchema = generateFAQSchema(pageFAQs);
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Coloring Pages", url: `${baseUrl}/coloring-pages` },
  ];
  if (category) {
    breadcrumbItems.push({ name: category.name, url: `${baseUrl}/category/${category.slug}` });
  }
  breadcrumbItems.push({ name: page.title, url: `${baseUrl}/coloring/${page.slug}` });
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const imageSchema = generateImageSchema(
    `${baseUrl}${page.imageUrl}`,
    page.title,
    page.description
  );

  return (
    <>
      {/* Structured Data */}
      <script key="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script key="faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script key="image"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />

      <article key={page.slug} className="page-container py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-rose hover:underline">Home</Link>
          <span className="mx-2 text-cocoa/30">/</span>
          <Link href="/coloring-pages" className="text-rose hover:underline">Coloring Pages</Link>
          {category && (
            <>
              <span className="mx-2 text-cocoa/30">/</span>
              <Link href={`/category/${category.slug}`} className="text-rose hover:underline">
                {category.name}
              </Link>
            </>
          )}
          <span className="mx-2 text-cocoa/30">/</span>
          <span className="text-cocoa/60">{page.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-3">
            {/* Image Preview */}
            <div className="relative group aspect-[2/3] bg-cream rounded-cozy border-2 border-blush/20 overflow-hidden mb-6">
              <Image
                src={page.imageUrl}
                alt={page.altText}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Pinterest Save overlay on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <PinterestSaveButton
                  imageUrl={page.imageUrl}
                  description={`Free printable ${page.title} coloring page from Tiny Animal Worlds. Download this cute coloring page JPG! ${page.description}`}
                />
              </div>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-sm font-medium px-3 py-1 rounded-pill ${difficultyColors[page.difficulty]}`}>
                {page.difficulty}
              </span>
              <span className="text-sm font-medium px-3 py-1 rounded-pill bg-mint/30 text-cocoa/70 border border-mint/20">
                👶 {(() => { const ages: Record<string, string> = {"Easy": "Ages 3-6", "Medium": "Ages 5-10", "Hard": "Ages 8+"}; return ages[page.difficulty] || "Ages 4+"; })()}
              </span>
              {category && (
                <Link
                  href={`/category/${category.slug}`}
                  className="text-sm font-medium px-3 py-1 rounded-pill bg-cream border border-blush/30 text-cocoa/70 hover:text-rose hover:border-rose transition-colors"
                >
                  {category.emoji} {category.name}
                </Link>
              )}
              <span className="text-xs text-cocoa/40">📅 {new Date(page.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-4 leading-tight">
              {page.title} <span className="text-rose font-normal text-lg">— Free Printable Coloring Page</span>
            </h1>

            {/* Intro description */}
            <p className="text-lg text-cocoa/70 leading-relaxed mb-6">
              {page.description}. Download this free printable JPG and start coloring today!
            </p>

            
            {/* Learning Purpose */}
            <div className="mb-6 p-5 bg-lavender/20 rounded-xl border border-lavender/30">
              <h2 className="text-lg font-bold text-cocoa mb-2 flex items-center gap-2">
                <span>📚</span> Learning Purpose
              </h2>
              <p className="text-cocoa/70 text-sm leading-relaxed">
                {(() => {
                  const purposes: Record<string, string> = {
                    "Easy": "This coloring page helps young children develop fine motor skills, hand-eye coordination, and color recognition. The bold, simple outlines are designed to build coloring confidence in preschoolers and kindergarteners — a perfect first creative activity for little hands learning pencil grip and control.",
                    "Medium": "This coloring page supports creative expression while building concentration and attention to detail. Children practice staying within lines, making intentional color choices, and completing a longer project — skills that transfer directly to handwriting, drawing, and other academic tasks.",
                    "Hard": "This detailed coloring page challenges older children and adults to practice patience, precision, and artistic decision-making. The intricate patterns promote mindfulness, stress reduction, and sustained focus — making it an excellent creative break from screen time and structured academic work.",
                  };
                  const diff = page.difficulty || "Medium";
                  return purposes[diff] || purposes["Medium"];
                })()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <DownloadButton imageUrl={page.imageUrl} title={page.title} />
              <PinterestSaveButton
                imageUrl={page.imageUrl}
                description={`Free printable ${page.title} coloring page. ${page.description}. Download this cute JPG from Tiny Animal Worlds!`}
              />
            </div>

            {/* Ad Banner near download */}
            <AdBanner slot="1111111111" className="mb-8" />

            {/* Long Description — SEO Content */}
            <div className="prose prose-cocoa max-w-none mb-10">
              <h2 className="text-2xl font-bold text-cocoa mb-4">
                About This {page.title} Coloring Page
              </h2>
              <p className="text-cocoa/75 leading-relaxed whitespace-pre-line">
                {page.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-cocoa mt-8 mb-3">
                Why You&apos;ll Love This Coloring Page
              </h3>
              <ul className="space-y-2 text-cocoa/75">
                <li>🖍️ <strong>High-quality design</strong> — crisp lines and thoughtful details for an enjoyable coloring experience</li>
                <li>📄 <strong>Printable JPG format</strong> — download once, print as many copies as you want</li>
                <li>👶👵 <strong>For all ages</strong> — suitable for kids, teens, and adults who love coloring</li>
                <li>🎨 <strong>Works with any medium</strong> — colored pencils, markers, crayons, gel pens, or watercolors</li>
                <li>💯 <strong>100% free</strong> — no sign-up required, no subscription needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-cocoa mt-8 mb-3">
                Tips for Printing
              </h3>
              <p className="text-cocoa/75 leading-relaxed">
                For the best coloring experience, print this page on letter-size (8.5x11 inches) or A4 paper. 
                Use cardstock or thicker paper (at least 80lb/120gsm) if you plan to use markers or watercolors 
                to prevent bleed-through. Set your printer to &ldquo;Best&rdquo; or &ldquo;High Quality&rdquo; 
                mode for the sharpest lines. You can also scale the print to fit different paper sizes in your 
                printer settings.
              </p>
            </div>

            
            {/* Usage Scenario */}
            <div className="bg-cream/50 rounded-xl p-5 border border-blush/10 mb-6">
              <h3 className="text-lg font-semibold text-cocoa mb-3 flex items-center gap-2">
                <span>🏠</span> Where to Use This Coloring Page
              </h3>
              <p className="text-cocoa/70 text-sm leading-relaxed mb-3">
                {(() => {
                  const animalName = pageAnimal ? pageAnimal.charAt(0).toUpperCase() + pageAnimal.slice(1) : "Animal";
                  const scenarios = [
                    `Perfect for a quiet afternoon at home — print this ${animalName.toLowerCase()} coloring page and set it at the kitchen table with crayons or colored pencils. My own kids will happily color for 30+ minutes with pages like this, giving parents a much-needed break.`,
                    `Ideal for classroom art centers, early finisher activities, or take-home packets. Teachers tell us these ${animalName.toLowerCase()}-themed pages are among the most requested by their students. Print a class set and use with any coloring supplies you have on hand.`,
                    `Great for travel and waiting rooms — keep a few printed copies in your bag for restaurants, doctor's appointments, or long car rides. No batteries, no WiFi, no screen-time negotiations. Just a paper and colors.`,
                    `Wonderful for multi-age groups — younger children enjoy the bold shapes while older kids and adults can add shading, patterns, and creative color combinations. A single printed page can engage a 4-year-old and a 10-year-old simultaneously.`,
                  ];
                  // Deterministic selection based on slug
                  let hash = 0;
                  for (let i = 0; i < (page.slug?.length || 0); i++) {
                    hash = ((hash << 5) - hash) + (page.slug?.charCodeAt(i) || 0);
                    hash |= 0;
                  }
                  return scenarios[Math.abs(hash) % scenarios.length];
                })()}
              </p>
            </div>


            {/* Amazon Book Promo */}
            <AmazonBookPromo className="mb-10" categoryId={page.category} />

            {/* Ad Banner in content */}
            <AdBanner slot="2222222222" className="mb-10" />

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cocoa mb-6">
                Frequently Asked Questions 🩷
              </h2>
              <div className="space-y-4">
                {pageFAQs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white rounded-cozy border border-blush/20 shadow-card overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-cream/50 transition-colors font-semibold text-cocoa">
                      {faq.question}
                      <span className="text-rose group-open:rotate-180 transition-transform text-lg ml-3 flex-shrink-0">
                        ▼
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-cocoa/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {page.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-cocoa/50 bg-cream px-3 py-1.5 rounded-full border border-blush/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Fixed Ad */}
            <div className="lg:sticky lg:top-24">
              <AdBanner slot="3333333333" className="mb-6" />

              {/* Same Animal Pages */}
              {sameAnimalPages.length > 0 && (
                <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
                  <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                    <span>🐾</span> More {pageAnimal ? pageAnimal.charAt(0).toUpperCase() + pageAnimal.slice(1) : "Animal"} Pages
                  </h3>
                  <div className="space-y-3">
                    {sameAnimalPages.map((ap) => (
                      <Link
                        key={ap.id}
                        href={`/coloring/${ap.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-xl flex-shrink-0 border border-blush/10">
                          {category?.emoji || "🎨"}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">
                            {ap.title}
                          </p>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[ap.difficulty]}`}>
                            {ap.difficulty}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Pages */}
              {relatedPages.length > 0 && (
                <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
                  <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                    <span>🩷</span> More {category?.name} Pages
                  </h3>
                  <div className="space-y-3">
                    {relatedPages.map((rp) => (
                      <Link
                        key={rp.id}
                        href={`/coloring/${rp.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-xl flex-shrink-0 border border-blush/10">
                          {category?.emoji || "🎨"}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">
                            {rp.title}
                          </p>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[rp.difficulty]}`}>
                            {rp.difficulty}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Theme Pages */}
              {themePages.length > 0 && (
                <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
                  <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                    <span>🎯</span> Related Theme Pages
                  </h3>
                  <div className="space-y-3">
                    {themePages.map((tp) => {
                      const tpCat = categories.find((c) => c.id === tp.category);
                      return (
                        <Link key={tp.id} href={`/coloring/${tp.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group">
                          <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-xl flex-shrink-0 border border-blush/10">
                            {tpCat?.emoji || "🎨"}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">{tp.title}</p>
                            <span className="text-xs text-cocoa/40">{tpCat?.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Popular Categories */}
              <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
                <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                  <span>🎨</span> Popular Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cream transition-colors group"
                    >
                      <span className="text-xl">{cat.emoji}</span>
                      <span className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors">
                        {cat.name}
                      </span>
                      <span className="ml-auto text-xs text-cocoa/40">{cat.count} pages</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular from other categories */}
              {popularPages.length > 0 && (
                <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card">
                  <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                    <span>✨</span> You Might Also Like
                  </h3>
                  <div className="space-y-3">
                    {popularPages.map((pp) => {
                      const ppCat = categories.find((c) => c.id === pp.category);
                      return (
                        <Link
                          key={pp.id}
                          href={`/coloring/${pp.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-xl flex-shrink-0 border border-blush/10">
                            {ppCat?.emoji || "🎨"}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">
                              {pp.title}
                            </p>
                            <span className="text-xs text-cocoa/40">{ppCat?.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* Related Articles */}
              <RelatedArticles
                categoryId={page.category}
                categoryName={category?.name}
                currentSlug={page.slug}
                type="article"
                count={5}
              />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
