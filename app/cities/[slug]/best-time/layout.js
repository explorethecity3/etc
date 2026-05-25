import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `When to Visit ${city.name}: Best Months, Weather & Seasons 2025 | Explore The City`
  const metaDescription = `Find the best time to visit ${city.name}, ${city.state}. Comprehensive guide on weather conditions, peak seasons, festivals, and ideal months for visiting ${city.name} to make the most of your trip.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/best-time`
  const ogImage = `${siteUrl}/images/photos/unsplash-1519692933481-e162a57d6721.jpg`

  return {
    title: metaTitle,
    description: metaDescription,
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
          url: ogImage,
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
      images: [ogImage],
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
