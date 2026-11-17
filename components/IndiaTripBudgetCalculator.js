'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

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

const CITY_PRESETS = {
  bangalore: [
    { label: 'Weekend for two', days: 3, travellers: 2, style: 1 },
    { label: '4 friends, budget', days: 2, travellers: 4, style: 0 },
  ],
  mumbai: [
    { label: '2-day budget break', days: 2, travellers: 2, style: 0 },
    { label: 'Family city break', days: 3, travellers: 4, style: 1 },
  ],
  goa: [
    { label: 'Couple, 5 days', days: 5, travellers: 2, style: 1 },
    { label: '4 friends, 4 days', days: 4, travellers: 4, style: 0 },
  ],
  delhi: [
    { label: '3 days, 4 travellers', days: 3, travellers: 4, style: 0 },
    { label: 'Comfortable couple trip', days: 3, travellers: 2, style: 1 },
  ],
  jaipur: [
    { label: 'Couple, 2 days', days: 2, travellers: 2, style: 1 },
    { label: 'Family fort weekend', days: 3, travellers: 4, style: 1 },
  ],
}

const format = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)

export default function IndiaTripBudgetCalculator({ initialCity = 'jaipur', fixedCity = false }) {
  const safeInitialCity = CITY_RATES[initialCity] ? initialCity : 'jaipur'
  const [city, setCity] = useState(safeInitialCity)
  const [days, setDays] = useState(3)
  const [travellers, setTravellers] = useState(2)
  const [style, setStyle] = useState(1)
  const [shareStatus, setShareStatus] = useState('')
  const hasTrackedUse = useRef(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sharedCity = params.get('city')
    const sharedDays = Number(params.get('days'))
    const sharedTravellers = Number(params.get('travellers'))
    const sharedStyle = Number(params.get('style'))
    if (!fixedCity && sharedCity && CITY_RATES[sharedCity]) setCity(sharedCity)
    if (sharedDays >= 1 && sharedDays <= 14) setDays(sharedDays)
    if (sharedTravellers >= 1 && sharedTravellers <= 10) setTravellers(sharedTravellers)
    if (sharedStyle >= 0 && sharedStyle <= 2) setStyle(sharedStyle)
  }, [fixedCity])

  function track(name, parameters = {}) {
    if (typeof window.gtag === 'function') window.gtag('event', name, parameters)
  }

  function trackUse(next = {}) {
    if (hasTrackedUse.current) return
    hasTrackedUse.current = true
    track('budget_calculator_used', { city, travel_style: STYLES[style].name, days, travellers, ...next })
  }

  function applyPreset(preset) {
    setDays(preset.days)
    setTravellers(preset.travellers)
    setStyle(preset.style)
    hasTrackedUse.current = true
    setShareStatus('')
    track('budget_preset_selected', {
      city,
      preset: preset.label,
      travel_style: STYLES[preset.style].name,
      days: preset.days,
      travellers: preset.travellers,
    })
  }

  function getShareUrl() {
    const params = new URLSearchParams({ city, days: String(days), travellers: String(travellers), style: String(style) })
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`
  }

  function createBudgetCard() {
    const canvas = document.createElement('canvas')
    canvas.width = 1200
    canvas.height = 630
    const context = canvas.getContext('2d')
    const cityName = CITY_RATES[city].name
    const breakdown = [
      ['Accommodation', result.accommodation],
      ['Food', result.food],
      ['Local transport', result.transport],
      ['Activities', result.activities],
    ]

    context.fillStyle = '#fff7ed'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = '#0f172a'
    context.fillRect(0, 0, 1200, 630)
    context.fillStyle = '#f97316'
    context.fillRect(0, 0, 22, 630)
    context.fillStyle = '#fdba74'
    context.font = '700 24px Arial, sans-serif'
    context.fillText('EXPLORE THE CITY · TRIP BUDGET', 72, 78)
    context.fillStyle = '#ffffff'
    context.font = '700 54px Arial, sans-serif'
    context.fillText(`${cityName} · ${days} ${days === 1 ? 'day' : 'days'}`, 72, 150)
    context.fillStyle = '#cbd5e1'
    context.font = '400 27px Arial, sans-serif'
    context.fillText(`${travellers} ${travellers === 1 ? 'traveller' : 'travellers'} · ${STYLES[style].name} style · ${result.rooms} ${result.rooms === 1 ? 'room' : 'rooms'}`, 72, 198)
    context.fillStyle = '#f97316'
    context.fillRect(72, 240, 600, 142)
    context.fillStyle = '#ffffff'
    context.font = '700 25px Arial, sans-serif'
    context.fillText('ESTIMATED PLANNING RANGE', 104, 286)
    context.font = '700 49px Arial, sans-serif'
    context.fillText(`${format(result.low)} – ${format(result.high)}`, 104, 350)
    context.fillStyle = '#1e293b'
    context.fillRect(710, 72, 418, 420)
    context.font = '700 24px Arial, sans-serif'
    context.fillStyle = '#ffffff'
    context.fillText('Estimated breakdown', 748, 122)
    breakdown.forEach(([label, value], index) => {
      const y = 184 + (index * 70)
      context.fillStyle = '#cbd5e1'
      context.font = '400 22px Arial, sans-serif'
      context.fillText(label, 748, y)
      context.fillStyle = '#ffffff'
      context.font = '700 22px Arial, sans-serif'
      context.textAlign = 'right'
      context.fillText(format(value), 1090, y)
      context.textAlign = 'left'
      context.strokeStyle = '#334155'
      context.beginPath()
      context.moveTo(748, y + 22)
      context.lineTo(1090, y + 22)
      context.stroke()
    })
    context.fillStyle = '#cbd5e1'
    context.font = '400 20px Arial, sans-serif'
    context.fillText('Planning estimate, not a live quotation. Intercity travel is excluded.', 72, 470)
    context.fillStyle = '#ffffff'
    context.font = '700 28px Arial, sans-serif'
    context.fillText('ExploreTheCity.in', 72, 554)
    context.fillStyle = '#94a3b8'
    context.font = '400 20px Arial, sans-serif'
    context.fillText('Adjust the estimate and check the local guide before booking.', 72, 590)

    return new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Could not create budget card')), 'image/png'))
  }

  async function copyEstimateLink() {
    try {
      await navigator.clipboard.writeText(getShareUrl())
      setShareStatus('Shareable estimate link copied.')
      track('budget_estimate_link_copied', { city, travel_style: STYLES[style].name, days, travellers })
    } catch {
      setShareStatus('Could not copy automatically. Copy the page address instead.')
    }
  }

  async function downloadBudgetCard() {
    try {
      const blob = await createBudgetCard()
      const downloadUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `${city}-${days}-day-trip-budget.png`
      link.click()
      URL.revokeObjectURL(downloadUrl)
      setShareStatus('Budget card downloaded as a PNG image.')
      track('budget_card_downloaded', { city, travel_style: STYLES[style].name, days, travellers })
    } catch {
      setShareStatus('Could not create the image. Please try again.')
    }
  }

  async function shareEstimate() {
    const url = getShareUrl()
    const shareData = { title: `${CITY_RATES[city].name} trip budget estimate`, text: `${days}-day ${CITY_RATES[city].name} planning range: ${format(result.low)}–${format(result.high)}`, url }
    try {
      if (navigator.share) {
        const blob = await createBudgetCard()
        const file = new File([blob], `${city}-${days}-day-trip-budget.png`, { type: 'image/png' })
        const shareWithCard = { ...shareData, files: [file] }
        await navigator.share(navigator.canShare?.(shareWithCard) ? shareWithCard : shareData)
        setShareStatus('Estimate shared with your selected app.')
      } else {
        await navigator.clipboard.writeText(url)
        setShareStatus('Shareable estimate link copied.')
      }
      track('budget_estimate_shared', { city, travel_style: STYLES[style].name, days, travellers })
    } catch (error) {
      if (error?.name !== 'AbortError') setShareStatus('Could not share automatically. Copy the page address instead.')
    }
  }

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
      {fixedCity
        ? <><p className="mt-6 font-bold">Destination</p><div className="mt-2 w-full rounded-xl border border-orange-200 bg-orange-50 p-3 font-bold text-gray-900">{CITY_RATES[city].name}</div></>
        : <><label className="mt-6 block font-bold" htmlFor="budget-city">Destination</label><select id="budget-city" value={city} onChange={(event) => { setCity(event.target.value); trackUse({ city: event.target.value }) }} className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3">
            {Object.entries(CITY_RATES).map(([slug, item]) => <option key={slug} value={slug}>{item.name}</option>)}
          </select></>}
      <fieldset className="mt-6">
        <legend className="font-bold">Try a popular starting point</legend>
        <p className="mt-1 text-sm text-gray-600">Choose one, then adjust any detail below.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CITY_PRESETS[city].map((preset) => {
            const isActive = days === preset.days && travellers === preset.travellers && style === preset.style
            return <button key={preset.label} type="button" aria-pressed={isActive} onClick={() => applyPreset(preset)} className={`rounded-full border px-4 py-2 text-sm font-bold transition ${isActive ? 'border-orange-600 bg-orange-600 text-white' : 'border-orange-200 bg-orange-50 text-orange-900 hover:bg-orange-100'}`}>{preset.label}</button>
          })}
        </div>
      </fieldset>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <label className="font-bold">Days<input aria-label="Number of days" type="number" min="1" max="14" value={days} onChange={(event) => { const value = Math.min(14, Math.max(1, Number(event.target.value) || 1)); setDays(value); trackUse({ days: value }) }} className="mt-2 w-full rounded-xl border border-gray-300 p-3" /></label>
        <label className="font-bold">Travellers<input aria-label="Number of travellers" type="number" min="1" max="10" value={travellers} onChange={(event) => { const value = Math.min(10, Math.max(1, Number(event.target.value) || 1)); setTravellers(value); trackUse({ travellers: value }) }} className="mt-2 w-full rounded-xl border border-gray-300 p-3" /></label>
      </div>
      <fieldset className="mt-7"><legend className="font-bold">Travel style</legend><div className="mt-3 space-y-3">{STYLES.map((item) => <label key={item.id} className={`block cursor-pointer rounded-xl border p-4 ${style === item.id ? 'border-orange-600 bg-orange-50' : 'border-gray-200'}`}><input type="radio" name="style" checked={style === item.id} onChange={() => { setStyle(item.id); trackUse({ travel_style: item.name }) }} className="mr-3" /><strong>{item.name}</strong><span className="mt-1 block pl-7 text-sm leading-5 text-gray-600">{item.detail}</span></label>)}</div></fieldset>
    </form>
    <section aria-live="polite" className="rounded-3xl bg-slate-950 p-7 text-white md:p-10">
      <p className="text-sm font-bold uppercase tracking-widest text-orange-300">Planning range for {CITY_RATES[city].name}</p>
      <p className="mt-4 text-4xl font-extrabold md:text-5xl">{format(result.low)}–{format(result.high)}</p>
      <p className="mt-3 text-gray-300">For {travellers} {travellers === 1 ? 'traveller' : 'travellers'}, {days} {days === 1 ? 'day' : 'days'} and {result.rooms} {result.rooms === 1 ? 'room' : 'rooms'}. Intercity travel is not included.</p>
      <div className="mt-8 space-y-3">{[
        ['Accommodation', result.accommodation], ['Food', result.food], ['Local transport', result.transport], ['Attractions and activities', result.activities],
      ].map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"><span className="text-gray-300">{label}</span><strong>{format(value)}</strong></div>)}</div>
      <div className="mt-7 rounded-2xl bg-white/10 p-5"><h3 className="font-bold">Why this is a range</h3><p className="mt-2 text-sm leading-6 text-gray-300">Rates move by neighbourhood, season, weekends and booking date. The upper end adds breathing room for price variation and small unplanned costs; it is not a live quotation.</p></div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="button" onClick={shareEstimate} className="rounded-xl bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-500 sm:col-span-2">Share result</button>
        <button type="button" onClick={copyEstimateLink} className="rounded-xl border border-white/25 px-5 py-3 font-bold text-white transition hover:bg-white/10">Copy result link</button>
        <button type="button" onClick={downloadBudgetCard} className="rounded-xl border border-white/25 px-5 py-3 font-bold text-white transition hover:bg-white/10">Download budget card</button>
      </div>
      {shareStatus && <p className="mt-3 text-center text-sm text-orange-200" role="status">{shareStatus}</p>}
    </section>
  </div>
}
