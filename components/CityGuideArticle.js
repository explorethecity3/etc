import Link from 'next/link'

export default function CityGuideArticle({ cityName, citySlug, guide, reviewedDate = '30 October 2026' }) {
  const canonical = `https://www.explorethecity.in/${citySlug}-guides/${guide.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: 'Explore The City Editorial' },
    publisher: { '@type': 'Organization', name: 'Explore The City' },
    dateModified: '2026-10-30',
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <article className="container-custom max-w-4xl">
        <nav className="text-sm text-gray-500"><Link href="/">Home</Link> / <Link href={`/${citySlug}-guides`}>{cityName} guides</Link> / <span>{guide.eyebrow}</span></nav>
        <header className="mt-8 rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-300">{guide.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{guide.title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">{guide.intro}</p>
          <p className="mt-5 text-sm text-gray-400">Reviewed {reviewedDate} · Verify current hours, prices, weather and access before travelling.</p>
        </header>
        <section className="mt-10 grid gap-3 sm:grid-cols-2">{guide.summary.map((item) => <div key={item} className="rounded-xl border border-orange-200 bg-orange-50 p-4 font-semibold text-gray-800">{item}</div>)}</section>
        <section className="mt-14">
          <h2 className="text-3xl font-extrabold">The practical plan</h2>
          <div className="mt-7 space-y-6">{guide.stops.map(([title, text], index) => <section key={title} className="rounded-2xl border p-6"><div className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-700 font-bold text-white">{index + 1}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-gray-700">{text}</p></div></div></section>)}</div>
        </section>
        <aside className="mt-12 rounded-2xl bg-amber-50 p-7"><h2 className="text-2xl font-bold">The trade-off that keeps this realistic</h2><p className="mt-3 leading-7 text-gray-700">{guide.tradeoffs}</p></aside>
        <section className="mt-14"><h2 className="text-3xl font-extrabold">Common questions</h2><div className="mt-6 space-y-5">{guide.faq.map(([question, answer]) => <div key={question}><h3 className="text-xl font-bold">{question}</h3><p className="mt-2 leading-7 text-gray-700">{answer}</p></div>)}</div></section>
        <section className="mt-14 rounded-2xl border border-blue-200 bg-blue-50 p-7"><h2 className="text-2xl font-bold">Check current official guidance</h2><p className="mt-3 leading-7 text-gray-700">Conditions and access change. These official references are the right place to verify the details that matter on your travel dates.</p><ul className="mt-4 space-y-2">{guide.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800 hover:underline">{label} ↗</a></li>)}</ul></section>
        <section className="mt-14 rounded-2xl border border-orange-200 p-7"><h2 className="text-2xl font-bold">Test the cost and timing</h2><div className="mt-5 flex flex-wrap gap-4"><Link href="/india-trip-budget-calculator" className="btn-secondary">Estimate my budget</Link><Link href="/trip-checker" className="btn-primary">Check my day</Link></div></section>
      </article>
    </main>
  )
}
