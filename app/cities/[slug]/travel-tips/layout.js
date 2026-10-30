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

  const metaTitle = `${city.name} Travel Tips: Transport, Safety & Costs`
  const metaDescription = `Visiting ${city.name} for the first time? Get practical advice on local transport, common costs, safety, customs and mistakes worth avoiding.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/travel-tips`
  const ogImage = `${siteUrl}/images/photos/unsplash-1474487548417-781cb71495f3.jpg`

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
      title: `Travel Tips for ${city.name} - Essential Guide`,
      description: metaDescription,
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
    robots: getCityRobots(params.slug),
  }
}

export default function TravelTipsLayout({ children }) {
  return children
}
