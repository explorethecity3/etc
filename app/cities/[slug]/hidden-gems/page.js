import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CitySubmenu from '@/components/CitySubmenu'
import { getCityData } from '@/lib/cityData'
import { FaGem } from 'react-icons/fa'

function HiddenGemsStructuredData({ city }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Hidden Gems in ${city.name}`,
    description: `Off-the-beaten-path attractions and hidden gems in ${city.name}, ${city.state}`,
    itemListElement: city.hiddenGems?.map((gem, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: gem.split(' - ')[0],
        description: gem.split(' - ')[1] || gem,
      },
    })) || [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function HiddenGemsPage({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    notFound()
  }

  // Check if hiddenGems exists
  if (!city.hiddenGems || city.hiddenGems.length === 0) {
    return (
      <div>
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src={city.image}
            alt={`${city.name} hidden gems - Off-the-beaten-path locations in ${city.state}`}
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
              <span className="text-gray-800">Hidden Gems</span>
            </div>
          </div>
        </div>

        {/* Submenu Navigation */}
        <CitySubmenu citySlug={city.slug} />

        <div className="container-custom py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Hidden Gems Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            We're currently curating the best hidden gems and off-the-beaten-path locations in {city.name}.
          </p>
          <Link href={`/cities/${city.slug}/places-to-explore`} className="btn-primary">
            Explore Popular Attractions
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Structured Data for SEO */}
      <HiddenGemsStructuredData city={city} />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={`${city.name} hidden gems - Off-the-beaten-path locations in ${city.state}`}
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
            <span className="text-gray-800">Hidden Gems</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hidden Gems */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaGem className="text-purple-600 text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Hidden Gems in {city.name}</h2>
              </div>
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                These are the {city.name} day trips and offbeat corners that don't show up on most listicles — waterfalls, dance villages, 400-year-old banyan trees, decommissioned reservoirs, the bits of old Bangalore squeezed between flyovers. Most of them sit 30-90 km outside the city, so they work best as a weekend half-day or a Sunday morning escape.
              </p>
              <p className="text-gray-600 text-sm mb-8">
                Distances and timings reflect our most recent visits. Several of these places (Hesaraghatta, Chunchi Falls) are seasonal — we've flagged the best months alongside each.
              </p>
              <div className="space-y-6">
                {city.hiddenGems.map((gem, index) => {
                  const parts = gem.split(' - ')
                  const name = parts[0]
                  const description = parts.slice(1).join(' - ')

                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                          {index + 1}
                        </span>
                        {name}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Planning a day trip out of these?</h3>
                <p className="text-gray-700 mb-3">
                  Most of these spots are reachable by car or bike from central Bangalore. The {city.travelTips?.find(t => t.category === 'Weekend Getaways') ? 'Weekend Getaways section of our' : ''} <Link href={`/cities/${city.slug}/travel-tips`} className="text-purple-700 font-semibold hover:underline">Travel Tips</Link> chapter covers timings, transport options and what to pack. For sunrise and viewpoint trips, the <Link href={`/cities/${city.slug}/best-time`} className="text-purple-700 font-semibold hover:underline">Best Time to Visit</Link> page explains which months these places actually look their best.
                </p>
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
                  <p className="font-semibold text-gray-800">{city.attractions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Best Time</p>
                  <p className="font-semibold text-gray-800">{city.bestTimeToVisitShort || city.bestTimeToVisit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Budget Range</p>
                  <p className="font-semibold text-gray-800">{city.budgetEstimate.split('(')[0]}</p>
                </div>
                {city.lastUpdated && (
                  <div>
                    <p className="text-sm text-gray-600">Last Updated</p>
                    <p className="font-semibold text-gray-800">{city.lastUpdated}</p>
                  </div>
                )}
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
