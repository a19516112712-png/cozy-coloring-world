import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { coloringPages } from "@/data/coloring-pages";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tinyanimalworlds.com";
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/categories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/coloring-pages`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  // Category routes – /category/[slug]  priority 0.9, weekly
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Legacy category routes – /categories/[slug]  priority 0.5, monthly
  const legacyCategoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Coloring page detail routes – /coloring/[slug]  priority 0.7, monthly
  const coloringRoutes: MetadataRoute.Sitemap = coloringPages.map((page) => ({
    url: `${baseUrl}/coloring/${page.slug}`,
    lastModified: new Date(page.createdAt || now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Legacy coloring page routes – /coloring-pages/[slug]  priority 0.5, monthly
  const legacyColoringRoutes: MetadataRoute.Sitemap = coloringPages.map((page) => ({
    url: `${baseUrl}/coloring-pages/${page.slug}`,
    lastModified: new Date(page.createdAt || now),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Blog post routes – priority 0.8, weekly
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || now),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...legacyCategoryRoutes,
    ...coloringRoutes,
    ...legacyColoringRoutes,
    ...blogRoutes,
  ];
}
