import Link from 'next/link'
import CityCard from '@/components/CityCard'
import FAQSchema from '@/components/FAQSchema'
import { getCityCards } from '@/lib/cityData'
import { FaMapMarkedAlt, FaUtensils, FaMoneyBillWave, FaClock, FaCompass, FaRoute, FaQuestionCircle } from 'react-icons/fa'

const citiesFaqs = [
  {
    question: 'What is the best time to visit Bangalore?',
    answer: "Bangalore enjoys pleasant weather year-round thanks to its elevation, but October to February is ideal with cool, dry days perfect for sightseeing. Avoid heavy monsoon months (June-September) if you plan on outdoor exploration.",
  },
  {
    question: 'How many days do I need to explore Bangalore?',
    answer: "3-4 days are ideal to cover Bangalore's top attractions like Lalbagh, Cubbon Park, Bangalore Palace, ISKCON Temple, and the city's famous food and cafe scene. Add an extra day or two if you want to explore nearby day-trip destinations.",
  },
  {
    question: 'Is Bangalore safe for solo travelers?',
    answer: "Yes, Bangalore is one of the safest major cities in India for solo travelers, including women. Stick to well-reviewed accommodations, use app-based cabs like Uber or Ola, stay aware in crowded markets, and you'll have a comfortable experience.",
  },
  {
    question: 'What food is Bangalore famous for?',
    answer: "Bangalore is a foodie paradise with iconic dishes like masala dosa, bisi bele bath, ragi mudde, and filter coffee. Don't miss legendary spots like MTR, Vidyarthi Bhavan, and the vibrant cafe and craft beer scene in Indiranagar and Koramangala.",
  },
]

export const metadata = {
  title: 'Bangalore Travel Guide | Explore The City',
  description: 'A complete, locally-written travel guide to Bangalore: top attractions, food, hidden gems, neighbourhoods, day trips, and budget tips for the Garden City of India.',
  alternates: {
    canonical: 'https://www.explorethecity.in/cities',
  },
}

export default function CitiesPage() {
  const cities = getCityCards()

  return (
    <div>
      <FAQSchema faqs={citiesFaqs} />

      {/* Hero Section with Background */}
      <section className="relative bg-cover bg-center py-24" style={{
        backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.85), rgba(124, 58, 237, 0.85)), url('/images/photos/unsplash-1596176530529-78163a4f7af2.jpg')"
      }}>
        <div className="container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-wide">
            Bangalore Travel Guide
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            A locally-researched guide to Bengaluru — the Garden City and India's startup capital. Attractions, food, neighbourhoods, day trips and the practical things visitors actually need.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">{cities[0]?.attractions || 38}+</div>
              <div className="text-blue-100">Attractions covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">12</div>
              <div className="text-blue-100">Local dishes profiled</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl font-extrabold mb-2">6</div>
              <div className="text-blue-100">Detailed sub-guides</div>
            </div>
          </div>
          <p className="text-sm text-blue-100/80 mt-8 max-w-2xl mx-auto">
            More cities will be added only when we can write them with the same first-hand research. Until then, this site is dedicated to one city, done well.
          </p>
        </div>
      </section>

      {/* Featured City */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              The City We Cover
            </h2>
            <p className="text-gray-600 text-lg">
              Tap the card to open the full guide.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
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
              What's Inside the Guide
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six dedicated chapters, written from first-hand visits and updated as the city changes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/cities/bangalore/places-to-explore" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMapMarkedAlt className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Places to Explore</h3>
              </div>
              <p className="text-gray-600">Lalbagh, Cubbon Park, Bangalore Palace, ISKCON, Vidhana Soudha, Tipu Sultan's Summer Palace and more — with timings, fees and what to expect.</p>
            </Link>
            <Link href="/cities/bangalore/food" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaUtensils className="text-3xl text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Food & Cafes</h3>
              </div>
              <p className="text-gray-600">12 must-try Bangalore dishes — from masala dosa at Vidyarthi Bhavan to ragi mudde, bisi bele bath and filter coffee — with where to find each.</p>
            </Link>
            <Link href="/cities/bangalore/budget" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaMoneyBillWave className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Budget Estimates</h3>
              </div>
              <p className="text-gray-600">Daily spend breakdowns across backpacker, mid-range and premium trips — accommodation, food, transport and entry fees.</p>
            </Link>
            <Link href="/cities/bangalore/best-time" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FaClock className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Best Time to Visit</h3>
              </div>
              <p className="text-gray-600">Season-by-season notes — what each month actually feels like in Bangalore, plus festival timings (Karaga, Kadalekai Parishe, Lit Fest, Dasara).</p>
            </Link>
            <Link href="/cities/bangalore/travel-tips" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-pink-100 p-4 rounded-full">
                  <FaRoute className="text-3xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Travel Tips</h3>
              </div>
              <p className="text-gray-600">Metro vs auto vs cab, safe areas to stay, monsoon pitfalls, etiquette at temples, and what locals wish first-time visitors knew.</p>
            </Link>
            <Link href="/cities/bangalore/hidden-gems" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-teal-100 p-4 rounded-full">
                  <FaCompass className="text-3xl text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hidden Gems</h3>
              </div>
              <p className="text-gray-600">Chunchi Falls, Nrityagram dance village, Dodda Alada Mara, Hesaraghatta grasslands, the HAL Aerospace Museum and other lesser-known spots.</p>
            </Link>
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
              The questions first-time visitors to Bangalore ask most often.
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

    </div>
  )
}
