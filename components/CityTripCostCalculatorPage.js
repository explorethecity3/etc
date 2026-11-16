import Link from 'next/link'
import IndiaTripBudgetCalculator from '@/components/IndiaTripBudgetCalculator'

export const CITY_CALCULATOR_CONTENT = {
  bangalore: {
    name: 'Bangalore',
    title: 'Bangalore Trip Cost Calculator: Budget by Days',
    description: 'Estimate a Bangalore trip budget for rooms, meals, Metro and local transport, sightseeing and activities. Adjust days, travellers and comfort level.',
    intro: 'Bangalore looks straightforward on a map, but room location and road travel can change the daily spend quickly. Use this calculator to set a planning range, then check the route before booking.',
    localCost: 'Metro-friendly sightseeing can control transport costs. Long cab journeys to Nandi Hills, the airport, Whitefield or Electronic City belong in a separate allowance.',
    watch: 'A cheaper room far from your planned neighbourhood can cost more once daily cab fares and traffic time are counted.',
    guideHref: '/cities/bangalore/budget',
    guideLabel: 'Read the Bangalore budget guide',
    routeHref: '/bangalore-guides/bangalore-one-day-metro-itinerary',
    routeLabel: 'Use the one-day Metro itinerary',
  },
  mumbai: {
    name: 'Mumbai',
    title: 'Mumbai Trip Cost Calculator: Budget by Days',
    description: 'Estimate a Mumbai trip budget for accommodation, food, local trains or taxis, sightseeing and activities. Adjust days, travellers and travel style.',
    intro: 'Mumbai budgets are shaped by where you stay. A room that looks cheaper can lose its advantage when every sightseeing day starts with a long cross-city journey.',
    localCost: 'Local trains and the Metro can keep routine travel affordable, while a well-chosen base near your main sightseeing area reduces both fares and tiring transfers.',
    watch: 'Accommodation, airport transfers and repeated north-to-south taxi journeys are the costs most likely to stretch an otherwise reasonable daily budget.',
    guideHref: '/cities/mumbai/budget',
    guideLabel: 'Read the Mumbai budget guide',
    routeHref: '/mumbai-guides/south-mumbai-walking-itinerary',
    routeLabel: 'Use the South Mumbai walking itinerary',
  },
  goa: {
    name: 'Goa',
    title: 'Goa Trip Cost Calculator for Couples & Groups',
    description: 'Calculate a Goa trip budget by days, travellers and travel style. Estimate accommodation, meals, local transport and activities before booking.',
    intro: 'Goa costs depend heavily on the beach, season and how often you cross between areas. Price the shared room first, then keep local transport and paid activities visible.',
    localCost: 'Staying near the beach and evening area you will actually use can reduce repeated taxi or rental costs. Peak dates can move room prices well outside normal ranges.',
    watch: 'Airport transfers, long beach-to-beach trips, nightlife and water sports should not disappear inside a vague daily allowance.',
    guideHref: '/cities/goa/budget',
    guideLabel: 'Read the Goa budget guide',
    routeHref: '/goa-guides/goa-trip-cost-for-couple',
    routeLabel: 'See couple budgets for 3, 5 and 7 days',
  },
  jaipur: {
    name: 'Jaipur',
    title: 'Jaipur Trip Cost Calculator: 2–5 Day Budget',
    description: 'Estimate a Jaipur trip budget for hotels, food, autos or a private car, fort tickets and activities. Adjust days, travellers and travel style.',
    intro: 'Jaipur can be affordable, but fort transfers, entry tickets and shopping often surprise first-time visitors. This estimate keeps those categories separate.',
    localCost: 'An Old City day is usually cheaper to move around than an Amber and Jaigarh day. Group nearby stops instead of paying for repeated cross-city transfers.',
    watch: 'Shopping varies too widely to include honestly. Set a separate limit for jewellery, textiles and crafts before entering the bazaars.',
    guideHref: '/cities/jaipur/budget',
    guideLabel: 'Read the Jaipur budget guide',
    routeHref: '/jaipur-guides/jaipur-old-city-walking-route',
    routeLabel: 'Follow the Old City walking route',
  },
  delhi: {
    name: 'Delhi',
    title: 'Delhi Trip Cost Calculator: Daily Travel Budget',
    description: 'Calculate a Delhi trip budget for stays, meals, Metro or local transport, monument tickets and activities. Adjust days, travellers and comfort level.',
    intro: 'Delhi can suit several budgets, but distant sightseeing clusters make careless routes expensive. Start with a realistic daily range, then keep each day within one part of the city.',
    localCost: 'Metro journeys and geographically grouped attractions usually cost less than a full day of cross-city cabs. Central accommodation can also save valuable morning travel time.',
    watch: 'Airport transfers, private cars, monument tickets and switching repeatedly between Old Delhi and southern attractions can move the total faster than meals do.',
    guideHref: '/cities/delhi/budget',
    guideLabel: 'Read the Delhi budget guide',
    routeHref: '/delhi-guides/delhi-tourist-places-by-metro',
    routeLabel: 'Plan sightseeing by Metro',
  },
}

