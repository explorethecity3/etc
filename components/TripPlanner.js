'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaRegCopy, FaRoute, FaSpinner, FaUtensils } from 'react-icons/fa'

const INTERESTS = [
  ['history', 'History'], ['food', 'Food'], ['nature', 'Nature'],
  ['culture', 'Culture'], ['shopping', 'Shopping'], ['offbeat', 'Hidden gems'],
]

const initialForm = {
  city: 'delhi', days: '2', budget: 'mid-range', pace: 'balanced',
  group: 'Couple', startArea: '', interests: ['history', 'food'],
}

export default function TripPlanner({ cities }) {
  const [form, setForm] = useState(initialForm)
  const [plan, setPlan] = useState(null)
  const [meta, setMeta] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const selectedCity = useMemo(() => cities.find((city) => city.slug === form.city), [cities, form.city])

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function toggleInterest(interest) {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }))
  }

  async function generate(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setCopied(false)
    try {
      const response = await fetch('/api/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, days: Number(form.days) }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error || 'Could not create an itinerary.')
      setPlan(payload.plan)
      setMeta(payload)
      window.setTimeout(() => document.getElementById('your-itinerary')?.scrollIntoView({ behavior: 'smooth' }), 50)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  function planAsText() {
    if (!plan) return ''
    const lines = [plan.summary, `Daily planning range: ${plan.dailyBudget}`, '']
    plan.dayPlans.forEach((day) => {
      lines.push(`Day ${day.day}: ${day.title}`)
      day.activities.forEach((activity) => lines.push(`${activity.part}: ${activity.name}`))
      if (day.food) lines.push(`Eat: ${day.food.name} — ${day.food.where}`)
      lines.push('')
    })
    lines.push('Generated at ExploreTheCity.in. Verify current schedules, prices and access rules.')
    return lines.join('\n')
  }

  async function copyPlan() {
    await navigator.clipboard.writeText(planAsText())
    setCopied(true)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[380px_1fr] items-start">
      <form onSubmit={generate} className="rounded-2xl bg-white p-6 shadow-xl border border-orange-100 lg:sticky lg:top-24" aria-label="Trip preferences">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your trip</h2>
        <p className="text-sm text-gray-600 mb-6">Five free plans per day. No account or personal details required.</p>

        <label className="block font-semibold text-gray-800 mb-2" htmlFor="city">Destination</label>
        <select id="city" name="city" value={form.city} onChange={updateField} className="w-full rounded-lg border border-gray-300 bg-white p-3 mb-5">
          {cities.map((city) => <option key={city.slug} value={city.slug}>{city.name}, {city.state}</option>)}
        </select>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block font-semibold text-gray-800 mb-2" htmlFor="days">Days</label>
            <select id="days" name="days" value={form.days} onChange={updateField} className="w-full rounded-lg border border-gray-300 bg-white p-3">
              {[1, 2, 3, 4, 5].map((day) => <option key={day} value={day}>{day} {day === 1 ? 'day' : 'days'}</option>)}
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-800 mb-2" htmlFor="group">Travellers</label>
            <select id="group" name="group" value={form.group} onChange={updateField} className="w-full rounded-lg border border-gray-300 bg-white p-3">
              {['Solo', 'Couple', 'Family', 'Friends'].map((group) => <option key={group}>{group}</option>)}
            </select>
          </div>
        </div>

        <label className="block font-semibold text-gray-800 mb-2" htmlFor="budget">Budget style</label>
        <select id="budget" name="budget" value={form.budget} onChange={updateField} className="w-full rounded-lg border border-gray-300 bg-white p-3 mb-5">
          <option value="budget">Budget</option><option value="mid-range">Mid-range</option><option value="premium">Premium</option>
        </select>

        <label className="block font-semibold text-gray-800 mb-2" htmlFor="pace">Daily pace</label>
        <select id="pace" name="pace" value={form.pace} onChange={updateField} className="w-full rounded-lg border border-gray-300 bg-white p-3 mb-5">
          <option value="relaxed">Relaxed — 2 stops</option><option value="balanced">Balanced — 3 stops</option><option value="packed">Packed — 4 stops</option>
        </select>

        <fieldset className="mb-5">
          <legend className="font-semibold text-gray-800 mb-3">Interests</legend>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map(([value, label]) => {
              const selected = form.interests.includes(value)
              return <button key={value} type="button" onClick={() => toggleInterest(value)} aria-pressed={selected} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${selected ? 'bg-primary border-primary text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-primary'}`}>{label}</button>
            })}
          </div>
        </fieldset>

        <label className="block font-semibold text-gray-800 mb-2" htmlFor="startArea">Starting area <span className="font-normal text-gray-500">(optional)</span></label>
        <input id="startArea" name="startArea" value={form.startArea} onChange={updateField} maxLength={80} placeholder="Hotel or neighbourhood" className="w-full rounded-lg border border-gray-300 p-3 mb-5" />

        {error && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60">
          {loading ? <><FaSpinner className="animate-spin" /> Building your plan</> : <><FaRoute /> Create my itinerary</>}
        </button>
      </form>

      <section id="your-itinerary" aria-live="polite">
        {!plan ? (
          <div className="rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/60 p-10 text-center min-h-[420px] flex flex-col justify-center">
            <FaRoute className="mx-auto text-5xl text-primary mb-5" />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Your {selectedCity?.name} plan will appear here</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We use reviewed attractions, local food and practical advice from our city guides. Your plan is generated on demand and is not published or indexed.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-r from-orange-700 to-rose-700 p-7 text-white shadow-lg">
              <div className="flex flex-wrap justify-between gap-5">
                <div><p className="uppercase tracking-widest text-sm text-orange-100 mb-2">Your private itinerary</p><h2 className="text-3xl md:text-4xl font-bold">{plan.city} in {plan.days} {plan.days === 1 ? 'day' : 'days'}</h2><p className="mt-3 text-white/90">{plan.summary}</p></div>
                <button type="button" onClick={copyPlan} className="self-start rounded-lg bg-white/15 border border-white/30 px-4 py-3 font-semibold hover:bg-white/25 flex items-center gap-2"><FaRegCopy /> {copied ? 'Copied' : 'Copy plan'}</button>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm"><p><strong>Daily range:</strong> {plan.dailyBudget}</p><p><strong>Best time:</strong> {plan.bestTime}</p><p><strong>Source review:</strong> {plan.sourceUpdated}</p></div>
            </div>

            {plan.dayPlans.map((day) => (
              <article key={day.day} className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-6"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white font-bold">{day.day}</span><div><p className="text-sm uppercase tracking-wide text-gray-500">Day {day.day}</p><h3 className="text-2xl font-bold text-gray-900">{day.title}</h3></div></div>
                <div className="space-y-5 border-l-2 border-orange-200 ml-5 pl-7">
                  {day.activities.map((activity, index) => (
                    <div key={`${activity.name}-${index}`}>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{activity.part} · {activity.kind}</p>
                      <h4 className="text-xl font-bold text-gray-900 flex items-start gap-2"><FaMapMarkerAlt className="text-primary mt-1 shrink-0" /> {activity.name}</h4>
                      <p className="text-gray-600 mt-2">{activity.description}</p>
                      {(activity.timings || activity.fee) && <p className="text-sm text-gray-500 mt-2">{activity.timings}{activity.timings && activity.fee ? ' · ' : ''}{activity.fee}</p>}
                    </div>
                  ))}
                </div>
                {day.food && <div className="mt-7 rounded-xl bg-amber-50 p-5"><h4 className="font-bold text-gray-900 flex items-center gap-2"><FaUtensils className="text-primary" /> Food to try: {day.food.name}</h4><p className="text-gray-600 text-sm mt-2">{day.food.description}</p><p className="text-gray-700 text-sm mt-2"><strong>Look around:</strong> {day.food.where} {day.food.price && `· ${day.food.price}`}</p></div>}
              </article>
            ))}

            <div className="rounded-2xl bg-blue-50 p-6 border border-blue-100"><h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2"><FaCalendarAlt className="text-blue-700" /> Before you go</h3><ul className="list-disc pl-5 space-y-2 text-gray-700">{plan.practicalTips.map((tip) => <li key={tip}>{tip}</li>)}</ul></div>
            <p className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-900"><strong>Plan responsibly:</strong> {meta.notice} This tool suggests a sequence, not live availability or a booking. {meta.aiEnhanced ? 'Wording was enhanced by an AI model using the verified draft.' : 'This plan was assembled directly from our reviewed guide data.'}</p>
            <div className="flex flex-wrap gap-3"><Link href={`/cities/${plan.citySlug}`} className="btn-primary">Read the full {plan.city} guide</Link><button type="button" onClick={() => window.print()} className="btn-secondary">Print plan</button></div>
            <p className="text-xs text-gray-500">{meta.remaining} free {meta.remaining === 1 ? 'plan' : 'plans'} remaining today on this connection.</p>
          </div>
        )}
      </section>
    </div>
  )
}
