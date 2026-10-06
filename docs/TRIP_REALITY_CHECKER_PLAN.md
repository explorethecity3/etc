# Explore The City — Trip Reality Checker

## 1. Product definition

### Promise

**Find the problems in an India itinerary before the trip does.**

The traveller enters a proposed day plan or builds one from the site's destination data. The checker evaluates whether the plan is realistic, explains each problem in plain language, and produces a safer, better-sequenced alternative.

This is not a generic chatbot. Every factual warning must come from structured destination data, deterministic rules, or a clearly identified external source. AI may rewrite explanations, but it must not invent places, schedules, prices, travel times, or safety advice.

### Primary user

- A domestic or international traveller planning a one-to-five-day Indian city trip.
- A traveller who already has a rough itinerary from notes, a tour operator, social media, or another AI tool.
- Families, seniors, solo travellers, and budget-conscious groups who need more than a list of attractions.

### Initial destination scope

Launch with five verified destinations: Bangalore, Mumbai, Goa, Delhi, and Jaipur. Add another city only when its places, areas, durations, hours, closure rules, costs, and warnings have passed editorial review.

## 2. User experience

### Homepage

The homepage becomes tool-first:

1. Headline: "Will your India itinerary actually work?"
2. Two primary actions:
   - Check my itinerary
   - Build a realistic itinerary
3. A short example report showing an overloaded day being corrected.
4. A concise methodology section explaining the score.
5. Supported destinations and last-reviewed dates.
6. Privacy and limitations statement.

### Entry modes

#### Guided builder (version 1)

The traveller selects places using searchable cards. This is the most reliable launch mode because all inputs map to reviewed place IDs.

Inputs:

- Destination
- Travel date or month (optional)
- Number of days
- Starting neighbourhood
- Travellers: solo, couple, friends, family, seniors
- Walking tolerance: low, normal, high
- Pace: relaxed, balanced, packed
- Budget level
- Transport preference: public transport, taxi/auto, self-drive, mixed
- Day start and finish times
- Interests
- Accessibility or child-friendly preference
- Selected attractions for each day

#### Paste an itinerary (version 2)

The traveller pastes plain text. A parser proposes matched places and times. The user must confirm uncertain matches before analysis. Unrecognised places are retained as manual stops but receive only general pacing checks.

No pasted itinerary is published, indexed, or used to train a model.

### Results

The report opens with:

- Overall Reality Score from 0–100
- Verdict: Comfortable, Workable, Rushed, or Unrealistic
- Confidence level based on data completeness
- Three most important corrections
- A day-by-day timeline

Each issue card contains:

- Severity: critical, warning, or suggestion
- What is wrong
- Why it matters
- Recommended correction
- Source or review date where applicable

Actions:

- Apply all safe fixes
- Review fixes one at a time
- Copy itinerary
- Print or save as PDF
- Start again

Public share links are excluded from the first release. They introduce storage, moderation, privacy, spam, and index-quality risks without improving the core checker.

## 3. Scoring model

Start at 100 and apply capped penalties. Always show the contributing factors; the score must never be a black box.

| Category | Maximum penalty | Examples |
| --- | ---: | --- |
| Opening compatibility | 30 | Closed day, scheduled outside hours, seasonal closure |
| Geographic feasibility | 25 | Cross-city backtracking, excessive transfer time |
| Time capacity | 20 | Visit durations plus travel exceed the available day |
| Traveller suitability | 10 | Excessive walking, poor senior/child fit, inaccessible route |
| Weather and daylight | 5 | Outdoor stop at peak heat, monsoon-sensitive activity |
| Budget fit | 5 | Estimated day cost exceeds the selected range |
| Operational risk | 5 | Ferry dependency, advance ticket, peak-hour transfer |

Verdicts:

- 85–100: Comfortable
- 70–84: Workable
- 50–69: Rushed
- 0–49: Unrealistic

Critical conflicts cap the score until resolved. For example, a primary attraction scheduled on its weekly closure day cannot receive a Comfortable verdict.

### Core checks

