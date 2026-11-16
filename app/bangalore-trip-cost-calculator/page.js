import CityTripCostCalculatorPage, { getCityCalculatorMetadata } from '@/components/CityTripCostCalculatorPage'

export const metadata = getCityCalculatorMetadata('bangalore')

export default function BangaloreTripCostCalculatorPage() {
  return <CityTripCostCalculatorPage citySlug="bangalore" />
}
