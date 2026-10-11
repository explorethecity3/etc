import Link from 'next/link'
import { ITINERARY_LANDINGS } from '@/lib/itineraryLandingData'
import { CHECKER_CITIES } from '@/lib/tripCheckerData'

export const metadata = {
  title: 'Realistic India Itineraries | Explore The City',
  description: 'Editable one-day India itineraries with honest timing, route and crowd checks for Bangalore, Mumbai, Goa, Delhi and Jaipur.',
  alternates: { canonical: 'https://www.explorethecity.in/itineraries' },
  robots: { index: true, follow: true },
}

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-slate-950 via-orange-950 to-orange-800 pt-36 pb-20 text-white">
        <div className="container-custom max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">Routes built for real days</p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">Realistic India itineraries you can change</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85">These are starting points, not perfect schedules. Each route explains what fits, what to remove when time slips and how the score changes for your pace.</p>
        </div>
      </header>

      <main className="container-custom py-16">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITINERARY_LANDINGS.map((plan) => {
            const city = CHECKER_CITIES.find((item) => item.slug === plan.citySlug)
            return (
              <article key={plan.slug} className="flex flex-col rounded-2xl border border-orange-100 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-700">{city?.name}, {city?.state}</p>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">{plan.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-gray-600">{plan.verdict}</p>
                <div className="mt-5 flex flex-wrap gap-2">{plan.stopNames.map((name) => <span key={name} className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-900">{name}</span>)}</div>
                <Link href={`/itineraries/${plan.slug}`} className="mt-7 font-bold text-orange-700 hover:underline">Open and edit this route →</Link>
              </article>
            )
          })}
        </section>

        <section className="mt-16 rounded-2xl bg-slate-950 p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
          <div><h2 className="text-3xl font-bold">Already have your own route?</h2><p className="mt-3 max-w-2xl text-gray-300">Choose the stops in your intended order and check whether the day is comfortable, rushed or unrealistic.</p></div>
          <Link href="/trip-checker" className="mt-6 inline-block shrink-0 rounded-lg bg-orange-600 px-6 py-3 font-bold hover:bg-orange-500 md:mt-0">Check my itinerary</Link>
        </section>
      </main>
    </div>
  )
}
