import blogs from '@/data/blogs.json'
import { PRIMARY_CITY_SLUGS } from '@/lib/indexingPolicy'
import { ITINERARY_LANDINGS } from '@/lib/itineraryLandingData'
import { BANGALORE_SEO_LANDINGS } from '@/lib/bangaloreSeoLandings'

const SITE_UPDATED = new Date('2026-10-22')
const LEGAL_UPDATED = new Date('2025-01-01')

export default function sitemap() {
  const baseUrl = 'https://www.explorethecity.in'
  const citySlugs = PRIMARY_CITY_SLUGS

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
      url: `${baseUrl}/trip-checker`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/itineraries`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
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
    {
      url: `${baseUrl}/bangalore-guides`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
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

  const itineraryPages = ITINERARY_LANDINGS.map((plan) => ({
    url: `${baseUrl}/itineraries/${plan.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const bangaloreGuidePages = BANGALORE_SEO_LANDINGS.map((guide) => ({
    url: `${baseUrl}/bangalore-guides/${guide.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // Blog posts
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...cityPages, ...itineraryPages, ...bangaloreGuidePages, ...blogPages]
}
