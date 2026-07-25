import { MetadataRoute } from "next";
import { publicEnv } from "@/lib/env";

const siteUrl = publicEnv.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/static/",
        "/search",
        "/llms.txt",
        "/llms-full.txt",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}