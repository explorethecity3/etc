import CityCard from '@/components/CityCard'
import AdSense from '@/components/AdSense'
import { getCityCards } from '@/lib/cityData'

export const metadata = {
  title: 'Explore Cities Across India - City Guides | Explore The City',
  description: 'Comprehensive travel guides for major cities in India. Discover attractions, local food, travel tips, and budget estimates for your next adventure.',
  keywords: 'india cities, travel guide, city guide, tourism india, explore india',
}

export default function CitiesPage() {
  const cities = getCityCards()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Explore Amazing Cities Across India
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive guides to help you discover the best attractions, food, and experiences in every city
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing {cities.length} cities across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Your Complete City Travel Resource
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Each city guide includes detailed information about top attractions, local cuisine,
              travel tips, best time to visit, and budget estimates to help you plan the perfect trip.
            </p>
            <p className="text-gray-600">
              Can't find the city you're looking for? We're constantly adding new destinations.
              Check back soon for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
