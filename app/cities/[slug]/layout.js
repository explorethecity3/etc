import { getAllCitySlugs } from '@/lib/cityData'

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    slug: slug,
  }))
}

export default function CityLayout({ children }) {
  return children
}
