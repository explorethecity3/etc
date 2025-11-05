'use client'

import { useEffect } from 'react'

export default function CityStructuredData({ city }) {
  useEffect(() => {
    // Generate structured data for TouristDestination
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      name: city.name,
      description: city.description,
      image: city.image,
      url: `https://www.explorethecity.in/cities/${city.slug}`,
      containedInPlace: {
        '@type': 'State',
        name: city.state,
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
      ...(city.topAttractions && {
        touristAttraction: city.topAttractions.map((attraction) => ({
          '@type': 'TouristAttraction',
          name: attraction.name,
          description: attraction.description,
        })),
      }),
      ...(city.localFood && {
        hasMap: city.localFood.map((food) => {
          const [name, desc] = food.split(' - ')
          return {
            '@type': 'Recipe',
            name: name.trim(),
            description: desc ? desc.trim() : name.trim(),
          }
        }),
      }),
    }

    // Create or update script tag
    let script = document.getElementById('city-structured-data')
    if (!script) {
      script = document.createElement('script')
      script.id = 'city-structured-data'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    return () => {
      const scriptToRemove = document.getElementById('city-structured-data')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [city])

  return null
}
