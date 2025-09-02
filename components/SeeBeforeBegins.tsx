'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Container from './ui/Container'
import Button from './ui/Button'
import SmartCTAButton from './SmartCTAButton'

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
    <section className="py-16 sm:py-20 lg:py-40 bg-white relative z-[1] lg:z-[100]">
      <Container className="overflow-visible">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Main Content */}
          <div className="relative z-[1] lg:z-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              {/* Left Side - Content with 3 rows */}
              <motion.div variants={itemVariants} className="relative z-[1] lg:z-10 text-center lg:text-left w-full">
                <div className="max-w-[568px] mx-auto lg:mx-0 flex flex-col justify-center gap-4 sm:gap-6">
                  {/* Row 1: Header */}
                  <div className="relative">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight lg:leading-[83.2px] text-gray-900">
                      See Your{' '}
                      <span className="line-through">Journey</span>{' '}
                      Before It Begins
                    </h1>
                    {/* Adventure text overlay - responsive positioning */}
                    <div className="absolute top-[-12px] sm:top-[-14px] lg:top-[-18px] left-[50%] sm:left-[55%] lg:left-[268px] transform -translate-x-1/2 lg:translate-x-0 -rotate-[3.28deg] text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-normal font-['Covered_By_Your_Grace'] leading-10 whitespace-nowrap">
                      Adventure
                    </div>
                  </div>
                  
                  {/* Row 2: Subtext */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-tight">
                    From detailed 2D maps to breathtaking 3D flyovers – watch your route come alive before you even hit the road.
                  </p>
                  
                  {/* Row 3: CTA Button */}
                  <div className="relative z-20">
                    <SmartCTAButton className="relative z-20">
                      Get Early Access
                    </SmartCTAButton>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - CTA Image (Desktop Only) */}
              <motion.div variants={itemVariants} className="hidden lg:block relative w-full lg:z-[9998]">
                {/* Desktop Layout */}
                <div className="relative">
                  <div 
                    className="absolute lg:z-[9999]"
                    style={{
                      // === DESKTOP IMAGE CONFIGURATION ===
                      transform: `translate(-120px, -120px) scale(3.1)`,
                      transformOrigin: 'center center',
                      // === END CONFIGURATION ===
                    }}
                  >
                    <Image
                      src="/detour/cta/cta.png"
                      alt="Interactive trip preview showing detailed itinerary with photos, timing, and route visualization for a Barcelona road trip"
                      width={800}
                      height={1000}
                      className="w-full h-auto max-w-2xl"
                      sizes="(max-width: 1200px) 60vw, 800px"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}