1. **Closed or unavailable:** opening windows, weekly closure, seasonal limitations.
2. **Insufficient time:** estimated visit duration plus transfers and meal/rest buffers.
3. **Geographic zig-zag:** repeated movement between distant zones.
4. **Transfer realism:** airport, railway, ferry, or intercity buffer is too short.
5. **Peak-hour exposure:** a route relies on road travel during known congestion periods.
6. **Heat and rain exposure:** outdoor-heavy midday plan in hot months or weather-sensitive activity during monsoon.
7. **Pace mismatch:** number and intensity of stops conflict with selected pace or group.
8. **Budget mismatch:** transport and entry estimates exceed the chosen daily range.
9. **Duplicate experience:** too many similar stops crowd out variety.
10. **Missing essentials:** no meal break, no recovery buffer, or no viable evening finish.

## 4. Recommendation engine

The engine should be deterministic and testable.

1. Validate and normalise input.
2. Resolve selected place IDs.
3. Build the available time window for each day.
4. Insert visit durations, meal buffers, and transfer estimates.
5. Calculate conflicts and penalties.
6. Group stops into geographic zones.
7. Generate candidate sequences using nearest-neighbour ordering within editorial constraints.
8. Compare candidates by total transfer time, closure compatibility, pace, and preferences.
9. Return the original analysis and an improved plan.

Do not call an AI model for factual planning. If an AI enhancement is enabled, provide only the completed structured report and permit it to improve tone. Validate its response against a strict schema and fall back to deterministic text on any error.

## 5. Data model

The existing JSON attractions need structured planning fields. A place record should become:

```json
{
  "id": "delhi-qutub-minar",
  "name": "Qutub Minar",
  "city": "delhi",
  "zone": "mehrauli",
  "coordinates": { "lat": 28.5245, "lng": 77.1855 },
  "categories": ["history", "architecture"],
  "typicalVisitMinutes": 120,
  "minimumVisitMinutes": 75,
  "openingWindows": [{ "days": [1, 2, 3, 4, 5, 6, 7], "start": "07:00", "end": "17:00" }],
  "seasonalRules": [],
  "estimatedCost": { "domestic": 40, "international": 600 },
  "walkingLevel": "moderate",
  "accessibility": "partial",
  "childFriendly": true,
  "indoorOutdoor": "outdoor",
  "advanceBooking": false,
  "notes": [],
  "officialSource": "https://...",
  "sourceCheckedAt": "2026-10-06"
}
```

Supporting records:

- City zones and travel-time matrix by transport mode and time band.
- Seasonal climate rules rather than live weather in version 1.
- Meal/rest rules by traveller type and pace.
- Daily budget ranges and typical local-transport costs.
- Editorial warnings with source, review date, and expiry/recheck date.

Coordinates and schedules must be sourced and manually verified. Unknown values remain unknown; they must not be guessed.

## 6. Pages and components

### Routes

- `/` — tool-first homepage
- `/trip-checker` — guided builder
- `/trip-checker/results` — client-side/private results state, `noindex`
- `/methodology` — scoring and source policy
- `/destinations` — supported-city status and review dates
- `/about`, `/privacy-policy`, `/terms`, `/contact`
- Five maintained destination reference pages

### Components

- `TripSetupForm`
- `PlaceSearch`
- `DayTimelineEditor`
- `RealityScore`
- `IssueCard`
- `ConfidenceBadge`
- `ImprovedItinerary`
- `MethodologySummary`
- `SourceDisclosure`
- `PrintReport`

The timeline must support keyboard operation, not only drag-and-drop. Add/move controls are required for accessible use.

## 7. Technical design for the current repository

The existing Next.js 14 application can support the feature without a framework change.

Suggested modules:

- `lib/trip-checker/validation.js`
- `lib/trip-checker/schedule.js`
- `lib/trip-checker/routing.js`
- `lib/trip-checker/scoring.js`
- `lib/trip-checker/recommendations.js`
- `lib/trip-checker/report.js`
- `data/planner/cities/*.json`
- `app/api/trip-check/route.js`

Replace the in-memory IP quota in the current itinerary API. It resets on serverless instances and is not a dependable abuse-control mechanism. The deterministic checker can initially run primarily in the browser, with a server route only for optional enhancements or future live-data integrations.

Store the active plan in browser state. Use an encoded local export only when the user explicitly downloads or copies it. No account or database is required for the first release.

## 8. Trust, privacy, and content policy

- Do not claim that every location was personally visited.
- Identify whether a note is firsthand, editorially researched, or sourced from an official authority.
- Show `sourceCheckedAt` for time-sensitive advice.
- Never present the score as a safety guarantee.
- Avoid collecting names, emails, hotel addresses, booking references, or precise live location.
- Starting area should be a neighbourhood or landmark, not a hotel booking record.
- Keep generated results private and `noindex`.
- Add a clear correction mechanism to every supported destination.

