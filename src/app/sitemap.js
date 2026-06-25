import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
