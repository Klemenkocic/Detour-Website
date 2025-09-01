'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Container from './ui/Container'
import Button from './ui/Button'

export default function SeeBeforeBegins() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-40 bg-white overflow-visible relative">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >


          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              {/* Left Side - Content with 3 rows */}
              <motion.div variants={itemVariants} className="relative z-10">
                <div className="max-w-[568px] flex flex-col justify-center gap-6">
                  {/* Row 1: Header */}
                  <div className="relative">
                    <h1 className="text-6xl font-semibold leading-[83.2px] text-gray-900">
                      See Your{' '}
                      <span className="line-through">Journey</span>{' '}
                      Before It Begins
                    </h1>
                    {/* Adventure text overlay */}
                    <div className="absolute top-[-18px] left-[268px] transform -rotate-[3.28deg] text-orange-500 text-4xl font-normal font-['Covered_By_Your_Grace'] leading-10">
                      Adventure
                    </div>
                  </div>
                  
                  {/* Row 2: Subtext */}
                  <p className="text-lg text-gray-700 leading-relaxed tracking-tight">
                    From detailed 2D maps to breathtaking 3D flyovers – watch your route come alive before you even hit the road.
                  </p>
                  
                  {/* Row 3: CTA Button */}
                  <div className="relative z-20">
                    <Link href="/quiz">
                      <Button className="relative z-20 h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium">
                        Get Early Access
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - CTA Image */}
              <motion.div variants={itemVariants} className="relative">
                <div 
                  className="absolute z-[5]"
                  style={{
                    // === IMAGE CONFIGURATION ===
                    // Adjust these values to position and size the image:
                    transform: `translate(${-120}px, ${-120}px) scale(${3.1})`,
                    // translate(X, Y) - X: negative=left, positive=right | Y: negative=up, positive=down
                    // scale() - 1.0=normal, 2.0=double size, 0.5=half size
                    transformOrigin: 'center center', // Options: 'center center', 'left top', 'right bottom', etc.
                    // === END CONFIGURATION ===
                  }}
                >
                  <Image
                    src="/detour/cta/cta.png"
                    alt="Interactive trip preview showing detailed itinerary with photos, timing, and route visualization for a Barcelona road trip"
                    width={800}
                    height={1000}
                    className="w-full h-auto max-w-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
