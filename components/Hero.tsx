'use client'

import Image from 'next/image'
import SmartCTAButton from './SmartCTAButton'

export default function Hero() {
  return (
    <section className="pt-0 pb-6 sm:pb-8 bg-gray-50 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[calc(100vh-8rem)] sm:min-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl mt-20 sm:mt-20 lg:mt-24">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/detour/hero/hero.png"
              alt="Interactive map showing a scenic road trip route with multiple stops including landmarks and points of interest"
              fill
              className="object-cover object-center rounded-2xl sm:rounded-3xl"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl sm:rounded-3xl" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
              Your Next <span className="relative inline-block"><span className="line-through">Trip</span><span className="absolute -top-4 sm:-top-3 md:-top-4 lg:-top-6 xl:-top-8 left-0 text-detour-primary text-3xl sm:text-base md:text-lg lg:text-2xl xl:text-4xl font-covered-by-your-grace whitespace-nowrap">Adventure</span></span>,<br className="block sm:hidden" />
              <span className="block sm:inline">Planned <span className="text-white">in Minutes</span></span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
              Set your starting point and destination to begin your journey.<br className="hidden sm:block" />
              It&apos;s quick, simple, and built to get you moving.
            </p>
            <SmartCTAButton>
              Get Early Access
            </SmartCTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
