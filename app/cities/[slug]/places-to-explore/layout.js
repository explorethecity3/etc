import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `${city.name} Tourist Attractions: ${city.attractions}+ Must-Visit Places & Landmarks | Explore The City`
  const metaDescription = `Explore the best attractions and places to visit in ${city.name}, ${city.state}. Discover top tourist spots, historical landmarks, cultural sites, and hidden gems with timings, entry fees, and detailed descriptions.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/places-to-explore`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${city.name} attractions, places to visit in ${city.name}, ${city.name} tourist spots, ${city.name} landmarks, things to do ${city.name}, ${city.name} sightseeing, ${city.name} monuments, ${city.name} tourist places, ${city.name} points of interest, ${city.name} must see places, top places ${city.name}, ${city.name} tourist attractions, ${city.name} heritage sites, ${city.name} famous places, ${city.name} places to see, ${city.name} tourism spots, best places ${city.name}, ${city.state} tourist places, ${city.name} top 10 attractions, visit ${city.name} places`,
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
          url: city.image,
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
      images: [city.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function PlacesToExploreLayout({ children }) {
  return children
}
