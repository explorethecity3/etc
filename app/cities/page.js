import Link from 'next/link'
import Image from 'next/image'
import CityCard from '@/components/CityCard'
import AdSense from '@/components/AdSense'
import { getCityCards } from '@/lib/cityData'
import { FaMapMarkedAlt, FaUtensils, FaMoneyBillWave, FaClock, FaCompass, FaRoute, FaQuestionCircle } from 'react-icons/fa'

export const metadata = {
  title: 'Explore Bangalore - The Complete City Guide | Explore The City',
  description: 'Your complete travel guide to Bangalore. Discover top attractions, local food, hidden gems, travel tips, and budget estimates for the Garden City of India.',
  keywords: 'bangalore travel guide, bengaluru tourism, explore bangalore, things to do in bangalore, bangalore city guide',
}

export default function CitiesPage() {
  const cities = getCityCards()

  return (
    <div>
      {/* Hero Section with Background */}
      <section className="relative bg-cover bg-center py-24" style={{
        backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.85), rgba(124, 58, 237, 0.85)), url('https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1600')"
      }}>
        <div className="container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-wide">
            Explore Bangalore - The Garden City of India
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Your complete guide to the best attractions, food, hidden gems and experiences in India's Silicon Valley
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">38+</div>
              <div className="text-blue-100">Attractions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">20+</div>
              <div className="text-blue-100">Hidden Gems</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">6</div>
              <div className="text-blue-100">Detailed Guides</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">∞</div>
              <div className="text-blue-100">Memories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured City */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Featured Destination
            </h2>
            <p className="text-gray-600 text-lg">
              Dive deep into everything Bangalore has to offer
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* AdSense */}
      <div className="container-custom">
        {/* <AdSense slot="7777777777" format="horizontal" /> */}
      </div>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              What's In Each City Guide
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every destination guide is packed with comprehensive information to make your trip unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMapMarkedAlt className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Top Attractions</h3>
              </div>
              <p className="text-gray-600">Curated list of must-visit landmarks, monuments, museums, and cultural sites with detailed descriptions</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaUtensils className="text-3xl text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Local Cuisine</h3>
              </div>
              <p className="text-gray-600">Discover authentic local dishes, best restaurants, street food spots, and food experiences unique to each city</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaMoneyBillWave className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Budget Estimates</h3>
              </div>
              <p className="text-gray-600">Detailed cost breakdown for accommodation, food, transport, and activities for different budget ranges</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FaClock className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Best Time to Visit</h3>
              </div>
              <p className="text-gray-600">Seasonal guide with weather patterns, festivals, and optimal travel periods for each destination</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-pink-100 p-4 rounded-full">
                  <FaRoute className="text-3xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Travel Tips</h3>
              </div>
              <p className="text-gray-600">Practical advice on transportation, safety, local customs, and insider tips from experienced travelers</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-teal-100 p-4 rounded-full">
                  <FaCompass className="text-3xl text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hidden Gems</h3>
              </div>
              <p className="text-gray-600">Off-the-beaten-path locations, local favorites, and secret spots that most tourists miss</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about exploring Indian cities
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <FaQuestionCircle className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What is the best time to visit Bangalore?</h3>
                  <p className="text-gray-700">Bangalore enjoys pleasant weather year-round thanks to its elevation, but October to February is ideal with cool, dry days perfect for sightseeing. Avoid heavy monsoon months (June-September) if you plan on outdoor exploration.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FaQuestionCircle className="text-3xl text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How many days do I need to explore Bangalore?</h3>
                  <p className="text-gray-700">3-4 days are ideal to cover Bangalore's top attractions like Lalbagh, Cubbon Park, Bangalore Palace, ISKCON Temple, and the city's famous food and cafe scene. Add an extra day or two if you want to explore nearby day-trip destinations.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <FaQuestionCircle className="text-3xl text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is Bangalore safe for solo travelers?</h3>
                  <p className="text-gray-700">Yes, Bangalore is one of the safest major cities in India for solo travelers, including women. Stick to well-reviewed accommodations, use app-based cabs like Uber or Ola, stay aware in crowded markets, and you'll have a comfortable experience.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <FaQuestionCircle className="text-3xl text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What food is Bangalore famous for?</h3>
                  <p className="text-gray-700">Bangalore is a foodie paradise with iconic dishes like masala dosa, bisi bele bath, ragi mudde, and filter coffee. Don't miss legendary spots like MTR, Vidyarthi Bhavan, and the vibrant cafe and craft beer scene in Indiranagar and Koramangala.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">
              Ready to Start Exploring?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Pick a destination above and dive into our comprehensive city guides. Your next adventure awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                Read Travel Stories
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
