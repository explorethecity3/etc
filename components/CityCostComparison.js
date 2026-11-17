'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { calculateTripBudget, CITY_RATES, formatTripCurrency, TRAVEL_STYLES } from '@/lib/tripBudgetModel'

const CATEGORIES = [
  ['Accommodation', 'accommodation'],
  ['Food', 'food'],
  ['Local transport', 'transport'],
  ['Attractions and activities', 'activities'],
]

export default function CityCostComparison() {
  const [cityA, setCityA] = useState('goa')
  const [cityB, setCityB] = useState('jaipur')
  const [days, setDays] = useState(3)
  const [travellers, setTravellers] = useState(2)
  const [style, setStyle] = useState(1)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const first = params.get('first')
    const second = params.get('second')
    const sharedDays = Number(params.get('days'))
    const sharedTravellers = Number(params.get('travellers'))
    const sharedStyle = Number(params.get('style'))
    if (first && second && first !== second && CITY_RATES[first] && CITY_RATES[second]) {
      setCityA(first)
      setCityB(second)
    }
    if (sharedDays >= 1 && sharedDays <= 14) setDays(sharedDays)
    if (sharedTravellers >= 1 && sharedTravellers <= 10) setTravellers(sharedTravellers)
    if (sharedStyle >= 0 && sharedStyle <= 2) setStyle(sharedStyle)
  }, [])

  const firstResult = useMemo(() => calculateTripBudget(cityA, days, travellers, style), [cityA, days, travellers, style])
  const secondResult = useMemo(() => calculateTripBudget(cityB, days, travellers, style), [cityB, days, travellers, style])
  const cheaperCity = firstResult.subtotal <= secondResult.subtotal ? cityA : cityB
  const higherTotal = Math.max(firstResult.subtotal, secondResult.subtotal)
  const difference = Math.abs(firstResult.subtotal - secondResult.subtotal)
  const percentage = higherTotal ? Math.round((difference / higherTotal) * 100) : 0
  const biggestDifference = CATEGORIES.map(([label, key]) => ({ label, difference: Math.abs(firstResult[key] - secondResult[key]) })).sort((a, b) => b.difference - a.difference)[0]

  function track(name, parameters = {}) {
    if (typeof window.gtag === 'function') window.gtag('event', name, parameters)
  }

  function swapCities() {
    setCityA(cityB)
    setCityB(cityA)
    setStatus('')
    track('city_cost_comparison_swapped', { first_city: cityB, second_city: cityA })
  }

  async function copyComparison() {
    const params = new URLSearchParams({ first: cityA, second: cityB, days: String(days), travellers: String(travellers), style: String(style) })
    const url = `${window.location.origin}/compare-city-trip-costs?${params.toString()}`
    try {
      await navigator.clipboard.writeText(url)
      setStatus('Shareable comparison link copied.')
      track('city_cost_comparison_shared', { first_city: cityA, second_city: cityB, days, travellers, travel_style: TRAVEL_STYLES[style].name })
    } catch {
      setStatus('Could not copy automatically. Copy the page address instead.')
    }
  }

  return <div>
    <section className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <label className="font-bold">First city<select value={cityA} onChange={(event) => { setCityA(event.target.value); setStatus('') }} className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3">{Object.entries(CITY_RATES).map(([slug, item]) => <option key={slug} value={slug} disabled={slug === cityB}>{item.name}</option>)}</select></label>
        <button type="button" onClick={swapCities} className="rounded-xl border border-orange-300 px-5 py-3 font-bold text-orange-900 hover:bg-orange-50" aria-label="Swap compared cities">Swap</button>
        <label className="font-bold">Second city<select value={cityB} onChange={(event) => { setCityB(event.target.value); setStatus('') }} className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3">{Object.entries(CITY_RATES).map(([slug, item]) => <option key={slug} value={slug} disabled={slug === cityA}>{item.name}</option>)}</select></label>
      </div>
      <div className="mt-7 grid gap-5 sm:grid-cols-3">
        <label className="font-bold">Days<input type="number" min="1" max="14" value={days} onChange={(event) => setDays(Math.min(14, Math.max(1, Number(event.target.value) || 1)))} className="mt-2 w-full rounded-xl border border-gray-300 p-3" /></label>
        <label className="font-bold">Travellers<input type="number" min="1" max="10" value={travellers} onChange={(event) => setTravellers(Math.min(10, Math.max(1, Number(event.target.value) || 1)))} className="mt-2 w-full rounded-xl border border-gray-300 p-3" /></label>
        <label className="font-bold">Travel style<select value={style} onChange={(event) => setStyle(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3">{TRAVEL_STYLES.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
      </div>
    </section>

    <section aria-live="polite" className="mt-8 grid gap-6 lg:grid-cols-2">
      {[[cityA, firstResult], [cityB, secondResult]].map(([slug, result]) => <article key={slug} className={`rounded-3xl p-7 text-white ${slug === cheaperCity ? 'bg-orange-600' : 'bg-slate-950'}`}>
        <p className="text-sm font-bold uppercase tracking-widest opacity-80">{slug === cheaperCity ? 'Lower estimate' : 'Comparison estimate'}</p>
        <h2 className="mt-2 text-3xl font-extrabold">{CITY_RATES[slug].name}</h2>
        <p className="mt-4 text-3xl font-extrabold md:text-4xl">{formatTripCurrency(result.low)}–{formatTripCurrency(result.high)}</p>
        <div className="mt-7 space-y-3">{CATEGORIES.map(([label, key]) => <div key={key} className="flex justify-between gap-4 border-b border-white/20 pb-3"><span className="opacity-80">{label}</span><strong>{formatTripCurrency(result[key])}</strong></div>)}</div>
        <Link href={`/${slug}-trip-cost-calculator?days=${days}&travellers=${travellers}&style=${style}`} className="mt-6 inline-block rounded-full bg-white px-5 py-3 font-bold text-slate-900">Open {CITY_RATES[slug].name} calculator</Link>
      </article>)}
    </section>

    <section className="mt-8 rounded-3xl border border-orange-200 bg-white p-7 md:p-9">
      <p className="text-sm font-bold uppercase tracking-widest text-orange-700">What drives the difference</p>
      <h2 className="mt-2 text-3xl font-extrabold">{CITY_RATES[cheaperCity].name} is about {formatTripCurrency(difference)} lower in this model</h2>
      <p className="mt-4 leading-7 text-gray-700">That is roughly {percentage}% below the higher estimate. The largest category gap is <strong>{biggestDifference.label.toLowerCase()}</strong> at {formatTripCurrency(biggestDifference.difference)}. This comparison uses identical days, travellers and travel style for both cities.</p>
      <p className="mt-3 leading-7 text-gray-700">It is a planning comparison, not a live quote. Dates, neighbourhood, transport choices and seasonal room rates can reverse the result.</p>
      <button type="button" onClick={copyComparison} className="btn-primary mt-6">Copy comparison link</button>
      {status && <p role="status" className="mt-3 text-sm font-medium text-orange-800">{status}</p>}
    </section>
  </div>
}
