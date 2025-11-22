import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `${city.name} Travel Essentials: Insider Tips & Practical Advice for Visitors | Explore The City`
  const metaDescription = `Essential travel tips for visiting ${city.name}, ${city.state}. Get insider advice on local customs, transportation, safety, best practices, and everything you need to know for a smooth trip to ${city.name}.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/travel-tips`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${city.name} travel tips, ${city.name} advice, visit ${city.name}, ${city.name} guide, ${city.name} tourist tips, ${city.name} travel guide, ${city.name} tips and tricks, ${city.name} travel advice, ${city.name} trip tips, ${city.name} safety tips, ${city.name} local tips, ${city.name} insider tips, ${city.name} travel hacks, ${city.name} dos and donts, ${city.name} travel essentials, ${city.name} planning tips, first time ${city.name}, ${city.state} travel, ${city.name} visitor tips, ${city.name} practical tips`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: pageUrl,
      siteName: 'Explore The City',
      title: `Travel Tips for ${city.name} - Essential Guide`,
      description: metaDescription,
      images: [
        {
          url: city.image,
          width: 1200,
          height: 630,
          alt: `Travel Tips for ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Travel Tips for ${city.name}`,
      description: metaDescription,
      images: [city.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function TravelTipsLayout({ children }) {
  return children
}
