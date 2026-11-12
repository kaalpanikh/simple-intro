import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://simple.nikhilmishra.xyz/sitemap.xml',
    host: 'https://simple.nikhilmishra.xyz',
  }
}
