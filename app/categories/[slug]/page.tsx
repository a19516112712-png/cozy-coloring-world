import { permanentRedirect } from "next/navigation";
import { categories } from "@/data/categories";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function LegacyCategoryPage({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/category/${slug}`);
}
