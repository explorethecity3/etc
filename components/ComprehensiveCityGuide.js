import Link from 'next/link'

const budgetColours = ['bg-emerald-50', 'bg-blue-50', 'bg-purple-50']

export default function ComprehensiveCityGuide({ city, editorial }) {
  const budget = editorial.budget

  return (
    <>
      <section id="plan" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How I would plan a first trip to {city.name}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">{editorial.attractionsIntro}</p>
        <p className="text-gray-700 leading-relaxed">{editorial.itinerary}</p>
      </section>

      <section id="places" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Places worth making time for</h2>
        <p className="text-gray-700 leading-relaxed mb-7">Treat this as a shortlist, not a race. Pick places that sit naturally together, check current entry arrangements, and keep enough time for the neighbourhood around each stop.</p>
        <div className="space-y-5">
          {city.topAttractions.map((place, index) => (
            <article key={place.name} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{index + 1}. {place.name}</h3>
              <p className="text-gray-700 leading-relaxed">{place.description}</p>
              {(place.timings || place.entryFee) && (
                <p className="mt-3 text-sm text-gray-600">
                  {place.timings && <span><strong>When:</strong> {place.timings}</span>}
                  {place.timings && place.entryFee && <span> · </span>}
                  {place.entryFee && <span><strong>Entry:</strong> {place.entryFee}</span>}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="food" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What to eat while you are here</h2>
        <p className="text-gray-700 leading-relaxed mb-7">{editorial.foodIntro}</p>
        <div className="grid md:grid-cols-2 gap-5">
          {city.localFood.map((food) => (
            <article key={food.name} className="rounded-xl bg-orange-50 p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{food.name}</h3>
              <p className="text-gray-700 leading-relaxed">{food.description}</p>
              {food.whereToTry && <p className="mt-3 text-sm text-gray-700"><strong>Good place to begin:</strong> {food.whereToTry}</p>}
              {food.price && <p className="mt-1 text-sm text-gray-700"><strong>Typical range:</strong> {food.price}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="best-time" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">When should you visit {city.name}?</h2>
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-7">{city.bestTimeToVisit}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {budget.seasons.map((season) => (
            <article key={season.name} className="rounded-xl bg-sky-50 p-5">
              <h3 className="font-bold text-gray-900 mb-2">{season.name}</h3>
              <p className="text-gray-700 leading-relaxed">{season.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="travel-tips" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The practical things I would want to know</h2>
        <p className="text-gray-700 leading-relaxed mb-7">{editorial.travelIntro}</p>
        <div className="space-y-5">
          {city.travelTips.map((group) => (
            <article key={group.category} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{group.category}</h3>
              <ul className="space-y-2 text-gray-700">
                {group.tips.map((tip) => <li key={tip}>• {tip}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="hidden-gems" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">A quieter side of {city.name}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{editorial.hiddenIntro}</p>
        <div className="space-y-3">
          {city.hiddenGems.map((gem) => {
            const [name, ...detail] = gem.split(' - ')
            return (
              <article key={gem} className="rounded-xl bg-teal-50 p-5">
                <h3 className="font-bold text-gray-900">{name}</h3>
                {detail.length > 0 && <p className="mt-1 text-gray-700 leading-relaxed">{detail.join(' - ')}</p>}
              </article>
            )
          })}
        </div>
        <p className="mt-5 text-gray-700 leading-relaxed">{editorial.hiddenPlanning}</p>
      </section>

      <section id="budget" className="mb-16 scroll-mt-36">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What a {city.name} trip actually costs</h2>
        <p className="text-2xl font-bold text-primary mb-4">{city.budgetEstimate}</p>
        {budget.comparison.map((paragraph) => <p key={paragraph} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>)}

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choose your base before your room</h3>
        <p className="text-gray-700 mb-5">{budget.neighbourhoodIntro}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-9">
          {budget.neighbourhoods.map((area) => (
            <article key={area.name} className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
              <h4 className="font-bold text-gray-900">{area.name}</h4>
              <p className="text-sm font-semibold text-primary mt-1 mb-2">{area.level}</p>
              <p className="text-gray-700 leading-relaxed">{area.detail}</p>
            </article>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Three realistic daily budgets</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-9">
          {budget.dailyBudgets.map((level, index) => (
            <article key={level.name} className={`rounded-xl p-5 ${budgetColours[index]}`}>
              <h4 className="font-bold text-gray-900">{level.name}</h4>
              <p className="text-xl font-extrabold text-primary my-2">{level.total}</p>
              <ul className="space-y-1 text-sm text-gray-700">{level.items.map((item) => <li key={item}>• {item}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <article className="rounded-xl bg-amber-50 p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Costs people often miss</h3>
            <ul className="space-y-2 text-gray-700">{budget.traps.map((item) => <li key={item}>• {item}</li>)}</ul>
          </article>
          <article className="rounded-xl bg-emerald-50 p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ways to spend less without spoiling the trip</h3>
            <ul className="space-y-2 text-gray-700">{budget.savings.map((item) => <li key={item}>• {item}</li>)}</ul>
          </article>
        </div>
      </section>

      <aside className="mb-14 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Before you book</h2>
        <p className="text-gray-700 leading-relaxed">Opening hours, entry rules, transport schedules and prices change. Use this guide to shape the trip, then confirm anything time-sensitive with the official operator or venue. If something here has changed, <Link href="/contact" className="font-semibold text-primary hover:underline">tell the editorial team</Link>.</p>
      </aside>
    </>
  )
}
