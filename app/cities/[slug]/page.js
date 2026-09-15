import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CitySubmenu from '@/components/CitySubmenu'
import CityStructuredData from '@/components/CityStructuredData'
import FAQSchema from '@/components/FAQSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import RelatedCities from '@/components/RelatedCities'
import EditorialNote from '@/components/EditorialNote'
import ComprehensiveCityGuide from '@/components/ComprehensiveCityGuide'
import { getCityData, getAllCitySlugs } from '@/lib/cityData'
import { getCityEditorial } from '@/lib/cityEditorial'

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
    alternates: {
      canonical: `https://www.explorethecity.in/cities/${city.slug}`,
    },
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
    notFound()
  }

  // FAQ data from city JSON file
  const faqs = city.faq || []
  const editorial = getCityEditorial(city.slug)

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
            <EditorialNote city={city} scope="city guide" />
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

            {/* Guide navigation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">What do you need for your trip?</h2>
              <p className="text-gray-700 mb-6">Jump to the part that helps now, or read straight through for a practical first-trip plan.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  ['Plan the days', 'plan'], ['Places', 'places'], ['Food', 'food'],
                  ['Best time', 'best-time'], ['Travel tips', 'travel-tips'],
                  ['Hidden gems', 'hidden-gems'], ['Budget', 'budget'],
                ].map(([label, anchor]) => (
                  <Link key={anchor} href={`#${anchor}`} className="rounded-full bg-white px-4 py-2 font-semibold text-primary shadow-sm border border-orange-100 hover:bg-orange-50">
                    {label}
                  </Link>
                ))}
              </div>
            </section>

            <ComprehensiveCityGuide city={city} editorial={editorial} />

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

            {/* AdSense Sidebar */}
            {/* <AdSense slot="3333333333" format="vertical" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
