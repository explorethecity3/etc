import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CitySubmenu from '@/components/CitySubmenu'
import { getCityData } from '@/lib/cityData'
import { FaMapMarkerAlt } from 'react-icons/fa'

function AttractionsStructuredData({ city }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top Attractions in ${city.name}`,
    description: `Best places to visit and top tourist attractions in ${city.name}, ${city.state}`,
    itemListElement: city.topAttractions.map((attraction, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: attraction.name,
        description: attraction.description,
        ...(attraction.image && { image: attraction.image }),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function AttractionsPage({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    notFound()
  }

  return (
    <div>
      {/* Structured Data for SEO */}
      <AttractionsStructuredData city={city} />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={`${city.name} attractions - Top places to visit in ${city.state}`}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{city.name}</h1>
            <p className="text-xl md:text-2xl">{city.state}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            {' / '}
            <Link href="/cities" className="hover:text-primary">Cities</Link>
            {' / '}
            <Link href={`/cities/${city.slug}`} className="hover:text-primary">{city.name}</Link>
            {' / '}
            <span className="text-gray-800">Attractions</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Top Attractions */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-primary text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Top Attractions in {city.name}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The {city.topAttractions.length} places below are the ones we keep recommending to first-time visitors. They cover the obvious heavyweights — Lalbagh, Cubbon Park, Bangalore Palace — alongside spots like the Bull Temple and Tipu Sultan's Summer Palace that get under-rated in most listicles.
              </p>
              <p className="text-gray-600 text-sm mb-8">
                Timings and entry fees were verified on our last visit. They change occasionally — if you spot an outdated detail, please <Link href="/contact" className="text-primary hover:underline">let us know</Link>.
              </p>
              <div className="space-y-6">
                {city.topAttractions.map((attraction, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="p-6 pb-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                          {index + 1}
                        </span>
                        {attraction.name}
                      </h3>
                    </div>
                    {attraction.image && (
                      <div className="relative h-64 w-full">
                        <Image
                          src={attraction.image}
                          alt={`${attraction.name} - Popular tourist attraction in ${city.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 pt-4">
                      <p className="text-gray-600 text-base leading-relaxed">{attraction.description}</p>
                      {(attraction.timings || attraction.entryFee) && (
                        <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-3">
                          {attraction.timings && (
                            <div>
                              <p className="text-sm font-semibold text-gray-700">Timings</p>
                              <p className="text-sm text-gray-600">{attraction.timings}</p>
                            </div>
                          )}
                          {attraction.entryFee && (
                            <div>
                              <p className="text-sm font-semibold text-gray-700">Entry Fee</p>
                              <p className="text-sm text-gray-600">{attraction.entryFee}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Planning a multi-day itinerary?</h3>
                <p className="text-gray-700">
                  Most travellers cover the central attractions (Lalbagh, Cubbon Park, Vidhana Soudha, Bangalore Palace, Bull Temple) in 2–3 days, then add Nandi Hills as a sunrise half-day. Pair this with the <Link href={`/cities/${city.slug}/food`} className="text-blue-700 font-semibold hover:underline">Food</Link> chapter to sequence meals near these spots, the <Link href={`/cities/${city.slug}/budget`} className="text-blue-700 font-semibold hover:underline">Budget</Link> page for sample daily spends, or the <Link href={`/cities/${city.slug}/hidden-gems`} className="text-blue-700 font-semibold hover:underline">Hidden Gems</Link> chapter for day-trip ideas if you have more time.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-32">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Facts</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">State</p>
                  <p className="font-semibold text-gray-800">{city.state}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Top Attractions</p>
                  <p className="font-semibold text-gray-800">{city.attractions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Best Time</p>
                  <p className="font-semibold text-gray-800">{city.bestTimeToVisitShort || city.bestTimeToVisit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Budget Range</p>
                  <p className="font-semibold text-gray-800">{city.budgetEstimate.split('(')[0]}</p>
                </div>
                {city.lastUpdated && (
                  <div>
                    <p className="text-sm text-gray-600">Last Updated</p>
                    <p className="font-semibold text-gray-800">{city.lastUpdated}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link href="/cities" className="btn-primary w-full text-center block">
                  Explore More Cities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