## 9. SEO and AdSense boundaries

The product should earn approval through real usefulness, not tool-result pages created for search traffic.

- Index only the homepage, methodology, supported destinations, trust pages, and genuinely maintained destination references.
- Never create indexable URLs for every combination of city, budget, month, and interest.
- Do not place ads inside the form, beside warnings, or where they could be confused with controls.
- Delay ad placement on private result screens until policy eligibility is clear.
- Publish real methodology and change logs instead of generic SEO articles.
- Reapply only after the product has been live, recrawled, and used by real visitors for several weeks.

## 10. Analytics

Measure product value without storing itinerary contents:

- Checker started
- Checker completed
- Fix applied
- Report copied or printed
- Unsupported destination requested
- Validation failure category
- Average score band
- Return visit within 30 days

Do not send free-text itineraries, starting areas, or detailed travel plans to analytics.

Success indicators for the first release:

- At least 45% of started checkers reach a report.
- At least 20% of reports have a correction applied, copied, or printed.
- Fewer than 5% of completed reports fail due to missing planner data.
- Users return or share the tool organically.

## 11. Delivery phases

### Phase 0 — Editorial audit

- Select the five launch cities.
- Remove unsupported credibility claims.
- Mark non-launch city pages `noindex` and remove them from the sitemap.
- Define sources and freshness rules.

### Phase 1 — Data foundation

- Create the planner schema and validator.
- Research coordinates, durations, zones, schedules, and constraints.
- Complete and manually review one city before scaling to five.
- Add automated schema and conflict tests.

### Phase 2 — Reality Checker MVP

- Build guided itinerary input and timeline editor.
- Implement checks, scoring, explanations, and improved sequencing.
- Add private results, copy, and print views.
- Publish methodology and limitations.

### Phase 3 — Product homepage

- Replace the content-directory emphasis with the checker promise.
- Add an interactive before/after example.
- Retain only high-quality supporting reference content.
- Add privacy-preserving product analytics.

### Phase 4 — Paste and parse

- Add plain-text itinerary parsing.
- Require confirmation of matched places and uncertain times.
- Keep deterministic analysis as the source of truth.

### Phase 5 — Expansion

- Add cities one at a time after data review.
- Add multi-city routing and fixed-budget planning.
- Consider live weather or mapping only when API cost, attribution, caching, and reliability are understood.

## 12. Testing plan

### Unit tests

- Weekly closure conflict
- Outside-hours conflict
- Visit-duration overflow
- Transfer-time overflow
- Peak-hour penalty
- Pace and walking mismatch
- Budget calculation
- Score boundaries and penalty caps
- Candidate ordering stability
- Missing data and unknown-place behaviour

### Scenario tests

- One relaxed day with two nearby places
- Four distant places in one day
- Attraction scheduled on its closure day
- Family plan with excessive walking
- Senior plan without rest buffers
- Monsoon-sensitive Goa plan
- Mumbai plan requiring a peak-hour cross-city road transfer
- Delhi plan split incorrectly between Old Delhi and Mehrauli
- Unknown manual stop mixed with reviewed places
- Empty, malformed, and oversized submissions

### Quality checks

- Mobile widths and slow connections
- Keyboard-only operation
- Screen-reader labels and error announcements
- Print/PDF layout
- No result-page indexing
- No private itinerary data in logs or analytics
- Structured-data validation on public pages
- Lighthouse performance and accessibility checks

## 13. MVP acceptance criteria

The MVP is ready only when:

- All five launch cities pass the planner-data validator.
- Every warning can identify the rule and data that produced it.
- The same input always produces the same factual result.
- Critical closure and time conflicts are caught by automated tests.
- The suggested alternative fits inside the configured day window.
- Unknown facts are labelled rather than invented.
- Results are private, non-indexable, printable, and usable on mobile.
- About, methodology, author, privacy, and supported-destination statements are consistent.
- A manual editorial review has been completed for every launch city.

## 14. Explicit non-goals for version 1

- Booking hotels, trains, flights, or attractions
- Live traffic guarantees
- Live ticket availability
- Public user accounts
- Public itinerary pages
- User reviews or community posts
- A free-form AI travel chatbot
- Automatic nationwide coverage

These can be reconsidered only after the checker has demonstrated accuracy, usage, and a maintainable editorial workflow.
