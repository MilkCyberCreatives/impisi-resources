// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://impisiresources.com' // <-- change if needed
  const staticPages = ['', '/about', '/what-we-do', '/our-work', '/contact']

  return staticPages.map((p) => ({
    url: `${base}${p || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }))
}
