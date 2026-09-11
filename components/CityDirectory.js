'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { FaBookOpen, FaSearch } from 'react-icons/fa'

export default function CityDirectory({ cities }) {
  const [query, setQuery] = useState('')
  const [tier, setTier] = useState('all')
  const [state, setState] = useState('all')

  const states = useMemo(
    () => [...new Set(cities.map((city) => city.state))].sort((a, b) => a.localeCompare(b)),
    [cities],
  )

  const visibleCities = useMemo(() => {
    const search = query.trim().toLowerCase()
    return cities.filter((city) => {
      const matchesText = !search || `${city.name} ${city.state}`.toLowerCase().includes(search)
      return matchesText && (tier === 'all' || city.tier === Number(tier)) && (state === 'all' || city.state === state)
    })
  }, [cities, query, tier, state])

  return (
    <div>
      <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_180px_240px]">
          <label className="relative block">
            <span className="sr-only">Search by city or state</span>
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Mysuru, Assam or Udaipur" className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200" />
          </label>
          <label>
            <span className="sr-only">Filter by tier</span>
            <select value={tier} onChange={(event) => setTier(event.target.value)} className="w-full rounded-xl border border-gray-300 bg-white p-3 text-base">
              <option value="all">Every tier</option>
              <option value="1">Tier 1</option>
              <option value="2">Tier 2</option>
              <option value="3">Tier 3</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Filter by state</span>
            <select value={state} onChange={(event) => setState(event.target.value)} className="w-full rounded-xl border border-gray-300 bg-white p-3 text-base">
              <option value="all">Every state and UT</option>
              {states.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>
        <p className="mt-4 text-sm text-gray-600" aria-live="polite">
          {visibleCities.length === 1 ? 'One city matches.' : `${visibleCities.length} cities match.`} Cities marked “full guide” also work in the itinerary planner.
        </p>
      </div>

      {visibleCities.length ? (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleCities.map((city) => (
            <li key={`${city.name}-${city.state}`} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{city.name}</h2>
                  <p className="mt-1 text-sm text-gray-600">{city.state}</p>
                </div>
                <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-700">Tier {city.tier}</span>
              </div>
              {city.hasGuide ? (
                <Link href={`/cities/${city.slug}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-orange-700 hover:underline"><FaBookOpen aria-hidden="true" /> Read the full guide</Link>
              ) : (
                <p className="mt-4 text-sm text-gray-500">It’s on our research list. We’ll add a guide when there’s something genuinely useful to publish.</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <h2 className="text-xl font-bold text-gray-900">No match this time</h2>
          <p className="mt-2 text-gray-600">Try a nearby city, remove a filter, or search by state.</p>
        </div>
      )}
    </div>
  )
}

