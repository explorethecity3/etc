export default function CityStructuredData({ city }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: city.name,
    description: city.description,
    image: city.image,
    url: `https://www.explorethecity.in/cities/${city.slug}`,
    dateModified: city.lastUpdated,
    containedInPlace: {
      '@type': 'State',
      name: city.state,
      containedInPlace: { '@type': 'Country', name: 'India' },
    },
    touristAttraction: city.topAttractions?.map((attraction) => ({
      '@type': 'TouristAttraction',
      name: attraction.name,
      description: attraction.description,
    })),
  }

  return (
    <script
      id="city-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
