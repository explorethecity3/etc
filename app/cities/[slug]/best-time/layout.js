import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `Best Time to Visit ${city.name} 2025 - Weather, Season & Travel Guide | Explore The City`
  const metaDescription = `Find the best time to visit ${city.name}, ${city.state}. Comprehensive guide on weather conditions, peak seasons, festivals, and ideal months for visiting ${city.name} to make the most of your trip.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/best-time`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `best time to visit ${city.name}, ${city.name} weather, ${city.name} season, when to visit ${city.name}, ${city.name} climate, ${city.name} temperature, ${city.name} monsoon, ${city.name} winter, ${city.name} summer, ${city.name} best season, ${city.name} weather forecast, ${city.name} peak season, ${city.name} off season, ${city.name} travel season, ideal time ${city.name}, ${city.name} weather guide, ${city.state} weather, ${city.name} monthly weather, ${city.name} travel weather`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: pageUrl,
      siteName: 'Explore The City',
      title: `Best Time to Visit ${city.name} - Weather & Season Guide`,
      description: metaDescription,
      images: [
        {
          url: city.image,
          width: 1200,
          height: 630,
          alt: `Best Time to Visit ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Best Time to Visit ${city.name}`,
      description: metaDescription,
      images: [city.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function BestTimeLayout({ children }) {
  return children
}
