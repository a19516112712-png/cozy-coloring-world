import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import FreeColoringPackForm from "@/components/FreeColoringPackForm";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: "100 Free Cozy Animal Coloring Pages | Tiny Animal Worlds",
    description:
      "Get 100 free printable cozy animal coloring pages for kids, families, teachers, and relaxing creative time. Download the free coloring pack.",
    path: "/free-100-coloring-pages/",
    imageUrl: "/og-image.webp",
    imageWidth: 1200,
    imageHeight: 630,
  }),
  title: {
    absolute: "100 Free Cozy Animal Coloring Pages | Tiny Animal Worlds",
  },
};

const heroPreviews = [
  {
    imageUrl: "/free-coloring-pack/100_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 100",
    showOnMobile: true,
  },
  {
    imageUrl: "/free-coloring-pack/99_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 99",
    showOnMobile: true,
  },
  {
    imageUrl: "/free-coloring-pack/98_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 98",
    showOnMobile: false,
  },
  {
    imageUrl: "/free-coloring-pack/97_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 97",
    showOnMobile: false,
  },
];

const previewPages = [
  {
    imageUrl: "/free-coloring-pack/96_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 96",
  },
  {
    imageUrl: "/free-coloring-pack/95_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 95",
  },
  {
    imageUrl: "/free-coloring-pack/94_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 94",
  },
  {
    imageUrl: "/free-coloring-pack/93_Create_a_single_printable_colo.jpg",
    alt: "Cozy animal coloring page preview 93",
  },
];

const featureCards = [
  {
    title: "100 Printable Pages",
    description: "A full collection you can print at home.",
    emoji: "🖨️",
    color: "bg-mint/35",
  },
  {
    title: "Cozy Animal Adventures",
    description: "Cute scenes filled with cozy animal friends.",
    emoji: "🐾",
    color: "bg-butter/45",
  },
  {
    title: "Easy-to-Color Designs",
    description: "Simple, welcoming line art for relaxed coloring.",
    emoji: "🖍️",
    color: "bg-lavender/35",
  },
  {
    title: "Perfect for Kids & Families",
    description: "Family-friendly pages for shared creative time.",
    emoji: "🏡",
    color: "bg-blush/40",
  },
];

const audiences = [
  { label: "Kids who love cute animals", emoji: "🧒", color: "bg-mint/40" },
  {
    label: "Parents looking for screen-free activities",
    emoji: "👨‍👩‍👧",
    color: "bg-butter/50",
  },
  {
    label: "Teachers looking for printable activities",
    emoji: "🍎",
    color: "bg-lavender/40",
  },
  {
    label: "Adults who enjoy relaxing coloring",
    emoji: "🧘",
    color: "bg-blush/45",
  },
];

const faqs = [
  {
    question: "Are these coloring pages really free?",
    answer: "Yes. The free pack includes 100 printable cozy animal coloring pages.",
  },
  {
    question: "What format will I receive?",
    answer: "You&apos;ll receive a printable PDF.",
  },
  {
    question: "Can I print them at home?",
    answer: "Yes. The pages are designed for convenient home printing.",
  },
  {
    question: "Is this suitable for kids?",
    answer:
      "The collection is designed for family-friendly creative time, with simple cozy animal scenes.",
  },
  {
    question: "Will I receive emails?",
    answer:
      "Yes. After receiving the free pack, you may receive occasional coloring ideas and updates. You can unsubscribe at any time.",
  },
];

