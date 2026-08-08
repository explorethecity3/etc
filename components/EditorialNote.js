import Link from 'next/link'

export default function EditorialNote({ city, scope = 'guide' }) {
  return (
    <aside className="mb-10 rounded-lg border border-blue-200 bg-blue-50 p-5" aria-label="Editorial information">
      <p className="font-semibold text-gray-900">
        Reviewed by <Link href="/authors/explore-the-city-editorial" className="text-primary hover:underline">Explore The City Editorial</Link>
      </p>
      <p className="mt-1 text-sm leading-relaxed text-gray-700">
        This {scope} is maintained from local knowledge, editorial research and periodic fact checks.
        Details were last reviewed on <time dateTime={city.lastUpdated}>{city.lastUpdated}</time>.
        Prices, schedules and access rules can change, so confirm time-sensitive details before travelling.
      </p>
      <p className="mt-2 text-sm text-gray-700">
        Read our <Link href="/about" className="font-semibold text-primary hover:underline">editorial standards</Link>
        {' '}or <Link href="/contact" className="font-semibold text-primary hover:underline">report a correction</Link>.
      </p>
    </aside>
  )
}
