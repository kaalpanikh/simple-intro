import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://simple.nikhilmishra.xyz/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://simple.nikhilmishra.xyz/llms.txt', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}
