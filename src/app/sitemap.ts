import { MetadataRoute } from "next";
import { publicEnv } from "@/lib/env";
import { source } from "@/lib/source";

const siteUrl = publicEnv.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();

  return pages.map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.url === "/" ? 1 : 0.8,
  }));
}