import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `${city.name} Travel Essentials: Insider Tips & Practical Advice for Visitors | Explore The City`
  const metaDescription = `Essential travel tips for visiting ${city.name}, ${city.state}. Get insider advice on local customs, transportation, safety, best practices, and everything you need to know for a smooth trip to ${city.name}.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/travel-tips`

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
          url: city.image,
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
      images: [city.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function TravelTipsLayout({ children }) {
  return children
}
