import { FaMapMarkedAlt, FaUsers, FaHeart, FaLightbulb } from 'react-icons/fa'

export const metadata = {
  title: 'About Us - Explore The City',
  description: 'Learn about Explore The City - your trusted guide for discovering amazing cities across India with authentic local experiences.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Explore The City</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Your trusted companion for discovering the soul of India's cities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Explore The City was born from a simple passion - to help travelers discover the
                authentic soul of India's diverse cities. We believe that every city has its own
                unique character, hidden gems, and untold stories waiting to be discovered.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What started as a personal travel journal has grown into a comprehensive platform
                that helps thousands of travelers explore cities beyond the typical tourist spots.
                We focus on authentic experiences, local insights, and practical information that
                truly matters to travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <FaMapMarkedAlt className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Authenticity</h3>
              <p className="text-gray-600">
                We share real experiences and honest recommendations from actual travelers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4">
                <FaUsers className="text-secondary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Community</h3>
              <p className="text-gray-600">
                Building a community of travelers who share knowledge and experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <FaHeart className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Passion</h3>
              <p className="text-gray-600">
                Driven by genuine love for travel and discovering new cultures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4">
                <FaLightbulb className="text-secondary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Useful Info</h3>
              <p className="text-gray-600">
                Providing practical tips and information that actually helps travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our mission is to make city exploration accessible, enjoyable, and meaningful for
              every traveler. Whether you're a budget backpacker, a luxury traveler, a solo
              explorer, or traveling with family - we provide information that helps you make the
              most of your journey.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We go beyond just listing tourist attractions. We share local food spots, hidden
              gems, cultural insights, practical tips, and budget estimates to help you plan your
              perfect city adventure. Our goal is to help you experience cities the way locals do,
              not just as a tourist passing through.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
