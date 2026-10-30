export const PRIMARY_CITY_SLUGS = ['bangalore', 'mumbai', 'goa', 'delhi', 'jaipur']

export function isPrimaryCity(slug) {
  return PRIMARY_CITY_SLUGS.includes(slug)
}

export function getCityRobots(slug) {
  const index = isPrimaryCity(slug)
  return {
    index,
    follow: true,
    googleBot: {
      index,
      follow: true,
    },
  }
}

