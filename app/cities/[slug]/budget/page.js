import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CitySubmenu from '@/components/CitySubmenu'
import { getCityData } from '@/lib/cityData'
import { FaMoneyBillWave } from 'react-icons/fa'

function BudgetStructuredData({ city }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Budget Estimate for ${city.name}`,
    description: `Detailed budget guide and cost estimates for traveling to ${city.name}, ${city.state}`,
    image: city.image,
    author: {
      '@type': 'Organization',
      name: 'Explore The City',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Explore The City',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.explorethecity.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.explorethecity.in/cities/${city.slug}/budget`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function BudgetPage({ params }) {
  const city = getCityData(params.slug)

  if (!city) {
    notFound()
  }

  return (
    <div>
      {/* Structured Data for SEO */}
      <BudgetStructuredData city={city} />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={city.image}
          alt={`${city.name} budget guide - Travel costs and expenses for ${city.state}`}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{city.name}</h1>
            <p className="text-xl md:text-2xl">{city.state}</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            {' / '}
            <Link href="/cities" className="hover:text-primary">Cities</Link>
            {' / '}
            <Link href={`/cities/${city.slug}`} className="hover:text-primary">{city.name}</Link>
            {' / '}
            <span className="text-gray-800">Budget</span>
          </div>
        </div>
      </div>

      {/* Submenu Navigation */}
      <CitySubmenu citySlug={city.slug} />

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Budget Estimate */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FaMoneyBillWave className="text-green-600 text-3xl mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Budget Estimate for {city.name}</h2>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <p className="text-gray-700 text-3xl font-bold mb-3">{city.budgetEstimate}</p>
                <p className="text-gray-600 text-base">
                  This is a mid-range two-person daily spend including accommodation, food, local transport and entry fees. The sections below break this down by neighbourhood, by traveller type (backpacker / mid-range / premium), and call out the costs first-time visitors rarely budget for.
                </p>
              </div>
            </section>

            {/* How Bangalore Compares */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How {city.name} compares to other Indian cities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {city.name} sits in the middle of India's price spectrum — meaningfully cheaper than Mumbai or central Delhi, but
                noticeably pricier than smaller cities like Kochi, Pune or Indore. Hotel rates have crept up steadily over the last
                five years, mostly because the city's tech crowd keeps weekend demand high. Food, on the other hand, is still one
                of {city.name}'s best bargains: you can eat extremely well for ₹150 a meal at darshini-style spots, and even a
                proper sit-down meal at MTR rarely crosses ₹400 per person.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Two factors push the daily spend up if you're not careful: cab rides (the city is geographically huge — Whitefield
                to MG Road can hit ₹500 in surge) and weekend brunch culture (a single café meal in Indiranagar with a coffee and
                dessert easily crosses ₹800). Plan transport with the metro where you can, and your budget will go a lot further.
              </p>
            </section>

            {/* Cost by Neighbourhood */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cost by neighbourhood</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Where you stay in {city.name} swings your daily spend more than anything else. A mid-range hotel in MG Road and
                the "same" hotel in Whitefield are often 30–40% apart in price, and the time and cab fare you'll burn commuting
                widen the gap further.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                  <h3 className="font-bold text-gray-900 mb-1">Whitefield &amp; Outer Ring Road — premium</h3>
                  <p className="text-gray-700">
                    Hotels here are built for corporate visitors. Marriott, Sheraton, ITC and a long list of business hotels run
                    ₹6,000–15,000/night midweek and stay high on weekends. Skip this side of town unless your meetings are here —
                    you'll spend an hour and ₹400 each way getting to the actual city.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-orange-500">
                  <h3 className="font-bold text-gray-900 mb-1">Indiranagar &amp; Koramangala — mid to high</h3>
                  <p className="text-gray-700">
                    Boutique hotels and serviced apartments at ₹3,500–7,000/night. Walkable to cafés, breweries and 100ft Road
                    nightlife. Food costs here run higher than the rest of the city — a casual brunch with a coffee can hit ₹1,000
                    per person — but the convenience is worth it for short trips.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-yellow-500">
                  <h3 className="font-bold text-gray-900 mb-1">MG Road / Brigade Road / Church Street — mid</h3>
                  <p className="text-gray-700">
                    The classic central zone. Three- and four-star hotels at ₹2,500–5,000/night, on the metro line, and a short
                    walk from Cubbon Park and most museums. Best balance of price, location and food options for a first-time
                    visitor.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900 mb-1">Majestic, Gandhinagar &amp; Frazer Town — budget</h3>
                  <p className="text-gray-700">
                    Around the railway and bus station you'll find no-frills lodges at ₹800–1,500/night. Hostels in Cooke Town and
                    Frazer Town (Zostel, goSTOPS, The Hosteller) run ₹500–900 for a dorm bed and are a much nicer experience than
                    the Majestic budget hotels, which can be hit-or-miss.
                  </p>
                </div>
              </div>
            </section>

            {/* Sample Day Budgets */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">A realistic day in {city.name} at three price points</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Numbers below assume two people splitting accommodation and cabs, doing 2–3 attractions in the day, eating three
                meals and one café/snack stop. Solo travellers should expect their per-person spend to land roughly 20–30% higher
                because the accommodation isn't shared.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🎒 Backpacker</h3>
                  <p className="text-2xl font-extrabold text-green-700 mb-3">₹1,500 – ₹2,500</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Hostel dorm bed ₹700</li>
                    <li>• Idli + filter coffee breakfast ₹80</li>
                    <li>• Darshini lunch ₹150</li>
                    <li>• Street food + dinner ₹250</li>
                    <li>• Metro + auto + Namma Yatri ₹200</li>
                    <li>• 2 attractions entry ₹100</li>
                    <li>• Buffer / chai stops ₹100</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🛏️ Mid-range</h3>
                  <p className="text-2xl font-extrabold text-blue-700 mb-3">₹3,000 – ₹4,500</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 3-star hotel (split) ₹1,800</li>
                    <li>• Café breakfast ₹300</li>
                    <li>• MTR / Mavalli Tiffin lunch ₹400</li>
                    <li>• Sit-down dinner ₹600</li>
                    <li>• Uber/Ola through the day ₹500</li>
                    <li>• 3 attractions + Lalbagh ₹300</li>
                    <li>• Coffee/dessert ₹200</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">✨ Premium</h3>
                  <p className="text-2xl font-extrabold text-purple-700 mb-3">₹8,000 – ₹15,000+</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 5-star hotel (split) ₹5,000</li>
                    <li>• Hotel/café breakfast ₹600</li>
                    <li>• Fine-dining lunch ₹1,500</li>
                    <li>• Brewery + dinner ₹2,500</li>
                    <li>• Cabs / chauffeur ₹1,500</li>
                    <li>• Attractions + private guide ₹1,500</li>
                    <li>• Spa / shopping buffer ₹2,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hidden Costs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Costs first-time visitors don't expect</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-gray-800 leading-relaxed">
                  These aren't dealbreakers, but they're the things that quietly stretch a {city.name} budget if you don't plan
                  for them.
                </p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Cab surge on rainy evenings.</strong> The minute it starts to drizzle, Uber and Ola fares can double.
                  Switch to the Namma Yatri app for autos — drivers there go on the meter and surge less.</li>
                <li><strong>Airport-to-city transfer.</strong> Kempegowda International Airport is 40 km north. A cab is
                  ₹800–1,200; the BMTC Vayu Vajra AC bus is ₹250 and runs every 20 minutes — significantly underused by visitors.</li>
                <li><strong>Café "service charge" creep.</strong> Many Indiranagar and Koramangala cafés add 5–10% service charge
                  on top of GST. Indian rules say it's optional, but the bill is printed before you can object.</li>
                <li><strong>Weekend hotel pricing.</strong> Rates can spike 30–50% on Friday and Saturday nights, especially near
                  the airport and around big concert/IPL dates. Book midweek where possible.</li>
                <li><strong>Drinking water + small change.</strong> Tap water isn't safe to drink. Budget ₹40–60 a day for bottled
                  water, and keep ₹100/₹200 notes around — small vendors rarely have change for ₹500.</li>
                <li><strong>Entry fees at "free" spots.</strong> Lalbagh and Cubbon Park are free for foot entry but charge for
                  vehicle parking, photography permits and special exhibitions. Usually under ₹100, but it adds up.</li>
              </ul>
            </section>

            {/* Where Locals Save Money */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Where locals quietly save money</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're trying to keep the daily spend down without compromising on the {city.name} experience, copy what
                locals do:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Eat at darshinis.</strong> These standing-room South Indian fast-food joints — CTR in Malleswaram,
                  Brahmin's Coffee Bar in Shankarpuram, SLV across the city — serve breakfast and lunch for ₹50–150. Better food
                  than most tourist restaurants at one-fifth the price.</li>
                <li><strong>Take the metro, not the cab.</strong> The Purple and Green lines now cover most of the central
                  attractions. ₹20–50 a ride versus ₹200–500 for the same trip by car, and it's faster in traffic.</li>
                <li><strong>Buy the BMTC day pass.</strong> ₹70 for unlimited rides on non-AC buses, ₹140 for the AC Vajra
                  buses. Excellent value if you're moving around to several attractions in one day.</li>
                <li><strong>Visit attractions on government holidays.</strong> Many museums and palace properties have free entry
                  on Republic Day, Independence Day and World Heritage Day (April 18).</li>
                <li><strong>VV Puram Food Street for dinner.</strong> Around ₹50–80 per dish, dozens of vendors, far better than
                  any ₹600 hotel dinner. Open evenings only, busiest after 7 PM.</li>
              </ul>
            </section>

            {/* Seasonal Pricing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How prices change by season</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {city.name} doesn't have the dramatic shoulder-season price drops of, say, Goa or Manali, but the swings are
                still real — about 30% between cheapest and most expensive months.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-1">Peak (mid-Dec → early Jan)</h3>
                  <p className="text-gray-700 text-sm">
                    Christmas, New Year, year-end conferences. Hotel rates spike 40–60%. Book at least 6 weeks out or expect to
                    pay ₹3,000+ even for budget chains.
                  </p>
                </div>
                <div className="bg-orange-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-1">High (Oct – mid-Dec, Feb)</h3>
                  <p className="text-gray-700 text-sm">
                    Best weather, lots of festivals, conference season. Prices 10–20% above baseline. Worth it for the climate.
                  </p>
                </div>
                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-1">Shoulder (Mar – May)</h3>
                  <p className="text-gray-700 text-sm">
                    {city.name}'s summer is mild (rarely above 35°C), so hotels stay reasonable. Decent time to visit if you
                    don't mind the warmer afternoons.
                  </p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-1">Low (Jun – Sept monsoon)</h3>
                  <p className="text-gray-700 text-sm">
                    Cheapest rates of the year — discounts of 25–35% on mid-range hotels. The city stays functional through rain
                    (unlike Mumbai), but plan for traffic. Excellent value if you don't mind getting wet.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-32">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Facts</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">State</p>
                  <p className="font-semibold text-gray-800">{city.state}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Top Attractions</p>
                  <p className="font-semibold text-gray-800">{city.attractions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Best Time</p>
                  <p className="font-semibold text-gray-800">{city.bestTimeToVisitShort || city.bestTimeToVisit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Budget Range</p>
                  <p className="font-semibold text-gray-800">{city.budgetEstimate.split('(')[0]}</p>
                </div>
                {city.lastUpdated && (
                  <div>
                    <p className="text-sm text-gray-600">Last Updated</p>
                    <p className="font-semibold text-gray-800">{city.lastUpdated}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link href="/cities" className="btn-primary w-full text-center block">
                  Explore More Cities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
