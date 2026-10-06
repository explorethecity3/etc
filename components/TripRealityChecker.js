'use client'

import { useMemo, useState } from 'react'
import { FaCheckCircle, FaExclamationTriangle, FaPrint, FaRoute } from 'react-icons/fa'
import { analyseTrip } from '@/lib/tripChecker'

const paceOptions = [['relaxed', 'Relaxed'], ['balanced', 'Balanced'], ['packed', 'Packed']]

function durationLabel(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h ? `${h}h ` : ''}${m ? `${m}m` : ''}`.trim()
}

export default function TripRealityChecker({ cities }) {
  const [citySlug, setCitySlug] = useState(cities[0].slug)
  const [pace, setPace] = useState('balanced')
  const [group, setGroup] = useState('Couple')
  const [startTime, setStartTime] = useState('09:00')
  const [selected, setSelected] = useState([])
  const [report, setReport] = useState(null)
  const city = useMemo(() => cities.find((item) => item.slug === citySlug), [cities, citySlug])

  function changeCity(event) {
    setCitySlug(event.target.value)
    setSelected([])
    setReport(null)
  }

  function toggle(id) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : current.length < 6 ? [...current, id] : current)
    setReport(null)
  }

  function checkTrip(event) {
    event.preventDefault()
    setReport(analyseTrip({ city, selectedPlaceIds: selected, pace, group, startTime }))
    window.setTimeout(() => document.getElementById('reality-report')?.scrollIntoView({ behavior: 'smooth' }), 30)
  }

  const scoreColour = report?.score >= 85 ? 'text-emerald-700' : report?.score >= 70 ? 'text-blue-700' : report?.score >= 50 ? 'text-amber-700' : 'text-red-700'

  return (
    <div className="grid gap-8 lg:grid-cols-[420px_1fr] items-start">
      <form onSubmit={checkTrip} className="rounded-2xl bg-white p-6 shadow-xl border border-orange-100 lg:sticky lg:top-24">
        <h2 className="text-2xl font-bold text-gray-900">Build one day</h2>
        <p className="mt-2 mb-6 text-sm text-gray-600">Choose stops in the order you plan to visit them. We do not save your selections.</p>

        <label className="block font-semibold mb-2" htmlFor="checker-city">Destination</label>
        <select id="checker-city" value={citySlug} onChange={changeCity} className="w-full rounded-lg border p-3 mb-5">
          {cities.map((item) => <option key={item.slug} value={item.slug}>{item.name}, {item.state}</option>)}
        </select>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div><label className="block font-semibold mb-2" htmlFor="checker-pace">Pace</label><select id="checker-pace" value={pace} onChange={(e) => { setPace(e.target.value); setReport(null) }} className="w-full rounded-lg border p-3">{paceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div>
          <div><label className="block font-semibold mb-2" htmlFor="checker-group">Travellers</label><select id="checker-group" value={group} onChange={(e) => { setGroup(e.target.value); setReport(null) }} className="w-full rounded-lg border p-3">{['Solo', 'Couple', 'Friends', 'Family', 'Seniors'].map((value) => <option key={value}>{value}</option>)}</select></div>
        </div>

        <label className="block font-semibold mb-2" htmlFor="checker-start">Day starts</label>
        <input id="checker-start" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full rounded-lg border p-3 mb-5" />

        <fieldset>
          <legend className="font-semibold mb-2">Stops in planned order <span className="font-normal text-gray-500">({selected.length}/6)</span></legend>
          <div className="space-y-2">
            {city.places.map((place) => {
              const active = selected.includes(place.id)
              const order = selected.indexOf(place.id) + 1
              return <button key={place.id} type="button" onClick={() => toggle(place.id)} aria-pressed={active} className={`w-full text-left rounded-xl border p-3 transition ${active ? 'border-orange-600 bg-orange-50' : 'border-gray-200 hover:border-orange-300'}`}><span className="flex justify-between gap-3"><span className="font-semibold">{active && <span className="inline-flex w-6 h-6 mr-2 rounded-full bg-orange-700 text-white items-center justify-center text-xs">{order}</span>}{place.name}</span><span className="text-xs text-gray-500">{durationLabel(place.durationMinutes)}</span></span><span className="block mt-1 text-xs text-gray-500 capitalize">{place.zone.replace('-', ' ')} · {place.setting}</span></button>
            })}
          </div>
        </fieldset>

        <button type="submit" disabled={selected.length === 0} className="btn-primary w-full mt-6 disabled:opacity-50 flex items-center justify-center gap-2"><FaRoute /> Check my day</button>
        <p className="text-xs text-gray-500 mt-3">Planning data reviewed {city.lastReviewed}. Always verify time-sensitive information.</p>
      </form>

      <section id="reality-report" aria-live="polite">
        {!report ? <div className="min-h-[520px] rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 p-10 flex flex-col items-center justify-center text-center"><FaRoute className="text-5xl text-orange-700 mb-5" /><h2 className="text-3xl font-bold">Will your day actually work?</h2><p className="mt-3 max-w-xl text-gray-600">Select places in your intended order. The report checks total time, area changes, pace and traveller fit.</p></div> : <div className="space-y-6">
          <div className="rounded-2xl bg-white p-7 shadow-lg border"><p className="uppercase tracking-widest text-sm font-bold text-gray-500">Reality score</p><div className="mt-2 flex flex-wrap items-end gap-4"><span className={`text-7xl font-black ${scoreColour}`}>{report.score}</span><span className="text-2xl font-bold mb-2">/100 · {report.verdict}</span></div><p className="mt-3 text-gray-600">Confidence: {report.confidence}</p><div className="mt-6 grid grid-cols-3 gap-3 text-center"><div className="rounded-lg bg-gray-50 p-3"><strong className="block">{durationLabel(report.metrics.visitMinutes)}</strong><span className="text-xs text-gray-500">at places</span></div><div className="rounded-lg bg-gray-50 p-3"><strong className="block">{durationLabel(report.metrics.travelMinutes)}</strong><span className="text-xs text-gray-500">transfers</span></div><div className="rounded-lg bg-gray-50 p-3"><strong className="block">{durationLabel(report.metrics.totalMinutes)}</strong><span className="text-xs text-gray-500">day total</span></div></div></div>

          <div className="space-y-3">{report.issues.length === 0 ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 flex gap-3"><FaCheckCircle className="text-emerald-700 mt-1" /><div><h3 className="font-bold">No major pacing conflicts found</h3><p className="text-sm text-gray-700 mt-1">The plan fits the selected pace using conservative transfer estimates.</p></div></div> : report.issues.map((issue) => <article key={issue.title} className="rounded-xl bg-white border p-5"><div className="flex gap-3"><FaExclamationTriangle className={issue.severity === 'critical' ? 'text-red-600 mt-1' : 'text-amber-600 mt-1'} /><div><p className="text-xs uppercase font-bold tracking-wide text-gray-500">{issue.severity}</p><h3 className="text-lg font-bold">{issue.title}</h3><p className="text-gray-600 mt-2">{issue.detail}</p><p className="mt-2 text-sm"><strong>Try this:</strong> {issue.fix}</p></div></div></article>)}</div>

          <div className="rounded-2xl bg-gray-900 text-white p-6"><h3 className="text-xl font-bold">{report.changed ? 'A more compact order' : 'Your route order is already compact'}</h3><ol className="mt-4 space-y-3">{report.improved.map((place, index) => <li key={place.id} className="flex gap-3"><span className="flex w-7 h-7 shrink-0 rounded-full bg-orange-600 items-center justify-center text-sm font-bold">{index + 1}</span><div><strong>{place.name}</strong><span className="block text-sm text-gray-300 capitalize">{place.zone.replace('-', ' ')} · about {durationLabel(place.durationMinutes)}</span></div></li>)}</ol></div>
          <p className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-900">{report.disclaimer}</p>
          <button type="button" onClick={() => window.print()} className="btn-secondary flex items-center gap-2"><FaPrint /> Print report</button>
        </div>}
      </section>
    </div>
  )
}

