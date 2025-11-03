import Image from 'next/image'
import Link from 'next/link'
import AdSense from '@/components/AdSense'
import cities from '@/data/cities.json'
import { FaClock, FaMapMarkerAlt, FaUtensils, FaLightbulb, FaMoneyBillWave } from 'react-icons/fa'

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

export async function generateMetadata({ params }) {
  const city = cities.find((c) => c.slug === params.slug)

  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  return {
    title: `${city.name} Travel Guide - Explore ${city.name} | Explore The City`,
    description: city.description,
    keywords: `${city.name}, ${city.state}, travel guide, tourism, things to do in ${city.name}`,
    openGraph: {
      title: `${city.name} Travel Guide`,
      description: city.shortDescription,
      images: [city.image],
    },
  }
}

export default function CityPage({ params }) {
  const city = cities.find((c) => c.slug === params.slug)

  if (!city) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
        <Link href="/cities" className="text-primary hover:underline">
          View All Cities
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={city.name}
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
            <span className="text-gray-800">{city.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">About {city.name}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{city.description}</p>
            </section>

            {/* Best Time to Visit */}
            <section className="mb-12 bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <FaClock className="text-primary text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Best Time to Visit</h3>
              </div>
              <p className="text-gray-700 text-lg">{city.bestTimeToVisit}</p>
            </section>

            {/* AdSense */}
            {/* <AdSense slot="1111111111" /> */}

            {/* Top Attractions */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaMapMarkerAlt className="text-primary text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Top Attractions</h3>
              </div>
              <div className="space-y-6">
                {city.topAttractions.map((attraction, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {index + 1}. {attraction.name}
                    </h4>
                    <p className="text-gray-600">{attraction.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* AdSense */}
            {/* <AdSense slot="2222222222" /> */}

            {/* Local Food */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaUtensils className="text-secondary text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Must-Try Local Food</h3>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {city.localFood.map((food, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3 text-xl">•</span>
                      <span className="text-gray-700 text-lg">{food}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Travel Tips */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-yellow-500 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Travel Tips</h3>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {city.travelTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Budget Estimate */}
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <FaMoneyBillWave className="text-green-600 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Budget Estimate</h3>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 text-lg font-semibold">{city.budgetEstimate}</p>
                <p className="text-gray-600 text-sm mt-2">
                  *Includes accommodation, food, local transport, and entry fees
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-20">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Facts</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">State</p>
                  <p className="font-semibold text-gray-800">{city.state}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Top Attractions</p>
                  <p className="font-semibold text-gray-800">{city.attractions}+</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Best Time</p>
                  <p className="font-semibold text-gray-800">{city.bestTimeToVisit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Budget Range</p>
                  <p className="font-semibold text-gray-800">{city.budgetEstimate.split('(')[0]}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link href="/cities" className="btn-primary w-full text-center block">
                  Explore More Cities
                </Link>
              </div>
            </div>

            {/* AdSense Sidebar */}
            {/* <AdSense slot="3333333333" format="vertical" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
