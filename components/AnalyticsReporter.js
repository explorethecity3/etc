'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const CONTENT_PATH = /^\/(?:guides|(?:bangalore|mumbai|goa|delhi|jaipur)-guides(?:\/|$)|itineraries(?:\/|$)|cities\/[^/]+(?:\/|$))/

function sendEvent(name, parameters) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, parameters)
  }
}

export default function AnalyticsReporter() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    sendEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${pathname}${window.location.search}`,
    })

    if (!CONTENT_PATH.test(pathname)) return

    let sentHalfway = false
    const trackReadingDepth = () => {
      if (sentHalfway) return
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0 || window.scrollY / scrollable < 0.5) return

      sentHalfway = true
      sendEvent('content_halfway_read', {
        content_path: pathname,
        content_group: pathname === '/guides' ? 'guide_library' : pathname.split('/')[1],
      })
      window.removeEventListener('scroll', trackReadingDepth)
    }

    window.addEventListener('scroll', trackReadingDepth, { passive: true })
    trackReadingDepth()

    return () => window.removeEventListener('scroll', trackReadingDepth)
  }, [pathname])

  return null
}
