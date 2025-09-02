import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhyTravelWithUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
        
          {/* Row 1: Header with responsive layout */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12 sm:mb-16 lg:mb-20">
          {/* Left column: Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-detour-gray900 relative">
              Why you&apos;ll <span className="relative inline-block">
                <p className="absolute -top-4 sm:-top-5 md:-top-6 lg:-top-8 left-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-detour-primary font-covered-by-your-grace">Love</p>
                <span className="line-through">like</span>
              </span> traveling<br />with us
            </h2>
          </div>
          
          {/* Right column: Description */}
          <div className="flex items-center text-center lg:text-left">
            <p className="text-base sm:text-lg text-detour-gray700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Detour isn&apos;t just another trip planner — it&apos;s your personal adventure curator, making every journey smoother, more beautiful, and full of surprises.
            </p>
          </div>
          </motion.div>

          {/* Row 2: Feature boxes with responsive layout */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Column 1: Interactive 2D & 3D Maps */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg h-full">
            <div className="relative aspect-[5/4] rounded-lg overflow-hidden mb-6">
              <Image
                src="/detour/features/interactive-maps.png"
                alt="Interactive map interface showing smart route planning"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-detour-gray900 mb-3">Interactive 2D & 3D Maps</h3>
            <p className="text-sm sm:text-base text-detour-gray700 leading-relaxed">
              See your trip come to life on a clean, interactive map. Plan in 2D for clarity, or unlock the cinematic 3D flyover for a preview that feels like a movie trailer for your own adventure.
            </p>
          </div>

          {/* Column 2: Two stacked components - Mobile: single column, Desktop: stacked */}
          <div className="space-y-6 lg:flex lg:flex-col lg:space-y-6 lg:h-full">
            {/* Smart Stop Suggestions */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg lg:flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-detour-gray900 mb-3">Smart Stop Suggestions</h3>
              <p className="text-sm sm:text-base text-detour-gray700 mb-4">
                No more endless Google searches. Detour automatically finds hidden gems, scenic routes, and must-see spots along the way from cozy cafés to breathtaking viewpoints.
              </p>
              <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
                <Image
                  src="/detour/features/Milan-Florence.png"
                  alt="Milan to Florence route planning"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Easy, Flexible Editing */}
            <div className="bg-green-50 rounded-2xl border border-gray-200 p-6 shadow-lg lg:flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-detour-gray900 mb-3">Easy, Flexible Editing</h3>
              <p className="text-sm sm:text-base text-detour-gray700">
                Drag, drop, swap, or add stops in seconds. Detour gives you full control over your itinerary, so you can fine-tune your trip exactly how you want it.
              </p>
            </div>
          </div>

          {/* Column 3: Visual Inspiration Built In */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg h-full">
            <h3 className="text-lg sm:text-xl font-bold text-detour-gray900 mb-3">Visual Inspiration Built In</h3>
            <p className="text-sm sm:text-base text-detour-gray700 mb-4 lg:mb-2">
              Every stop comes with stunning photos and local insights to help you decide what&apos;s worth the detour, turning your planning process into an inspiring part of the journey.
            </p>
            <div className="relative aspect-[6/5] rounded-lg overflow-hidden mt-4 lg:mt-16">
              <Image
                src="/detour/features/visual-inspiration.png"
                alt="Visual inspiration gallery with travel photos"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
