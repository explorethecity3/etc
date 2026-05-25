import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `${city.name} Hidden Gems: Secret Spots & Offbeat Experiences 2025 | Explore The City`
  const metaDescription = `Discover hidden gems and lesser-known attractions in ${city.name}, ${city.state}. Explore off-the-beaten-path locations, secret spots, and authentic local experiences away from tourist crowds in ${city.name}.`

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
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function HiddenGemsLayout({ children }) {
  return children
}
