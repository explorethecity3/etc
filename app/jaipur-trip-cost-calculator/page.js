import CityTripCostCalculatorPage, { getCityCalculatorMetadata } from '@/components/CityTripCostCalculatorPage'

export const metadata = getCityCalculatorMetadata('jaipur')

export default function JaipurTripCostCalculatorPage() {
  return <CityTripCostCalculatorPage citySlug="jaipur" />
}
