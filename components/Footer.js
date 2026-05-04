import Link from 'next/link'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold uppercase mb-2">
              About Us
            </h3>
            <p className="text-white text-sm max-w-md">
              An independent, locally-written travel publication. We started with one city — Bangalore — and write everything from first-hand visits.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link href="/about" className="text-white hover:text-gray-200 underline">
                About
              </Link>
              <Link href="/cities/bangalore" className="text-white hover:text-gray-200 underline">
                Bangalore Guide
              </Link>
              <Link href="/blog" className="text-white hover:text-gray-200 underline">
                Articles
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=100083632778123&sk=about" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors" aria-label="Facebook">
              <FaFacebook size={32} />
            </a>
            <a href="https://www.youtube.com/@explorethecity7465" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors" aria-label="YouTube">
              <FaYoutube size={32} />
            </a>
            <a href="https://www.instagram.com/explorethecity03/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors" aria-label="Instagram">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>

        <div className="border-t border-orange-600 mt-8 pt-6 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} ExploreTheCity.in. All rights reserved. |
            <Link href="/privacy-policy" className="hover:underline ml-2">Privacy Policy</Link> |
            <Link href="/terms" className="hover:underline ml-2">Terms</Link> |
            <Link href="/contact" className="hover:underline ml-2">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
