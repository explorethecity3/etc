import { getAllCitySlugs } from '@/lib/cityData'
import blogs from '@/data/blogs.json'

const SITE_UPDATED = new Date('2026-09-15')
const LEGAL_UPDATED = new Date('2025-01-01')

export default function sitemap() {
  const baseUrl = 'https://www.explorethecity.in'
  const citySlugs = getAllCitySlugs()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/authors/explore-the-city-editorial`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/trip-planner`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/city-directory`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(Math.max(...blogs.map((blog) => new Date(blog.date).getTime()))),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // City pages
  const cityPages = citySlugs.map((slug) => {
    return {
      url: `${baseUrl}/cities/${slug}`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  })

  // Blog posts
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...cityPages, ...blogPages]
}
