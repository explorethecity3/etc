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
              Your ultimate guide to discovering amazing cities across India.
              Explore hidden gems, local experiences, and travel tips.
            </p>
            <div className="mt-4">
              <Link href="/about" className="text-white hover:text-gray-200 underline text-sm">
                Learn More
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
