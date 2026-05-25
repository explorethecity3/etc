import { getCityData } from '@/lib/cityData'

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The city you are looking for could not be found.',
    }
  }

  const metaTitle = `${city.name} Trip Budget: Complete Cost Breakdown & Money-Saving Tips | Explore The City`
  const metaDescription = `Plan your budget for ${city.name}, ${city.state}. Detailed breakdown of accommodation costs, food expenses, transport fares, and entry fees. ${city.budgetEstimate} for a comfortable trip to ${city.name}.`

  const siteUrl = 'https://www.explorethecity.in'
  const pageUrl = `${siteUrl}/cities/${params.slug}/budget`
  const ogImage = `${siteUrl}/images/photos/unsplash-1524492412937-b28074a5d7da.jpg`

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
      title: `${city.name} Budget Guide - Trip Cost & Expenses`,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${city.name} Budget Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Budget Guide`,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function BudgetLayout({ children }) {
  return children
}
