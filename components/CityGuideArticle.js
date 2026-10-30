import Link from 'next/link'
import GuideShareBar from './GuideShareBar'

export default function CityGuideArticle({ cityName, citySlug, guide, allGuides = [], reviewedDate = '30 October 2026', dateModified = '2026-10-30' }) {
  const canonical = `https://www.explorethecity.in/${citySlug}-guides/${guide.slug}`
  const relatedGuides = allGuides.filter((item) => item.slug !== guide.slug)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: 'Explore The City Editorial' },
    publisher: { '@type': 'Organization', name: 'Explore The City' },
    dateModified,
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
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.explorethecity.in/' },
      { '@type': 'ListItem', position: 2, name: 'Planning guides', item: 'https://www.explorethecity.in/guides' },
      { '@type': 'ListItem', position: 3, name: `${cityName} guides`, item: `https://www.explorethecity.in/${citySlug}-guides` },
      { '@type': 'ListItem', position: 4, name: guide.title, item: canonical },
    ],
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <article className="container-custom max-w-4xl">
        <nav className="text-sm text-gray-500"><Link href="/">Home</Link> / <Link href="/guides">Planning guides</Link> / <Link href={`/${citySlug}-guides`}>{cityName}</Link> / <span>{guide.eyebrow}</span></nav>
        <header className="mt-8 rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-300">{guide.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{guide.title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">{guide.intro}</p>
          <p className="mt-5 text-sm text-gray-400">Reviewed {reviewedDate} · Verify current hours, prices, weather and access before travelling.</p>
        </header>
        <GuideShareBar title={guide.title} citySlug={citySlug} guideSlug={guide.slug} reviewedDate={reviewedDate} />
        <section className="mt-10 grid gap-3 sm:grid-cols-2">{guide.summary.map((item) => <div key={item} className="rounded-xl border border-orange-200 bg-orange-50 p-4 font-semibold text-gray-800">{item}</div>)}</section>
        <section className="mt-14">
          <h2 className="text-3xl font-extrabold">The practical plan</h2>
          <div className="mt-7 space-y-6">{guide.stops.map(([title, text], index) => <section key={title} className="rounded-2xl border p-6"><div className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-700 font-bold text-white">{index + 1}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-gray-700">{text}</p></div></div></section>)}</div>
        </section>
        <aside className="mt-12 rounded-2xl bg-amber-50 p-7"><h2 className="text-2xl font-bold">The trade-off that keeps this realistic</h2><p className="mt-3 leading-7 text-gray-700">{guide.tradeoffs}</p></aside>
        <section className="mt-14"><h2 className="text-3xl font-extrabold">Common questions</h2><div className="mt-6 space-y-5">{guide.faq.map(([question, answer]) => <div key={question}><h3 className="text-xl font-bold">{question}</h3><p className="mt-2 leading-7 text-gray-700">{answer}</p></div>)}</div></section>
        {guide.sources?.length > 0 && <section className="mt-14 rounded-2xl border border-blue-200 bg-blue-50 p-7"><h2 className="text-2xl font-bold">Check current official guidance</h2><p className="mt-3 leading-7 text-gray-700">Conditions and access change. These official references are the right place to verify the details that matter on your travel dates.</p><ul className="mt-4 space-y-2">{guide.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800 hover:underline">{label} ↗</a></li>)}</ul></section>}
        {relatedGuides.length > 0 && <section className="mt-14"><p className="text-sm font-bold uppercase tracking-widest text-orange-700">Keep planning {cityName}</p><h2 className="mt-2 text-3xl font-extrabold">Related {cityName} guides</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{relatedGuides.map((item) => <Link key={item.slug} href={`/${citySlug}-guides/${item.slug}`} className="rounded-2xl border border-orange-200 bg-orange-50 p-6 transition hover:bg-white hover:shadow-md"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">{item.eyebrow}</p><h3 className="mt-2 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p></Link>)}</div></section>}
        <section className="mt-14 rounded-2xl border border-orange-200 p-7"><h2 className="text-2xl font-bold">Turn this into your own trip</h2><p className="mt-3 leading-7 text-gray-700">Use the complete city guide for seasons and neighbourhood context, then test the cost and timing against your own dates and pace.</p><div className="mt-5 flex flex-wrap gap-4"><Link href={`/cities/${citySlug}`} className="btn-secondary">Complete {cityName} guide</Link><Link href="/india-trip-budget-calculator" className="btn-secondary">Estimate my budget</Link><Link href="/trip-checker" className="btn-primary">Check my day</Link></div></section>
      </article>
    </main>
  )
}
