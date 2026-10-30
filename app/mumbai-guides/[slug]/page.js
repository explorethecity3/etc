import { notFound } from 'next/navigation'
import CityGuideArticle from '@/components/CityGuideArticle'
import { MUMBAI_SEO_LANDINGS, getMumbaiSeoLanding } from '@/lib/mumbaiSeoLandings'

export const dynamicParams = false
export function generateStaticParams() { return MUMBAI_SEO_LANDINGS.map(({ slug }) => ({ slug })) }
export function generateMetadata({ params }) {
  const guide = getMumbaiSeoLanding(params.slug)
  if (!guide) return { title: 'Guide Not Found' }
  const canonical = `https://www.explorethecity.in/mumbai-guides/${guide.slug}`
  return { title: guide.title, description: guide.description, alternates: { canonical }, openGraph: { title: guide.title, description: guide.description, url: canonical, type: 'article' } }
}

export default function MumbaiGuidePage({ params }) {
  const guide = getMumbaiSeoLanding(params.slug)
  if (!guide) notFound()
  return <CityGuideArticle cityName="Mumbai" citySlug="mumbai" guide={guide} allGuides={MUMBAI_SEO_LANDINGS} reviewedDate="22 October 2026" dateModified="2026-10-22" />
}
