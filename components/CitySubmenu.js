'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { isPrimaryCity } from '@/lib/indexingPolicy'

export default function CitySubmenu({ citySlug }) {
  const pathname = usePathname()
  const useGuidePages = isPrimaryCity(citySlug)

  const menuItems = [
    { name: 'About', path: `/cities/${citySlug}` },
    { name: 'Best Time', section: 'best-time' },
    { name: 'Places to Explore', section: 'places-to-explore', anchor: 'places' },
    { name: 'Food', section: 'food' },
    { name: 'Hidden Gems', section: 'hidden-gems' },
    { name: 'Travel Tips', section: 'travel-tips' },
    { name: 'Budget', section: 'budget' },
  ].map((item) => ({
    ...item,
    path: item.path || (useGuidePages
      ? `/cities/${citySlug}/${item.section}`
      : `/cities/${citySlug}#${item.anchor || item.section}`),
  }))

  const isActive = (path) => !path.includes('#') && pathname === path

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
