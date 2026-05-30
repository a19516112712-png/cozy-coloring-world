import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { coloringPages } from "@/data/coloring-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cozycoloringworld.com";
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/categories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/coloring-pages`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Category routes — /category/[slug]
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Legacy category routes — /categories/[slug]
  const legacyCategoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Coloring page detail routes — /coloring/[slug]
  const coloringRoutes: MetadataRoute.Sitemap = coloringPages.map((page) => ({
    url: `${baseUrl}/coloring/${page.slug}`,
    lastModified: new Date(page.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Legacy coloring page routes — /coloring-pages/[slug]
  const legacyColoringRoutes: MetadataRoute.Sitemap = coloringPages.map((page) => ({
    url: `${baseUrl}/coloring-pages/${page.slug}`,
    lastModified: new Date(page.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...legacyCategoryRoutes,
    ...coloringRoutes,
    ...legacyColoringRoutes,
  ];
}
