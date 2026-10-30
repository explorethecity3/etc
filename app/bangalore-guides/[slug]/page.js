import { notFound } from 'next/navigation'
import CityGuideArticle from '@/components/CityGuideArticle'
import { BANGALORE_SEO_LANDINGS, getBangaloreSeoLanding } from '@/lib/bangaloreSeoLandings'

export const dynamicParams = false
export function generateStaticParams() { return BANGALORE_SEO_LANDINGS.map(({ slug }) => ({ slug })) }
export function generateMetadata({ params }) {
  const guide = getBangaloreSeoLanding(params.slug)
  if (!guide) return { title: 'Guide Not Found' }
  const canonical = `https://www.explorethecity.in/bangalore-guides/${guide.slug}`
  return { title: guide.title, description: guide.description, alternates: { canonical }, openGraph: { title: guide.title, description: guide.description, url: canonical, type: 'article' } }
}

export default function BangaloreGuidePage({ params }) {
  const guide = getBangaloreSeoLanding(params.slug)
  if (!guide) notFound()
  return <CityGuideArticle cityName="Bangalore" citySlug="bangalore" guide={guide} allGuides={BANGALORE_SEO_LANDINGS} reviewedDate="22 October 2026" dateModified="2026-10-22" />
}
