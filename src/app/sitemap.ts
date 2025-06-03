import { i18nLocales } from "@/i18n/routing";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    { url: "", priority: 1.0 },
    { url: "/contact", priority: 0.8 },
    { url: "/imprint", priority: 0.1 },
    { url: "/privacy", priority: 0.1 },
  ];

  return i18nLocales.flatMap((locale) =>
    staticUrls.map((url) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale.code}${url.url}`,
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: url.priority,
    })),
  );
}
