// pages/terms.jsx  (or app/(public)/terms/page.jsx depending on your Next.js structure)
export default function TermsPage() {
  const effectiveDate = "January 2025";
  const contactEmail = "contact@explorethecity.in"; // Replace if needed

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary to-secondary py-20" role="banner">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </header>

      <main className="container-custom py-16" role="main">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-800">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> {effectiveDate}
          </p>

          <section aria-labelledby="acceptance-of-terms" className="mb-10">
            <h2 id="acceptance-of-terms" className="text-3xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p>
              Welcome to <strong>Explore The City</strong> (“Company”, “we”, “our”, “us”). These Terms and Conditions (“Terms”) govern your access to and use of our website <a href="https://www.explorethecity.in" className="text-primary hover:underline" rel="noopener noreferrer">explorethecity.in</a> (“Website”), including all information, guides, and services provided.
            </p>
            <p className="mt-3">
              By accessing or using our Website, you agree to be bound by these Terms. If you do not agree with these Terms, you must stop using the Website immediately.
            </p>
            <p className="mt-3">
              By using the Website you confirm that you are at least 13 years old and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section aria-labelledby="use-of-website" className="mb-10">
            <h2 id="use-of-website" className="text-3xl font-bold text-gray-800 mb-3">2. Use of the Website</h2>

            <h3 className="text-2xl font-semibold mt-4 mb-2">2.1 Permitted Use</h3>
            <p>
              You may use the Website solely for lawful, personal, non-commercial purposes, such as accessing travel guides, blog posts, city information, and general travel-related content.
            </p>

            <h3 className="text-2xl font-semibold mt-4 mb-2">2.2 Prohibited Use</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violating any applicable local, national, or international law or regulation.</li>
              <li>Copying, reproducing, or republishing content without our prior written permission.</li>
              <li>Using automated systems (bots, scrapers, spiders) to extract data from the Website.</li>
              <li>Uploading or transmitting any malicious code, malware, or spam.</li>
              <li>Interfering with or attempting to interfere with the security or proper functioning of the Website.</li>
              <li>Impersonating another person or falsely stating or misrepresenting your affiliation with a person or entity.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-4 mb-2">2.3 User Accounts</h3>
            <p>
              The Website currently does not require user accounts for access. If account features are added in the future, you will be responsible for maintaining the confidentiality of your account credentials and for all activity under your account.
            </p>
          </section>

          <section aria-labelledby="intellectual-property" className="mb-10">
            <h2 id="intellectual-property" className="text-3xl font-bold text-gray-800 mb-3">3. Intellectual Property</h2>

            <h3 className="text-2xl font-semibold mt-4 mb-2">3.1 Ownership</h3>
            <p>
              All content on the Website — including text, images, graphics, logos, designs, audio, video, and code — is owned by Explore The City or its licensors and is protected by intellectual property laws.
            </p>

            <h3 className="text-2xl font-semibold mt-4 mb-2">3.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to view and share the content for personal, non-commercial use. You must not republish, sell, rent, or commercially exploit the content without our express written permission.
            </p>
          </section>

          <section aria-labelledby="travel-disclaimer" className="mb-10">
            <h2 id="travel-disclaimer" className="text-3xl font-bold text-gray-800 mb-3">4. Travel Information &amp; Disclaimer</h2>

            <h3 className="text-2xl font-semibold mt-4 mb-2">4.1 Informational Purposes Only</h3>
            <p>
              Content on the Website (including guides, tips, reviews, and itineraries) is provided for general informational purposes only. While we strive for accuracy, we make no warranties or guarantees regarding the completeness, accuracy, or suitability of the information provided.
            </p>

            <h3 className="text-2xl font-semibold mt-4 mb-2">4.2 Your Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You should verify prices, availability, safety, and local regulations directly with providers or official sources before making plans or purchases.</li>
              <li>We are not responsible for any travel arrangements, bookings, losses, delays, or incidents arising from reliance on our content.</li>
            </ul>
          </section>

          <section aria-labelledby="third-party-links" className="mb-10">
            <h2 id="third-party-links" className="text-3xl font-bold text-gray-800 mb-3">5. Third-Party Links &amp; Affiliates</h2>

            <h3 className="text-2xl font-semibold mt-4 mb-2">5.1 Third-Party Links</h3>
            <p>
              Our Website may include links to third-party websites, services, or resources that we do not own or control. We are not responsible for the content, privacy practices, or accuracy of third-party sites.
            </p>

            <h3 className="text-2xl font-semibold mt-4 mb-2">5.2 Affiliate Disclosure</h3>
            <p>
              Some links on our Website are affiliate links. If you click an affiliate link and make a purchase, we may receive a commission at no additional cost to you. We only promote products and services we believe may be helpful to our readers.
            </p>
          </section>

          <section aria-labelledby="advertising-cookies" className="mb-10">
            <h2 id="advertising-cookies" className="text-3xl font-bold text-gray-800 mb-3">6. Advertising, Cookies &amp; Tracking</h2>

            <h3 className="text-2xl font-semibold mt-4 mb-2">6.1 Advertising</h3>
            <p>
              The Website may display advertisements served by third-party ad networks (including Google AdSense) and may include sponsored content. We do not control the content of advertisements, and we are not responsible for claims made by advertisers.
            </p>
            <p className="mt-3">
              You must not click on advertisements for the purpose of generating revenue for the site or otherwise manipulate ad impressions or clicks. Artificially inflating ad traffic is prohibited and may lead to account termination.
            </p>

            <h3 className="text-2xl font-semibold mt-4 mb-2">6.2 Cookies &amp; Tracking</h3>
            <p>
              We use cookies, analytics services (such as Google Analytics), and other tracking technologies to operate and improve the Website, analyze user behavior, and show relevant content and advertisements. By using the Website, you consent to our use of cookies and tracking technologies in accordance with our Privacy Policy.
            </p>
            <p className="mt-3">
              You can control cookies via your browser settings or privacy tools; however, disabling cookies may affect site functionality.
            </p>
          </section>

          <section aria-labelledby="user-content" className="mb-10">
            <h2 id="user-content" className="text-3xl font-bold text-gray-800 mb-3">7. User Content</h2>
            <p>
              If you submit content (comments, photos, reviews, or other materials) to the Website, you grant Explore The City a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, publish, and display that content in any media.
            </p>
            <p className="mt-3">
              You represent and warrant that any content you submit is your own, does not violate third-party rights, and is not illegal, defamatory, or infringing. We reserve the right to remove or refuse any user content at our discretion.
            </p>
          </section>

          <section aria-labelledby="limitation-of-liability" className="mb-10">
            <h2 id="limitation-of-liability" className="text-3xl font-bold text-gray-800 mb-3">8. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, EXPLORE THE CITY WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE WEBSITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-3">
              This limitation applies to all claims, whether based in contract, tort, negligence, strict liability, or otherwise.
            </p>
          </section>

          <section aria-labelledby="indemnification" className="mb-10">
            <h2 id="indemnification" className="text-3xl font-bold text-gray-800 mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Explore The City, its officers, directors, employees, agents, and partners from any claims, liabilities, losses, damages, and expenses (including reasonable attorneys' fees) arising from your violation of these Terms or your use of the Website.
            </p>
          </section>

          <section aria-labelledby="termination" className="mb-10">
            <h2 id="termination" className="text-3xl font-bold text-gray-800 mb-3">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Website, in whole or in part, at any time and for any reason, including breach of these Terms or unlawful activity, without prior notice.
            </p>
          </section>

          <section aria-labelledby="dmca" className="mb-10">
            <h2 id="dmca" className="text-3xl font-bold text-gray-800 mb-3">11. DMCA / Copyright Complaints</h2>
            <p>
              If you believe content on our Website infringes your copyright, please send a notice to our designated agent at <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a> with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>A description of the copyrighted work you claim was infringed.</li>
              <li>The URL(s) of the material you claim is infringing.</li>
              <li>Your name, address, telephone number, and email address.</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner.</li>
              <li>A statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
              <li>Your electronic or physical signature.</li>
            </ul>
            <p className="mt-3">We will respond to valid notices under applicable law.</p>
          </section>

          <section aria-labelledby="governing-law" className="mb-10">
            <h2 id="governing-law" className="text-3xl font-bold text-gray-800 mb-3">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India without regard to conflict-of-law provisions. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of courts located in India.
            </p>
          </section>

          <section aria-labelledby="changes-to-terms" className="mb-10">
            <h2 id="changes-to-terms" className="text-3xl font-bold text-gray-800 mb-3">13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When material changes are made, we will provide notice by updating the <strong>Effective Date</strong> at the top of this page and, where appropriate, posting a prominent notice on the Website. Your continued use after changes constitute acceptance of the updated Terms.
            </p>
          </section>

          <section aria-labelledby="entire-agreement" className="mb-10">
            <h2 id="entire-agreement" className="text-3xl font-bold text-gray-800 mb-3">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, Cookie Policy, and any other policies posted on the Website, constitute the entire agreement between you and Explore The City regarding your use of the Website.
            </p>
          </section>

          <section aria-labelledby="accessibility" className="mb-10">
            <h2 id="accessibility" className="text-3xl font-bold text-gray-800 mb-3">15. Accessibility</h2>
            <p>
              We aim to make the Website accessible and usable for as many people as possible. If you encounter accessibility barriers, please contact us at <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a> and we will make reasonable efforts to assist.
            </p>
          </section>

          <section aria-labelledby="contact" className="mb-10">
            <h2 id="contact" className="text-3xl font-bold text-gray-800 mb-3">16. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="mb-2"><strong>Website:</strong> <a href="https://www.explorethecity.in" className="text-primary hover:underline" rel="noopener noreferrer">www.explorethecity.in</a></p>
              <p className="mb-2"><strong>Contact Page:</strong> <a href="/contact" className="text-primary hover:underline">Visit our Contact page</a></p>
              <p className="mb-0"><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></p>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-primary p-6 mt-8 rounded">
            <p className="text-gray-700">
              By using Explore The City, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
