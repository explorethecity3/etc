'use client'

import Image from 'next/image'
import Link from 'next/link'
import CitySubmenu from '@/components/CitySubmenu'
import { getCityData } from '@/lib/cityData'
import { FaMoneyBillWave } from 'react-icons/fa'
import { useEffect } from 'react'

function BudgetStructuredData({ city }) {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `Budget Estimate for ${city.name}`,
      description: `Detailed budget guide and cost estimates for traveling to ${city.name}, ${city.state}`,
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
        '@id': `https://www.explorethecity.in/cities/${city.slug}/budget`,
      },
    }

    let script = document.getElementById('budget-structured-data')
    if (!script) {
      script = document.createElement('script')
      script.id = 'budget-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    return () => {
      const scriptToRemove = document.getElementById('budget-structured-data')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [city])

  return null
}

export default function BudgetPage({ params }) {
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
      <BudgetStructuredData city={city} />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={`${city.name} budget guide - Travel costs and expenses for ${city.state}`}
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
            <span className="text-gray-800">Budget</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Budget Estimate */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaMoneyBillWave className="text-green-600 text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Budget Estimate for {city.name}</h2>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <p className="text-gray-700 text-3xl font-bold mb-4">{city.budgetEstimate}</p>
                <p className="text-gray-600 text-lg mb-8">
                  *Includes accommodation, food, local transport, and entry fees
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Budget Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-700 font-medium">Accommodation</span>
                      <span className="text-gray-900 font-semibold">₹800 - ₹2,500/night</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-700 font-medium">Food (3 meals)</span>
                      <span className="text-gray-900 font-semibold">₹500 - ₹1,500/day</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-700 font-medium">Local Transport</span>
                      <span className="text-gray-900 font-semibold">₹300 - ₹800/day</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-700 font-medium">Attractions & Entry Fees</span>
                      <span className="text-gray-900 font-semibold">₹400 - ₹1,200/day</span>
                    </div>
                  </div>
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
