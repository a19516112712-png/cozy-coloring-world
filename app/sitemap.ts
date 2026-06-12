import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { categories } from "@/data/categories";
import { coloringPages } from "@/data/coloring-pages";
import { blogPosts } from "@/data/blogPosts";
import { collections } from "@/data/collections";
import { faqPages } from "@/data/faqs";
import { wordSearches } from "@/data/wordSearches";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/categories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/coloring-pages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/collections`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/word-search`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/pins`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/html-sitemap`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/editorial-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Coloring page detail routes
  const coloringRoutes: MetadataRoute.Sitemap = coloringPages.map((page) => ({
    url: `${baseUrl}/coloring/${page.slug}`,
    lastModified: new Date(page.createdAt || now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog post routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || now),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Collection routes
  const collectionRoutes: MetadataRoute.Sitemap = collections.map((col) => ({
    url: `${baseUrl}/collections/${col.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // FAQ routes
  const faqRoutes: MetadataRoute.Sitemap = faqPages.map((faq) => ({
    url: `${baseUrl}/faq/${faq.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Word Search routes
  const wordSearchRoutes: MetadataRoute.Sitemap = wordSearches.map((ws) => ({
    url: `${baseUrl}/word-search/${ws.slug}`,
    lastModified: new Date(ws.createdAt || now),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...coloringRoutes,
    ...blogRoutes,
    ...collectionRoutes,
    ...faqRoutes,
    ...wordSearchRoutes,
  ];
}
