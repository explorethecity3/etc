import Link from 'next/link'

const TOOLS = [
  {
    href: '/trip-checker',
    eyebrow: 'Route feasibility',
    title: 'India Trip Reality Checker',
    description: 'Put stops in the order you intend to visit them. See where transfer time, area changes or an overloaded pace make the day unrealistic.',
    action: 'Check my itinerary',
  },
  {
    href: '/india-trip-budget-calculator',
    eyebrow: 'Cost planning',
    title: 'India Trip Budget Calculator',
    description: 'Compare transparent planning ranges for rooms, food, local transport and activities across five destinations and three travel styles.',
    action: 'Estimate my budget',
  },
  {
    href: '/trip-planner',
    eyebrow: 'Multi-day starting point',
    title: 'Free India Trip Planner',
    description: 'Create a private 1–5 day itinerary using reviewed destination data, your interests, preferred pace and approximate budget.',
    action: 'Build a trip',
  },
]

export const metadata = {
  title: 'Free India Travel Planning Tools | Explore The City',
  description: 'Use free India travel tools to test itinerary timing, estimate a city-trip budget and build a private multi-day starting plan.',
  alternates: { canonical: 'https://www.explorethecity.in/travel-tools' },
  openGraph: {
    title: 'Free India Travel Planning Tools',
    description: 'Check route feasibility, estimate costs and build a practical multi-day India itinerary.',
    url: 'https://www.explorethecity.in/travel-tools',
  },
}

export default function TravelToolsPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Explore The City travel tools',
    itemListElement: TOOLS.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.title,
      url: `https://www.explorethecity.in${tool.href}`,
    })),
  }

  return <main className="min-h-screen bg-orange-50 pt-32 pb-20">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    <div className="container-custom max-w-6xl">
      <header className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-orange-700">Free and private by design</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">India travel planning tools that explain their answers</h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">Start with the question you need answered now: will the day fit, how much should you allow, or what could a multi-day route look like? Each tool shows its assumptions and reminds you where live checks still matter.</p>
      </header>
      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {TOOLS.map((tool) => <article key={tool.href} className="flex flex-col rounded-3xl border border-orange-200 bg-white p-7 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700">{tool.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-extrabold">{tool.title}</h2>
          <p className="mt-4 flex-1 leading-7 text-gray-700">{tool.description}</p>
          <Link href={tool.href} className="btn-primary mt-7 text-center">{tool.action}</Link>
        </article>)}
      </section>
      <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
        <div><h2 className="text-3xl font-bold">Need destination context first?</h2><p className="mt-3 max-w-2xl text-gray-300">The tools estimate and organise. Our maintained guides explain neighbourhoods, seasons, food, transport and the trade-offs behind a practical route.</p></div>
        <Link href="/cities" className="mt-6 inline-block shrink-0 rounded-lg border border-white/30 px-6 py-3 font-bold hover:bg-white/10 md:mt-0">Browse city guides</Link>
      </section>
    </div>
  </main>
}
