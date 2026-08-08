import Link from 'next/link'
import Image from 'next/image'
import CityCard from '@/components/CityCard'
import { getCityCards } from '@/lib/cityData'
import blogs from '@/data/blogs.json'
import { FaMapMarkedAlt, FaLandmark, FaUtensils, FaPalette } from 'react-icons/fa'

export const metadata = {
  alternates: {
    canonical: 'https://www.explorethecity.in/',
  },
}

export default function Home() {
  const cities = getCityCards()
  const featuredArticles = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[700px] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-banner.png')"
      }}>
        <div className="container-custom h-full flex items-center">
          <div className="max-w-3xl text-white pt-20">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight italic">
              Every City Has a Story.<br />
              <span className="font-normal not-italic">Let's Explore It Together.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-light">
              In-depth, independently researched travel guides to India's cities — attractions, food, day trips and the practical details first-time visitors need. Explore 15 destinations, from Delhi and Jaipur to Chennai, Kochi and Goa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/cities" className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-xl">
                Browse City Guides →
              </Link>
              <Link href="/about" className="inline-block bg-white/10 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">
                About this site
              </Link>
              <Link href="/trip-planner" className="inline-block bg-white text-orange-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all shadow-xl">
                Build a free itinerary
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-orange-300 uppercase tracking-widest font-bold text-sm mb-3">New planning tool</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Turn our city guides into your itinerary</h2>
            <p className="text-gray-300 text-lg">Choose your destination, budget, interests and travel pace. Get a private 1–5 day plan built from our reviewed attractions, food recommendations and practical advice.</p>
          </div>
          <Link href="/trip-planner" className="shrink-0 bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">Plan my trip →</Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Latest India Travel Articles</h2>
              <p className="text-gray-600 text-lg max-w-2xl">Practical, long-form advice that complements our city guides.</p>
            </div>
            <Link href="/blog" className="text-primary font-semibold hover:underline">Browse all travel articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <p className="text-sm font-semibold text-primary mb-3">{article.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                <span className="text-sm text-gray-500">{article.readTime} · {article.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wander Through Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-2">
              Featured City: Bangalore
            </h2>
            <p className="text-gray-600 text-lg mt-3 max-w-2xl">
              Four sides of the same city — heritage streets, food legends, living culture, and the hills that frame it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 to-orange-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaMapMarkedAlt className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Heritage Streets</h3>
                <p className="text-amber-100 mb-4">Old Bangalore, temples, bazaars, palaces.</p>
                <Link href="/cities/bangalore/places-to-explore" className="text-white hover:text-amber-200 font-semibold inline-flex items-center gap-2">
                  Explore Bangalore&apos;s heritage →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 to-red-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaUtensils className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Local Flavors</h3>
                <p className="text-orange-100 mb-4">Masala dosa, filter coffee, ragi mudde.</p>
                <Link href="/cities/bangalore/food" className="text-white hover:text-orange-200 font-semibold inline-flex items-center gap-2">
                  Explore Bangalore&apos;s food →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-pink-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaPalette className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Living Culture</h3>
                <p className="text-purple-100 mb-4">Cafes, breweries, theatres, weekend markets.</p>
                <Link href="/cities/bangalore/travel-tips" className="text-white hover:text-purple-200 font-semibold inline-flex items-center gap-2">
                  Read Bangalore travel tips →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-cyan-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaLandmark className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Hidden Gems</h3>
                <p className="text-teal-100 mb-4">Offbeat corners locals quietly love.</p>
                <Link href="/cities/bangalore/hidden-gems" className="text-white hover:text-teal-200 font-semibold inline-flex items-center gap-2">
                  Find Bangalore&apos;s hidden gems →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destination Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Our City Guides
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Long-form, locally-researched guides — built one city at a time. Tap a card to dive in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Interest Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Explore Bangalore in Depth
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six focused chapters of the guide. Jump straight into what you came for.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/cities/bangalore/places-to-explore" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800"></div>
              <div className="relative p-8 text-white">
                <FaLandmark className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Places to Explore</h3>
                <p className="text-purple-100">Lalbagh, Cubbon Park, Bangalore Palace, ISKCON and more.</p>
              </div>
            </Link>
            <Link href="/cities/bangalore/food" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600"></div>
              <div className="relative p-8 text-white">
                <FaUtensils className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Food & Cafes</h3>
                <p className="text-orange-100">Where to find the best dosa, filter coffee, and craft beer.</p>
              </div>
            </Link>
            <Link href="/cities/bangalore/hidden-gems" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-700"></div>
              <div className="relative p-8 text-white">
                <FaPalette className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Hidden Gems</h3>
                <p className="text-teal-100">Day-trip waterfalls, banyan trees, dance villages, lakes.</p>
              </div>
            </Link>
            <Link href="/cities/bangalore/best-time" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700"></div>
              <div className="relative p-8 text-white">
                <FaMapMarkedAlt className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Best Time to Visit</h3>
                <p className="text-blue-100">Season-by-season notes and what each month actually feels like.</p>
              </div>
            </Link>
            <Link href="/cities/bangalore/budget" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700"></div>
              <div className="relative p-8 text-white">
                <FaUtensils className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Budget Planner</h3>
                <p className="text-green-100">Realistic daily spend across budget, mid-range and premium trips.</p>
              </div>
            </Link>
            <Link href="/cities/bangalore/travel-tips" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-rose-700"></div>
              <div className="relative p-8 text-white">
                <FaLandmark className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Travel Tips</h3>
                <p className="text-pink-100">Transport, safety, neighbourhoods, etiquette and what to skip.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Inside the Guide */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2">{cities[0]?.attractions || 10}</div>
              <div className="text-lg md:text-xl text-blue-100">Top attractions profiled</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2">12</div>
              <div className="text-lg md:text-xl text-blue-100">Local dishes & where to find them</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2">6</div>
              <div className="text-lg md:text-xl text-blue-100">Detailed sub-guides</div>
            </div>
          </div>
          <p className="text-center text-blue-100 max-w-2xl mx-auto mt-10 text-sm">
            Every guide is independently researched, checked against reliable sources and edited for practical trip planning — no scraped reviews or unverified directory filler.
          </p>
        </div>
      </section>

      {/* Practical Bangalore Tips */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Featured Bangalore Tips
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The questions every first-time visitor to Bangalore asks, answered briefly. Tap any card for the full chapter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/cities/bangalore/best-time" className="block bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🕐 Best Time to Visit</h3>
              <p className="text-gray-700">Bangalore sits at 900m, so the weather stays 20–30°C most of the year. November–February is ideal; even peak summer rarely crosses 35°C.</p>
            </Link>
            <Link href="/cities/bangalore/budget" className="block bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Daily Budget</h3>
              <p className="text-gray-700">Backpacker: ₹1,500–2,500/day. Mid-range: ₹2,500–4,500/day with comfortable hotels, cafes and cabs. Luxury: ₹8,000+ with five-stars and fine dining.</p>
            </Link>
            <Link href="/cities/bangalore/travel-tips" className="block bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚗 Getting Around</h3>
              <p className="text-gray-700">Namma Metro is the fastest way through traffic. Use Uber/Ola/Rapido for short hops, and the Namma Yatri app for fairly priced autos. Keep ₹2–3k cash for street vendors.</p>
            </Link>
            <Link href="/cities/bangalore/food" className="block bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-orange-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Where to Eat</h3>
              <p className="text-gray-700">MTR and Vidyarthi Bhavan for breakfast, VV Puram Food Street after sunset, and Indiranagar/Koramangala for the city's microbrewery scene.</p>
            </Link>
            <Link href="/cities/bangalore/places-to-explore" className="block bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border-l-4 border-pink-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌳 Where to Stay</h3>
              <p className="text-gray-700">MG Road / Brigade Road keeps you central and on the metro. Indiranagar and Koramangala work best for cafes and nightlife. Whitefield only if your work is there.</p>
            </Link>
            <Link href="/cities/bangalore/hidden-gems" className="block bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border-l-4 border-teal-600 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎒 Day Trips</h3>
              <p className="text-gray-700">Nandi Hills (60 km) for sunrise, Skandagiri (70 km) for night treks, and Mysore (150 km) by Shatabdi train for an easy palace day-trip.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial / Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Why this guide exists
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Many “Top 10 things to do” articles repeat the same thin lists. We started ExploreTheCity.in to build useful references to Indian cities, with enough context to compare places, understand local food and plan realistic days.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Every attraction in our guides has been visited in person. Every restaurant recommendation comes from repeat visits, not aggregator stars. Where something has changed — a place has shut down, a neighbourhood has shifted character — we update the page.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We started with Bangalore because that's home, then expanded to seven more high-interest Indian destinations. Every guide follows the same research, source-checking and review standard. You can read more about the editorial approach on our <Link href="/about" className="text-primary font-semibold hover:underline">About</Link> page, or write in via <Link href="/contact" className="text-primary font-semibold hover:underline">Contact</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
