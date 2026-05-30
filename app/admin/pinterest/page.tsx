import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import PinterestPublisher from "./PinterestPublisher";

export const metadata: Metadata = generatePageMetadata({
  title: "Pinterest Publisher | Admin | Tiny Animal Worlds",
  description: "Daily Pinterest pin scheduler and publisher for Tiny Animal Worlds coloring pages.",
  path: "/admin/pinterest",
});

export default function AdminPinterestPage() {
  return <PinterestPublisher />;
}
