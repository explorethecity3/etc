import CityCostComparison from '@/components/CityCostComparison'

export const metadata = {
  title: 'Compare India City Trip Costs Side by Side',
  description: 'Compare trip budgets for Bangalore, Mumbai, Goa, Delhi and Jaipur using the same days, travellers and travel style. See the cost difference by category.',
  alternates: { canonical: 'https://www.explorethecity.in/compare-city-trip-costs' },
  openGraph: {
    title: 'Compare India City Trip Costs',
    description: 'Compare two Indian city-trip budgets with the same trip assumptions and see which cost categories create the difference.',
    url: 'https://www.explorethecity.in/compare-city-trip-costs',
    type: 'website',
  },
}

export default function CompareCityTripCostsPage() {
  const application = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'India City Trip Cost Comparison',
    url: 'https://www.explorethecity.in/compare-city-trip-costs',
    applicationCategory: 'TravelApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'A free tool for comparing two Indian city-trip budgets using identical trip assumptions.',
  }

  return <main className="min-h-screen bg-orange-50 pt-32 pb-20">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(application) }} />
    <div className="container-custom max-w-6xl">
      <header className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-orange-700">Free side-by-side planning tool</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">Compare two India city-trip budgets</h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">Use the same trip length, group size and comfort level for both destinations. The comparison exposes accommodation, food, local transport and activity assumptions instead of hiding them inside one total.</p>
      </header>
      <div className="mt-12"><CityCostComparison /></div>
    </div>
  </main>
}
