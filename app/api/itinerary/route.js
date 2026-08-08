import { NextResponse } from 'next/server'
import { createItinerary, plannerPrompt, validatePlannerInput } from '@/lib/itineraryPlanner'

export const dynamic = 'force-dynamic'

const requests = new Map()
const DAILY_LIMIT = 5
const DAY_MS = 24 * 60 * 60 * 1000

function clientKey(request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'local'
}

function consumeQuota(key) {
  const now = Date.now()
  const current = requests.get(key)
  if (!current || now - current.startedAt >= DAY_MS) {
    requests.set(key, { count: 1, startedAt: now })
    return DAILY_LIMIT - 1
  }
  if (current.count >= DAILY_LIMIT) return -1
  current.count += 1
  return DAILY_LIMIT - current.count
}

async function enhanceWithAi(input, plan) {
  const baseUrl = process.env.OMNIROUTE_URL?.replace(/\/$/, '')
  const apiKey = process.env.OMNIROUTE_API_KEY
  if (!baseUrl || !apiKey) return null

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 12000)
  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OMNIROUTE_MODEL || 'auto',
        temperature: 0.2,
        response_format: { type: 'json_object' },
        messages: [{ role: 'user', content: plannerPrompt(input, plan) }],
      }),
      signal: controller.signal,
      cache: 'no-store',
    })
    if (!response.ok) return null
    const payload = await response.json()
    const content = payload?.choices?.[0]?.message?.content
    if (!content) return null
    const enhanced = JSON.parse(content)
    const summary = typeof enhanced?.summary === 'string' ? enhanced.summary.trim().slice(0, 220) : ''
    const dayTitles = Array.isArray(enhanced?.dayTitles) ? enhanced.dayTitles : []
    if (!summary || dayTitles.length !== plan.days || dayTitles.some((title) => typeof title !== 'string')) return null
    return {
      ...plan,
      summary,
      dayPlans: plan.dayPlans.map((day, index) => ({
        ...day,
        title: dayTitles[index].trim().slice(0, 70) || day.title,
      })),
    }
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = validatePlannerInput(body)
  if (parsed.error) return NextResponse.json({ error: parsed.error }, { status: 400 })

  const remaining = consumeQuota(clientKey(request))
  if (remaining < 0) {
    return NextResponse.json({ error: 'Daily planning limit reached. Please try again tomorrow.' }, { status: 429 })
  }

  const verifiedPlan = createItinerary(parsed.value)
  const aiPlan = await enhanceWithAi(parsed.value, verifiedPlan)

  return NextResponse.json({
    plan: aiPlan || verifiedPlan,
    aiEnhanced: Boolean(aiPlan),
    remaining,
    notice: 'Schedules, prices and access rules can change. Verify time-sensitive details before travelling.',
  }, {
    headers: { 'Cache-Control': 'no-store, private' },
  })
}
