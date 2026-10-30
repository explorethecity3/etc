import Link from 'next/link'
import IndiaTripBudgetCalculator from '@/components/IndiaTripBudgetCalculator'

export const metadata = {
  title: 'India Trip Budget Calculator: Daily Cost Estimate by City',
  description: 'Estimate accommodation, food, local transport and attraction costs for Bangalore, Mumbai, Goa, Delhi or Jaipur with transparent assumptions.',
  alternates: { canonical: 'https://www.explorethecity.in/india-trip-budget-calculator' },
}

export default function IndiaTripBudgetCalculatorPage() {
  const faq = { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:[
    ['Does the estimate include flights or trains?', 'No. The calculator covers costs after reaching the selected city: accommodation, food, local transport and activities.'],
    ['Are these live hotel prices?', 'No. The figures are planning assumptions, not live quotations. Actual rates vary by neighbourhood, season and booking date.'],
    ['Why does the calculator show a range?', 'A range is more honest than a single precise number because travel prices and personal choices vary.'],
  ].map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}})) }
  return <main className="min-h-screen bg-orange-50 pt-32 pb-20"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/><div className="container-custom max-w-6xl"><header className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-widest text-orange-700">Free planning tool</p><h1 className="mt-3 text-4xl font-extrabold md:text-6xl">India trip budget calculator</h1><p className="mt-5 text-lg leading-8 text-gray-700">Get a realistic planning range before booking. Choose a city, trip length and comfort level; every cost category remains visible so you can challenge the assumptions instead of trusting a mystery total.</p></header><div className="mt-12"><IndiaTripBudgetCalculator /></div><section className="mt-16 grid gap-6 md:grid-cols-3"><div className="rounded-2xl bg-white p-6"><h2 className="text-xl font-bold">Included</h2><p className="mt-3 leading-7 text-gray-700">Rooms, meals, movement within the city and a practical allowance for entry tickets or activities.</p></div><div className="rounded-2xl bg-white p-6"><h2 className="text-xl font-bold">Not included</h2><p className="mt-3 leading-7 text-gray-700">Flights, intercity trains, shopping, alcohol, visas, insurance and exceptional event pricing.</p></div><div className="rounded-2xl bg-white p-6"><h2 className="text-xl font-bold">Best use</h2><p className="mt-3 leading-7 text-gray-700">Compare travel styles, then check actual accommodation and transport prices before committing.</p></div></section><section className="mt-14 rounded-2xl border border-orange-200 bg-white p-7"><h2 className="text-2xl font-bold">Turn the budget into a workable day</h2><p className="mt-3 text-gray-700">Cost is only half the plan. Test whether your chosen stops fit the available hours and travel time.</p><Link href="/trip-checker" className="btn-primary mt-5 inline-block">Check my itinerary</Link></section></div></main>
}
