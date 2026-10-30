import { notFound } from 'next/navigation'
import CityGuideArticle from '@/components/CityGuideArticle'
import { DELHI_SEO_LANDINGS, getDelhiSeoLanding } from '@/lib/delhiSeoLandings'

export const dynamicParams = false

export function generateStaticParams() {
  return DELHI_SEO_LANDINGS.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }) {
  const guide = getDelhiSeoLanding(params.slug)
  if (!guide) return { title: 'Guide Not Found' }
  const canonical = `https://www.explorethecity.in/delhi-guides/${guide.slug}`
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical },
    openGraph: { title: guide.title, description: guide.description, url: canonical, type: 'article' },
  }
}

export default function DelhiGuidePage({ params }) {
  const guide = getDelhiSeoLanding(params.slug)
  if (!guide) notFound()
  return <CityGuideArticle cityName="Delhi" citySlug="delhi" guide={guide} />
}
