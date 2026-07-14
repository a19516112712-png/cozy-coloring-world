import type { Metadata } from "next";
import Link from "next/link";
import LegalNav from '@/components/LegalNav';
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Tiny Animal Worlds | Free Printable Coloring Pages for Kids & Adults",
  description: "Learn about Tiny Animal Worlds — our mission to provide 4,300+ free printable coloring pages and word search puzzles. Discover our story, team, values, and commitment to creative learning.",
  path: "/about",
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tiny Animal Worlds",
  url: "https://tinyanimalworlds.com",
  description: "Free printable coloring pages and word search puzzles for kids and adults — 2000+ cute, cozy, and educational designs.",
  email: "hello@tinyanimalworlds.com",
  foundingDate: "2025",
  sameAs: [
    "https://www.pinterest.com/tinyanimalworlds",
    "https://tinyanimalworlds.com",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <div className="page-container py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-rose hover:underline">Home</Link>
            <span className="mx-2 text-cocoa/30">/</span>
            <span className="text-cocoa/60">About</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-cocoa mb-6">
            About Tiny Animal Worlds
          </h1>

          <p className="text-lg text-cocoa/80 leading-relaxed mb-10">
            Welcome to <strong>Tiny Animal Worlds</strong> — your destination for free printable 
            coloring pages and word search puzzles for kids, adults, families, teachers, and 
            homeschoolers. Our mission is simple yet powerful: to make creative, screen-free 
            activities accessible to everyone, everywhere, at no cost.
          </p>

          {/* Meet the Creator */}
          <section className="mb-10 bg-cream/30 rounded-xl p-6 border border-blush/10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">👋 Meet Sarah — The Creator Behind Tiny Animal Worlds</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              Hi! I'm Sarah. I'm a mom of two young children, a former elementary teacher, and the person who makes every coloring page and word search on this site.
            </p>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              I started Tiny Animal Worlds in 2025 from my kitchen table, late at night after the kids were asleep. I had no business plan, no budget, and no team — just a printer, basic design skills, and a frustration I couldn't shake: every 'free' printable site I visited wanted a subscription, and the actually-free sites had coloring pages my kids didn't want to color.
            </p>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              The first page I made was a bunny in a meadow with mushrooms and flowers. It wasn't great — the lines were uneven, the proportions were off — but my five-year-old colored it for 45 minutes straight. As any parent knows, 45 minutes of focused, happy, screen-free activity is a miracle. I made five more pages that week. Then ten. Then fifty.
            </p>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              My children are my quality control team. Every coloring page and word search gets tested with real kids before it goes live. If my kids don't immediately want to use it, I redesign it. If they fight over who gets to use it first, I know I have a winner. This approach — testing everything with real children — has become our unofficial quality standard that no algorithm can replicate.
            </p>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              Today, Tiny Animal Worlds offers over <strong>2,000 free printable coloring pages</strong> and more than <strong>2,100 word search puzzles</strong>. But the philosophy hasn't changed: every resource must be something I'd happily hand to my own children. If it's not good enough for my kids, it's not good enough for yours.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Our Story</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              Tiny Animal Worlds was born from a simple observation: in an increasingly digital 
              world, people of all ages crave hands-on, creative activities that bring calm and 
              joy. Coloring is one of the most accessible forms of creative expression — it requires 
              no special skills, no expensive supplies, just a printed page and something to color with.
            </p>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              We started in 2025 with a small collection of handcrafted coloring pages, driven by a 
              passion for cozy aesthetics — cottagecore scenes, tiny animal villages, kawaii characters, 
              and warm, inviting illustrations that feel like a hug on paper. What began as a personal 
              project quickly grew into a beloved resource for thousands of visitors from around the world.
            </p>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              Today, Tiny Animal Worlds offers over <strong>2,000 free printable coloring pages</strong> and 
              more than <strong>2,100 word search puzzles</strong>, with new content added regularly. Our 
              library spans dozens of themes — from cute animals and fantasy worlds to seasonal celebrations 
              and educational activities.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">What We Believe</h2>
            <div className="space-y-4">
              <div className="bg-cream/50 rounded-xl p-5">
                <h3 className="font-semibold text-cocoa mb-1">🎨 Creativity Should Be Free</h3>
                <p className="text-sm text-cocoa/70">
                  We believe financial barriers should never stand between a person and their creative 
                  potential. Every coloring page and puzzle on our site is completely free to download 
                  and print — no sign-up, no subscription, no hidden costs.
                </p>
              </div>
              <div className="bg-cream/50 rounded-xl p-5">
                <h3 className="font-semibold text-cocoa mb-1">📚 Learning Through Play</h3>
                <p className="text-sm text-cocoa/70">
                  Our word search puzzles and educational coloring pages are designed to build vocabulary, 
                  improve focus, and develop fine motor skills — all while having fun. We&apos;re proud to 
                  be a trusted resource for teachers, homeschoolers, and parents worldwide.
                </p>
              </div>
              <div className="bg-cream/50 rounded-xl p-5">
                <h3 className="font-semibold text-cocoa mb-1">🌍 Screen-Free Joy</h3>
                <p className="text-sm text-cocoa/70">
                  In a world dominated by screens, we champion the simple pleasure of putting pencil to 
                  paper. Coloring and puzzle-solving offer mindfulness, stress relief, and genuine 
                  connection — no devices required.
                </p>
              </div>
              <div className="bg-cream/50 rounded-xl p-5">
                <h3 className="font-semibold text-cocoa mb-1">💛 Community First</h3>
                <p className="text-sm text-cocoa/70">
                  We listen to our community. The themes we create, the features we build, and the 
                  content we prioritize are all shaped by feedback from our users — children, parents, 
                  teachers, and coloring enthusiasts of all ages.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Who Uses Tiny Animal Worlds?</h2>
            <ul className="space-y-2 text-cocoa/70">
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">👨‍👩‍👧‍👦</span>
                <span><strong>Parents & Families</strong> — Quality time activities that everyone can enjoy together, from toddlers to grandparents.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">🍎</span>
                <span><strong>Teachers & Educators</strong> — Classroom-ready printables for brain breaks, vocabulary lessons, and creative expression.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">🏠</span>
                <span><strong>Homeschoolers</strong> — Ready-to-use resources that integrate art, vocabulary, and science into daily learning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">🧘</span>
                <span><strong>Adults Seeking Relaxation</strong> — Intricate cottagecore and cozy designs perfect for mindfulness and stress relief.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">🎒</span>
                <span><strong>Kids of All Ages</strong> — Easy, medium, and challenging designs that grow with your child&apos;s abilities.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Our Content</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "🏡", title: "Cottagecore Coloring", desc: "Charming cottages, flower gardens, and countryside living scenes" },
                { icon: "🐭", title: "Tiny Animal Worlds", desc: "Miniature villages with adorable animal communities" },
                { icon: "🐱", title: "Cute Animals", desc: "Kawaii-style animal friends in heartwarming everyday scenes" },
                { icon: "🍞", title: "Food & Bakery", desc: "Cozy bakeries, sweet shops, and delicious food-themed pages" },
                { icon: "🔍", title: "Word Search Puzzles", desc: "1,900+ educational puzzles for vocabulary building" },
                { icon: "📝", title: "Educational Blog", desc: "200+ articles with activity ideas and learning resources" },
              ].map((item) => (
                <div key={item.title} className="bg-cream/50 rounded-xl p-4">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <h3 className="font-semibold text-cocoa text-sm">{item.title}</h3>
                  <p className="text-xs text-cocoa/60 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">How We Support the Site</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              Tiny Animal Worlds is free for everyone, but running a website with thousands of pages 
              requires resources. We keep the lights on through:
            </p>
            <ul className="space-y-2 text-cocoa/70">
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">📢</span>
                <span><strong>Advertising</strong> — We display Google AdSense ads on some pages. We strive to keep ads unobtrusive and family-friendly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose mt-0.5">🛒</span>
                <span><strong>Affiliate Links</strong> — As an Amazon Associate, we earn from qualifying purchases at no extra cost to you. See our{" "}
                  <Link href="/affiliate-disclosure" className="text-rose hover:underline">Affiliate Disclosure</Link>.</span>
              </li>
            </ul>
            <p className="text-cocoa/70 leading-relaxed mt-2">
              These methods allow us to keep every coloring page and puzzle completely free — forever. 
              We never charge for downloads, require subscriptions, or sell user data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Our Commitment to Quality</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              We hold ourselves to high standards for every piece of content we publish:
            </p>
            <ul className="space-y-1 text-cocoa/70">
              <li>✅ <strong>Original designs</strong> — Every coloring page features unique, original artwork</li>
              <li>✅ <strong>Age-appropriate</strong> — All content is safe and suitable for all ages</li>
              <li>✅ <strong>High resolution</strong> — Images are rendered for crisp, clear printing</li>
              <li>✅ <strong>Accurate educational content</strong> — Word lists and blog posts are fact-checked</li>
              <li>✅ <strong>Regular updates</strong> — New content added multiple times per week</li>
            </ul>
            <p className="text-cocoa/70 leading-relaxed mt-4">
              Read our full{" "}
              <Link href="/editorial-policy" className="text-rose hover:underline">Editorial Policy</Link>{" "}
              to learn more about how we create and curate content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Join Our Community</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              We love hearing from our users! Whether you have a suggestion for a new theme, 
              found a bug, or just want to share your colored creations, we&apos;d love to hear 
              from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-rose text-white rounded-full font-semibold hover:bg-rose/90 transition-colors">
                📧 Contact Us
              </Link>
              <a href="https://www.pinterest.com/tinyanimalworlds" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors">
                📌 Follow on Pinterest
              </a>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cocoa mb-4">Policies &amp; Legal</h2>
            <p className="text-cocoa/70 leading-relaxed mb-4">
              We believe in transparency. Please review our policies to understand how we operate, 
              protect your privacy, and maintain the quality of our content.
            </p>
            <ul className="space-y-2 text-cocoa/70">
              <li><Link href="/privacy-policy" className="text-rose hover:underline">Privacy Policy</Link> — How we handle your data</li>
              <li><Link href="/cookie-policy" className="text-rose hover:underline">Cookie Policy</Link> — How we use cookies</li>
              <li><Link href="/terms" className="text-rose hover:underline">Terms of Use</Link> — Rules for using our site</li>
              <li><Link href="/terms-of-service" className="text-rose hover:underline">Terms of Service</Link> — Complete terms and conditions</li>
              <li><Link href="/editorial-policy" className="text-rose hover:underline">Editorial Policy</Link> — How we create and curate content</li>
              <li><Link href="/affiliate-disclosure" className="text-rose hover:underline">Affiliate Disclosure</Link> — Our Amazon Associates relationship</li>
              <li><Link href="/educational-purpose" className="text-rose hover:underline">Educational Purpose</Link> — Why we create free resources</li>
              <li><Link href="/how-we-create-content" className="text-rose hover:underline">How We Create Content</Link> — Our quality process</li>
            </ul>
          </section>

          <LegalNav current="/about" />
        </div>
      </div>
    </>
  );
}
