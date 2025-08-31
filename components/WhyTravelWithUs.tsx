import Image from 'next/image'

export default function WhyTravelWithUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
        
        {/* Row 1: Header with 2 columns */}
        <div className="grid grid-cols-2 gap-20 mb-20">
          {/* Left column: Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-detour-gray900 relative">
              Why you&apos;ll <span className="relative">
                <p className="absolute -top-8 left-0 text-4xl md:text-5xl text-detour-primary font-covered-by-your-grace">Love</p>
                <span className="line-through">like</span>
              </span> traveling<br />with us
            </h2>
          </div>
          
          {/* Right column: Description */}
          <div className="flex items-center">
            <p className="text-lg text-detour-gray700 leading-relaxed">
              Detour isn&apos;t just another trip planner — it&apos;s your personal adventure curator, making every journey smoother, more beautiful, and full of surprises.
            </p>
          </div>
        </div>

        {/* Row 2: Three columns with feature boxes */}
        <div className="grid grid-cols-3 gap-10 items-start">
          {/* Column 1: Interactive 2D & 3D Maps */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg h-full">
            <div className="relative aspect-[5/4] rounded-lg overflow-hidden mb-6">
              <Image
                src="/detour/features/interactive-maps.png"
                alt="Interactive map interface showing smart route planning"
                fill
                className="object-contain"
                sizes="33vw"
              />
            </div>
            <h3 className="text-xl font-bold text-detour-gray900 mb-3">Interactive 2D & 3D Maps</h3>
            <p className="text-detour-gray700 leading-relaxed">
              See your trip come to life on a clean, interactive map. Plan in 2D for clarity, or unlock the cinematic 3D flyover for a preview that feels like a movie trailer for your own adventure.
            </p>
          </div>

          {/* Column 2: Two stacked components */}
          <div className="flex flex-col space-y-6 h-full">
            {/* Smart Stop Suggestions */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg flex-1">
              <h3 className="text-xl font-bold text-detour-gray900 mb-3">Smart Stop Suggestions</h3>
              <p className="text-detour-gray700 mb-4">
                No more endless Google searches. Detour automatically finds hidden gems, scenic routes, and must-see spots along the way from cozy cafés to breathtaking viewpoints.
              </p>
              <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
                <Image
                  src="/detour/features/Milan-Florence 2.png"
                  alt="Milan to Florence route planning"
                  fill
                  className="object-contain"
                  sizes="33vw"
                />
              </div>
            </div>

            {/* Easy, Flexible Editing */}
            <div className="bg-green-50 rounded-2xl border border-gray-200 p-6 shadow-lg flex-1">
              <h3 className="text-xl font-bold text-detour-gray900 mb-3">Easy, Flexible Editing</h3>
              <p className="text-detour-gray700">
                Drag, drop, swap, or add stops in seconds. Detour gives you full control over your itinerary, so you can fine-tune your trip exactly how you want it.
              </p>
            </div>
          </div>

          {/* Column 3: Visual Inspiration Built In */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg h-full">
            <h3 className="text-xl font-bold text-detour-gray900 mb-3">Visual Inspiration Built In</h3>
            <p className="text-detour-gray700 mb-6">
              Every stop comes with stunning photos and local insights to help you decide what&apos;s worth the detour, turning your planning process into an inspiring part of the journey.
            </p>
            <div className="relative aspect-[6/5] rounded-lg overflow-hidden">
              <Image
                src="/detour/features/visual-inspiration.png"
                alt="Visual inspiration gallery with travel photos"
                fill
                className="object-contain"
                sizes="33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
