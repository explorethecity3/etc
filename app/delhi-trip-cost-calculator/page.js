import CityTripCostCalculatorPage, { getCityCalculatorMetadata } from '@/components/CityTripCostCalculatorPage'

export const metadata = getCityCalculatorMetadata('delhi')

export default function DelhiTripCostCalculatorPage() {
  return <CityTripCostCalculatorPage citySlug="delhi" />
}
