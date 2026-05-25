import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Explore The City',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="container-custom py-20 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link href="/" className="btn-primary">
          Go to Homepage
        </Link>
        <Link href="/cities" className="text-primary hover:underline self-center">
          Browse Cities
        </Link>
      </div>
    </div>
  )
}
