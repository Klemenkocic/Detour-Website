import Image from 'next/image'
import Container from '../../components/ui/Container'
import SmartCTAButton from '../../components/SmartCTAButton'
import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'Documentation - Detour',
  description: 'Learn how Detour transforms your travel ideas into unforgettable adventures.',
}

export default function DocsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Container className="py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-detour-gray900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-detour-gray700 max-w-2xl mx-auto leading-relaxed">
              Learn how Detour transforms your travel ideas into unforgettable adventures with smart planning and local insights.
            </p>
          </div>

          {/* In Progress Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#F0E0FF] rounded-3xl p-12 text-center relative overflow-hidden">

              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-covered-by-your-grace text-detour-primary mb-4">
                  In Progress
                </h2>
                
                <p className="text-lg text-detour-gray700 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We&apos;re working hard to create comprehensive documentation that will help you make the most of Detour. 
                  Our docs will include step-by-step guides, API references, and best practices for planning epic road trips.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/50 rounded-2xl p-6">
                    <h3 className="font-bold text-detour-gray900 mb-2">Getting Started</h3>
                    <p className="text-sm text-detour-gray700">Quick setup and your first trip</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6">
                    <h3 className="font-bold text-detour-gray900 mb-2">Advanced Features</h3>
                    <p className="text-sm text-detour-gray700">3D maps, local insights, and more</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6">
                    <h3 className="font-bold text-detour-gray900 mb-2">API Reference</h3>
                    <p className="text-sm text-detour-gray700">Integration guides and examples</p>
                  </div>
                </div>

                <p className="text-detour-gray600 mb-6">
                  Want to be notified when our documentation is ready?
                </p>
                
                <div className="mb-8">
                  <SmartCTAButton>
                    Get Early Access
                  </SmartCTAButton>
                </div>

              </div>
            </div>
            
            {/* Car Character - Bottom Right */}
            <div className="absolute bottom-4 right-4 w-16 h-16">
              <Image
                src="/detour/strips/Car.png"
                alt="Car character"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
