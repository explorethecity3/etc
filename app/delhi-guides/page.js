import CityGuideHub from '@/components/CityGuideHub'
import { DELHI_SEO_LANDINGS } from '@/lib/delhiSeoLandings'

export const metadata = {
  title: 'Practical Delhi Metro Routes, Walks and Itineraries',
  description: 'Plan Delhi with practical Metro sightseeing routes, an Old Delhi walk and a realistic two-day itinerary grouped by area.',
  alternates: { canonical: 'https://www.explorethecity.in/delhi-guides' },
}

export default function DelhiGuidesPage() {
  return <CityGuideHub cityName="Delhi" citySlug="delhi" guides={DELHI_SEO_LANDINGS} intro="Use the Metro for the long moves, keep Old Delhi together and give the southern monuments their own block instead of spending the trip crossing the capital." />
}
