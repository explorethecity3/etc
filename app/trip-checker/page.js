import TripRealityChecker from '@/components/TripRealityChecker'
import { CHECKER_CITIES } from '@/lib/tripCheckerData'

export const metadata = {
  title: 'India Trip Reality Checker — Test Your Itinerary',
  description: 'Check whether an India city itinerary is realistic. Find overloaded days, excessive transfers and pacing problems before you travel.',
  alternates: { canonical: 'https://www.explorethecity.in/trip-checker' },
}

export default function TripCheckerPage() {
  return <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white"><header className="bg-gradient-to-br from-slate-950 via-orange-950 to-orange-800 pt-36 pb-20 text-white"><div className="container-custom text-center"><p className="uppercase tracking-[0.25em] text-sm font-bold text-orange-200 mb-4">Free private planning tool</p><h1 className="text-4xl md:text-6xl font-extrabold">Will your itinerary actually work?</h1><p className="mx-auto max-w-3xl text-lg md:text-xl text-white/85 mt-5">Choose a city and arrange your intended stops. We check pacing, estimated transfers, area changes and traveller fit—without asking for an account.</p></div></header><main className="container-custom py-14"><TripRealityChecker cities={CHECKER_CITIES} /><section className="mt-20 grid gap-6 md:grid-cols-3"><div className="rounded-xl border bg-white p-6"><h2 className="font-bold text-xl">Transparent scoring</h2><p className="mt-2 text-gray-600">Every deduction appears in the report. There is no hidden AI judgement.</p></div><div className="rounded-xl border bg-white p-6"><h2 className="font-bold text-xl">Private by default</h2><p className="mt-2 text-gray-600">Selections remain in your browser and are not published or indexed.</p></div><div className="rounded-xl border bg-white p-6"><h2 className="font-bold text-xl">Planning estimates</h2><p className="mt-2 text-gray-600">The tool is for feasibility checks, not live traffic, booking availability or safety guarantees.</p></div></section></main></div>
}

