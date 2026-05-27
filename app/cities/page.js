import Link from 'next/link'
import CityCard from '@/components/CityCard'
import FAQSchema from '@/components/FAQSchema'
import { getCityCards } from '@/lib/cityData'
import { FaMapMarkedAlt, FaUtensils, FaMoneyBillWave, FaClock, FaCompass, FaRoute, FaQuestionCircle } from 'react-icons/fa'

const citiesFaqs = [
  {
    question: 'Which cities does Explore The City cover?',
    answer: "We currently have full, locally-researched guides to Bangalore, Mumbai and Goa, with more Indian cities being added one at a time. Each guide covers attractions, food, hidden gems, neighbourhoods, day trips, best time to visit and a realistic budget breakdown.",
  },
  {
    question: 'How detailed is each city guide?',
    answer: "Every city guide is built from six dedicated chapters: places to explore, food and cafes, hidden gems, best time to visit, budget estimates, and travel tips. Each one profiles around 10 attractions and 12 local dishes, with timings, fees and where to find each.",
  },
  {
    question: 'Are the guides written from first-hand visits?',
    answer: "That's the standard we work to. We add a new city only when we have someone who can apply the same first-hand research to it, rather than scaling fast with recycled content. That means slower growth but guides you can actually trust.",
  },
  {
    question: 'How many days do I need for each city?',
    answer: "Three to four days covers the highlights of most cities comfortably, including the main attractions, food, and one or two day trips. Two days is enough for just the essentials. Each city guide includes its own suggested itineraries and pacing.",
  },
]

export const metadata = {
  title: 'Indian City Travel Guides | Explore The City',
  description: 'Locally-written travel guides to Indian cities — Bangalore, Mumbai and Goa so far, with more to come. Attractions, food, hidden gems, neighbourhoods, day trips and budget tips for each.',
  alternates: {
    canonical: 'https://www.explorethecity.in/cities',
  },
}

export default function CitiesPage() {
  const cities = getCityCards()
  const totalAttractions = cities.reduce((sum, c) => sum + (c.attractions || 0), 0)

  return (
    <div>
      <FAQSchema faqs={citiesFaqs} />

      {/* Hero Section with Background */}
      <section className="relative bg-cover bg-center py-24" style={{
        backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.85), rgba(124, 58, 237, 0.85)), url('/images/photos/unsplash-1596176530529-78163a4f7af2.jpg')"
      }}>
        <div className="container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-wide">
            City Travel Guides
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            In-depth, locally-researched guides to India's cities — attractions, food, neighbourhoods, day trips and the practical things visitors actually need.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">{cities.length}</div>
              <div className="text-blue-100">Cities covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">{totalAttractions}+</div>
              <div className="text-blue-100">Attractions profiled</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">6</div>
              <div className="text-blue-100">Chapters per city</div>
            </div>
          </div>
          <p className="text-sm text-blue-100/80 mt-8 max-w-2xl mx-auto">
            We add a new city only when we can write it with the same first-hand research. Slow growth, but guides you can trust.
          </p>
        </div>
      </section>

      {/* City Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Cities We Cover
            </h2>
            <p className="text-gray-600 text-lg">
              Tap a card to open the full guide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              What's Inside Every Guide
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six dedicated chapters per city, written from first-hand visits and updated as each place changes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMapMarkedAlt className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Places to Explore</h3>
              </div>
              <p className="text-gray-600">Around 10 top attractions per city, with timings, entry fees and an honest sense of what to expect at each.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaUtensils className="text-3xl text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Food &amp; Cafes</h3>
              </div>
              <p className="text-gray-600">12 must-try local dishes per city, from street food to coastal specialities, with exactly where to find each.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaMoneyBillWave className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Budget Estimates</h3>
              </div>
              <p className="text-gray-600">Daily spend breakdowns across backpacker, mid-range and premium trips — accommodation, food, transport and entry fees.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FaClock className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Best Time to Visit</h3>
              </div>
              <p className="text-gray-600">Season-by-season notes on what each month actually feels like, plus the festivals worth timing your visit around.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-pink-100 p-4 rounded-full">
                  <FaRoute className="text-3xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Travel Tips</h3>
              </div>
              <p className="text-gray-600">Getting around, safe areas to stay, monsoon pitfalls, etiquette, and what locals wish first-time visitors knew.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-teal-100 p-4 rounded-full">
                  <FaCompass className="text-3xl text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hidden Gems</h3>
              </div>
              <p className="text-gray-600">The lesser-known corners, day-trip spots and offbeat places locals quietly love, beyond the obvious tourist trail.</p>
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
              About the guides and how we write them.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {citiesFaqs.map((faq, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <FaQuestionCircle className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
