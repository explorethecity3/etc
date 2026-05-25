import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `${city.name} Food Scene: Local Cuisine, Best Restaurants & Street Food | Explore The City`
  const metaDescription = `Discover the best food in ${city.name}, ${city.state}. Explore authentic local cuisine, must-try dishes, famous restaurants, street food, and culinary specialties that make ${city.name} a food lover's paradise.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/food`
  const ogImage = `${siteUrl}/images/photos/unsplash-1589301760014-d929f3979dbc.jpg`

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
      title: `${city.name} Food Guide - Must-Try Local Cuisine`,
      description: metaDescription,
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
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
