import Link from 'next/link'

export default function CityCrossLinks({ citySlug, cityName, currentPage }) {
  const links = [
    { slug: 'places-to-explore', label: `Top Attractions in ${cityName}`, icon: '🏛️' },
    { slug: 'food', label: `Local Food & Cuisine`, icon: '🍽️' },
    { slug: 'hidden-gems', label: `Hidden Gems & Secret Spots`, icon: '💎' },
    { slug: 'best-time', label: `Best Time to Visit`, icon: '🗓️' },
    { slug: 'budget', label: `Budget & Costs`, icon: '💰' },
    { slug: 'travel-tips', label: `Travel Tips & Advice`, icon: '✈️' },
  ]

  // Filter out the current page
  const relatedLinks = links.filter(link => link.slug !== currentPage)

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-12">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        🔗 Continue Exploring {cityName}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {relatedLinks.map((link) => (
          <Link
            key={link.slug}
            href={`/cities/${citySlug}/${link.slug}`}
            className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
          >
            <span className="text-2xl mr-3">{link.icon}</span>
            <span className="text-gray-700 group-hover:text-primary transition font-medium">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
