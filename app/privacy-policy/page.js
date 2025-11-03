export const metadata = {
  title: 'Privacy Policy - Explore The City',
  description: 'Privacy Policy for Explore The City. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-100">
            Last Updated: January 2024
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                At Explore The City (www.explorethecity.in), we are committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              When you subscribe to our newsletter or contact us, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Name and email address</li>
              <li>Any information you provide in contact forms or comments</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Send you newsletters and updates (if you've subscribed)</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze website usage and improve our content</li>
              <li>Detect and prevent technical issues and fraud</li>
              <li>Display relevant advertisements through Google AdSense</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website
              and store certain information. Cookies are files with small amounts of data that
              are stored on your device.
            </p>
            <p className="text-gray-700 mb-4">Types of cookies we use:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Advertising Cookies:</strong> Used to display relevant ads through Google AdSense</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be able to use some
              portions of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Google AdSense</h2>
            <p className="text-gray-700 mb-4">
              We use Google AdSense to display advertisements on our website. Google uses cookies
              to serve ads based on your prior visits to our website or other websites. You may
              opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Ads Settings
              </a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We have no control over and
              assume no responsibility for the content, privacy policies, or practices of any
              third-party sites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100%
              secure. While we strive to protect your data, we cannot guarantee its absolute
              security.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Unsubscribe from our email communications at any time</li>
              <li>Opt out of cookies through your browser settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the "Last
              Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> contact@explorethecity.in
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> www.explorethecity.in
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
              <p className="text-gray-700 font-semibold mb-2">Important Note:</p>
              <p className="text-gray-700 text-sm">
                By using our website, you consent to our Privacy Policy and agree to its terms.
                Please review this policy periodically for any updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
