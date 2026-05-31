export const AFFILIATE_LINKS: Record<string, string> = {
  "cute-animals": "https://amzn.to/4al3M0O",
  "cozy-coloring": "https://amzn.to/4vka1dx",
  "fantasy-coloring": "https://amzn.to/4u6nHI8",
  "cottagecore-coloring": "https://amzn.to/4uGMi7p",
  "tiny-animal-worlds": "https://amzn.to/4a1goKo",
};

export function getAffiliateLink(categoryId: string): string {
  return AFFILIATE_LINKS[categoryId] || "https://amzn.to/4vka1dx"; // default to cozy
}
