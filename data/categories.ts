export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  emoji: string;
  imageUrl: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "cute-animals",
    name: "Cute Animals",
    slug: "cute-animals",
    description: "Adorable animal coloring pages for everyone",
    color: "#FADADD",
    emoji: "🐱",
    imageUrl: "/images/categories/cute-animals.svg",
    count: 10,
  },
  {
    id: "cozy-coloring",
    name: "Cozy Coloring",
    slug: "cozy-coloring",
    description: "Warm and comforting scenes to color",
    color: "#FFF4D2",
    emoji: "🏡",
    imageUrl: "/images/categories/cozy-coloring.svg",
    count: 119,
  },
  {
    id: "kawaii-coloring",
    name: "Kawaii Coloring",
    slug: "kawaii-coloring",
    description: "Super cute Japanese-inspired coloring pages",
    color: "#FFB5C2",
    emoji: "🌸",
    imageUrl: "/images/categories/kawaii-coloring.svg",
    count: 0,
  },
  {
    id: "fantasy",
    name: "Fantasy",
    slug: "fantasy",
    description: "Magical creatures and enchanted worlds",
    color: "#E8D5F5",
    emoji: "🦄",
    imageUrl: "/images/categories/fantasy.svg",
    count: 1,
  },
  {
    id: "kids-coloring",
    name: "Kids Coloring",
    slug: "kids-coloring",
    description: "Simple and fun pages for little artists",
    color: "#D4F0E8",
    emoji: "🎨",
    imageUrl: "/images/categories/kids-coloring.svg",
    count: 0,
  },
];
