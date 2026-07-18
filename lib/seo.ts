import { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const siteUrl = SITE_URL;
const siteName = SITE_NAME;
const siteDescription =
  "Download free cute printable coloring pages for kids and adults. Cozy, kawaii, and cottagecore designs. New coloring pages added weekly! Free PDF downloads.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tiny Animal Worlds | Free Printable Coloring Pages JPG",
    template: "%s | Tiny Animal Worlds",
  },
  description: siteDescription,
  keywords: [
    "free printable coloring pages",
    "cute coloring pages",
    "cozy coloring pages",
    "kawaii coloring pages",
    "coloring pages JPG",
    "printable coloring pages for kids",
    "adult coloring pages",
    "cottagecore coloring",
    "free coloring pages download",
    "cute animal coloring pages",
    "fantasy coloring pages",
    "kids coloring pages",
    "easy coloring pages",
    "JPG coloring pages free",
    "coloring pages to print",
  ],
  authors: [{ name: "Tiny Animal Worlds", url: siteUrl }],
  creator: "Tiny Animal Worlds",
  publisher: "Tiny Animal Worlds",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Tiny Animal Worlds | Free Printable Coloring Pages JPG",
    description: siteDescription,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Tiny Animal Worlds - Free Printable Coloring Pages for Kids and Adults",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Animal Worlds | Free Printable Coloring Pages JPG",
    description: "Download free cute printable coloring pages for kids and adults.",
    images: ["/og-image.webp"],
    site: "@cozycoloringworld",
    creator: "@cozycoloringworld",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export function generatePageMetadata({
  title,
  description,
  path,
  imageUrl,
  imageWidth,
  imageHeight,
}: {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
}): Metadata {
  const fullUrl = `${siteUrl}${path}`;
  const imgWidth = imageWidth || 1200;
  const imgHeight = imageHeight || 1500;

  return {
    title,
    description,
    keywords: [
      "free printable coloring pages",
      "cute coloring pages",
      "cozy coloring pages",
      "kawaii coloring pages",
      "coloring pages JPG",
      "printable coloring pages for kids",
      "free coloring pages download",
    ],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      locale: "en_US",
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: imgWidth,
              height: imgHeight,
              alt: title,
              type: "image/jpeg",
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
      site: "@cozycoloringworld",
      creator: "@cozycoloringworld",
    },
  };
}
