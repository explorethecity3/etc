'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CitySubmenu({ citySlug }) {
  const pathname = usePathname()

  const menuItems = [
    { name: 'About', path: `/cities/${citySlug}` },
    { name: 'Best Time', path: `/cities/${citySlug}/best-time` },
    { name: 'Attractions', path: `/cities/${citySlug}/attractions` },
    { name: 'Food', path: `/cities/${citySlug}/food` },
    { name: 'Travel Tips', path: `/cities/${citySlug}/travel-tips` },
    { name: 'Budget', path: `/cities/${citySlug}/budget` }
  ]

  const isActive = (path) => pathname === path

  return (
    <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
      <div className="container-custom">
        <div className="flex overflow-x-auto no-scrollbar">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-6 py-4 font-medium transition-all whitespace-nowrap border-b-2 ${
                isActive(item.path)
                  ? 'text-primary border-primary'
                  : 'text-gray-600 border-transparent hover:text-primary hover:border-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
