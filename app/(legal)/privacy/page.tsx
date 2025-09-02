import Container from '@/components/ui/Container'
import Navbar from '@/components/Navbar'
import CTAFooter from '@/components/CTAFooter'

export const metadata = {
  title: 'Privacy Policy - Detour',
  description: 'Privacy policy for Detour trip planning service.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <h1 className="text-4xl font-bold text-detour-gray900 mb-8">Privacy Policy</h1>
            <p className="text-detour-gray600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">1. Introduction</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  Welcome to Detour (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website mydetour.co and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-detour-gray900 mb-3">Personal Information</h3>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700">
                  <li>Sign up for early access to our platform</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us directly</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                
                <h3 className="text-xl font-medium text-detour-gray900 mb-3 mt-6">Automatic Information Collection</h3>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  When you visit our website, we automatically collect certain information about your device and usage patterns:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device information (type, operating system)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">3. How We Use Your Information</h2>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about early access and product updates</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze website usage and improve our services</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700">
                  <li><strong>Service Providers:</strong> With trusted third-party services (Google Analytics, email providers) that help us operate our website</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">5. Your Privacy Rights (GDPR)</h2>
                <p className="text-detour-gray700 leading-relaxed mb-4">
                  If you are a resident of the European Economic Area (EEA), you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-detour-gray700">
                  <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                  <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
                  <li><strong>Right to Object:</strong> Object to data processing for marketing purposes</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing</li>
                </ul>
                <p className="text-detour-gray700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:privacy@mydetour.co" className="text-detour-primary hover:underline">privacy@mydetour.co</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">6. Data Security</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">7. Data Retention</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Email addresses for early access will be retained until our platform launches and for a reasonable period thereafter.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">8. Cookies and Tracking</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  Our website uses cookies and similar tracking technologies. For detailed information about our cookie usage, please see our <a href="/cookies" className="text-detour-primary hover:underline">Cookie Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Changes are effective immediately upon posting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-detour-gray900 mb-4">10. Contact Us</h2>
                <p className="text-detour-gray700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
