import Image from 'next/image'
import Link from 'next/link'
import CitySubmenu from '@/components/CitySubmenu'
import CityStructuredData from '@/components/CityStructuredData'
import FAQSchema from '@/components/FAQSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import RelatedCities from '@/components/RelatedCities'
import { getCityData, getAllCitySlugs } from '@/lib/cityData'

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    return {
      title: 'City Not Found | Explore The City',
      description: 'The requested city guide could not be found.',
    }
  }

  return {
    title: `${city.name} Travel Guide - Best Places to Visit in ${city.name}, ${city.state}`,
    description: city.shortDescription || `Discover the best places to visit in ${city.name}, ${city.state}. Complete travel guide with attractions, food, budget tips, and hidden gems.`,
    keywords: `${city.name}, ${city.state}, travel guide, places to visit in ${city.name}, ${city.name} tourism, ${city.name} attractions, things to do in ${city.name}`,
    openGraph: {
      title: `${city.name} Travel Guide | Explore The City`,
      description: city.shortDescription || `Discover ${city.name}'s top attractions, local food, and travel tips`,
      url: `https://www.explorethecity.in/cities/${city.slug}`,
      siteName: 'Explore The City',
      images: [
        {
          url: city.image,
          width: 1200,
          height: 630,
          alt: `${city.name} - ${city.state}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Travel Guide`,
      description: city.shortDescription || `Discover ${city.name}'s top attractions, local food, and travel tips`,
      images: [city.image],
    },
  }
}

export default function CityPage({ params }) {
  const city = getCityData(params.slug)

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

  // FAQ data from city JSON file
  const faqs = city.faq || []

  // Breadcrumb data for schema markup
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: city.name, url: `/cities/${city.slug}` },
  ]

  return (
    <div>
      {/* Structured Data for SEO */}
      <CityStructuredData city={city} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={`${city.name} travel guide - Explore attractions, food and culture in ${city.state}`}
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
            <span className="text-gray-800">{city.name}</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Discover {city.name}: Your Complete Travel Guide</h2>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg mb-6">
                <p className="text-lg text-gray-800 leading-relaxed font-medium italic">
                  {city.shortDescription}
                </p>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{city.description}</p>
              </div>
            </section>

            {/* Why Visit Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Visit {city.name}?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">🏛️ Rich Cultural Heritage</h3>
                  <p className="text-gray-600">Explore centuries of history through magnificent architecture, ancient temples, and heritage sites that tell fascinating stories.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">🍜 Culinary Paradise</h3>
                  <p className="text-gray-600">Indulge in authentic local cuisine, street food delicacies, and dining experiences that will tantalize your taste buds.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">📸 Instagram-Worthy Spots</h3>
                  <p className="text-gray-600">Discover stunning locations perfect for photography, from iconic landmarks to hidden gems off the beaten path.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎭 Vibrant Local Life</h3>
                  <p className="text-gray-600">Immerse yourself in the local culture, festivals, markets, and daily rhythms that make {city.name} unique.</p>
                </div>
              </div>
            </section>

            {/* Top Highlights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Top Highlights in {city.name}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {city.name} offers an incredible array of experiences for every type of traveler. Whether you're a history buff, foodie, adventure seeker, or culture enthusiast, you'll find something that resonates with you.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Did You Know?</strong> {city.name} attracts millions of visitors each year, making it one of India's most popular tourist destinations. The city perfectly balances its rich historical heritage with modern development, offering visitors a unique glimpse into both India's glorious past and dynamic present.
                </p>
              </div>
              <div className="grid gap-4">
                <Link href={`/cities/${city.slug}/places-to-explore`} className="block bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition group">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-primary transition">🏛️ Must-Visit Attractions ({city.attractions}+ Places)</h3>
                  <p className="text-gray-600">Explore iconic landmarks, historical monuments, museums, gardens, and architectural marvels that define {city.name}'s skyline and character.</p>
                </Link>
                <Link href={`/cities/${city.slug}/food`} className="block bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition group">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-primary transition">🍽️ Local Food & Cuisine</h3>
                  <p className="text-gray-600">Savor authentic {city.state} delicacies, street food favorites, fine dining experiences, and hidden culinary gems known only to locals.</p>
                </Link>
                <Link href={`/cities/${city.slug}/hidden-gems`} className="block bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition group">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-primary transition">💎 Hidden Gems & Secret Spots</h3>
                  <p className="text-gray-600">Discover offbeat locations, lesser-known attractions, and authentic experiences away from the tourist crowds.</p>
                </Link>
              </div>
            </section>

            {/* Planning Your Visit */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Planning Your {city.name} Trip</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🗓️</span>
                    Best Time to Visit
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    The ideal time to explore {city.name} is during {city.bestTimeToVisitShort || city.bestTimeToVisit}. During this period, the weather is pleasant, making it perfect for sightseeing and outdoor activities.
                  </p>
                  <Link href={`/cities/${city.slug}/best-time`} className="text-primary hover:underline font-medium">
                    View detailed season-by-season guide →
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-3">💰</span>
                    Budget Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {city.budgetEstimate} This includes accommodation, food, local transportation, and entry fees to major attractions. Budget travelers can explore for less, while luxury seekers can enjoy premium experiences.
                  </p>
                  <Link href={`/cities/${city.slug}/budget`} className="text-primary hover:underline font-medium">
                    See detailed cost breakdown →
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-3">✈️</span>
                    Getting There & Around
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {city.name} is well-connected by air, rail, and road. The city has excellent public transportation including metro, buses, and auto-rickshaws. Ride-sharing apps are widely available. For first-time visitors, we recommend using a combination of metro and app-based cabs for convenience.
                  </p>
                  <Link href={`/cities/${city.slug}/travel-tips`} className="text-primary hover:underline font-medium">
                    Read essential travel tips →
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Cities Section */}
            <RelatedCities currentCitySlug={city.slug} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-20">
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

            {/* AdSense Sidebar */}
            {/* <AdSense slot="3333333333" format="vertical" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
