import Container from '@/components/ui/Container'
import Navbar from '@/components/Navbar'
import CTAFooter from '@/components/CTAFooter'

export const metadata = {
  title: 'Cookie Policy - Detour',
  description: 'Cookie policy for Detour trip planning service.',
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <h1 className="text-4xl font-bold text-detour-gray900 mb-8">Cookie Policy</h1>
            <p className="text-detour-gray600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">1. What Are Cookies?</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">2. How We Use Cookies</h2>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. We only use cookies with your consent, except for essential cookies that are necessary for the website to function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-medium text-detour-gray900 mb-3">Essential Cookies</h3>
                    <p className="text-detour-gray700 leading-relaxed mb-3">
                      These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-detour-gray600 mb-2"><strong>Examples:</strong></p>
                      <ul className="text-sm text-detour-gray600 space-y-1">
                        <li>• Session management cookies</li>
                        <li>• Security cookies</li>
                        <li>• Cookie consent preferences</li>
                      </ul>
                      <p className="text-sm text-detour-gray600 mt-3"><strong>Duration:</strong> Session or up to 1 year</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-medium text-detour-gray900 mb-3">Analytics Cookies</h3>
                    <p className="text-detour-gray700 leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics to analyze website traffic and user behavior.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-detour-gray600 mb-2"><strong>What we collect:</strong></p>
                      <ul className="text-sm text-detour-gray600 space-y-1">
                        <li>• Pages visited and time spent on each page</li>
                        <li>• How you arrived at our site (referral source)</li>
                        <li>• General location (country/city level)</li>
                        <li>• Device and browser information</li>
                        <li>• User interactions (clicks, scrolling)</li>
                      </ul>
                      <p className="text-sm text-detour-gray600 mt-3"><strong>Third-party service:</strong> Google Analytics</p>
                      <p className="text-sm text-detour-gray600"><strong>Duration:</strong> Up to 2 years</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-medium text-detour-gray900 mb-3">Functional Cookies</h3>
                    <p className="text-detour-gray700 leading-relaxed mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-detour-gray600 mb-2"><strong>Examples:</strong></p>
                      <ul className="text-sm text-detour-gray600 space-y-1">
                        <li>• Language preferences</li>
                        <li>• Theme preferences (if applicable)</li>
                        <li>• Form data retention</li>
                      </ul>
                      <p className="text-sm text-detour-gray600 mt-3"><strong>Duration:</strong> Up to 1 year</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">4. Third-Party Cookies</h2>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  We use the following third-party services that may set cookies on your device:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-detour-gray900 mb-2">Google Analytics</h4>
                    <p className="text-sm text-detour-gray600 mb-2">
                      We use Google Analytics to understand how our website is used and to improve user experience. Google Analytics uses cookies to collect information about your use of our website.
                    </p>
                    <p className="text-sm text-detour-gray600">
                      <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-detour-primary hover:underline">https://policies.google.com/privacy</a>
                    </p>
                    <p className="text-sm text-detour-gray600">
                      <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-detour-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">5. Managing Your Cookie Preferences</h2>
                
                <h3 className="text-xl font-medium text-detour-gray900 mb-3">Cookie Consent Banner</h3>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  When you first visit our website, you&apos;ll see a cookie consent banner that allows you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700 mb-6">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                </ul>

                <h3 className="text-xl font-medium text-detour-gray900 mb-3">Browser Settings</h3>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  You can also control cookies through your browser settings. Here&apos;s how to manage cookies in popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700">
                  <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                </ul>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">6. Your Rights</h2>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  Under GDPR and other privacy regulations, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700">
                  <li>Be informed about our cookie usage (this policy)</li>
                  <li>Give or withdraw consent for non-essential cookies</li>
                  <li>Access information about cookies we&apos;ve set</li>
                  <li>Request deletion of cookies and associated data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">7. Updates to This Cookie Policy</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. When we make changes, we will update the &quot;Last updated&quot; date at the top of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">8. Contact Us</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-detour-gray700"><strong>Email:</strong> <a href="mailto:privacy@mydetour.co" className="text-detour-primary hover:underline">privacy@mydetour.co</a></p>
                  <p className="text-detour-gray700"><strong>General Contact:</strong> <a href="mailto:klemen@mydetour.co" className="text-detour-primary hover:underline">klemen@mydetour.co</a></p>
                  <p className="text-detour-gray700"><strong>Website:</strong> <a href="https://mydetour.co" className="text-detour-primary hover:underline">mydetour.co</a></p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
      
      <CTAFooter />
    </>
  )
}
