import cities from '@/data/cities.json'

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

export async function generateMetadata({ params }) {
  const city = cities.find((c) => c.slug === params.slug)

  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  return {
    title: `${city.name} Travel Guide - Explore ${city.name} | Explore The City`,
    description: city.description,
    keywords: `${city.name}, ${city.state}, travel guide, tourism, things to do in ${city.name}`,
    openGraph: {
      title: `${city.name} Travel Guide`,
      description: city.shortDescription,
      images: [city.image],
    },
  }
}

export default function CityLayout({ children }) {
  return children
}
