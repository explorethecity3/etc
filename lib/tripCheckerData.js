import bangalore from '@/data/bangalore.json'
import mumbai from '@/data/mumbai.json'
import goa from '@/data/goa.json'
import delhi from '@/data/delhi.json'
import jaipur from '@/data/jaipur.json'

const SOURCE_CITIES = { bangalore, mumbai, goa, delhi, jaipur }

const PLANNING = {
  bangalore: {
    zones: ['central', 'south', 'north', 'east'],
    places: {
      'Lalbagh Botanical Garden': ['south', 120, 'outdoor'],
      'Cubbon Park': ['central', 90, 'outdoor'],
      'Bangalore Palace': ['north', 120, 'mixed'],
      'Vidhana Soudha': ['central', 45, 'outdoor'],
      'ISKCON Temple': ['north', 90, 'mixed'],
      'Bull Temple': ['south', 60, 'mixed'],
    },
  },
  mumbai: {
    zones: ['colaba', 'fort', 'marine', 'bandra', 'suburbs'],
    places: {
      'Gateway of India': ['colaba', 60, 'outdoor'],
      'Marine Drive': ['marine', 75, 'outdoor'],
      'Chhatrapati Shivaji Maharaj Terminus': ['fort', 60, 'mixed'],
      'Elephanta Caves': ['colaba', 300, 'outdoor'],
      'Haji Ali Dargah': ['marine', 90, 'mixed'],
      'Sanjay Gandhi National Park': ['suburbs', 240, 'outdoor'],
    },
  },
  goa: {
    zones: ['panjim', 'old-goa', 'north', 'south'],
    places: {
      'Basilica of Bom Jesus': ['old-goa', 75, 'mixed'],
      'Se Cathedral': ['old-goa', 60, 'mixed'],
      'Fort Aguada': ['north', 90, 'outdoor'],
      'Calangute Beach': ['north', 120, 'outdoor'],
      'Palolem Beach': ['south', 150, 'outdoor'],
      'Fontainhas': ['panjim', 90, 'outdoor'],
    },
  },
  delhi: {
    zones: ['old-delhi', 'central', 'south', 'mehrauli'],
    places: {
      'Red Fort': ['old-delhi', 150, 'mixed'],
      'India Gate': ['central', 60, 'outdoor'],
      'Qutub Minar': ['mehrauli', 120, 'outdoor'],
      "Humayun's Tomb": ['south', 120, 'outdoor'],
      'Lotus Temple': ['south', 90, 'mixed'],
      'Akshardham Temple': ['central', 180, 'mixed'],
    },
  },
  jaipur: {
    zones: ['old-city', 'amer', 'central', 'west'],
    places: {
      'Amber Fort': ['amer', 180, 'mixed'],
      'City Palace': ['old-city', 120, 'mixed'],
      'Hawa Mahal': ['old-city', 75, 'mixed'],
      'Jantar Mantar': ['old-city', 75, 'outdoor'],
      'Nahargarh Fort': ['amer', 120, 'outdoor'],
      'Albert Hall Museum': ['central', 90, 'indoor'],
    },
  },
}

function normaliseName(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export const CHECKER_CITIES = Object.entries(PLANNING).map(([slug, config]) => {
  const city = SOURCE_CITIES[slug]
  const sourceAttractions = Array.isArray(city.attractions) ? city.attractions : city.topAttractions || []
  const sourceByName = new Map(sourceAttractions.map((place) => [place.name, place]))
  const places = Object.entries(config.places).map(([name, [zone, durationMinutes, setting]]) => {
    const source = sourceByName.get(name) || {}
    return {
      id: `${slug}-${normaliseName(name)}`,
      name,
      zone,
      durationMinutes,
      setting,
      description: source.description || '',
      timings: source.timings || 'Check current opening arrangements before visiting.',
      entryFee: source.entryFee || 'Check current admission details.',
    }
  })
  return {
    slug,
    name: city.name,
    state: city.state,
    lastReviewed: city.lastUpdated,
    places,
  }
})

export function getCheckerCity(slug) {
  return CHECKER_CITIES.find((city) => city.slug === slug)
}

