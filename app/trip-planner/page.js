import Link from 'next/link'
import TripPlanner from '@/components/TripPlanner'
import { getPlannerCityOptions } from '@/lib/indianCityDirectory'

export const metadata = {
  title: 'Free India Trip Planner — Personalised City Itineraries',
  description: 'Create a private 1–5 day itinerary for 15 Indian destinations using reviewed attractions, local food, practical travel advice and your budget.',
  alternates: { canonical: 'https://www.explorethecity.in/trip-planner' },
  openGraph: {
    title: 'Free India Trip Planner | Explore The City',
    description: 'Build a personalised itinerary from Explore The City’s reviewed destination guides.',
    url: 'https://www.explorethecity.in/trip-planner',
  },
}

export default function TripPlannerPage() {
  const cities = getPlannerCityOptions()

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white">
      <header className="bg-gradient-to-br from-orange-800 via-orange-700 to-rose-700 pt-36 pb-20 text-white">
        <div className="container-custom text-center">
          <p className="uppercase tracking-[0.25em] text-sm font-bold text-orange-100 mb-4">Free planning tool</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">Build a trip that fits you</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/90">Choose a city, pace, budget and interests. We turn our reviewed destination data into a practical day-by-day itinerary—without requiring an account.</p>
        </div>
      </header>

      <main className="container-custom py-14">
        <TripPlanner cities={cities} />

        <section className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm border"><h2 className="font-bold text-xl mb-2">Grounded in our guides</h2><p className="text-gray-600">The planner selects from the attractions, food and practical notes maintained in our 15 destination guides instead of searching an unverified global database.</p></div>
          <div className="rounded-xl bg-white p-6 shadow-sm border"><h2 className="font-bold text-xl mb-2">Private by design</h2><p className="text-gray-600">Plans are generated only for the current request. We do not create a public itinerary URL or ask for your name, email address or account.</p></div>
          <div className="rounded-xl bg-white p-6 shadow-sm border"><h2 className="font-bold text-xl mb-2">A starting point, not a booking</h2><p className="text-gray-600">Opening hours, fares, weather and access can change. Follow the links into each complete city guide and reconfirm time-sensitive details.</p></div>
        </section>

        <section className="mt-16 rounded-2xl bg-gray-900 p-8 md:p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">How to get a better itinerary</h2>
          <div className="grid gap-6 md:grid-cols-2 text-gray-200"><p>Choose a relaxed pace for families, hot-weather trips or anyone who enjoys long meals. Balanced works for most first visits; packed is best only when transport and energy levels allow.</p><p>Add your hotel neighbourhood when you know it, then use the full city guide to group nearby stops. The planner does not calculate live traffic or guarantee that every attraction will be open.</p></div>
          <Link href="/cities" className="inline-block mt-6 font-semibold text-orange-300 hover:text-orange-200">Browse all destination guides →</Link>
        </section>
      </main>
    </div>
  )
}
