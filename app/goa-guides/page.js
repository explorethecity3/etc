import CityGuideHub from '@/components/CityGuideHub'
import { GOA_SEO_LANDINGS } from '@/lib/goaSeoLandings'

export const metadata = {
  title: 'Practical Goa Itineraries, Stay Advice and Trip Costs',
  description: 'Plan Goa with a realistic three-day itinerary, a clear North versus South comparison and transparent couple budget ranges.',
  alternates: { canonical: 'https://www.explorethecity.in/goa-guides' },
}

export default function GoaGuidesPage() {
  return <CityGuideHub cityName="Goa" citySlug="goa" guides={GOA_SEO_LANDINGS} intro="Choose the right coast, keep daily transfers under control and understand what the trip will cost before the bookings lock you into the wrong plan." />
}
