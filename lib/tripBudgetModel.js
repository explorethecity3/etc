export const CITY_RATES = {
  bangalore: { name: 'Bangalore', room: [1600, 3000, 6000], food: [700, 1400, 2600], transport: [350, 750, 1500], activities: [250, 700, 1600] },
  mumbai: { name: 'Mumbai', room: [2400, 4800, 9000], food: [800, 1700, 3200], transport: [450, 1000, 2000], activities: [300, 900, 2000] },
  goa: { name: 'Goa', room: [1900, 3800, 7500], food: [800, 1600, 3000], transport: [550, 1200, 2300], activities: [350, 1000, 2400] },
  delhi: { name: 'Delhi', room: [1700, 3400, 6800], food: [700, 1500, 2800], transport: [350, 800, 1700], activities: [300, 800, 1800] },
  jaipur: { name: 'Jaipur', room: [1400, 2800, 5600], food: [600, 1200, 2400], transport: [400, 900, 1700], activities: [350, 900, 1900] },
}

export const TRAVEL_STYLES = [
  { id: 0, name: 'Budget', detail: 'Simple room, local meals and public transport where practical' },
  { id: 1, name: 'Comfortable', detail: 'Well-reviewed mid-range stay, mixed transport and paid attractions' },
  { id: 2, name: 'Premium', detail: 'Upscale stay, private transfers and more paid experiences' },
]

export const formatTripCurrency = (value) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
}).format(value)

export function calculateTripBudget(city, days, travellers, style) {
  const rates = CITY_RATES[city]
  const rooms = Math.ceil(travellers / 2)
  const nights = Math.max(1, days - 1)
  const accommodation = rates.room[style] * rooms * nights
  const food = rates.food[style] * travellers * days
  const transport = rates.transport[style] * travellers * days
  const activities = rates.activities[style] * travellers * days
  const subtotal = accommodation + food + transport + activities
  return {
    rooms,
    nights,
    accommodation,
    food,
    transport,
    activities,
    subtotal,
    low: Math.round(subtotal * 0.9),
    high: Math.round(subtotal * 1.2),
  }
}
