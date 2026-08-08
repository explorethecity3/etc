'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const CITY_GUIDE = /^\/cities\/[^/]+(?:\/(?:best-time|budget|food|hidden-gems|places-to-explore|travel-tips))?\/?$/
const BLOG_ARTICLE = /^\/blog\/[^/]+\/?$/

export default function AdSenseLoader() {
  const pathname = usePathname()
  const eligible = CITY_GUIDE.test(pathname) || BLOG_ARTICLE.test(pathname)

  useEffect(() => {
    if (!eligible) return undefined

    const script = document.createElement('script')
    script.id = 'adsense-loader'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6525177681486877'
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [eligible, pathname])

  return null
}
