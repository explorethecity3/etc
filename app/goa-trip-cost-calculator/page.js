import CityTripCostCalculatorPage, { getCityCalculatorMetadata } from '@/components/CityTripCostCalculatorPage'

export const metadata = getCityCalculatorMetadata('goa')

export default function GoaTripCostCalculatorPage() {
  return <CityTripCostCalculatorPage citySlug="goa" />
}
