import Image from 'next/image'
import Container from '../../components/ui/Container'
import SmartCTAButton from '../../components/SmartCTAButton'
import Navbar from '../../components/Navbar'
import CTAFooter from '../../components/CTAFooter'

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
            
            {/* Car Character - Bottom Right (Desktop Only) */}
            <div className="hidden md:block absolute bottom-0 right-0 w-32 h-32 opacity-20">
              <Image
                src="/detour/strips/Car.png"
                alt="Car character"
                width={128}
                height={128}
                className="object-contain"
                sizes="128px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
          
          {/* Car Character - Below Box (Mobile Only) */}
          <div className="md:hidden flex justify-end mt-4 -mb-12">
            <div className="w-24 h-24 opacity-30">
              <Image
                src="/detour/strips/Car.png"
                alt="Car character"
                width={96}
                height={96}
                className="object-contain"
                sizes="96px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </Container>
      </main>
      
      <CTAFooter />
    </>
  )
}
