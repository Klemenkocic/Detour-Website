import Image from 'next/image'
import LocalVsTourist from '../components/LocalVsTourist'
import TripStyleQuiz from '../components/TripStyleQuiz'
import WhyTravelWithUs from '../components/WhyTravelWithUs'
import IdeaToAdventure from '../components/IdeaToAdventure'
import SeeBeforeBegins from '../components/SeeBeforeBegins'
import CTAFooter from '../components/CTAFooter'

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/detour/branding/logo/horizontal/dark and primary.png"
                alt="Detour"
                width={140}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#how-it-works" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors text-sm">How it Works</a>
              <a href="#features" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors text-sm">Features</a>
              <a href="#docs" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors text-sm">Documentation</a>
              <a href="#contact" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors text-sm">Contact</a>
            </div>
            
            {/* CTA Button */}
            <button className="h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200">
              Start Planning
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-0 pb-8 bg-gray-50">
        <div className="w-full px-6 lg:px-8">
          <div className="relative min-h-[85vh] flex items-center justify-start overflow-hidden rounded-3xl mt-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/detour/hero/hero.png"
                alt="Interactive map showing a scenic road trip route with multiple stops including landmarks and points of interest"
                fill
                className="object-cover object-center rounded-3xl"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20 rounded-3xl" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-left text-white px-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Your Next <span className="relative"><span className="line-through">Trip</span><span className="absolute -top-8 left-0 text-detour-primary text-2xl md:text-3xl lg:text-4xl font-covered-by-your-grace">Adventure</span></span>, Planned<br />
                <span className="text-white">in Minutes</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-2xl leading-relaxed font-normal">
                Set your starting point and destination to begin your journey.<br />
                It&apos;s quick, simple, and built to get you moving.
              </p>
              <button className="h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200">
                Start Planning
              </button>
            </div>
          </div>
        </div>
      </section>

      <LocalVsTourist />

      <TripStyleQuiz />

      <WhyTravelWithUs />

      <IdeaToAdventure />

      <SeeBeforeBegins />

      <CTAFooter />
    </>
  )
}
