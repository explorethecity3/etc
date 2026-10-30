'use client'

import { useState } from 'react'

function track(method, city, slug) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'share', {
      method,
      content_type: 'city_guide',
      item_id: `${city}/${slug}`,
    })
  }
}

export default function GuideShareBar({ title, citySlug, guideSlug, reviewedDate }) {
  const [status, setStatus] = useState('')
  const url = `https://www.explorethecity.in/${citySlug}-guides/${guideSlug}`
  const message = `${title} — a practical guide from Explore The City`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${message}\n${url}`)}`
  const citation = `Explore The City Editorial. “${title}.” Reviewed ${reviewedDate}. ${url}`

  async function copyText(text, successMessage, method) {
    try {
      await navigator.clipboard.writeText(text)
      setStatus(successMessage)
      track(method, citySlug, guideSlug)
    } catch {
      setStatus('Copying was blocked. Select the page address from your browser instead.')
    }
  }

  async function shareGuide() {
    if (!navigator.share) {
      await copyText(url, 'Guide link copied.', 'copy_link')
      return
    }

    try {
      await navigator.share({ title, text: message, url })
      setStatus('Guide shared.')
      track('native_share', citySlug, guideSlug)
    } catch (error) {
      if (error?.name !== 'AbortError') setStatus('Sharing did not open. You can copy the link instead.')
    }
  }

  return (
    <aside className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5" aria-label="Share and cite this guide">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-slate-900">Know someone planning this trip?</p>
          <p className="mt-1 text-sm text-slate-600">Send them the practical route, or cite this maintained guide in your own travel resource.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp', citySlug, guideSlug)}
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-600"
          >
            WhatsApp
          </a>
          <button type="button" onClick={shareGuide} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700">
            Share guide
          </button>
          <button type="button" onClick={() => copyText(citation, 'Citation copied.', 'copy_citation')} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-slate-500">
            Copy citation
          </button>
        </div>
      </div>
      {status && <p className="mt-3 text-sm font-semibold text-slate-700" role="status">{status}</p>}
    </aside>
  )
}
