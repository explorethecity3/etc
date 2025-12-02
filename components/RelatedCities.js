import Link from 'next/link'
import Image from 'next/image'
import { getCityCards } from '@/lib/cityData'

export default function RelatedCities({ currentCitySlug }) {
  const allCities = getCityCards()

  // Filter out current city and get up to 3 related cities
  const relatedCities = allCities
    .filter(city => city.slug !== currentCitySlug)
    .slice(0, 3)

  if (relatedCities.length === 0) {
    return null
  }

  return (
    <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Explore More Destinations</h2>
      <p className="text-gray-600 mb-6">
        Planning to visit more cities? Check out these amazing destinations across India.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedCities.map((city) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-40 w-full">
                <Image
                  src={city.image}
                  alt={`Visit ${city.name}, ${city.state}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">{city.state}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {city.attractions}+ attractions
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/cities"
          className="inline-block text-primary hover:text-orange-600 font-semibold hover:underline"
        >
          View All Destinations →
        </Link>
      </div>
    </section>
  )
}
