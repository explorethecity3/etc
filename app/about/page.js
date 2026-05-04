import Link from 'next/link'

export const metadata = {
  title: 'About Explore The City | A Bangalore-First Travel Guide',
  description: 'How ExploreTheCity.in is written and edited — first-hand visits, no AI listicles, no scraped reviews. Meet the people behind the Bangalore guide.',
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
            A small, independent travel publication. We started with one city — Bangalore — because we'd rather cover one place properly than ten places badly.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Why we exist */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why this site exists</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Search for anything about Bangalore and you'll find dozens of "Top 10 things to do" articles that read like they were rewritten from each other — because they were. Most are produced by content farms, recycled by AI, or written by people who've never actually visited the places they describe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ExploreTheCity.in is a deliberate response to that. Every page in our <Link href="/cities/bangalore" className="text-primary font-semibold hover:underline">Bangalore guide</Link> is written by someone who has been to that place, eaten at that restaurant, taken that auto-rickshaw, watched that sunrise. Where things change — a place shuts down, a neighbourhood loses its character — we update the page.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're not trying to be everything to everyone. We're trying to be the single most useful Bangalore resource on the internet for first-time visitors and curious locals.
            </p>
          </section>

          {/* Editorial standards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How we write our content</h2>
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">First-hand visits</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every attraction, restaurant, market and viewpoint we recommend has been visited in person. We note timings, fees and quirks based on what we observed — not on what other sites repeat.
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
                  We tell readers when we don't know something, when a recommendation is dated, or when something has changed since we last visited. We'd rather be useful and limited than comprehensive and wrong.
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

          {/* What's on the site */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What's on the site right now</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/cities/bangalore" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold text-primary mb-3">Bangalore Guide</h3>
                <p className="text-gray-600">
                  Our main project. A six-chapter, deeply researched guide to Bengaluru — attractions, food, hidden gems, best time to visit, budget and travel tips.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why only one city?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Most travel sites scale by adding cities they don't actually know. We're going the other way. We'll only add a new destination when we have someone on the team who can apply the same standard of first-hand research to it. That means slow growth, but content you can trust.
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
