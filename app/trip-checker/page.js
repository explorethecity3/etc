import TripRealityChecker from '@/components/TripRealityChecker'
import { CHECKER_CITIES } from '@/lib/tripCheckerData'
import Link from 'next/link'

export const metadata = {
  title: 'India Trip Reality Checker — Test Your Itinerary',
  description: 'Check whether an India city itinerary is realistic. Find overloaded days, excessive transfers and pacing problems before you travel.',
  alternates: { canonical: 'https://www.explorethecity.in/trip-checker' },
}

export default function TripCheckerPage() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does the checker use live traffic or crowd data?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. It uses reviewed planning estimates, including typical visit time and conservative transfer time. Recheck live conditions before leaving.' },
      },
      {
        '@type': 'Question',
        name: 'Is my itinerary saved or published?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. The guided checker runs in your browser and does not publish an indexable result page.' },
      },
      {
        '@type': 'Question',
        name: 'Which cities are supported?',
        acceptedAnswer: { '@type': 'Answer', text: 'The reviewed checker currently supports Bangalore, Mumbai, Goa, Delhi and Jaipur.' },
      },
    ],
  }

  return <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <header className="bg-gradient-to-br from-slate-950 via-orange-950 to-orange-800 pt-36 pb-20 text-white"><div className="container-custom text-center"><p className="uppercase tracking-[0.25em] text-sm font-bold text-orange-200 mb-4">Free private planning tool</p><h1 className="text-4xl md:text-6xl font-extrabold">Will your itinerary actually work?</h1><p className="mx-auto max-w-3xl text-lg md:text-xl text-white/85 mt-5">Choose a city and arrange your intended stops. We check pacing, estimated transfers, area changes and traveller fit—without asking for an account.</p></div></header>
    <main className="container-custom py-14">
      <section className="mx-auto mb-12 max-w-4xl rounded-2xl border border-orange-100 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-bold">Use it like a quick conversation with a practical local</h2>
        <p className="mt-3 leading-7 text-gray-700">Start with the places you genuinely care about, not every landmark from a search result. Put them in the order you would visit them, choose an honest pace and let the checker point out where the day becomes uncomfortable.</p>
        <ol className="mt-5 grid gap-4 md:grid-cols-3">
          <li className="rounded-xl bg-orange-50 p-4"><strong>1. Pick a city</strong><p className="mt-1 text-sm text-gray-700">Only reviewed destinations appear in the tool.</p></li>
          <li className="rounded-xl bg-orange-50 p-4"><strong>2. Build your day</strong><p className="mt-1 text-sm text-gray-700">Order matters because crossing a city twice costs time.</p></li>
          <li className="rounded-xl bg-orange-50 p-4"><strong>3. Read the trade-offs</strong><p className="mt-1 text-sm text-gray-700">The result explains what to move or remove first.</p></li>
        </ol>
      </section>
      <TripRealityChecker cities={CHECKER_CITIES} />
      <section className="mt-20 grid gap-6 md:grid-cols-3"><div className="rounded-xl border bg-white p-6"><h2 className="font-bold text-xl">Transparent scoring</h2><p className="mt-2 text-gray-600">Every deduction appears in the report. There is no hidden AI judgement.</p></div><div className="rounded-xl border bg-white p-6"><h2 className="font-bold text-xl">Private by default</h2><p className="mt-2 text-gray-600">Selections remain in your browser and are not published or indexed.</p></div><div className="rounded-xl border bg-white p-6"><h2 className="font-bold text-xl">Planning estimates</h2><p className="mt-2 text-gray-600">The tool is for feasibility checks, not live traffic, booking availability or safety guarantees.</p></div></section>
      <section className="mx-auto mt-20 max-w-4xl">
        <h2 className="text-3xl font-extrabold">Before you trust the score</h2>
        <div className="mt-6 space-y-6 leading-7 text-gray-700">
          <div><h3 className="text-xl font-bold text-gray-900">It is a reality check, not a live prediction</h3><p className="mt-2">A score can catch an overloaded route, but it cannot see today&apos;s road closure, rain or ticket queue. Confirm opening hours and live travel conditions on the day.</p></div>
          <div><h3 className="text-xl font-bold text-gray-900">Leave room for the part you cannot schedule</h3><p className="mt-2">A tea stop, a long lunch or simply getting lost can become the best part of a trip. A plan that uses every available minute is usually the first one to fall apart.</p></div>
          <div><h3 className="text-xl font-bold text-gray-900">Use the city guides for context</h3><p className="mt-2">The checker deals with time and route shape. Our <Link href="/cities" className="font-semibold text-orange-700 hover:underline">reviewed city guides</Link> cover seasons, neighbourhoods, food and practical budgeting. You can also begin with a <Link href="/itineraries" className="font-semibold text-orange-700 hover:underline">tested one-day route</Link>.</p></div>
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-4xl border-t pt-12">
        <h2 className="text-3xl font-extrabold">Common questions</h2>
        <div className="mt-7 space-y-7">
          <div><h3 className="text-xl font-bold">Does this use live traffic or crowd data?</h3><p className="mt-2 text-gray-700">No. It uses reviewed planning estimates. Check current conditions before you set out.</p></div>
          <div><h3 className="text-xl font-bold">Do you save my itinerary?</h3><p className="mt-2 text-gray-700">No. Your guided selections stay in the browser, and the result is not published as a public page.</p></div>
          <div><h3 className="text-xl font-bold">Why are only five cities available?</h3><p className="mt-2 text-gray-700">A useful result needs structured place durations and route assumptions. We prefer five maintained destinations to a long list of guesses.</p></div>
        </div>
      </section>
    </main>
  </div>
}

