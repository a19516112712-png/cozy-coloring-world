import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { categories } from "@/data/categories";
import { coloringPages } from "@/data/coloring-pages";
import { blogPosts } from "@/data/blogPosts";
import { collections } from "@/data/collections";
import { faqPages } from "@/data/faqs";
import { wordSearches } from "@/data/wordSearches";
import { tagCategories } from "@/data/tagCategories";

export const dynamic = "force-static";

const staleBlogSlugs = new Set([
  "harvest-festival-coloring",
  "cottage-market-coloring",
  "animal-tea-party-coloring",
  "cozy-riverside-scenes",
  "woodland-market-adventures",
  "tiny-woodland-helpers",
  "tiny-woodland-shops",
  "woodland-explorers-coloring",
  "woodland-craft-workshop",
  "squirrel-woodland-life",
  "duck-pond-village-coloring-pages",
  "duck-garden-coloring-pages",
  "cozy-duck-cottage-coloring-pages",
  "duck-lakeside-adventures-coloring-pages",
  "duck-bakery-tea-coloring-pages",
  "animal-word-search-printable-activities-classroom",
  "free-printable-kids-puzzles-homeschool-learning",
  "butterfly-ladybug-spring-printable-worksheets-elementary",
  "flower-garden-theme-vocabulary-building-kids-word-search",
  "woodland-animal-activity-sheets-teachers-free-download",
  "farm-animal-printable-games-preschool-kindergarten",
  "ocean-sea-creature-word-puzzles-elementary-students",
  "safari-jungle-animal-coloring-and-word-search-bundle",
  "easy-beginner-word-search-puzzles-young-children",
  "printable-educational-resources-parents-teachers-summer",
  "free-printable-breakfast-themed-word-search-kids",
  "candy-dessert-printable-puzzles-elementary-classroom",
  "farmers-market-garden-printable-activities-homeschool",
  "magical-creatures-printable-word-puzzles-kids-learning",
  "party-celebration-themed-educational-printables-teachers",
  "toy-store-playroom-vocabulary-building-word-games",
  "ocean-adventure-printable-worksheets-marine-animal-learning",
  "sports-games-outdoor-printable-activity-sheets-kids",
  "cozy-shop-retail-printable-coloring-word-search-bundle",
  "space-science-printable-educational-resources-young-explorers",
  "morning-bedtime-routine-printable-word-search-kids",
  "picnic-park-outdoor-printable-puzzles-elementary-students",
  "sports-games-printable-activity- worksheets-physical-education",
  "arts-crafts-printable-word-puzzles-creative-kids-learning",
  "diy-home-activities-printable-word-games-homeschool-families",
  "holiday-seasonal-printable-word-search-teachers-classroom",
  "weather-nature-printable-learning-worksheets-young-scientists",
  "board-game-puzzle-night-family-printable-activities",
  "pretend-play-imagination-printable-coloring-word-search",
  "health-wellness-printable-educational-resources-elementary",
  "community-helper-printable-word-search-classroom-social-studies",
  "transportation-travel-printable-puzzles-kids-vocabulary",
  "pet-store-veterinary-printable-worksheets-animal-care-learning",
  "farm-animals-homeschool-printable-activity-pack",
  "insect-bug-life-cycle-printable-science-activities-kids",
  "reptile-amphibian-printable-educational-resources-elementary",
  "wildlife-habitat-printable-coloring-word-search-bundle",
  "australian-animals-printable-word-games-marsupial-learning",
  "garden-pond-ecosystem-printable-worksheets-nature-study",
  "transportation-infrastructure-printable-puzzles-young-learners",
  "ocean-marine-life-printable-word-search-classroom-science",
  "deep-sea-explorer-printable-puzzles-kids-ocean-literacy",
  "whale-dolphin-printable-worksheets-marine-mammal-study",
  "seal-sea-lion-printable-activity-pack-homeschool-science",
  "coastal-ecosystem-printable-educational-resources-elementary",
  "arctic-antarctic-animal-printable-word-games-polar-science",
  "cephalopod-octopus-squid-printable-learning-kids",
  "coral-reef-printable-coloring-word-search-bundle-ocean",
  "seabird-printable-educational-worksheets-coastal-bird-study",
  "marine-reptile-printable-puzzles-sea-turtle-snake-iguana",
]);

const staleColoringSlugs = new Set([
  "tiny-bear-hosting-a-winter-hot-副本",
  "tiny-frog-living-inside-a-gian-副本",
  "tiny-bunny-running-a-strawberr-副本",
]);

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
    { url: `${baseUrl}/html-sitemap`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/editorial-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/how-we-create-content`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/educational-purpose`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
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
  const coloringRoutes: MetadataRoute.Sitemap = coloringPages.filter((page) => !staleColoringSlugs.has(page.slug)).map((page) => ({
    url: `${baseUrl}/coloring/${page.slug}`,
    lastModified: new Date(page.createdAt || now),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog post routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.filter((post) => !staleBlogSlugs.has(post.slug)).map((post) => ({
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

  // Tag routes
  const tagRoutes: MetadataRoute.Sitemap = tagCategories.map((t) => ({
    url: `${baseUrl}/tag/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

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
    ...tagRoutes,
  ];
}