export function getCityCalculatorMetadata(slug) {
  const city = CITY_CALCULATOR_CONTENT[slug]
  const url = `https://www.explorethecity.in/${slug}-trip-cost-calculator`
  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: url },
    openGraph: { title: city.title, description: city.description, url, type: 'website' },
  }
}

export default function CityTripCostCalculatorPage({ citySlug }) {
  const city = CITY_CALCULATOR_CONTENT[citySlug]
  const url = `https://www.explorethecity.in/${citySlug}-trip-cost-calculator`
  const questions = [
    [`Are these live ${city.name} prices?`, `No. These are transparent planning assumptions for ${city.name}, not live hotel, restaurant or transport quotations. Check prices for your exact dates before paying.`],
    ['Does the total include travel to the city?', 'No. Add flights, trains or intercity buses separately because the starting point and booking date change those costs significantly.'],
    ['Why does the result show a range?', 'The lower and upper figures allow for neighbourhood, season, weekends, booking time and small changes during the trip.'],
    ['What should I add as an emergency buffer?', 'Keep at least 10% to 20% above the planning range for price changes, extra meals, short rides and unexpected changes.'],
  ]
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'WebApplication', name: `${city.name} Trip Cost Calculator`, url, applicationCategory: 'TravelApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, description: city.description },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ]

  return <main className="min-h-screen bg-orange-50 pt-32 pb-20">
    {structuredData.map((data, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />)}
    <div className="container-custom max-w-6xl">
      <header className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-orange-700">Free, no-sign-up planning tool</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">{city.name} trip cost calculator</h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">{city.intro}</p>
      </header>
      <div className="mt-12"><IndiaTripBudgetCalculator initialCity={citySlug} fixedCity /></div>
      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Where the estimate can stay lean</h2><p className="mt-3 leading-7 text-gray-700">{city.localCost}</p></article>
        <article className="rounded-2xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">The cost people miss</h2><p className="mt-3 leading-7 text-gray-700">{city.watch}</p></article>
      </section>
      <section className="mt-14 rounded-2xl bg-slate-950 p-7 text-white md:p-9">
        <h2 className="text-3xl font-extrabold">Put the number into a workable plan</h2>
        <p className="mt-3 max-w-3xl leading-7 text-gray-300">A sensible total still needs a sensible route. Use the maintained city notes for local context, then check whether your stops fit the hours available.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link href={city.guideHref} className="rounded-full bg-white px-5 py-3 font-bold text-slate-900">{city.guideLabel}</Link><Link href={city.routeHref} className="rounded-full border border-white/30 px-5 py-3 font-bold">{city.routeLabel}</Link><Link href="/trip-checker" className="rounded-full border border-white/30 px-5 py-3 font-bold">Check itinerary timing</Link></div>
      </section>
      <section className="mt-14"><h2 className="text-3xl font-extrabold">Questions about the {city.name} estimate</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{questions.map(([question, answer]) => <article key={question} className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-lg font-bold">{question}</h3><p className="mt-3 leading-7 text-gray-700">{answer}</p></article>)}</div></section>
      <p className="mt-12 text-center text-sm text-gray-600">Want to compare destinations? <Link href="/india-trip-budget-calculator" className="font-bold text-orange-700 hover:underline">Open the India trip budget calculator</Link>.</p>
    </div>
  </main>
}
