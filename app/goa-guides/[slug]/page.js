import { notFound } from 'next/navigation'
import CityGuideArticle from '@/components/CityGuideArticle'
import { GOA_SEO_LANDINGS, getGoaSeoLanding } from '@/lib/goaSeoLandings'

export const dynamicParams = false

export function generateStaticParams() {
  return GOA_SEO_LANDINGS.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }) {
  const guide = getGoaSeoLanding(params.slug)
  if (!guide) return { title: 'Guide Not Found' }
  const canonical = `https://www.explorethecity.in/goa-guides/${guide.slug}`
  const title = guide.seoTitle || guide.title
  const description = guide.seoDescription || guide.description
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: 'article' },
  }
}

export default function GoaGuidePage({ params }) {
  const guide = getGoaSeoLanding(params.slug)
  if (!guide) notFound()
  return <CityGuideArticle cityName="Goa" citySlug="goa" guide={guide} allGuides={GOA_SEO_LANDINGS} />
}
