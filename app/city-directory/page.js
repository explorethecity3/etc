import Link from 'next/link'
import CityDirectory from '@/components/CityDirectory'
import { CITY_DIRECTORY } from '@/lib/indianCityDirectory'

export const metadata = {
  title: 'Indian City Directory — Tier 1, Tier 2 and Tier 3 Cities',
  description: 'Search a practical directory of Indian Tier 1, Tier 2 and Tier 3 cities by name, state or editorial travel tier.',
  alternates: { canonical: 'https://www.explorethecity.in/city-directory' },
}

export default function CityDirectoryPage() {
  const guideCount = CITY_DIRECTORY.filter((city) => city.hasGuide).length

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-gradient-to-br from-orange-800 via-orange-700 to-rose-700 pb-16 pt-36 text-white">
        <div className="container-custom max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-100">Find your next city</p>
          <h1 className="text-4xl font-extrabold md:text-6xl">Indian city directory</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">Looking for a city we haven’t written about yet? Start here. You can search across Tier 1, Tier 2 and Tier 3 destinations, then jump into one of our {guideCount} complete guides when it’s ready.</p>
        </div>
      </header>

      <section className="container-custom py-12">
        <div className="mb-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6 text-gray-700">
          <h2 className="text-xl font-bold text-gray-900">A quick word about the tiers</h2>
          <p className="mt-2 leading-relaxed">There isn’t one official Tier 1/2/3 list used everywhere in India. Employers, property sites and government departments classify cities differently. Here, the tiers are a simple editorial aid based on scale, connectivity and how travellers commonly plan—not a legal or economic ranking.</p>
          <p className="mt-3 leading-relaxed">We’ve deliberately kept every city on this one directory page. A listing is not pretending to be a travel guide, and “guide in progress” really does mean we’re not publishing filler just to create another URL.</p>
        </div>

        <CityDirectory cities={CITY_DIRECTORY} />

        <div className="mt-12 rounded-2xl bg-gray-900 p-7 text-white md:flex md:items-center md:justify-between md:gap-8">
          <div><h2 className="text-2xl font-bold">Already know where you’re going?</h2><p className="mt-2 text-gray-300">Use the planner for destinations with a complete, reviewed guide.</p></div>
          <Link href="/trip-planner" className="mt-5 inline-block rounded-lg bg-orange-600 px-6 py-3 font-bold hover:bg-orange-500 md:mt-0">Build an itinerary →</Link>
        </div>
      </section>
    </main>
  )
}
