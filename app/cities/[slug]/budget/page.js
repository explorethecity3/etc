import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CitySubmenu from '@/components/CitySubmenu'
import EditorialNote from '@/components/EditorialNote'
import { getCityData } from '@/lib/cityData'
import { getCityEditorial } from '@/lib/cityEditorial'
import { FaMoneyBillWave } from 'react-icons/fa'

function BudgetStructuredData({ city }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Budget Estimate for ${city.name}`,
    description: `Detailed budget guide and cost estimates for travelling to ${city.name}, ${city.state}`,
    image: city.image,
    dateModified: city.lastUpdated,
    author: { '@type': 'Organization', name: 'Explore The City' },
    publisher: {
      '@type': 'Organization',
      name: 'Explore The City',
      logo: { '@type': 'ImageObject', url: 'https://www.explorethecity.in/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.explorethecity.in/cities/${city.slug}/budget`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

const cardColours = ['border-red-500', 'border-orange-500', 'border-yellow-500', 'border-green-500']
const budgetColours = ['from-green-50 to-emerald-50', 'from-blue-50 to-sky-50', 'from-purple-50 to-pink-50']

export default function BudgetPage({ params }) {
  const city = getCityData(params.slug)
  if (!city) notFound()

  const editorial = getCityEditorial(city.slug)
  const budget = editorial.budget

  return (
    <div>
      <BudgetStructuredData city={city} />

      <div className="relative h-[400px] w-full">
        <Image src={city.image} alt={`${city.name} budget guide - Travel costs and expenses for ${city.state}`} fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{city.name} Trip Budget</h1>
            <p className="text-xl md:text-2xl">{city.state}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-3">
        <div className="container-custom text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Home</Link>{' / '}
          <Link href="/cities" className="hover:text-primary">Cities</Link>{' / '}
          <Link href={`/cities/${city.slug}`} className="hover:text-primary">{city.name}</Link>{' / '}
          <span className="text-gray-800">Budget</span>
        </div>
      </div>

      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EditorialNote city={city} scope="budget guide" />

            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaMoneyBillWave className="text-green-600 text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Budget estimate for {city.name}</h2>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <p className="text-gray-700 text-3xl font-bold mb-3">{city.budgetEstimate}</p>
                <p className="text-gray-600">Use this as a planning range, not a quoted price. Accommodation dates, exact neighbourhood, transport choices and seasonal demand can change the total substantially.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How {city.name} compares</h2>
              {budget.comparison.map((paragraph) => <p key={paragraph} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>)}
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Cost by neighbourhood</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{budget.neighbourhoodIntro}</p>
              <div className="space-y-4">
                {budget.neighbourhoods.map((area, index) => (
                  <div key={area.name} className={`bg-white p-5 rounded-lg shadow-sm border-l-4 ${cardColours[index]}`}>
                    <h3 className="font-bold text-gray-900 mb-1">{area.name} — {area.level}</h3>
                    <p className="text-gray-700">{area.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">A realistic day at three price points</h2>
              <p className="text-gray-700 leading-relaxed mb-6">These ranges assume ordinary travel days rather than holiday peaks. Solo travellers generally spend more per person when accommodation and private transport cannot be shared.</p>
              <div className="grid md:grid-cols-3 gap-4">
                {budget.dailyBudgets.map((level, index) => (
                  <div key={level.name} className={`bg-gradient-to-br ${budgetColours[index]} p-6 rounded-lg`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{level.name}</h3>
                    <p className="text-2xl font-extrabold text-primary mb-3">{level.total}</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {level.items.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Costs first-time visitors underestimate</h2>
              <ul className="space-y-3 text-gray-700">
                {budget.traps.map((item) => <li key={item} className="rounded-lg bg-yellow-50 p-4">{item}</li>)}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Practical ways to save</h2>
              <ul className="space-y-3 text-gray-700">
                {budget.savings.map((item) => <li key={item} className="rounded-lg bg-green-50 p-4">{item}</li>)}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How prices change by season</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {budget.seasons.map((season) => (
                  <div key={season.name} className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-1">{season.name}</h3>
                    <p className="text-gray-700 text-sm">{season.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-32">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Budget quick facts</h2>
              <dl className="space-y-3">
                <div><dt className="text-sm text-gray-600">State</dt><dd className="font-semibold text-gray-800">{city.state}</dd></div>
                <div><dt className="text-sm text-gray-600">Planning range</dt><dd className="font-semibold text-gray-800">{city.budgetEstimate.split('(')[0]}</dd></div>
                <div><dt className="text-sm text-gray-600">Best time</dt><dd className="font-semibold text-gray-800">{city.bestTimeToVisitShort || city.bestTimeToVisit}</dd></div>
                <div><dt className="text-sm text-gray-600">Last reviewed</dt><dd className="font-semibold text-gray-800">{city.lastUpdated}</dd></div>
              </dl>
              <div className="mt-6 pt-6 border-t">
                <Link href={`/cities/${city.slug}`} className="btn-primary w-full text-center block">Back to {city.name} guide</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
