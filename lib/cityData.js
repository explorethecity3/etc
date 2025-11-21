// Utility functions for loading city data from individual JSON files

// List of all available cities
const CITIES = [
  { slug: 'mumbai', name: 'Mumbai' },
  { slug: 'delhi', name: 'Delhi' },
  { slug: 'bangalore', name: 'Bangalore' },
  { slug: 'jaipur', name: 'Jaipur' },
  { slug: 'goa', name: 'Goa' },
]

/**
 * Get all available cities with basic info
 * @returns {Array} Array of city objects with slug and name
 */
export function getAllCities() {
  return CITIES.map(city => ({
    ...city,
    // You can add more basic info here if needed
  }))
}

/**
 * Get full city data by slug
 * @param {string} slug - City slug (e.g., 'mumbai')
 * @returns {Object|null} City data object or null if not found
 */
export function getCityData(slug) {
  try {
    // Dynamically import the city data file
    const cityData = require(`@/data/${slug}.json`)
    return cityData
  } catch (error) {
    console.error(`Error loading city data for ${slug}:`, error)
    return null
  }
}

/**
 * Get all cities with full data (expensive operation, use sparingly)
 * @returns {Array} Array of all city data objects
 */
export function getAllCitiesWithData() {
  return CITIES.map(city => getCityData(city.slug)).filter(Boolean)
}

/**
 * Get city slugs for static path generation
 * @returns {Array} Array of slug strings
 */
export function getAllCitySlugs() {
  return CITIES.map(city => city.slug)
}

/**
 * Check if a city exists
 * @param {string} slug - City slug
 * @returns {boolean}
 */
export function cityExists(slug) {
  return CITIES.some(city => city.slug === slug)
}

/**
 * Get lightweight city cards data (for listing pages)
 * @returns {Array} Array of city objects with essential display info
 */
export function getCityCards() {
  return CITIES.map(city => {
    const fullData = getCityData(city.slug)
    if (!fullData) return null

    return {
      slug: fullData.slug,
      name: fullData.name,
      state: fullData.state,
      image: fullData.image,
      shortDescription: fullData.shortDescription,
      attractions: fullData.attractions,
    }
  }).filter(Boolean)
}

export default {
  getAllCities,
  getCityData,
  getAllCitiesWithData,
  getAllCitySlugs,
  cityExists,
  getCityCards,
}
