import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-cocoa/20">/</span>}
              {i < items.length - 1 ? (
                <Link href={item.url} className="text-rose hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span className="text-cocoa/60">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
