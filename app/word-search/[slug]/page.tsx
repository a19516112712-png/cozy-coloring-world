import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { wordSearches } from "@/data/wordSearches";
import { coloringPages } from "@/data/coloring-pages";
import AdBanner from "@/components/AdBanner";
import WordSearchGrid from "@/components/WordSearchGrid";
import PrintButton from "@/components/PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return wordSearches.map((ws) => ({ slug: ws.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ws = wordSearches.find((w) => w.slug === slug);
  if (!ws) return {};
  return generatePageMetadata({
    title: `${ws.title} | Free Printable Word Search Puzzle`,
    description: ws.description,
    path: `/word-search/${slug}`,
  });
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const pageFAQs = [
  {
    question: "How do I download and print this word search?",
    answer: "Simply view the puzzle and use your browser's print function (Ctrl+P or Cmd+P) to print. For best results, select 'Fit to Page' in print settings. You can also screenshot the puzzle to save it digitally.",
  },
  {
    question: "Are these word search puzzles really free?",
    answer: "Yes! All word search puzzles on Tiny Animal Worlds are 100% free to view, print, and use for personal and classroom purposes. No sign-up required.",
  },
  {
    question: "What age group are these word searches for?",
    answer: "We offer puzzles for ages 4 through 12. Easy puzzles (ages 4-7) have 8-10 short words with simple layouts. Medium (ages 6-10) have 10-12 words. Hard (ages 8-12) have 15 words with diagonal and backward placements.",
  },
  {
    question: "Can teachers use these in classrooms?",
    answer: "Absolutely! Teachers are welcome to print and distribute these word search puzzles for classroom activities, homework, and educational use. They're great for vocabulary building, spelling practice, and quiet time activities.",
  },
  {
    question: "What are the educational benefits of word searches?",
    answer: "Word searches help develop pattern recognition, improve spelling and vocabulary, enhance visual scanning skills, boost concentration and focus, and provide a fun screen-free activity. They're also excellent for building confidence in young readers.",
  },
];

const animalEmojis: Record<string, string> = {
  fox: "🦊", bunny: "🐰", bear: "🐻", duck: "🦆", cat: "🐱", dog: "🐶",
  hedgehog: "🦔", squirrel: "🐿️", raccoon: "🦝", deer: "🦌", owl: "🦉",
  penguin: "🐧", koala: "🐨", panda: "🐼", tiger: "🐯", lion: "🦁",
  elephant: "🐘", monkey: "🐵", giraffe: "🦒", zebra: "🦓",
};


// Helper: generate unique learning goal per puzzle
function generateLearningGoal(animal: string, theme: string, difficulty: string, wordCount: number, ageRange: string, slug: string): string {
  const animalName = animal.charAt(0).toUpperCase() + animal.slice(1);
  const goals: Record<string, string[]> = {
    "Easy": [
      `Students will identify and circle ${wordCount} ${animalName.toLowerCase()}-related words, building early literacy skills and letter recognition confidence for ages ${ageRange}.`,
      `Young learners will practice visual letter discrimination by finding ${wordCount} simple ${animalName.toLowerCase()} vocabulary words in a beginner-friendly grid designed for ages ${ageRange}.`,
      `Children will develop foundational word recognition skills by locating ${wordCount} ${animalName.toLowerCase()}-themed words, suitable for independent work at ages ${ageRange}.`,
    ],
    "Medium": [
      `Learners will strengthen spelling and vocabulary by searching for ${wordCount} ${animalName.toLowerCase()}-related words including horizontal, vertical, and diagonal placements. Designed to challenge students ages ${ageRange}.`,
      `Students will expand their ${animalName.toLowerCase()} vocabulary knowledge by identifying ${wordCount} themed words across multiple directions — building reading fluency and spelling accuracy for ages ${ageRange}.`,
      `Children will apply pattern recognition strategies to locate ${wordCount} ${animalName.toLowerCase()} vocabulary words, reinforcing both spelling and concentration skills at the ${ageRange} level.`,
    ],
    "Hard": [
      `Advanced learners will master ${wordCount} challenging ${animalName.toLowerCase()}-related vocabulary words with backward, diagonal, and multi-directional placements — building advanced spelling proficiency for ages ${ageRange}.`,
      `Students will demonstrate advanced visual scanning and vocabulary mastery by finding ${wordCount} ${animalName.toLowerCase()}-themed words in a complex multi-directional grid designed for confident readers ages ${ageRange}.`,
      `Learners will strengthen upper-elementary vocabulary skills by tackling ${wordCount} ${animalName.toLowerCase()} words with challenging letter arrangements — an excellent assessment-ready activity for ages ${ageRange}.`,
    ],
  };
  const pool = goals[difficulty] || goals["Easy"];
  // Deterministic selection based on slug hash
  let hash = 0;
  for (let i = 0; i < (slug?.length || 0); i++) {
    hash = ((hash << 5) - hash) + (slug?.charCodeAt(i) || 0);
    hash |= 0;
  }
  return pool[Math.abs(hash) % pool.length];
}

