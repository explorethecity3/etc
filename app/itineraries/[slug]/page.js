import Link from 'next/link'
import { notFound } from 'next/navigation'
import TripRealityChecker from '@/components/TripRealityChecker'
import { getCheckerCity } from '@/lib/tripCheckerData'
import { getItineraryLanding, ITINERARY_LANDINGS } from '@/lib/itineraryLandingData'

export function generateStaticParams() {
  return ITINERARY_LANDINGS.map((plan) => ({ slug: plan.slug }))
}

export function generateMetadata({ params }) {
  const plan = getItineraryLanding(params.slug)
  if (!plan) return { title: 'Itinerary Not Found | Explore The City' }
  const canonical = `https://www.explorethecity.in/itineraries/${plan.slug}`
  return {
    title: `${plan.title} | Explore The City`,
    description: plan.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: { title: plan.title, description: plan.description, url: canonical, type: 'article', siteName: 'Explore The City' },
  }
}

export default function ItineraryLandingPage({ params }) {
  const plan = getItineraryLanding(params.slug)
  if (!plan) notFound()
  const city = getCheckerCity(plan.citySlug)
  if (!city) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: plan.title,
    description: plan.description,
    author: { '@type': 'Organization', name: 'Explore The City Editorial' },
    publisher: { '@type': 'Organization', name: 'Explore The City' },
    mainEntityOfPage: `https://www.explorethecity.in/itineraries/${plan.slug}`,
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="bg-gradient-to-br from-slate-950 via-orange-950 to-orange-800 pt-36 pb-20 text-white">
        <div className="container-custom max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">{plan.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">{plan.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">{plan.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2">4 planned stops</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Balanced pace</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Editable below</span>
          </div>
        </div>
      </header>

      <main>
        <article className="container-custom max-w-5xl py-14">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href={`/cities/${city.slug}`}>{city.name}</Link> / <span>{plan.title}</span></nav>

          <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h2 className="text-3xl font-extrabold">The honest answer</h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">{plan.verdict}</p>
            </div>
            <aside className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <h2 className="text-xl font-bold">If the day starts slipping</h2>
              <p className="mt-3 leading-7 text-gray-700"><strong>Remove first:</strong> {plan.removeFirst}</p>
            </aside>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-extrabold">A route that avoids unnecessary backtracking</h2>
            <ol className="mt-7 grid gap-5 md:grid-cols-2">
              {plan.stopNames.map((name, index) => (
                <li key={name} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-700 font-bold text-white">{index + 1}</span><h3 className="text-xl font-bold">{name}</h3></div>
                  <p className="mt-4 leading-7 text-gray-600">{plan.stopNotes[index]}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="text-2xl font-bold">Three things that can change the day</h2>
            <ul className="mt-5 space-y-3 text-gray-200">{plan.notes.map((note) => <li key={note} className="flex gap-3"><span className="text-orange-300">●</span><span>{note}</span></li>)}</ul>
          </section>
        </article>

        <section className="border-y bg-gradient-to-b from-orange-50 to-white py-16" id="check-this-route">
          <div className="container-custom">
            <div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-widest text-orange-700">Change the plan</p><h2 className="mt-3 text-4xl font-extrabold">Check this route against your pace</h2><p className="mt-4 text-lg text-gray-600">The proposed stops are already selected. Change the order, traveller type, start time or day to see where the plan becomes uncomfortable.</p></div>
            <TripRealityChecker cities={[city]} initialCitySlug={city.slug} initialPlaceNames={plan.stopNames} />
          </div>
        </section>

        <section className="container-custom max-w-5xl py-16">
          <h2 className="text-3xl font-extrabold">What this page cannot promise</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-700">This route uses maintained planning estimates, not live traffic, ticket inventory or a guarantee that every site will be open. Check official information and local conditions before travelling.</p>
          <div className="mt-7 flex flex-wrap gap-4"><Link href={`/cities/${city.slug}`} className="btn-primary">Read the {city.name} guide</Link><Link href="/methodology" className="btn-secondary">How the score works</Link></div>
        </section>
      </main>
    </div>
  )
}
