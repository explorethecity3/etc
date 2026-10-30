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

  const metaTitle = `Hidden Gems in ${city.name}: Quiet & Unusual Places`
  const metaDescription = `Seen the famous sights in ${city.name}? Try these lesser-known places and local experiences, with honest notes on access, timing and crowds.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/hidden-gems`
  const ogImage = `${siteUrl}/images/photos/unsplash-1506905925346-21bda4d32df4.jpg`

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
      title: `Hidden Gems in ${city.name} - Off-the-Beaten-Path Locations`,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Hidden Gems in ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Hidden Gems in ${city.name}`,
      description: metaDescription,
      images: [ogImage],
    },
    robots: getCityRobots(params.slug),
  }
}

export default function HiddenGemsLayout({ children }) {
  return children
}
