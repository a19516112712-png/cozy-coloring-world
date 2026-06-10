import { permanentRedirect } from "next/navigation";
import { coloringPages } from "@/data/coloring-pages";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return coloringPages.map((page) => ({ slug: page.slug }));
}

export default async function LegacyColoringPage({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/coloring/${slug}`);
}
