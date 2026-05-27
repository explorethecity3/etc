import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CitySubmenu from '@/components/CitySubmenu'
import { getCityData } from '@/lib/cityData'
import { FaUtensils } from 'react-icons/fa'

function FoodStructuredData({ city }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Must-Try Local Food in ${city.name}`,
    description: `Authentic local cuisine and must-try dishes in ${city.name}, ${city.state}`,
    itemListElement: city.localFood.map((food, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Recipe',
        name: food.name,
        description: food.description,
        ...(food.image && { image: food.image }),
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

export default function FoodPage({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    notFound()
  }

  return (
    <div>
      {/* Structured Data for SEO */}
      <FoodStructuredData city={city} />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={`${city.name} food scene - Local cuisine and dishes of ${city.state}`}
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
            <span className="text-gray-800">Food</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction Section */}
            <section className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {city.name} Food Guide: What to Eat & Where to Find It
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {city.name}'s food scene is built around darshini-style breakfast joints, decades-old institutions like MTR and Vidyarthi Bhavan, and a craft-beer pub culture that has no parallel elsewhere in India. The 12 dishes below are the ones we keep coming back to — with the specific places we've eaten them.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Prices, opening hours and crowd levels reflect our most recent visits. Where a place is famously busy, we've said so; where the queue is exaggerated online, we've said that too.
              </p>
            </section>

            {/* Local Food */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaUtensils className="text-secondary text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Must-Try Local Food in {city.name}</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Here are the absolute must-try dishes that define {city.name}'s food scene.
                These aren't just popular—they're part of the city's culinary DNA.
              </p>
              <div className="space-y-6">
                {city.localFood.map((food, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="p-6 pb-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                          {index + 1}
                        </span>
                        {food.name}
                      </h3>
                    </div>
                    {food.image && (
                      <div className="relative h-64 w-full">
                        <Image
                          src={food.image}
                          alt={`${food.name} - ${city.name} local food specialty`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 pt-4">
                      <p className="text-gray-600 text-base leading-relaxed">{food.description}</p>
                      {(food.whereToTry || food.price) && (
                        <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-3">
                          {food.whereToTry && (
                            <div>
                              <p className="text-sm font-semibold text-gray-700">Where to Try</p>
                              <p className="text-sm text-gray-600">{food.whereToTry}</p>
                            </div>
                          )}
                          {food.price && (
                            <div>
                              <p className="text-sm font-semibold text-gray-700">Price Range</p>
                              <p className="text-sm text-gray-600">{food.price}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Your Complete {city.name} Food Journey</h3>
                <p className="text-gray-800 mb-4">
                  Combine your food adventure with sightseeing for the ultimate {city.name} experience:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link href={`/cities/${city.slug}/places-to-explore`} className="text-orange-700 hover:text-orange-900 font-semibold">
                    → Top Attractions Near Food Areas
                  </Link>
                  <Link href={`/cities/${city.slug}/budget`} className="text-orange-700 hover:text-orange-900 font-semibold">
                    → Daily Food Budget Guide
                  </Link>
                  <Link href={`/cities/${city.slug}/travel-tips`} className="text-orange-700 hover:text-orange-900 font-semibold">
                    → Essential Travel Tips
                  </Link>
                  <Link href={`/cities/${city.slug}`} className="text-orange-700 hover:text-orange-900 font-semibold">
                    → Complete {city.name} Guide
                  </Link>
                </div>
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
