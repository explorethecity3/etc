import Link from 'next/link'

export const metadata = {
  title: 'Explore The City Editorial Team | Author Profile',
  description: 'How the Explore The City editorial team researches, reviews and maintains its India travel guides and articles.',
  alternates: { canonical: 'https://www.explorethecity.in/authors/explore-the-city-editorial' },
  robots: { index: true, follow: true },
}

export default function EditorialProfilePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Explore The City Editorial',
    url: 'https://www.explorethecity.in/authors/explore-the-city-editorial',
    parentOrganization: { '@type': 'Organization', name: 'Explore The City', url: 'https://www.explorethecity.in' },
    knowsAbout: ['India travel', 'Indian city travel', 'Indian food and culture', 'Travel planning'],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="bg-gradient-to-r from-primary to-secondary py-20 pt-32 text-white">
        <div className="container-custom max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">Author and reviewer profile</p>
          <h1 className="text-4xl md:text-5xl font-bold">Explore The City Editorial</h1>
          <p className="mt-5 max-w-3xl text-xl text-white/90">The team responsible for researching, checking and maintaining our guides to eight Indian destinations.</p>
        </div>
      </header>

      <main className="container-custom py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <section>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">What we cover</h2>
            <p className="text-lg leading-relaxed text-gray-700">Our scope is practical travel in Bangalore, Mumbai, Goa, Delhi, Jaipur, Agra, Varanasi and Hyderabad, plus wider articles about travelling in India. We focus on attractions, neighbourhoods, food, transport, seasonal conditions, realistic budgets and the planning details that change a trip.</p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">How a guide is produced</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="rounded-lg bg-white p-5 shadow-sm"><strong>1. Scope.</strong> We identify the decisions a first-time visitor actually needs to make instead of beginning with a generic list.</li>
              <li className="rounded-lg bg-white p-5 shadow-sm"><strong>2. Local context.</strong> Recommendations are checked against local knowledge, visits and the geographic reality of moving around each destination.</li>
              <li className="rounded-lg bg-white p-5 shadow-sm"><strong>3. Fact check.</strong> Time-sensitive details such as prices, schedules and access are reviewed periodically and presented as changeable.</li>
              <li className="rounded-lg bg-white p-5 shadow-sm"><strong>4. Editorial review.</strong> Every page is checked for city accuracy, useful internal links and claims the page can support.</li>
              <li className="rounded-lg bg-white p-5 shadow-sm"><strong>5. Corrections.</strong> Reader reports are reviewed and incorporated when they can be verified.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Editorial principles</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-2 text-xl font-semibold">Accuracy over volume</h3><p className="text-gray-700">We maintain a small collection of useful guides instead of publishing thin pages for destinations we cannot cover properly.</p></div>
              <div className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-2 text-xl font-semibold">No disguised placement</h3><p className="text-gray-700">A business cannot pay to be described as an independent editorial recommendation. Any commercial relationship will be labelled.</p></div>
              <div className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-2 text-xl font-semibold">Useful limitations</h3><p className="text-gray-700">We state when information may change and avoid presenting planning estimates as guaranteed current prices.</p></div>
              <div className="rounded-lg bg-white p-6 shadow-sm"><h3 className="mb-2 text-xl font-semibold">Visible accountability</h3><p className="text-gray-700">Each maintained guide shows its review date and provides a direct route for reporting a correction.</p></div>
            </div>
          </section>

          <section className="rounded-xl bg-blue-50 p-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">Contact the editorial desk</h2>
            <p className="mb-5 text-gray-700">Found an outdated price, changed opening time or recommendation that needs another look? Include the page URL and the detail that changed.</p>
            <Link href="/contact" className="btn-primary inline-block">Report a correction</Link>
          </section>
        </div>
      </main>
    </div>
  )
}
