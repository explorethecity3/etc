import Link from 'next/link'

export const metadata = {
  title: 'About Explore The City | Locally-Written India Travel Guides',
  description: 'How ExploreTheCity.in researches, checks and edits its independent guides to Indian destinations.',
  alternates: {
    canonical: 'https://www.explorethecity.in/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-20 pt-32">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Explore The City</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            A small, independent travel-planning project. Our Reality Checker currently supports five destinations while we review and structure each city carefully.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Why we exist */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why this site exists</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Search for almost any Indian city and you will meet the same short list repeated across dozens of pages. We want to do something more useful: explain how places fit together, what can derail a day, and which details you should verify before leaving.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ExploreTheCity.in is a deliberate response to that. Our guides combine direct experience where available with official tourism and monument sources, current transport information and careful editorial review. We separate durable planning advice from details that visitors should reconfirm, such as fees, opening hours and seasonal access.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are not trying to cover every destination. We are building a useful feasibility tool for a small supported set, then expanding only when the underlying planning data is ready.
            </p>
          </section>

          {/* Editorial standards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How we write our content</h2>
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">First-hand visits</h3>
                <p className="text-gray-700 leading-relaxed">
                  We research each guide from reliable public sources, compare details across references and edit for real trip-planning decisions. When we have firsthand notes, we identify them; we never invent a visit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No AI-written listicles</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use tools where they help (spelling, grammar, formatting), but the substance — opinions, recommendations, descriptions of what a place feels like — is human-written by people on the ground in Bangalore.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No paid placements disguised as recommendations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Restaurants, hotels and attractions can't pay to appear higher in our guides. We don't run sponsored posts. If we ever do partner with anyone commercially, it will be clearly labelled as such on the page itself.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Honest about limits</h3>
                <p className="text-gray-700 leading-relaxed">
                  We tell readers when access is uncertain, when a price needs checking or when a recommendation may be seasonal. We would rather be useful and limited than comprehensive and wrong.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Corrections welcomed</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you spot an error — wrong timings, an outdated price, a place that's closed — please write to us via the <Link href="/contact" className="text-primary font-semibold hover:underline">Contact</Link> page. We update fast.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 rounded-xl border border-blue-200 bg-blue-50 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who reviews the guides</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              City guides and articles are published and maintained by Explore The City Editorial. Each maintained city page identifies its review date and links to our correction process so readers can evaluate who is responsible for the information and how it is kept current.
            </p>
            <Link href="/authors/explore-the-city-editorial" className="btn-primary inline-block">
              Meet the editorial team
            </Link>
          </section>

          {/* What's on the site */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What's on the site right now</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/cities/bangalore" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-primary mb-3">Bangalore Guide</h3>
                <p className="text-gray-600">
                  A six-chapter, deeply researched guide to Bengaluru — attractions, food, hidden gems, best time to visit, budget and travel tips.
                </p>
              </Link>
              <Link href="/cities/mumbai" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-primary mb-3">Mumbai Guide</h3>
                <p className="text-gray-600">
                  The same six-chapter treatment for India's coastal megacity — landmarks, street food, the local trains, hidden corners and day trips.
                </p>
              </Link>
              <Link href="/cities/goa" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-primary mb-3">Goa Guide</h3>
                <p className="text-gray-600">
                  Beaches, Portuguese-era churches, Goan food and feni, the North-versus-South question, and the hidden corners beyond the tourist beaches.
                </p>
              </Link>
              <Link href="/blog" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-primary mb-3">Travel Articles</h3>
                <p className="text-gray-600">
                  Long-form articles on broader India travel topics — train journeys, monsoon travel, street food, festivals, solo travel safety and budget itineraries.
                </p>
              </Link>
            </div>
          </section>

          {/* Future cities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why so few cities?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We currently maintain checker data for Bangalore, Mumbai, Goa, Delhi and Jaipur. A destination is added only when we can provide substantial, city-specific planning help and a repeatable fact-checking process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you live in another Indian city and want to write the same kind of guide — please <Link href="/contact" className="text-primary font-semibold hover:underline">reach out</Link>.
            </p>
          </section>

          {/* Contact CTA */}
          <section className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions, corrections, or feedback?</h2>
            <p className="text-gray-600 mb-6">
              We read every message. Tell us what we got right, what we got wrong, or what you'd like us to cover next.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
