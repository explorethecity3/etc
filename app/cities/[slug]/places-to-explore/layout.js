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

  const metaTitle = `Best Places to Visit in ${city.name}: Top Attractions`
  const metaDescription = `Choose the best places to visit in ${city.name} with useful notes on timings, entry fees and what each stop adds to your day.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/places-to-explore`
  const ogImage = `${siteUrl}/images/photos/unsplash-1585320806297-9794b3e4eeae.jpg`

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
      title: `Top Attractions in ${city.name} - Best Places to Visit`,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Top Attractions in ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Top Attractions in ${city.name}`,
      description: metaDescription,
      images: [ogImage],
    },
    robots: getCityRobots(params.slug),
  }
}

export default function PlacesToExploreLayout({ children }) {
  return children
}
