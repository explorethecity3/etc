import blogs from '@/data/blogs.json'
import { PRIMARY_CITY_SLUGS } from '@/lib/indexingPolicy'
import { ITINERARY_LANDINGS } from '@/lib/itineraryLandingData'
import { BANGALORE_SEO_LANDINGS } from '@/lib/bangaloreSeoLandings'
import { MUMBAI_SEO_LANDINGS } from '@/lib/mumbaiSeoLandings'
import { JAIPUR_SEO_LANDINGS } from '@/lib/jaipurSeoLandings'
import { GOA_SEO_LANDINGS } from '@/lib/goaSeoLandings'
import { DELHI_SEO_LANDINGS } from '@/lib/delhiSeoLandings'

const SITE_UPDATED = new Date('2026-10-22')
const LEGAL_UPDATED = new Date('2025-01-01')
const CITY_GUIDE_SECTIONS = [
  'places-to-explore',
  'food',
  'best-time',
  'travel-tips',
  'hidden-gems',
  'budget',
]

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
      url: `${baseUrl}/travel-tools`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/trip-planner`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
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
    {
      url: `${baseUrl}/mumbai-guides`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jaipur-guides`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/goa-guides`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/delhi-guides`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/india-trip-budget-calculator`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'monthly',
      priority: 1.0,
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

  const cityGuidePages = citySlugs.flatMap((slug) =>
    CITY_GUIDE_SECTIONS.map((section) => ({
      url: `${baseUrl}/cities/${slug}/${section}`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  )

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

  const mumbaiGuidePages = MUMBAI_SEO_LANDINGS.map((guide) => ({
    url: `${baseUrl}/mumbai-guides/${guide.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const jaipurGuidePages = JAIPUR_SEO_LANDINGS.map((guide) => ({
    url: `${baseUrl}/jaipur-guides/${guide.slug}`,
    lastModified: new Date('2026-10-30'),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const goaGuidePages = GOA_SEO_LANDINGS.map((guide) => ({
    url: `${baseUrl}/goa-guides/${guide.slug}`,
    lastModified: new Date('2026-10-30'),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const delhiGuidePages = DELHI_SEO_LANDINGS.map((guide) => ({
    url: `${baseUrl}/delhi-guides/${guide.slug}`,
    lastModified: new Date('2026-10-30'),
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

  return [
    ...staticPages,
    ...cityPages,
    ...cityGuidePages,
    ...itineraryPages,
    ...bangaloreGuidePages,
    ...mumbaiGuidePages,
    ...jaipurGuidePages,
    ...goaGuidePages,
    ...delhiGuidePages,
    ...blogPages,
  ]
}
