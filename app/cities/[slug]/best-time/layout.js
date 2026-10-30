import { getCityData } from '@/lib/cityData'
import { getCityRobots } from '@/lib/indexingPolicy'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `Best Time to Visit ${city.name}: Weather & Crowds`
  const metaDescription = `Wondering when to visit ${city.name}? Compare the weather, crowds and festival seasons, then choose the months that suit the trip you want.`

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
    robots: getCityRobots(params.slug),
  }
}

export default function BestTimeLayout({ children }) {
  return children
}
