export const ITINERARY_LANDINGS = [
  {
    slug: 'bangalore-one-day',
    citySlug: 'bangalore',
    title: 'Can You Cover Bangalore in One Day?',
    description: 'A realistic one-day Bangalore route through Lalbagh, the city centre and Bangalore Palace, with travel buffers and an editable feasibility check.',
    eyebrow: 'One realistic Bangalore day',
    intro: 'You can have a satisfying first day in Bangalore, but only if you resist crossing the city for every famous sight. This plan begins in the south, moves through the centre and finishes north of the core.',
    verdict: 'Four stops are workable at a balanced pace. Adding ISKCON Temple usually turns this into a long day unless you start early and accept a late finish.',
    stopNames: ['Lalbagh Botanical Garden', 'Cubbon Park', 'Vidhana Soudha', 'Bangalore Palace'],
    stopNotes: [
      'Start while the garden is cooler and morning traffic is still building.',
      'Walk, pause for breakfast or coffee, and avoid treating the park like a quick photo stop.',
      'The exterior visit fits naturally beside Cubbon Park; interior access is not part of this plan.',
      'Finish here rather than travelling back south during the evening peak.',
    ],
    removeFirst: 'Bangalore Palace. Removing it keeps the entire day around Lalbagh and the central district.',
    notes: ['Avoid scheduling the first cross-city cab after 8:30 AM.', 'Keep lunch near Cubbon Park instead of making a separate restaurant journey.', 'Rain and peak-hour traffic can easily consume the route buffer.'],
  },
  {
    slug: 'mumbai-one-day',
    citySlug: 'mumbai',
    title: 'Can You Cover Mumbai in One Day?',
    description: 'A realistic South Mumbai one-day itinerary connecting the Gateway of India, Fort, Marine Drive and Haji Ali without attempting distant suburbs.',
    eyebrow: 'A compact South Mumbai route',
    intro: 'Mumbai is not a city to conquer in a day. The sensible version stays in South Mumbai and follows the coastline north instead of adding Elephanta Caves or Sanjay Gandhi National Park.',
    verdict: 'Four stops can work, but Haji Ali depends on access conditions and the time you spend around Colaba. Elephanta Caves needs a different day.',
    stopNames: ['Gateway of India', 'Chhatrapati Shivaji Maharaj Terminus', 'Marine Drive', 'Haji Ali Dargah'],
    stopNotes: [
      'Begin in Colaba before the waterfront becomes busiest.',
      'Move through the Fort district and allow time to look rather than treating the station as a drive-by stop.',
      'Use this as the slower middle of the day, with lunch nearby.',
      'Keep this last because access and queues can make the visit unpredictable.',
    ],
    removeFirst: 'Haji Ali Dargah. The remaining three stops create a much calmer South Mumbai day.',
    notes: ['Do not combine Elephanta Caves with this route unless you remove at least two city stops.', 'Local trains can be efficient, but unfamiliar peak-hour platforms add stress.', 'Waterfront stops feel very different in heavy rain, heat and weekend crowds.'],
  },
  {
    slug: 'goa-one-day',
    citySlug: 'goa',
    title: 'Can You Cover North and South Goa in One Day?',
    description: 'A realistic Goa day that stays around Panjim, Old Goa and the north instead of losing hours travelling between distant beaches.',
    eyebrow: 'Goa without the cross-state rush',
    intro: 'The common Goa mistake is treating every beach as nearby. For one day, keep Panjim, Old Goa and the northern coast together. Palolem belongs on a separate South Goa day.',
    verdict: 'Old Goa, Fontainhas and two northern stops make a full but workable day. Adding Palolem creates an exhausting transfer-heavy plan.',
    stopNames: ['Basilica of Bom Jesus', 'Se Cathedral', 'Fontainhas', 'Fort Aguada'],
    stopNotes: [
      'Start in Old Goa before tour groups build up.',
      'This sits beside the Basilica, so the second major sight adds little transfer time.',
      'Move to Panjim for lunch and a slower walk through the Latin Quarter.',
      'Finish towards the northern coast and stay for the softer late-afternoon light.',
    ],
    removeFirst: 'Fort Aguada. The remaining route becomes a relaxed heritage day around Old Goa and Panjim.',
    notes: ['Do not add Palolem to a North Goa day.', 'Scooters save time only for confident, properly licensed riders using helmets.', 'Weekend beach traffic can make short-looking road distances surprisingly slow.'],
  },
  {
    slug: 'delhi-one-day',
    citySlug: 'delhi',
    title: 'How Many Delhi Monuments Fit in One Day?',
    description: 'A realistic Delhi monuments route covering the Red Fort, India Gate, Humayun’s Tomb and the National Museum with practical travel buffers.',
    eyebrow: 'A Delhi day with room to breathe',
    intro: 'Delhi rewards choosing a direction. This route starts in Old Delhi, moves through central Delhi and ends south of the centre. Qutub Minar is excellent, but it does not belong in every one-day plan.',
    verdict: 'Four substantial stops are possible with an early start. Adding Qutub Minar or Lotus Temple makes the route noticeably more fragile.',
    stopNames: ['Red Fort', 'National Museum', 'India Gate', "Humayun's Tomb"],
    stopNotes: [
      'Arrive near opening time and keep the surrounding Old Delhi exploration deliberately limited.',
      'Use the museum as an indoor midday stop and allow more time than a quick highlights visit.',
      'This works as a shorter outdoor pause between the museum and the southern monuments.',
      'Finish here instead of continuing farther south to Qutub Minar.',
    ],
    removeFirst: 'National Museum if monuments are the priority, or Red Fort if you want a quieter central-and-south Delhi day.',
    notes: ['Security queues can alter even a carefully timed plan.', 'Keep Old Delhi food exploration on the same side of the city as the Red Fort.', 'Heat, winter fog and air quality should influence how long you remain outdoors.'],
  },
  {
    slug: 'jaipur-one-day',
    citySlug: 'jaipur',
    title: 'Can You See Jaipur in One Day?',
    description: 'A realistic Jaipur one-day route beginning at Amber Fort and grouping Hawa Mahal, City Palace and Jantar Mantar in the old city.',
    eyebrow: 'Amber first, old city second',
    intro: 'Jaipur becomes inefficient when travellers bounce between Amber and the old city. The clean route is simple: visit Amber early, then spend the rest of the day around the three neighbouring old-city landmarks.',
    verdict: 'This is one of the stronger four-stop plans in the checker because the final three sights sit close together. Nahargarh Fort should remain optional.',
    stopNames: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
    stopNotes: [
      'Go first for cooler weather and a less pressured climb through the complex.',
      'Treat the façade and interior visit according to your interest; the famous view itself can be brief.',
      'Allow a genuine palace visit rather than rushing through only the main courtyard.',
      'Finish next door, leaving the evening free for the markets or an early meal.',
    ],
    removeFirst: 'City Palace if time or ticket budget is tight. Hawa Mahal and Jantar Mantar still form a compact old-city pair.',
    notes: ['Do not place Nahargarh between Amber and the old city.', 'Start before Jaipur’s heat and road traffic build.', 'Agree on transport terms before leaving Amber, where return options can be busier.'],
  },
]

export function getItineraryLanding(slug) {
  return ITINERARY_LANDINGS.find((plan) => plan.slug === slug)
}

export function getItineraryLandingByCity(citySlug) {
  return ITINERARY_LANDINGS.find((plan) => plan.citySlug === citySlug)
}