// Helper: generate teacher note per puzzle
function generateTeacherNote(animal: string, theme: string, difficulty: string, wordCount: number): string {
  const animalName = animal.charAt(0).toUpperCase() + animal.slice(1);
  const themeDesc = theme.replace(/-/g, " ");
  if (difficulty === "Easy") {
    return `This ${animalName.toLowerCase()} ${themeDesc} word search is ideal for morning warm-ups, literacy centers, and early finisher activities in K-1 classrooms. The ${wordCount}-word format with large-print letters keeps young learners engaged without overwhelming them. For best results, pair this puzzle with a read-aloud about ${animalName.toLowerCase()}s or a related science lesson on animal habitats. Students benefit from first hearing the vocabulary in context before searching for the words independently.`;
  } else if (difficulty === "Medium") {
    return `This ${animalName.toLowerCase()} ${themeDesc} puzzle works exceptionally well for grades 2-3 literacy stations, homework packets, and small group vocabulary instruction. With ${wordCount} words across multiple directions, students practice both spelling and persistence. Differentiate by allowing partners to work together on harder words, or challenge advanced students to write a sentence using each word after finding it. Great for connecting to science units on ${animalName.toLowerCase()}s and their ecosystems.`;
  } else {
    return `This challenging ${animalName.toLowerCase()} ${themeDesc} word search is designed for grades 3-5 students ready for multi-directional vocabulary work. The ${wordCount}-word format with backward and diagonal placements makes it perfect for gifted enrichment, test-prep vocabulary review, and upper-elementary literacy centers. Consider using it as an optional challenge activity — students feel genuine pride completing these harder puzzles. Excellent for building the persistence and focus skills essential for standardized testing success.`;
  }
}

// Helper: generate how-to-use steps per puzzle
function generateHowToUse(animal: string, difficulty: string, ageRange: string): Array<{step: number, title: string, desc: string}> {
  const animalName = animal.charAt(0).toUpperCase() + animal.slice(1);
  return [
    { step: 1, title: "Preview the Words Together", desc: `Before searching, read through all ${animalName.toLowerCase()}-themed vocabulary words aloud. Discuss any unfamiliar terms — this preview step significantly boosts comprehension and success rate for ages ${ageRange}.` },
    { step: 2, title: "Print at the Right Size", desc: "Use standard letter paper (8.5x11) or A4. Select 'Fit to Page' in your print settings for optimal sizing. For classroom reuse, print on cardstock and slip into sheet protectors — students can use dry-erase markers and puzzles last for years." },
    { step: 3, title: difficulty === "Easy" ? "Start with Horizontal Words" : "Scan Methodically", desc: difficulty === "Easy" ? `Encourage children to scan left-to-right first for horizontal words, then top-to-bottom for vertical ones. This structured approach helps young learners ages ${ageRange} build systematic search skills.` : `Teach students to scan row by row, looking for the first letter of each target word. For diagonal and backward words, suggest starting from the last letter and working backwards — a technique that builds advanced visual processing skills.` },
    { step: 4, title: "Celebrate Every Find", desc: `Each circled word is a small victory! For classroom use, consider letting students put a sticker next to each found word. The positive reinforcement builds confidence and encourages persistence through harder words in the ${difficulty.toLowerCase()} level puzzle.` },
    { step: 5, title: "Extend the Learning", desc: `After completing the puzzle, challenge students to write a short story using 3-5 words from the word list. Or have them draw a picture of a ${animalName.toLowerCase()} in its habitat — connecting vocabulary to creative expression deepens retention and makes learning memorable.` },
  ];
}

