import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export const metadata = {
  title: 'Contact Us - Explore The City',
  description: 'Get in touch with Explore The City. We\'d love to hear from you about your travel experiences or any questions you might have.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            We'd love to hear from you. Share your experiences or ask us anything!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Travel inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your travel plans or questions..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                <p className="text-sm text-gray-600">
                  * Required fields. We typically respond within 24-48 hours.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have a question about a city? Want to share your travel story? Or have
                suggestions for our website? We're here to help and would love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-block p-3 bg-primary/10 rounded-lg">
                      <FaEnvelope className="text-primary text-xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">contact@explorethecity.in</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-block p-3 bg-secondary/10 rounded-lg">
                      <FaMapMarkerAlt className="text-secondary text-xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">India</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Covering cities across the country
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-block p-3 bg-primary/10 rounded-lg">
                      <FaPhone className="text-primary text-xl" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Social Media</h3>
                    <p className="text-gray-600">Follow us on social platforms</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Facebook, Instagram, Twitter
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Questions?</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-700">
                    <strong>For general inquiries:</strong> Use the contact form above
                  </p>
                  <p className="text-gray-700">
                    <strong>Want to contribute?</strong> Send us your travel stories
                  </p>
                  <p className="text-gray-700">
                    <strong>Report an issue?</strong> Let us know what needs correction
                  </p>
                  <p className="text-gray-700">
                    <strong>Partnership inquiries?</strong> Email us with your proposal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
