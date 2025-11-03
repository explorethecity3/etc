'use client'

export default function AdSense({ slot, format = 'auto', responsive = true }) {
  // This is a placeholder for Google AdSense
  // Replace with actual AdSense code after approval

  return (
    <div className="ad-container">
      {/* <p className="text-sm">Advertisement</p>
      <p className="text-xs mt-2">Google AdSense Slot: {slot}</p>
      <p className="text-xs text-gray-400 mt-1">
        (Replace this component with actual AdSense code after approval)
      </p> */}
    </div>
  )
}

/*
After Google AdSense Approval, replace the component with:

'use client'
import { useEffect } from 'react'

export default function AdSense({ slot, format = 'auto', responsive = true }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Add your AdSense client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}
*/
