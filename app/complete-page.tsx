import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-detour-primary">
              Detour
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors">How it Works</a>
              <a href="#features" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors">Features</a>
              <a href="#docs" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors">Documentation</a>
              <a href="#contact" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors">Contact</a>
            </div>
            <button className="h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200">
              Start Planning
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/detour/hero/hero.png"
            alt="Interactive map showing a scenic road trip route with multiple stops including landmarks and points of interest"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="text-detour-primary text-3xl md:text-4xl font-covered-by-your-grace">
              Detour
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your Next Trip, Planned<br />
            <span className="text-detour-primary">in Minutes</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Set your starting point and destination to begin your journey. 
            It&apos;s quick, simple, and built to get you moving.
          </p>
          <button className="h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200">
            Start Planning
          </button>
          <div className="mt-12 text-white/80 text-sm">
            <p>✨ Plan epic road trips • 🎯 Smart stops • 🎨 Visual inspiration</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Don't travel as a tourist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-detour-gray900 mb-4">
              Don&apos;t travel as a tourist
            </h2>
            <p className="text-2xl md:text-3xl text-detour-primary font-covered-by-your-grace mb-6">
              be a local
            </p>
            <p className="text-lg text-detour-gray700 max-w-2xl mx-auto leading-relaxed">
              Detour makes it effortless to plan epic road trips — complete with local gems, hidden stops, and a memorable itinerary that feels like a local created it.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/detour/strips/images.png"
                alt="Collection of travel experiences showing local adventures: people exploring caves, enjoying local cuisine, experiencing authentic cultural moments, and discovering hidden scenic viewpoints"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-detour-gray700 max-w-2xl mx-auto">
              Skip the tourist traps and discover the authentic experiences that make each destination special.
            </p>
          </div>
        </div>
      </section>

      {/* Trip Planning Quiz */}
      <section className="py-20 bg-detour-sky">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-4">
              <span className="text-detour-blue text-2xl font-covered-by-your-grace">
                How do you usually
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C20 2 40 2 60 4C80 6 100 4 120 3C140 2 160 4 180 3C185 2.5 190 2 198 2" stroke="#0071EB" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-detour-gray900 mb-4">plan a trip?</h2>
            <p className="text-detour-gray700">
              Tell us about your travel preferences so we can create the perfect itinerary for you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-detour-gray700 mb-2">
                  What&apos;s your travel style?
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Adventure seeker, Cultural explorer, Foodie..."
                  className="w-full px-3 py-2 border border-detour-gray200 rounded-lg focus:ring-2 focus:ring-detour-primary focus:border-transparent transition-colors"
                />
                <p className="text-sm text-detour-gray300 mt-1">This helps us understand what kind of experiences you enjoy</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-detour-gray700 mb-2">
                  What are you most interested in?
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Local cuisine, Historical sites, Nature, Art..."
                  className="w-full px-3 py-2 border border-detour-gray200 rounded-lg focus:ring-2 focus:ring-detour-primary focus:border-transparent transition-colors"
                />
                <p className="text-sm text-detour-gray300 mt-1">We&apos;ll prioritize stops that match your interests</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-detour-gray700 mb-2">
                  How long is your trip?
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Weekend getaway, 1 week, 2 weeks..."
                  className="w-full px-3 py-2 border border-detour-gray200 rounded-lg focus:ring-2 focus:ring-detour-primary focus:border-transparent transition-colors"
                />
                <p className="text-sm text-detour-gray300 mt-1">This helps us plan the right number of stops</p>
              </div>

              <div className="pt-4">
                <button className="w-full h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200">
                  Next
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-detour-gray300">
              <span className="font-covered-by-your-grace text-detour-blue text-lg">Note:</span>
              {' '}This is a demo form. Full trip planning features coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Why you'll like traveling with us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-2xl text-detour-primary font-covered-by-your-grace mb-4">Love</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-detour-gray900 mb-6">
              Why you&apos;ll like traveling<br />with us
            </h2>
            <p className="text-lg text-detour-gray700 max-w-2xl mx-auto">
              Detour isn&apos;t just another trip planner — it&apos;s your personal travel companion that understands what makes a journey unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Smart Stop Suggestions */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="/detour/features/interactive-maps.png"
                  alt="Interactive map interface showing smart route planning with suggested stops and points of interest"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <h3 className="text-xl font-bold text-detour-gray900 mb-3">Smart Stop Suggestions</h3>
              <p className="text-detour-gray700 leading-relaxed">
                Our AI suggests the perfect stops based on your route, interests, and time constraints. No more endless research.
              </p>
            </div>

            {/* Visual Inspiration Built In */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="/detour/features/visual-inspiration.png"
                  alt="Visual inspiration gallery showing beautiful destination photos and local recommendations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <h3 className="text-xl font-bold text-detour-gray900 mb-3">Visual Inspiration Built In</h3>
              <p className="text-detour-gray700 leading-relaxed">
                Every stop comes with stunning photos and local insights to help you decide what&apos;s worth the detour.
              </p>
            </div>

            {/* Easy, Flexible Editing */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="/detour/features/milan-florence.png"
                  alt="Trip editing interface showing flexible itinerary management between Milan and Florence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <h3 className="text-xl font-bold text-detour-gray900 mb-3">Easy, Flexible Editing</h3>
              <p className="text-detour-gray700 leading-relaxed">
                Drag, drop, add, or remove stops in seconds. Your itinerary adapts as quickly as your plans change.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-detour-gray700 mb-6">
              Join thousands of travelers who&apos;ve discovered their perfect road trip with Detour.
            </p>
            <div className="flex items-center justify-center space-x-2 text-detour-gray300">
              <span className="font-covered-by-your-grace text-detour-primary text-xl">Milan</span>
              <div className="flex-1 max-w-xs h-px bg-detour-gray200"></div>
              <span className="font-covered-by-your-grace text-detour-primary text-xl">Florence</span>
            </div>
          </div>
        </div>
      </section>

      {/* From idea to adventure */}
      <section className="py-20 bg-detour-primarySoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-detour-gray900 mb-6">
              From idea to adventure<br />
              <span className="font-covered-by-your-grace text-detour-primary">in just a few clicks</span>
            </h2>
            <p className="text-lg text-detour-gray700 max-w-2xl mx-auto">
              We&apos;ve simplified trip planning into three simple steps that turn your travel dreams into reality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-12 top-24 w-0.5 h-16 bg-detour-primary/20"></div>
              
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-detour-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1.5 bg-detour-primarySoft text-detour-primary text-sm font-medium rounded-full mb-3 border border-detour-primary/20">
                  Easy Start
                </div>
                <h3 className="text-2xl font-bold text-detour-gray900 mb-3">Point on the Map, Set the pace</h3>
                <p className="text-detour-gray700 text-lg leading-relaxed">
                  Start with your starting point and destination. Set your preferences for the perfect pace — quick stops or leisurely exploration.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative">
              <div className="hidden md:block absolute left-12 top-24 w-0.5 h-16 bg-detour-primary/20"></div>
              
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-detour-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1.5 bg-detour-primarySoft text-detour-primary text-sm font-medium rounded-full mb-3 border border-detour-primary/20">
                  AI-Powered
                </div>
                <h3 className="text-2xl font-bold text-detour-gray900 mb-3">Get a Smart, Playful Itinerary</h3>
                <p className="text-detour-gray700 text-lg leading-relaxed">
                  Our AI creates a personalized route with hidden gems, local favorites, and must-see attractions tailored to your interests.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-detour-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1.5 bg-detour-primarySoft text-detour-primary text-sm font-medium rounded-full mb-3 border border-detour-primary/20">
                  Visual Preview
                </div>
                <h3 className="text-2xl font-bold text-detour-gray900 mb-3">See It Come Alive in 2D & 3D</h3>
                <p className="text-detour-gray700 text-lg leading-relaxed">
                  Visualize your journey with interactive maps, stunning photos, and virtual previews of each stop before you go.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <svg width="300" height="60" viewBox="0 0 300 60" fill="none" className="mx-auto text-detour-primary">
              <path d="M10 50C50 10 100 10 150 30C200 50 250 10 290 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="5,5" fill="none"/>
              <circle cx="10" cy="50" r="4" fill="currentColor"/>
              <circle cx="290" cy="30" r="4" fill="currentColor"/>
            </svg>
            <p className="text-detour-gray700 mt-4">
              <span className="font-covered-by-your-grace text-detour-primary text-xl">Ready?</span>
              {' '}Let&apos;s turn your next trip idea into an unforgettable adventure.
            </p>
          </div>
        </div>
      </section>

      {/* See Your Journey Before It Begins */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-detour-gray900 mb-6">
              <span className="font-covered-by-your-grace text-detour-primary">See Your Journey</span>
              <br />Before It Begins
            </h2>
            <p className="text-lg text-detour-gray700 max-w-2xl mx-auto">
              Preview every stop, explore each destination, and get excited about your adventure before you even pack your bags.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Itinerary Preview */}
            <div>
              <h3 className="text-2xl font-bold text-detour-gray900 mb-6">Your Itinerary Preview</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-detour-primarySoft/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-detour-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-detour-primary font-medium">3 Days to Barcelona</p>
                    <p className="font-medium text-detour-gray900">Barcelona</p>
                  </div>
                  <div className="text-sm text-detour-gray300">2h 30min</div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-detour-primarySoft/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-detour-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-detour-gray900">Girona, Arús</p>
                  </div>
                  <div className="text-sm text-detour-gray300">45min</div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-detour-primarySoft/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-detour-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-detour-gray900">Figueres</p>
                  </div>
                  <div className="text-sm text-detour-gray300">1h 15min</div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-detour-primarySoft/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-detour-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-detour-gray900">Collioure</p>
                  </div>
                  <div className="text-sm text-detour-gray300">2h</div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="w-full md:w-auto h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200">
                  Start Planning Your Trip
                </button>
              </div>
            </div>

            {/* Right Side - Visual Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/detour/cta/cta.png"
                  alt="Interactive trip preview showing detailed itinerary with photos, timing, and route visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-detour-gray100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-detour-green"></div>
                  <span className="text-sm font-medium text-detour-gray900">Live Preview</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-detour-gray100">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-detour-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium text-detour-gray900">Interactive Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-detour-gray900 text-white">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="font-covered-by-your-grace text-detour-primary">Join the Adventure</span>
                <br />Today!
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to discover the world? Share your email and be the first to start planning epic road trips with Detour.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white/10 border border-white/20 placeholder-gray-400 focus:bg-white/20 focus:ring-2 focus:ring-detour-primary focus:border-transparent transition-colors"
                />
                <button className="h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200 whitespace-nowrap">
                  Get Started
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Join 10,000+ travelers already planning their next adventure
              </p>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="text-2xl font-bold text-white mb-4">Detour</div>
                <p className="text-gray-400 max-w-md">
                  Turn every road trip into an unforgettable adventure with smart route planning, local discoveries, and visual inspiration.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How it Works</a></li>
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                  <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2025 Detour. All rights reserved.</p>
              <p className="mt-2 sm:mt-0">
                Made with <span className="text-detour-primary font-covered-by-your-grace text-base">love</span> for adventurous travelers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
