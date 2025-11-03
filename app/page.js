import Link from 'next/link'
import Image from 'next/image'
import CityCard from '@/components/CityCard'
import AdSense from '@/components/AdSense'
import cities from '@/data/cities.json'
import blogs from '@/data/blogs.json'

export default function Home() {
  // Get featured cities (first 3)
  const featuredCities = cities.slice(0, 3)

  // Get latest blog post
  const latestBlog = blogs[0]

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600')"
      }}>
        <div className="container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight uppercase tracking-wide">
              Adventure<br />& Exploration
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Discover hidden gems, local experiences, and authentic travel stories across India's most amazing cities
            </p>
            <Link href="/cities" className="btn-primary">
              Explore
            </Link>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/cities" className="btn-primary">
              View All Destinations
            </Link>
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
              Latest Blog
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Read inspiring stories and practical travel tips from our adventures
            </p>
          </div>

          {/* Featured Blog Post */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            {/* Blog Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={latestBlog.image}
                alt={latestBlog.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Blog Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {latestBlog.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {latestBlog.excerpt}
              </p>
              <Link href={`/blog/${latestBlog.slug}`} className="btn-primary">
                Read More
              </Link>
            </div>
          </div>

          {/* More Blog Posts */}
          <div className="mt-16 text-center">
            <Link href="/blog" className="text-primary hover:text-orange-600 font-semibold text-lg underline">
              View All Blog Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Slot 2 */}
      {/* <div className="container-custom">
        <AdSense slot="0987654321" format="horizontal" />
      </div> */}
    </div>
  )
}
