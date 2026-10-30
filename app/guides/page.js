import Link from 'next/link'
import { BANGALORE_SEO_LANDINGS } from '@/lib/bangaloreSeoLandings'
import { MUMBAI_SEO_LANDINGS } from '@/lib/mumbaiSeoLandings'
import { GOA_SEO_LANDINGS } from '@/lib/goaSeoLandings'
import { DELHI_SEO_LANDINGS } from '@/lib/delhiSeoLandings'
import { JAIPUR_SEO_LANDINGS } from '@/lib/jaipurSeoLandings'
import { ITINERARY_LANDINGS } from '@/lib/itineraryLandingData'

export const metadata = {
  title: 'India Travel Planning Guides: Routes for 5 Cities',
  description: 'Browse practical India travel guides for Bangalore, Mumbai, Goa, Delhi and Jaipur, including walking routes, transit plans, budgets and itineraries.',
  alternates: { canonical: 'https://www.explorethecity.in/guides' },
}

const guideGroups = [
  { city: 'Bangalore', slug: 'bangalore', intro: 'Metro-friendly sightseeing, a realistic one-day route and a lower-stress family plan.', guides: BANGALORE_SEO_LANDINGS },
  { city: 'Mumbai', slug: 'mumbai', intro: 'South Mumbai on foot, useful local-train stops and a monsoon day that still works.', guides: MUMBAI_SEO_LANDINGS },
  { city: 'Goa', slug: 'goa', intro: 'A three-day plan, an honest North-versus-South decision and realistic costs for two.', guides: GOA_SEO_LANDINGS },
  { city: 'Delhi', slug: 'delhi', intro: 'Metro sightseeing clusters, an Old Delhi walk and two days without crossing the city repeatedly.', guides: DELHI_SEO_LANDINGS },
  { city: 'Jaipur', slug: 'jaipur', intro: 'Old City walking, a two-day route and the costs behind forts, transport and markets.', guides: JAIPUR_SEO_LANDINGS },
]

const allGuideLinks = guideGroups.flatMap((group) =>
  group.guides.map((guide) => ({
    name: guide.title,
    url: `https://www.explorethecity.in/${group.slug}-guides/${guide.slug}`,
  }))
)

export default function GuidesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Explore The City practical India travel guides',
    numberOfItems: allGuideLinks.length,
    itemListElement: allGuideLinks.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.name,
      url: guide.url,
    })),
  }

  return (
    <main className="min-h-screen bg-orange-50 pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <div className="container-custom max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-700">Practical planning library</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">Choose the question you need answered</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">These guides are built around real trip decisions: which area belongs in the same day, when public transport helps, what to remove first and which costs are easy to overlook. Pick a city, then start with the problem closest to your trip.</p>
        </header>

        <section className="mt-12 rounded-3xl bg-slate-950 p-7 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-orange-300">Want a route you can change?</p>
              <h2 className="mt-3 text-3xl font-extrabold">Start with one of five editable one-day plans</h2>
              <p className="mt-3 max-w-3xl leading-7 text-gray-300">Open a tested route, adjust the stops and run it through the free reality checker before you commit the day.</p>
            </div>
            <Link href="/itineraries" className="rounded-lg bg-orange-600 px-6 py-3 text-center font-bold hover:bg-orange-500">Browse editable itineraries</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">{ITINERARY_LANDINGS.map((plan) => <Link key={plan.slug} href={`/itineraries/${plan.slug}`} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">{plan.eyebrow}</Link>)}</div>
        </section>

        <div className="mt-16 space-y-16">
          {guideGroups.map((group) => (
            <section key={group.slug} aria-labelledby={`${group.slug}-guides`}>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-widest text-orange-700">{group.city}</p>
                  <h2 id={`${group.slug}-guides`} className="mt-2 text-3xl font-extrabold">Plan {group.city} without the avoidable detours</h2>
                  <p className="mt-3 leading-7 text-gray-700">{group.intro}</p>
                </div>
                <Link href={`/${group.slug}-guides`} className="shrink-0 font-bold text-orange-700 hover:underline">Open the {group.city} library →</Link>
              </div>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {group.guides.map((guide) => (
                  <Link key={guide.slug} href={`/${group.slug}-guides/${guide.slug}`} className="group rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-700">{guide.eyebrow}</p>
                    <h3 className="mt-3 text-xl font-bold group-hover:text-orange-700">{guide.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{guide.description}</p>
                    <span className="mt-5 inline-block font-bold text-orange-700">Read the guide →</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-3xl border border-orange-200 bg-white p-8 md:p-10">
          <h2 className="text-3xl font-extrabold">Turn the guide into your own plan</h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-700">Estimate the trip cost, test whether one day is overloaded or build a private itinerary from the maintained destination data.</p>
          <div className="mt-6 flex flex-wrap gap-4"><Link href="/travel-tools" className="btn-primary">Browse free travel tools</Link><Link href="/cities" className="btn-secondary">Read complete city guides</Link></div>
        </section>
      </div>
    </main>
  )
}