export default async function WordSearchPage({ params }: Props) {
  const { slug } = await params;
  const ws = wordSearches.find((w) => w.slug === slug);
  if (!ws) notFound();

  const baseUrl = "https://tinyanimalworlds.com";

  const sameAnimalSearches = wordSearches
    .filter((w) => w.animal === ws.animal && w.slug !== ws.slug)
    .slice(0, 3);

  const sameDifficultySearches = wordSearches
    .filter((w) => w.difficulty === ws.difficulty && w.animal !== ws.animal)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const relatedColoring = coloringPages
    .filter((p) => p.slug.includes(ws.animal))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 3);

  const animalName = ws.animal.charAt(0).toUpperCase() + ws.animal.slice(1);
  const faqSchema = generateFAQSchema(pageFAQs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Word Search", url: `${baseUrl}/word-search` },
    { name: ws.title, url: `${baseUrl}/word-search/${ws.slug}` },
  ]);

  const educationalBenefits = [
    { icon: "🧠", title: "Cognitive Skills", desc: "Word searches strengthen pattern recognition, visual scanning, and problem-solving abilities." },
    { icon: "📝", title: "Vocabulary Building", desc: `Kids learn and reinforce ${animalName.toLowerCase()}-related vocabulary while having fun.` },
    { icon: "🔤", title: "Spelling Practice", desc: "Searching for correctly spelled words reinforces proper spelling through repeated exposure." },
    { icon: "🎯", title: "Focus & Concentration", desc: "Completing a word search requires sustained attention, helping build concentration skills." },
    { icon: "😊", title: "Confidence Boost", desc: "Finding each word gives kids a sense of accomplishment and builds self-esteem." },
    { icon: "👀", title: "Visual Discrimination", desc: "Distinguishing similar letters and patterns develops crucial early reading skills." },
  ];

  
  const teacherNote = generateTeacherNote(ws.animal, ws.theme, ws.difficulty, ws.wordCount);
  const howToUseSteps = generateHowToUse(ws.animal, ws.difficulty, ws.ageRange);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-cream/50 border-b border-blush/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-xs text-cocoa/50">
              <Link href="/" className="hover:text-rose transition-colors">Home</Link>
              <span>/</span>
              <Link href="/categories" className="hover:text-rose transition-colors">Categories</Link>
              <span>/</span>
              <span className="text-cocoa/70">Word Search</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link href="/word-search" className="inline-flex items-center gap-1 text-sm text-cocoa/50 hover:text-rose transition-colors">
            <span>←</span> Back to All Word Searches
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-rose bg-rose/10 px-3 py-1 rounded-full mb-4">
                  🔍 Word Search Puzzle
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-3">
                  Free Printable {animalName} Word Search
                </h1>
                <p className="text-cocoa/60 text-lg leading-relaxed max-w-2xl">
                  {ws.description}
                </p>
              {/* Learning Goal */}
              <div className="mb-6 p-5 bg-mint/20 rounded-xl border border-mint/30">
                <h2 className="text-lg font-bold text-cocoa mb-2 flex items-center gap-2">
                  <span>🎯</span> Learning Goal
                </h2>
                <p className="text-cocoa/70 text-sm leading-relaxed">
                  {generateLearningGoal(ws.animal, ws.theme, ws.difficulty, ws.wordCount, ws.ageRange, ws.slug)}
                </p>
              </div>

              </div>

              {/* Ad Banner */}
              <div className="mb-8">
                <AdBanner slot="above-content" />
              </div>

              {/* Word Search Grid Visual */}
              <div className="bg-white rounded-cozy border border-blush/20 p-6 sm:p-8 shadow-card mb-8">
                <h2 className="text-xl font-bold text-cocoa mb-4 flex items-center gap-2">
                  <span>🔍</span> {animalName} {ws.theme} Word Search
                </h2>
                <WordSearchGrid wordList={ws.wordList} difficulty={ws.difficulty} title={ws.title} />
              </div>

              {/* Print Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 p-6 bg-cream/50 rounded-cozy border border-blush/20">
                <div className="flex-1">
                  <h3 className="font-semibold text-cocoa mb-1">Ready to Print!</h3>
                  <p className="text-sm text-cocoa/60">Use your browser print function (Ctrl+P / Cmd+P) to print this word search puzzle.</p>
                </div>
                <PrintButton wordList={ws.wordList} difficulty={ws.difficulty} title={ws.title} />
              </div>

              {/* Puzzle Information */}
              <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-8">
                <h2 className="text-xl font-bold text-cocoa mb-4 flex items-center gap-2">
                  <span>📋</span> Puzzle Information
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-cream/50 rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-1">🎨</span>
                    <p className="text-xs text-cocoa/50 uppercase tracking-wide">Theme</p>
                    <p className="text-sm font-semibold text-cocoa">{animalName} {ws.theme}</p>
                  </div>
                  <div className="bg-cream/50 rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-1">📊</span>
                    <p className="text-xs text-cocoa/50 uppercase tracking-wide">Difficulty</p>
                    <p className="text-sm font-semibold text-cocoa">{ws.difficulty}</p>
                  </div>
                  <div className="bg-cream/50 rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-1">🔤</span>
                    <p className="text-xs text-cocoa/50 uppercase tracking-wide">Word Count</p>
                    <p className="text-sm font-semibold text-cocoa">{ws.wordCount} words</p>
                  </div>
                  <div className="bg-cream/50 rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-1">👶</span>
                    <p className="text-xs text-cocoa/50 uppercase tracking-wide">Age Range</p>
                    <p className="text-sm font-semibold text-cocoa">Ages {ws.ageRange}</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-cream/30 rounded-xl">
                  <h3 className="font-semibold text-cocoa mb-3 flex items-center gap-2">
                    <span>📝</span> Words to Find
                  </h3>
                  
              {/* Teacher Note */}
              <div className="mb-8 p-5 bg-lavender/20 rounded-xl border border-lavender/30">
                <h2 className="text-lg font-bold text-cocoa mb-2 flex items-center gap-2">
                  <span>🍎</span> Teacher Note
                </h2>
                <p className="text-cocoa/70 text-sm leading-relaxed">
                  {teacherNote}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                    {ws.wordList.map((word: string) => (
                      <span key={word} className="px-3 py-1 bg-white border border-blush/20 rounded-full text-sm font-medium text-cocoa capitalize">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Educational Benefits */}
              <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-8">
                {/* How to Use + Print Instructions */}
              <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-8">
                <h2 className="text-xl font-bold text-cocoa mb-4 flex items-center gap-2">
                  <span>📋</span> How to Use This {animalName} Word Search
                </h2>
                <ol className="space-y-4">
                  {howToUseSteps.map((s) => (
                    <li key={s.step} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose/10 text-rose rounded-full flex items-center justify-center text-xs font-bold">{s.step}</span>
                      <div>
                        <p className="text-sm font-medium text-cocoa">{s.title}</p>
                        <p className="text-xs text-cocoa/60 mt-0.5">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 pt-6 border-t border-blush/10">
                  <h3 className="text-sm font-semibold text-cocoa mb-3 flex items-center gap-2">
                    <span>🖨️</span> Print Settings
                  </h3>
                  <ul className="space-y-2 text-xs text-cocoa/60">
                    <li>• Use standard 8.5"x11" letter paper or A4</li>
                    <li>• Select <strong>Fit to Page</strong> in your print dialog</li>
                    <li>• Choose <strong>Portrait</strong> orientation for best fit</li>
                    <li>• Cardstock recommended for classroom reuse</li>
                  </ul>
                </div>
              </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-8">
                <h2 className="text-xl font-bold text-cocoa mb-4 flex items-center gap-2">
                  <span>❓</span> Frequently Asked Questions
                </h2>
                <div className="space-y-2">
                  {pageFAQs.map((faq, i) => (
                    <details key={i} className="group bg-cream/50 rounded-xl border border-blush/10 overflow-hidden">
                      <summary className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-cream transition-colors font-medium text-cocoa text-sm">
                        {faq.question}
                        <span className="text-rose text-xs group-open:rotate-180 transition-transform ml-2">▼</span>
                      </summary>
                      <p className="px-3.5 pb-3.5 text-xs text-cocoa/65 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <AdBanner slot="below-content" />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {sameAnimalSearches.length > 0 && (
                <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
                  <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                    <span>🔍</span> More {animalName} Puzzles
                  </h3>
                  <div className="space-y-3">
                    {sameAnimalSearches.map((rws) => (
                      <Link key={rws.id} href={`/word-search/${rws.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group">
                        <span className="text-xl flex-shrink-0">🔍</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">{rws.title}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColors[rws.difficulty]}`}>{rws.difficulty}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {sameDifficultySearches.length > 0 && (
                <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
                  <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                    <span>📊</span> {ws.difficulty} Level Puzzles
                  </h3>
                  <div className="space-y-3">
                    {sameDifficultySearches.map((rws) => (
                      <Link key={rws.id} href={`/word-search/${rws.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group">
                        <span className="text-lg flex-shrink-0">{animalEmojis[rws.animal] || "🔍"}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">{rws.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {relatedColoring.length > 0 && (
                <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card mb-6">
                  <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                    <span>🎨</span> Related {animalName} Coloring Pages
                  </h3>
                  <div className="space-y-3">
                    {relatedColoring.map((cp) => (
                      <Link key={cp.id} href={`/coloring/${cp.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group">
                        <span className="text-xl flex-shrink-0">🎨</span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-cocoa group-hover:text-rose transition-colors truncate">{cp.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-cozy border border-blush/20 p-6 shadow-card">
                <h3 className="font-semibold text-cocoa mb-4 flex items-center gap-2">
                  <span>🔍</span> All Word Searches
                </h3>
                <p className="text-xs text-cocoa/60 mb-4">
                  Explore our full collection of 100+ free printable word search puzzles featuring your favorite animals!
                </p>
                <Link href="/categories" className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-rose text-white rounded-pill text-sm font-semibold hover:bg-rose/90 transition-all">
                  Browse All Puzzles →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
