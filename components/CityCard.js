import Link from 'next/link'
import Image from 'next/image'

export default function CityCard({ city }) {
  return (
    <Link href={`/cities/${city.slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full transform hover:-translate-y-2">
        <div className="relative h-56 w-full">
          <Image
            src={city.image}
            alt={city.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.name}</h3>
          <p className="text-gray-600 text-sm">{city.state}</p>
        </div>
      </div>
    </Link>
  )
}
