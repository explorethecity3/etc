import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `${city.name} Food Guide 2025 - Must-Try Local Cuisine & Restaurants | Explore The City`
  const metaDescription = `Discover the best food in ${city.name}, ${city.state}. Explore authentic local cuisine, must-try dishes, famous restaurants, street food, and culinary specialties that make ${city.name} a food lover's paradise.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/food`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${city.name} food, ${city.name} cuisine, ${city.name} restaurants, local food ${city.name}, ${city.name} street food, ${city.name} dishes, ${city.name} food guide, best food ${city.name}, ${city.name} famous food, ${city.name} traditional food, ${city.name} local cuisine, ${city.name} food culture, ${city.name} must try food, ${city.name} specialty dishes, ${city.state} cuisine, ${city.name} eating places, ${city.name} food tour, ${city.name} culinary, ${city.name} dining, what to eat in ${city.name}`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: pageUrl,
      siteName: 'Explore The City',
      title: `${city.name} Food Guide - Must-Try Local Cuisine`,
      description: metaDescription,
      images: [
        {
          url: city.image,
          width: 1200,
          height: 630,
          alt: `${city.name} Food Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Food Guide`,
      description: metaDescription,
      images: [city.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function FoodLayout({ children }) {
  return children
}
