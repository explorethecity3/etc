import CityTripCostCalculatorPage, { getCityCalculatorMetadata } from '@/components/CityTripCostCalculatorPage'

export const metadata = getCityCalculatorMetadata('mumbai')

export default function MumbaiTripCostCalculatorPage() {
  return <CityTripCostCalculatorPage citySlug="mumbai" />
}
