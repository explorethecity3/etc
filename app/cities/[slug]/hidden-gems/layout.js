import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `Hidden Gems in ${city.name} 2025 - Off-the-Beaten-Path Locations | Explore The City`
  const metaDescription = `Discover hidden gems and lesser-known attractions in ${city.name}, ${city.state}. Explore off-the-beaten-path locations, secret spots, and authentic local experiences away from tourist crowds in ${city.name}.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/hidden-gems`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${city.name} hidden gems, secret places ${city.name}, off-the-beaten-path ${city.name}, ${city.name} local spots, unexplored ${city.name}, ${city.name} offbeat places, ${city.name} secret spots, ${city.name} lesser known places, ${city.name} undiscovered, ${city.name} hidden attractions, ${city.name} hidden places, ${city.name} secret destinations, ${city.name} untouched places, ${city.name} local secrets, ${city.name} hidden treasures, ${city.state} hidden gems, ${city.name} non-touristy places, ${city.name} authentic places, ${city.name} unexplored spots`,
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
          url: city.image,
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
      images: [city.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function HiddenGemsLayout({ children }) {
  return children
}
