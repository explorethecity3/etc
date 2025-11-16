'use client'

import Image from 'next/image'
import Link from 'next/link'
import CitySubmenu from '@/components/CitySubmenu'
import cities from '@/data/cities.json'
import { FaLightbulb } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function TravelTipsPage({ params }) {
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(true)
  const cityBasic = cities.find((c) => c.slug === params.slug)

  useEffect(() => {
    async function loadCityData() {
      try {
        // Try to load detailed city data
        const detailedCity = await import(`@/data/${params.slug}.json`)
        setCity(detailedCity.default)
      } catch (error) {
        // Fall back to basic city data if detailed file doesn't exist
        setCity(cityBasic)
      } finally {
        setLoading(false)
      }
    }
    loadCityData()
  }, [params.slug, cityBasic])

  if (loading) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

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
            <Link href={`/cities/${city.slug}`} className="hover:text-primary">{city.name}</Link>
            {' / '}
            <span className="text-gray-800">Travel Tips</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Travel Tips */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaLightbulb className="text-yellow-500 text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Travel Tips for {city.name}</h2>
              </div>
              <div className="space-y-6">
                {city.travelTips.map((item, index) => {
                  // Check if it's a structured object with category and tips
                  if (typeof item === 'object' && item.category && item.tips) {
                    return (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4">
                          <h3 className="text-xl font-bold text-white">{item.category}</h3>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {item.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start">
                                <span className="text-yellow-600 mr-3 mt-1 text-lg font-bold">✓</span>
                                <span className="text-gray-700 flex-1 leading-relaxed">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  } else {
                    // Simple string format
                    return (
                      <div key={index} className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                        <span className="text-yellow-600 mr-4 mt-1 text-xl font-bold">✓</span>
                        <span className="text-gray-700 text-lg flex-1">{item}</span>
                      </div>
                    )
                  }
                })}
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
          </div>
        </div>
      </div>
    </div>
  )
}
