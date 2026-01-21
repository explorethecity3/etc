import Link from 'next/link'
import Image from 'next/image'
import CityCard from '@/components/CityCard'
import AdSense from '@/components/AdSense'
import { getCityCards } from '@/lib/cityData'
import blogs from '@/data/blogs.json'
import { FaMapMarkedAlt, FaLandmark, FaUtensils, FaHiking, FaPalette } from 'react-icons/fa'

export default function Home() {
  // Get all cities
  const cities = getCityCards()

  // Get latest blog posts
  const latestBlog = blogs[0]
  const recentBlogs = blogs.slice(0, 3)

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
              <span className="font-normal not-italic">Let's Explore Yours.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-light">
              Discover the hidden corners and untold tales of India's vibrant cities.
            </p>
            <Link href="/cities" className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-xl">
              Explore Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Wander Through Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-2">
              Wander Through...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 to-orange-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaMapMarkedAlt className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Hidden Streets</h3>
                <p className="text-amber-100 mb-4">Temples, Bazaars & Secret Galleries</p>
                <Link href="/cities" className="text-white hover:text-amber-200 font-semibold inline-flex items-center gap-2">
                  Discover More →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 to-red-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaUtensils className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Local Flavors</h3>
                <p className="text-orange-100 mb-4">Spice Curry, Naan & Samosas</p>
                <Link href="/blog?category=Food" className="text-white hover:text-orange-200 font-semibold inline-flex items-center gap-2">
                  Discover More →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-pink-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaPalette className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Living Culture</h3>
                <p className="text-purple-100 mb-4">Follow street side Ipda hunters</p>
                <Link href="/blog?category=Culture" className="text-white hover:text-purple-200 font-semibold inline-flex items-center gap-2">
                  Discover More →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-cyan-900/80"></div>
              <div className="relative h-full p-8 text-white flex flex-col justify-end">
                <FaLandmark className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Secret Spots</h3>
                <p className="text-teal-100 mb-4">Tercenters Haze to Calm Troptique</p>
                <Link href="/cities" className="text-white hover:text-teal-200 font-semibold inline-flex items-center gap-2">
                  Discover More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Featured Destinations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Start your journey with these amazing destinations across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Categories Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Explore by Interest
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find your perfect travel experience based on what excites you most
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog?category=Culture" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800"></div>
              <div className="relative p-8 text-white">
                <FaLandmark className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Heritage & Culture</h3>
                <p className="text-purple-100">Explore historic monuments, temples, and cultural experiences</p>
              </div>
            </Link>
            <Link href="/blog?category=Food" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600"></div>
              <div className="relative p-8 text-white">
                <FaUtensils className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Food & Cuisine</h3>
                <p className="text-orange-100">Discover local delicacies and authentic street food experiences</p>
              </div>
            </Link>
            <Link href="/blog?category=Adventure" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600"></div>
              <div className="relative p-8 text-white">
                <FaHiking className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Adventure & Nature</h3>
                <p className="text-green-100">Trek mountains, explore beaches, and embrace outdoor adventures</p>
              </div>
            </Link>
            <Link href="/blog?category=Art" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-rose-600"></div>
              <div className="relative p-8 text-white">
                <FaPalette className="text-5xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Art & Markets</h3>
                <p className="text-pink-100">Shop at vibrant markets and discover local arts and crafts</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2">{cities.length}+</div>
              <div className="text-lg md:text-xl text-blue-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2">50+</div>
              <div className="text-lg md:text-xl text-blue-100">Hidden Gems</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2">100+</div>
              <div className="text-lg md:text-xl text-blue-100">Travel Tips</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2">1000+</div>
              <div className="text-lg md:text-xl text-blue-100">Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot 1 */}
      {/* <div className="container-custom">
        <AdSense slot="1234567890" format="horizontal" />
      </div> */}

      {/* Latest Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Travel Stories & Guides
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Read inspiring stories and practical travel tips from our adventures
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recentBlogs.map((blog) => (
              <article key={blog.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-[250px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-primary hover:text-orange-600 font-semibold inline-flex items-center gap-2"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* More Blog Posts */}
          <div className="mt-16 text-center">
            <Link href="/blog" className="btn-primary">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      {/* <div className="container-custom">
        <AdSense slot="0987654321" format="horizontal" />
      </div> */}

      {/* Quick Travel Tips Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase">
              Quick Travel Tips
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Essential advice to make your Indian city adventures smooth and memorable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🕐 Best Time to Visit</h3>
              <p className="text-gray-700">Most Indian cities are best explored between October and March when the weather is pleasant. Avoid peak summer (April-June) and monsoon disruptions.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Budget Planning</h3>
              <p className="text-gray-700">Budget travelers can explore comfortably with ₹1500-2500/day, while mid-range travelers should plan ₹3000-5000/day including accommodation and meals.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚗 Getting Around</h3>
              <p className="text-gray-700">Use metro systems in major cities, book app-based cabs for convenience, and try local transport like auto-rickshaws for an authentic experience.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Food Safety</h3>
              <p className="text-gray-700">Eat at busy restaurants and street stalls with high turnover. Start with mild dishes if you're not used to spicy food, and always carry bottled water.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border-l-4 border-pink-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📱 Stay Connected</h3>
              <p className="text-gray-700">Get a local SIM card for affordable data. Download offline maps, keep emergency numbers saved, and use translation apps for regional languages.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎒 Pack Smart</h3>
              <p className="text-gray-700">Bring comfortable walking shoes, modest clothing for religious sites, sunscreen, and a small daypack. Layer clothing for varying temperatures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">
              Start Your Next Adventure
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-50">
              Get exclusive travel guides, hidden gems, and insider tips delivered to your inbox. Join thousands of travelers exploring India like never before!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                Get Travel Updates
              </Link>
              <Link href="/cities" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors">
                Explore Destinations
              </Link>
            </div>
            <p className="mt-6 text-orange-100 text-sm">
              No spam, just amazing travel content. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
