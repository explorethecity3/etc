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

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${city.name} budget, ${city.name} trip cost, ${city.name} expenses, how much to spend in ${city.name}, ${city.name} travel budget, ${city.name} cost of living, ${city.name} travel expenses, ${city.name} budget guide, ${city.name} cheap travel, ${city.name} budget travel, ${city.name} accommodation cost, ${city.name} food prices, ${city.name} transport cost, ${city.name} daily expenses, ${city.name} travel cost breakdown, budget trip ${city.name}, ${city.state} budget, ${city.name} affordable travel, ${city.name} cost estimate`,
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
          url: city.image,
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
      images: [city.image],
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
