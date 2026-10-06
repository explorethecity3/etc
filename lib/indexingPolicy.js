export const PRIMARY_CITY_SLUGS = ['bangalore', 'mumbai', 'goa', 'delhi', 'jaipur']

export function isPrimaryCity(slug) {
  return PRIMARY_CITY_SLUGS.includes(slug)
}

