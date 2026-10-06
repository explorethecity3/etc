const PACE_LIMITS = { relaxed: 330, balanced: 450, packed: 570 }
const PACE_LABELS = { relaxed: 'Relaxed', balanced: 'Balanced', packed: 'Packed' }

function transferMinutes(from, to) {
  if (!from || !to) return 0
  return from.zone === to.zone ? 20 : 55
}

function minutesLabel(minutes) {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return `${hours ? `${hours} hr${hours === 1 ? '' : 's'} ` : ''}${rest ? `${rest} min` : ''}`.trim()
}

function clockToMinutes(value) {
  const [hours, minutes] = value.split(':').map(Number)
  return (hours * 60) + minutes
}

function crowdEstimate(place, arrivalMinutes, dayType) {
  const hour = Math.floor((arrivalMinutes % 1440) / 60)
  let level = place.crowdBase || 2
  if (dayType === 'weekend') level += 1
  if (hour < 9) level -= 1
  if (hour >= 11 && hour < 16 && place.crowdBase >= 2) level += 1
  if (hour >= 17 && place.setting === 'outdoor') level += 1
  level = Math.max(1, Math.min(3, level))
  const labels = { 1: 'Usually quieter', 2: 'Moderate crowds', 3: 'Likely crowded' }
  const tips = {
    1: 'This is generally a calmer window, though queues can still occur.',
    2: 'Allow a little buffer for entry, photos and moving through the site.',
    3: 'Expect queues or busy viewpoints; arriving earlier may make the stop easier.',
  }
  return { level, label: labels[level], tip: tips[level] }
}

export function analyseTrip({ city, selectedPlaceIds, pace = 'balanced', group = 'Couple', startTime = '09:00', dayType = 'weekday' }) {
  const selected = selectedPlaceIds.map((id) => city.places.find((place) => place.id === id)).filter(Boolean)
  const issues = []
  let score = 100
  let travelMinutes = 0
  let zoneChanges = 0

  for (let index = 1; index < selected.length; index += 1) {
    travelMinutes += transferMinutes(selected[index - 1], selected[index])
    if (selected[index - 1].zone !== selected[index].zone) zoneChanges += 1
  }

  const visitMinutes = selected.reduce((total, place) => total + place.durationMinutes, 0)
  const mealAndRestMinutes = selected.length >= 3 ? 75 : 30
  const totalMinutes = visitMinutes + travelMinutes + mealAndRestMinutes
  const limit = PACE_LIMITS[pace] || PACE_LIMITS.balanced

  if (selected.length < 2) {
    score -= 10
    issues.push({ severity: 'suggestion', title: 'This is not a full-day plan yet', detail: 'Add at least one more stop to receive a useful route assessment.', fix: 'Choose two to five places for the day.' })
  }
  if (totalMinutes > limit) {
    const overflow = totalMinutes - limit
    const penalty = Math.min(25, 10 + Math.ceil(overflow / 30) * 3)
    score -= penalty
    issues.push({ severity: overflow > 120 ? 'critical' : 'warning', title: `The day runs about ${minutesLabel(overflow)} beyond a ${PACE_LABELS[pace].toLowerCase()} pace`, detail: `Stops, conservative transfers and breaks need roughly ${minutesLabel(totalMinutes)}.`, fix: 'Remove the lowest-priority stop or move it to another day.' })
  }
  if (zoneChanges >= 3) {
    score -= 18
    issues.push({ severity: 'warning', title: 'The route zig-zags across the destination', detail: `${zoneChanges} area changes could turn the day into a sequence of transfers.`, fix: 'Group nearby places and keep one distant area for another day.' })
  } else if (zoneChanges === 2) {
    score -= 8
    issues.push({ severity: 'suggestion', title: 'Two cross-area transfers add uncertainty', detail: 'Traffic, queues and finding transport can consume the buffer.', fix: 'Keep the order geographically compact where possible.' })
  }
  if ((group === 'Family' || group === 'Seniors') && selected.filter((place) => place.setting === 'outdoor').length >= 3) {
    score -= 10
    issues.push({ severity: 'warning', title: 'The plan is outdoor-heavy for this group', detail: 'Three or more outdoor stops can be tiring, especially in heat or rain.', fix: 'Replace one outdoor stop with an indoor stop and retain a longer break.' })
  }
  if (selected.length >= 5) {
    score -= 8
    issues.push({ severity: 'warning', title: `${selected.length} major stops leave little recovery time`, detail: 'Queues, meals and small delays can make the final stop unrealistic.', fix: 'Treat the last stop as optional or move it to another day.' })
  }

  // Keep the traveller's order inside each area; only remove cross-city zig-zagging.
  const improved = [...selected].sort((a, b) => a.zone.localeCompare(b.zone))
  const changed = improved.some((place, index) => place.id !== selected[index]?.id)
  let routeClock = clockToMinutes(startTime)
  const routeWithCrowds = improved.map((place, index) => {
    if (index > 0) routeClock += transferMinutes(improved[index - 1], place)
    const arrivalMinutes = routeClock
    routeClock += place.durationMinutes
    return { ...place, arrivalMinutes, crowd: crowdEstimate(place, arrivalMinutes, dayType) }
  })
  score = Math.max(0, Math.min(100, score))
  const verdict = score >= 85 ? 'Comfortable' : score >= 70 ? 'Workable' : score >= 50 ? 'Rushed' : 'Unrealistic'

  return {
    score,
    verdict,
    confidence: selected.length >= 2 ? 'Good for pacing; live conditions still need checking' : 'Low',
    metrics: { visitMinutes, travelMinutes, totalMinutes, zoneChanges },
    issues,
    original: selected,
    improved: routeWithCrowds,
    changed,
    startTime,
    dayType,
    disclaimer: 'This assessment uses typical crowd patterns and conservative planning estimates, not live footfall, traffic, ticket availability or a safety guarantee. Reconfirm current opening and access details.',
  }
}
