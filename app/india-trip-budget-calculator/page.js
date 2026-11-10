import Link from 'next/link'
import IndiaTripBudgetCalculator from '@/components/IndiaTripBudgetCalculator'

export const metadata = {
  title: 'India Trip Budget Calculator: Estimate Costs by City',
  description: 'Free India trip budget calculator for Bangalore, Mumbai, Goa, Delhi and Jaipur. Compare stays, food, transport and activities by travel style.',
  alternates: { canonical: 'https://www.explorethecity.in/india-trip-budget-calculator' },
  openGraph: {
    title: 'Free India Trip Budget Calculator',
    description: 'Estimate a realistic India travel budget by city, trip length, travellers and comfort level.',
    url: 'https://www.explorethecity.in/india-trip-budget-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free India Trip Budget Calculator',
    description: 'Compare accommodation, food, local transport and activity costs for five popular Indian destinations.',
  },
}

export default function IndiaTripBudgetCalculatorPage() {
  const questions = [
    ['Does the estimate include flights or trains?', 'No. The calculator covers costs after reaching the selected city: accommodation, food, local transport and activities.'],
    ['Are these live hotel prices?', 'No. The figures are planning assumptions, not live quotations. Actual rates vary by neighbourhood, season and booking date.'],
    ['Why does the calculator show a range?', 'A range is more honest than a single precise number because travel prices and personal choices vary.'],
    ['How much money should I keep aside for unexpected costs?', 'Keep at least 10% to 20% above the planned total for price changes, short taxi rides, extra meals and small changes to the itinerary.'],
    ['Which Indian cities can I calculate?', 'The calculator currently supports Bangalore, Mumbai, Goa, Delhi and Jaipur, with different assumptions for each city.'],
  ]
  const faq = { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:questions.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}})) }
  const application = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'India Trip Budget Calculator',
    url: 'https://www.explorethecity.in/india-trip-budget-calculator',
    applicationCategory: 'TravelApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'A free calculator that estimates accommodation, food, local transport and activity costs for five Indian destinations.',
  }
  return <main className="min-h-screen bg-orange-50 pt-32 pb-20"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(application)}}/><div className="container-custom max-w-6xl"><header className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-widest text-orange-700">Free planning tool</p><h1 className="mt-3 text-4xl font-extrabold md:text-6xl">India trip budget calculator</h1><p className="mt-5 text-lg leading-8 text-gray-700">Get a realistic planning range before booking. Choose a city, trip length and comfort level; every cost category remains visible so you can challenge the assumptions instead of trusting a mystery total.</p></header><div className="mt-12"><IndiaTripBudgetCalculator /></div><section className="mt-16 grid gap-6 md:grid-cols-3"><div className="rounded-2xl bg-white p-6"><h2 className="text-xl font-bold">Included</h2><p className="mt-3 leading-7 text-gray-700">Rooms, meals, movement within the city and a practical allowance for entry tickets or activities.</p></div><div className="rounded-2xl bg-white p-6"><h2 className="text-xl font-bold">Not included</h2><p className="mt-3 leading-7 text-gray-700">Flights, intercity trains, shopping, alcohol, visas, insurance and exceptional event pricing.</p></div><div className="rounded-2xl bg-white p-6"><h2 className="text-xl font-bold">Best use</h2><p className="mt-3 leading-7 text-gray-700">Compare travel styles, then check actual accommodation and transport prices before committing.</p></div></section><section className="mt-14 rounded-2xl bg-slate-950 p-7 text-white md:p-9"><p className="text-sm font-bold uppercase tracking-widest text-orange-300">City costs are not interchangeable</p><h2 className="mt-2 text-3xl font-extrabold">Start with the city, then adjust the travel style</h2><p className="mt-4 max-w-4xl leading-7 text-gray-300">A Mumbai room often takes a larger share of the budget, while getting around Goa can cost more when beaches and accommodation are far apart. Jaipur and Delhi reward sensible attraction clusters; Bangalore rewards avoiding long road transfers. Use the estimate as a starting point, then read the destination guide before booking.</p><div className="mt-6 flex flex-wrap gap-3">{[['Bangalore','bangalore'],['Mumbai','mumbai'],['Goa','goa'],['Delhi','delhi'],['Jaipur','jaipur']].map(([name,slug])=><Link key={slug} href={`/cities/${slug}/budget`} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900">{name} budget guide</Link>)}</div></section><section className="mt-14 rounded-2xl border border-orange-200 bg-white p-7"><h2 className="text-2xl font-bold">Turn the budget into a workable day</h2><p className="mt-3 text-gray-700">Cost is only half the plan. Test whether your chosen stops fit the available hours and travel time.</p><Link href="/trip-checker" className="btn-primary mt-5 inline-block">Check my itinerary</Link></section><section className="mt-14"><h2 className="text-3xl font-extrabold text-gray-900">Questions about the estimate</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{questions.map(([question,answer])=><article key={question} className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-lg font-bold text-gray-900">{question}</h3><p className="mt-3 leading-7 text-gray-700">{answer}</p></article>)}</div></section></div></main>
}
