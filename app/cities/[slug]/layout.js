import { getAllCitySlugs, getCityData } from '@/lib/cityData'

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  // Generate comprehensive keywords for main city page
  const keywords = city.keywords
    ? city.keywords.join(', ')
    : `${city.name} travel guide, ${city.name} tourism, visit ${city.name}, ${city.name} ${city.state}, things to do in ${city.name}, ${city.name} attractions, ${city.name} sightseeing, ${city.name} tourist places, ${city.name} city guide, explore ${city.name}, ${city.name} travel tips, ${city.name} trip planning, ${city.name} vacation, ${city.name} holiday, ${city.name} itinerary, ${city.name} tour packages, ${city.name} travel information, ${city.name} tourism guide 2025`

  // Enhanced meta title with better structure
  const metaTitle = `${city.name} Travel Guide 2025 - Top Attractions, Food & Tips | Explore The City`

  // Enhanced description with call-to-action
  const metaDescription = `Discover ${city.name}, ${city.state}: ${city.shortDescription} Find the best attractions, local food, travel tips, and budget estimates for your ${city.name} trip.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    authors: [{ name: 'Explore The City' }],
    creator: 'Explore The City',
    publisher: 'Explore The City',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: pageUrl,
      siteName: 'Explore The City',
      title: `${city.name} Travel Guide - Best Places to Visit in ${city.name}`,
      description: metaDescription,
      images: [
        {
          url: city.image,
          width: 1200,
          height: 630,
          alt: `${city.name} - ${city.shortDescription}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Travel Guide - Top Attractions & Tips`,
      description: city.shortDescription,
      images: [city.image],
      creator: '@explorethecity',
      site: '@explorethecity',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function CityLayout({ children }) {
  return children
}
