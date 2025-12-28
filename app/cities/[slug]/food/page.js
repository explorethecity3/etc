'use client'

import Image from 'next/image'
import Link from 'next/link'
import CitySubmenu from '@/components/CitySubmenu'
import { getCityData } from '@/lib/cityData'
import { FaUtensils } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function FoodStructuredData({ city }) {
  useEffect(() => {
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

    let script = document.getElementById('food-structured-data')
    if (!script) {
      script = document.createElement('script')
      script.id = 'food-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    return () => {
      const scriptToRemove = document.getElementById('food-structured-data')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [city])

  return null
}

export default function FoodPage({ params }) {
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCityData() {
      try {
        const cityData = getCityData(params.slug)
        setCity(cityData)
      } catch (error) {
        console.error('Error loading city data:', error)
        setCity(null)
      } finally {
        setLoading(false)
      }
    }
    loadCityData()
  }, [params.slug])

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

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-orange-500">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Looking for the best food in {city.name}? You're in for a treat. {city.name}'s food scene is legendary,
                  and whether you're into street food or fine dining, this guide will help you eat like a local.
                  We've curated the must-try dishes that define {city.name}'s culinary identity—from iconic street snacks
                  to regional specialties you won't find anywhere else.
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why {city.name} Food is Special</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city.name}'s food culture is shaped by centuries of diverse influences, regional traditions, and local ingredients.
                  The city's street food scene is particularly famous—buzzing with vendors who've perfected their recipes over generations.
                  But it's not just about street food. {city.name} offers everything from heritage restaurants serving authentic
                  {city.state} cuisine to modern eateries experimenting with fusion flavors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What makes eating in {city.name} unique is the authenticity. Food here isn't made for tourists—it's made for locals
                  who know good food when they taste it. That means bold flavors, generous portions, and recipes that have stood the
                  test of time. And the best part? Most of the incredible food is surprisingly affordable.
                </p>
              </div>
            </section>

            {/* Food Safety & Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Before You Eat: Practical Tips for Food Lovers</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-800 mb-2">🛡️ Food Safety First</h3>
                  <p className="text-gray-700 text-sm">
                    Stick to busy stalls with high turnover—they're preparing food fresh constantly.
                    Avoid pre-cut fruits from street vendors. Carry hand sanitizer and use it before eating.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-800 mb-2">🌶️ Spice Level Warning</h3>
                  <p className="text-gray-700 text-sm">
                    {city.name} food can be quite spicy! If you're not used to heat, start mild and work your way up.
                    Don't be shy to ask vendors to "make it less spicy" (kam tikha/mirchi).
                  </p>
                </div>
                <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold text-gray-800 mb-2">💰 Budget Expectations</h3>
                  <p className="text-gray-700 text-sm">
                    Street food: ₹20-100 per dish. Local restaurants: ₹200-500 per person.
                    Fine dining: ₹1000+ per person. Cash is preferred at street stalls.
                  </p>
                </div>
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-bold text-gray-800 mb-2">⏰ Best Times to Eat</h3>
                  <p className="text-gray-700 text-sm">
                    Street food comes alive in the evening (5-10 PM). Morning breakfast stalls (7-10 AM) offer fresh options.
                    Avoid rush hour crowds if you want to actually enjoy your meal.
                  </p>
                </div>
              </div>
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

            {/* Food Tours & Experiences */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Experience {city.name} Food Like a Local</h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🚶 Follow the Crowds</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The best food stalls in {city.name} always have queues. Don't be put off by waiting—it means the food is fresh,
                  popular with locals, and worth your time. If a stall is empty while others are packed, there's usually a reason.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🗣️ Ask Locals for Recommendations</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Hotel staff, taxi drivers, and shop owners are goldmines of information. Ask them where THEY eat, not where
                  tourists should eat. You'll discover hidden gems that aren't in any guidebook. A simple "Aap kahan khate ho?"
                  (Where do you eat?) can lead to amazing discoveries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📱 Use Food Apps Wisely</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Zomato and Swiggy are useful for finding restaurants, checking reviews, and reading menus. But for street food,
                  trust your eyes and nose more than ratings. The best vendors might not even be on apps.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Pro Tips from Food Lovers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Try one dish at multiple places to find your favorite version</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Eat street food in the evening when it's freshly made</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Carry small denominations—street vendors rarely have change for ₹500 notes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Don't skip breakfast—morning food is different and equally amazing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Learn basic food vocabulary in the local language—vendors appreciate the effort</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Food Areas Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Food Areas in {city.name}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While great food is scattered throughout {city.name}, certain neighborhoods are particularly famous for their
                food scenes. Here's where to focus your culinary adventures:
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Street Food Hubs</h3>
                  <p className="text-gray-700 text-sm">
                    Look for busy street food areas in the old city quarters and near major transport hubs.
                    Evening food streets come alive after 6 PM with dozens of vendors selling everything imaginable.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Traditional Restaurant Areas</h3>
                  <p className="text-gray-700 text-sm">
                    Historic neighborhoods often have multi-generation restaurants serving authentic regional cuisine.
                    These places might not look fancy, but the food is often spectacular and prices are reasonable.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Modern Dining Districts</h3>
                  <p className="text-gray-700 text-sm">
                    Newer commercial areas have trendy restaurants, cafes, and fusion cuisine. Perfect for comfortable
                    dining with air conditioning, clean washrooms, and alcohol options.
                  </p>
                </div>
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
