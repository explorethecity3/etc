import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Explore The City</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your trusted companion for discovering India's incredible destinations
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Explore The City is dedicated to helping travelers discover the beauty, culture, and heritage of India's most fascinating destinations. We believe that every city has its own unique story to tell, and we're here to help you experience it authentically.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a first-time visitor or a seasoned traveler, our comprehensive city guides provide you with everything you need to plan an unforgettable journey—from the best time to visit and must-see attractions to local food recommendations and practical travel tips.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Comprehensive City Guides</h3>
                <p className="text-gray-600">
                  Detailed information about top attractions, hidden gems, local food, and cultural experiences in each city.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Travel Tips & Advice</h3>
                <p className="text-gray-600">
                  Practical insights on transportation, accommodation, safety, and local customs to make your trip smooth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Budget Planning</h3>
                <p className="text-gray-600">
                  Realistic budget estimates and cost breakdowns to help you plan your expenses effectively.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-3">Seasonal Guidance</h3>
                <p className="text-gray-600">
                  Expert recommendations on the best time to visit based on weather, festivals, and crowd levels.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-primary text-2xl mr-4">✓</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Authenticity</h3>
                  <p className="text-gray-600">We provide genuine, honest information based on real experiences and thorough research.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary text-2xl mr-4">✓</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Quality Content</h3>
                  <p className="text-gray-600">Every guide is carefully crafted with detailed, helpful information that adds real value to your travel planning.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary text-2xl mr-4">✓</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">User-Focused</h3>
                  <p className="text-gray-600">We design our content with you in mind, making it easy to find the information you need quickly.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary text-2xl mr-4">✓</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Continuous Improvement</h3>
                  <p className="text-gray-600">We regularly update our guides to ensure accuracy and relevance for today's travelers.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Have Questions or Suggestions?</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Whether you have feedback, questions, or just want to share your travel stories, get in touch with us.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
