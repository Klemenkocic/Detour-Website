import Image from 'next/image'
import Container from '../../components/ui/Container'
import SmartCTAButton from '../../components/SmartCTAButton'
import Navbar from '../../components/Navbar'
import CTAFooter from '../../components/CTAFooter'

export const metadata = {
  title: 'Contact - Detour',
  description: 'Get in touch with the Detour team for support and inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Container className="py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-detour-gray900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-detour-gray700 max-w-2xl mx-auto leading-relaxed">
              Have questions about Detour? We&apos;d love to hear from you and help plan your next adventure.
            </p>
          </div>

          {/* Contact Content */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#EBFFED] rounded-3xl border border-gray-200 p-12 shadow-lg text-center">
              <h2 className="text-3xl md:text-4xl font-covered-by-your-grace text-detour-primary mb-4">
                Let&apos;s Connect
              </h2>
              
              <p className="text-lg text-detour-gray700 mb-8 leading-relaxed">
                Detour is currently in development, and we&apos;re excited to share our vision of effortless road trip planning with you. 
                Whether you have questions, feedback, or just want to chat about travel, we&apos;re here to help.
              </p>

              <div className="mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 text-detour-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-detour-gray700">klemen@mydetour.co</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-detour-gray600 mb-6">
                  Want early access and updates on our progress?
                </p>
                <SmartCTAButton>
                  Get Early Access
                </SmartCTAButton>
              </div>
            </div>


          </div>
        </Container>
      </main>
      
      <CTAFooter />
    </>
  )
}
