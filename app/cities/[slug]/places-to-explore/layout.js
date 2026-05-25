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
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function PlacesToExploreLayout({ children }) {
  return children
}
