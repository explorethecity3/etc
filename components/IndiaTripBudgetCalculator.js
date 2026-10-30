'use client'

import { useMemo, useState } from 'react'

const CITY_RATES = {
  bangalore: { name: 'Bangalore', room: [1600, 3000, 6000], food: [700, 1400, 2600], transport: [350, 750, 1500], activities: [250, 700, 1600] },
  mumbai: { name: 'Mumbai', room: [2400, 4800, 9000], food: [800, 1700, 3200], transport: [450, 1000, 2000], activities: [300, 900, 2000] },
  goa: { name: 'Goa', room: [1900, 3800, 7500], food: [800, 1600, 3000], transport: [550, 1200, 2300], activities: [350, 1000, 2400] },
  delhi: { name: 'Delhi', room: [1700, 3400, 6800], food: [700, 1500, 2800], transport: [350, 800, 1700], activities: [300, 800, 1800] },
  jaipur: { name: 'Jaipur', room: [1400, 2800, 5600], food: [600, 1200, 2400], transport: [400, 900, 1700], activities: [350, 900, 1900] },
}

const STYLES = [
  { id: 0, name: 'Budget', detail: 'Simple room, local meals and public transport where practical' },
  { id: 1, name: 'Comfortable', detail: 'Well-reviewed mid-range stay, mixed transport and paid attractions' },
  { id: 2, name: 'Premium', detail: 'Upscale stay, private transfers and more paid experiences' },
]

const format = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

export default function IndiaTripBudgetCalculator() {
  const [city, setCity] = useState('jaipur')
  const [days, setDays] = useState(3)
  const [travellers, setTravellers] = useState(2)
  const [style, setStyle] = useState(1)

  const result = useMemo(() => {
    const rates = CITY_RATES[city]
    const rooms = Math.ceil(travellers / 2)
    const nights = Math.max(1, days - 1)
    const accommodation = rates.room[style] * rooms * nights
    const food = rates.food[style] * travellers * days
    const transport = rates.transport[style] * travellers * days
    const activities = rates.activities[style] * travellers * days
    const subtotal = accommodation + food + transport + activities
    return { rooms, nights, accommodation, food, transport, activities, subtotal, low: Math.round(subtotal * 0.9), high: Math.round(subtotal * 1.2) }
  }, [city, days, travellers, style])

  return <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
    <form className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm md:p-8" onSubmit={(event) => event.preventDefault()}>
      <h2 className="text-2xl font-extrabold">Describe the trip</h2>
      <label className="mt-6 block font-bold" htmlFor="budget-city">Destination</label>
      <select id="budget-city" value={city} onChange={(event) => setCity(event.target.value)} className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3">
        {Object.entries(CITY_RATES).map(([slug, item]) => <option key={slug} value={slug}>{item.name}</option>)}
      </select>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <label className="font-bold">Days<input aria-label="Number of days" type="number" min="1" max="14" value={days} onChange={(event) => setDays(Math.min(14, Math.max(1, Number(event.target.value) || 1)))} className="mt-2 w-full rounded-xl border border-gray-300 p-3" /></label>
        <label className="font-bold">Travellers<input aria-label="Number of travellers" type="number" min="1" max="10" value={travellers} onChange={(event) => setTravellers(Math.min(10, Math.max(1, Number(event.target.value) || 1)))} className="mt-2 w-full rounded-xl border border-gray-300 p-3" /></label>
      </div>
      <fieldset className="mt-7"><legend className="font-bold">Travel style</legend><div className="mt-3 space-y-3">{STYLES.map((item) => <label key={item.id} className={`block cursor-pointer rounded-xl border p-4 ${style === item.id ? 'border-orange-600 bg-orange-50' : 'border-gray-200'}`}><input type="radio" name="style" checked={style === item.id} onChange={() => setStyle(item.id)} className="mr-3" /><strong>{item.name}</strong><span className="mt-1 block pl-7 text-sm leading-5 text-gray-600">{item.detail}</span></label>)}</div></fieldset>
    </form>
    <section aria-live="polite" className="rounded-3xl bg-slate-950 p-7 text-white md:p-10">
      <p className="text-sm font-bold uppercase tracking-widest text-orange-300">Planning range for {CITY_RATES[city].name}</p>
      <p className="mt-4 text-4xl font-extrabold md:text-5xl">{format(result.low)}–{format(result.high)}</p>
      <p className="mt-3 text-gray-300">For {travellers} {travellers === 1 ? 'traveller' : 'travellers'}, {days} {days === 1 ? 'day' : 'days'} and {result.rooms} {result.rooms === 1 ? 'room' : 'rooms'}. Intercity travel is not included.</p>
      <div className="mt-8 space-y-3">{[
        ['Accommodation', result.accommodation], ['Food', result.food], ['Local transport', result.transport], ['Attractions and activities', result.activities],
      ].map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"><span className="text-gray-300">{label}</span><strong>{format(value)}</strong></div>)}</div>
      <div className="mt-7 rounded-2xl bg-white/10 p-5"><h3 className="font-bold">Why this is a range</h3><p className="mt-2 text-sm leading-6 text-gray-300">Rates move by neighbourhood, season, weekends and booking date. The upper end adds breathing room for price variation and small unplanned costs; it is not a live quotation.</p></div>
    </section>
  </div>
}
