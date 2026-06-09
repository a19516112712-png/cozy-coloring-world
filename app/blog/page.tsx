import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blogPosts";
import BlogCardImage from "@/components/BlogCardImage";
import Breadcrumb from "@/components/Breadcrumb";
export const metadata: Metadata = generatePageMetadata({
  title: "Coloring Blog | Tips, Ideas & Inspiration | Tiny Animal Worlds",
  description: "Explore our coloring blog with 41 articles on cute coloring pages, cozy coloring ideas, printable downloads, and creative inspiration for kids and adults!",
  path: "/blog",
  imageUrl: "/images/coloring/10_bear_cafe_reading_corner.jpg",
});

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Coloring Blog | Tiny Animal Worlds",
  description: "Coloring tips, ideas, and inspiration for kids and adults. Learn about the benefits of coloring and get creative ideas!",
  url: "https://tinyanimalworlds.com/blog",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://tinyanimalworlds.com/blog/${post.slug}`,
      name: post.title,
    })),
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <div className="page-container py-12 sm:py-16">
        <Breadcrumb items={[
          { name: "Home", url: "https://tinyanimalworlds.com" },
          { name: "Blog", url: "https://tinyanimalworlds.com/blog" },
        ]} />
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-cocoa">
            Coloring Blog
          </h1>
          <p className="mt-3 text-cocoa/60 max-w-xl mx-auto text-lg">
            Tips, ideas, and inspiration for your coloring journey.{" "}
            <span className="font-medium text-rose">{blogPosts.length} articles</span> to explore!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink/20"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-cream">
                <BlogCardImage src={post.coverImage} alt={post.title} />
                <div className="absolute top-3 left-3">
                  <span className="bg-cream/90 backdrop-blur-sm text-cocoa text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-cocoa/40 mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-cocoa leading-snug line-clamp-2 group-hover:text-rose transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-cocoa/60 line-clamp-2 mb-4">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-rose group-hover:gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 text-cocoa/40 text-sm">
          Showing all {blogPosts.length} blog posts
        </div>
      </div>
    </>
  );
}
