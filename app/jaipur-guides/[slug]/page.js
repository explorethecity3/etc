import { notFound } from 'next/navigation'
import CityGuideArticle from '@/components/CityGuideArticle'
import { JAIPUR_SEO_LANDINGS, getJaipurSeoLanding } from '@/lib/jaipurSeoLandings'

export const dynamicParams = false
export function generateStaticParams() { return JAIPUR_SEO_LANDINGS.map(({ slug }) => ({ slug })) }
export function generateMetadata({ params }) {
  const guide = getJaipurSeoLanding(params.slug)
  if (!guide) return { title: 'Guide Not Found' }
  const canonical = `https://www.explorethecity.in/jaipur-guides/${guide.slug}`
  return { title: guide.title, description: guide.description, alternates: { canonical }, openGraph: { title: guide.title, description: guide.description, url: canonical, type: 'article' } }
}

export default function JaipurGuidePage({ params }) {
  const guide = getJaipurSeoLanding(params.slug)
  if (!guide) notFound()
  return <CityGuideArticle cityName="Jaipur" citySlug="jaipur" guide={guide} allGuides={JAIPUR_SEO_LANDINGS} />
}