function PreviewCard({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-cozy border border-blush/20 bg-white p-2 shadow-card">
      <div className="relative aspect-[17/22] overflow-hidden rounded-xl bg-cream">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function FreeColoringPagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="page-container py-10 sm:py-14 lg:py-20 xl:py-[5.5rem]">
          <div className="mx-auto max-w-[1180px]">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-pill border border-blush bg-white/70 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-rose" />
              <span className="text-xs font-semibold uppercase tracking-wide text-cocoa">
                Free Printable Coloring Pack
              </span>
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-x-12 xl:grid-cols-[5fr_6fr] xl:gap-x-10">
            {/* Title */}
            <div className="order-1 text-center lg:order-none lg:col-start-1 lg:row-start-1 lg:text-left">
              <h1 className="text-balance text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.25rem] xl:text-[3.875rem]">
                <span className="block text-rose">100 FREE</span>
                <span className="block text-cocoa">COZY ANIMAL</span>
                <span className="block text-cocoa">COLORING PAGES</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cocoa/70 sm:text-lg lg:mx-0 xl:max-w-[34rem]">
                A cozy collection of cute animal coloring pages for kids, families,
                teachers, and relaxing creative time.
              </p>
            </div>

            {/* Form and trust */}
            <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-2">
              <FreeColoringPackForm
                submitLabel="GET MY FREE COLORING PACK"
                instanceId="hero"
              />
              <p className="mt-4 text-center text-sm font-medium text-cocoa/60 lg:text-left">
                Instant access &bull; Printable PDF &bull; 100 coloring pages
              </p>
            </div>

            {/* Collage */}
            <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 xl:-mr-6">
              <div className="mx-auto grid max-w-md grid-cols-2 gap-4 lg:max-w-none xl:gap-3">
                {heroPreviews.map((preview) => (
                  <div
                    key={preview.imageUrl}
                    className={`overflow-hidden rounded-cozy border border-blush/25 bg-white p-2 shadow-[0_10px_28px_rgba(139,107,94,0.06)] xl:p-3 ${preview.showOnMobile ? "" : "hidden sm:block"}`}
                  >
                    <div className="relative aspect-[17/22] overflow-hidden rounded-xl bg-cream">
                      <Image
                        src={preview.imageUrl}
                        alt={preview.alt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* A Little Peek Inside */}
      <section className="page-container py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
            A Little Peek Inside
          </h2>
          <p className="mt-3 text-base text-cocoa/65">
            Here are a few pages from your free coloring collection.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {previewPages.map((preview) => (
            <PreviewCard
              key={preview.imageUrl}
              imageUrl={preview.imageUrl}
              alt={preview.alt}
            />
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section className="page-container pb-8 pt-12 sm:pb-10 sm:pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
            What&apos;s Inside Your Free Pack?
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((item) => (
            <div
              key={item.title}
              className={`h-full rounded-cozy p-5 shadow-[0_2px_10px_rgba(139,107,94,0.04)] ${item.color}`}
            >
              <span className="text-2xl" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="mt-3 text-base font-bold text-cocoa">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="page-container pb-14 sm:pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
            Made for Cozy Creative Time
          </h2>
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-3">
          {audiences.map((item) => (
            <div
              key={item.label}
              className={`inline-flex max-w-full items-center gap-2 rounded-pill px-4 py-2.5 text-left ${item.color}`}
            >
              <span className="text-lg" aria-hidden="true">
                {item.emoji}
              </span>
              <p className="text-sm font-medium leading-snug text-cocoa">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Second CTA */}
      <section className="page-container py-10 sm:py-14">
        <div className="rounded-[1.75rem] border border-blush/30 bg-blush/20 px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
            Ready for 100 Cozy Coloring Pages?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-cocoa/70">
            Enter your email and we&apos;ll send your free printable coloring pack.
          </p>
          <FreeColoringPackForm
            submitLabel="SEND ME THE FREE PACK"
            instanceId="mid"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="page-container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-cocoa sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-cozy border border-blush/20 bg-white p-5 shadow-card"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-cocoa">
                  {faq.question}
                  <span
                    className="ml-4 flex-shrink-0 text-lg text-rose transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-cocoa/70 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="page-container pb-16 sm:pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            <span className="block text-rose">100 FREE COZY ANIMAL</span>
            <span className="block text-cocoa">COLORING PAGES</span>
          </h2>
          <p className="mt-4 text-base text-cocoa/70">
            Enter your email and we&apos;ll send your free printable pack.
          </p>
          <FreeColoringPackForm
            submitLabel="GET THE FREE PACK"
            instanceId="final"
          />
        </div>
      </section>
    </>
  );
}
