'use client'

import Image from 'next/image'
import Link from 'next/link'
import CitySubmenu from '@/components/CitySubmenu'
import { getCityData } from '@/lib/cityData'
import { FaClock } from 'react-icons/fa'
import { useEffect } from 'react'

function BestTimeStructuredData({ city }) {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `Best Time to Visit ${city.name}`,
      description: `Comprehensive guide on the best time to visit ${city.name}, ${city.state} with weather information and seasonal details`,
      image: city.image,
      author: {
        '@type': 'Organization',
        name: 'Explore The City',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Explore The City',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.explorethecity.in/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.explorethecity.in/cities/${city.slug}/best-time`,
      },
    }

    let script = document.getElementById('best-time-structured-data')
    if (!script) {
      script = document.createElement('script')
      script.id = 'best-time-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    return () => {
      const scriptToRemove = document.getElementById('best-time-structured-data')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [city])

  return null
}

export default function BestTimePage({ params }) {
  const city = getCityData(params.slug)

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
      {/* Structured Data for SEO */}
      <BestTimeStructuredData city={city} />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={`${city.name} best time to visit - Weather and seasonal guide for ${city.state}`}
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
            <span className="text-gray-800">Best Time</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Best Time to Visit */}
            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FaClock className="text-primary text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Best Time to Visit {city.name}</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 whitespace-pre-line">{city.bestTimeToVisit}</p>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why This Time?</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The recommended period is ideal for visiting {city.name} due to pleasant weather conditions,
                  making it perfect for sightseeing and outdoor activities. During this time, you can comfortably
                  explore all the attractions without extreme heat or heavy rainfall disrupting your plans.
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
                  <p className="font-semibold text-gray-800">{city.attractions}+</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Best Time</p>
                  <p className="font-semibold text-gray-800">{city.bestTimeToVisitShort || city.bestTimeToVisit}</p>
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
