'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from './ui/Container'
import Button from './ui/Button'
import SmartCTAButton from './SmartCTAButton'

export default function IdeaToAdventure() {
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
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Panel - Exact Figma Specifications */}
          <motion.div 
            variants={itemVariants}
            className="w-full h-[851px] px-4 sm:px-8 lg:px-16 pt-20 pb-24 relative bg-detour-primarySoft rounded-3xl flex flex-col justify-start items-start gap-8 overflow-hidden"
          >
            {/* Header Content */}
            <div className="relative z-10 flex flex-col justify-start items-start gap-6">
              <div className="w-[526px] justify-start text-detour-gray900 text-5xl font-semibold font-inter leading-[57.60px] tracking-tight">
                From idea to adventure in just a few clicks
              </div>
              <div className="w-[457px] justify-start text-detour-gray700 text-lg font-normal font-inter leading-relaxed tracking-tight">
                We&apos;ve simplified trip planning so you can spend less time organizing and more time exploring. Here&apos;s how Detour transforms your idea into a fully visualized, ready-to-go adventure.
              </div>
                            <SmartCTAButton size="lg">
                Get Early Access
              </SmartCTAButton>
            </div>

            {/* Interactive Area - Exact Positioning */}
            <div className="w-full h-[726px] left-0 right-0 top-[74px] absolute hidden lg:block">
              {/* Curved Line Path - SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1600 726"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                {/* Glow effect */}
                <path
                  d="M 80 600 Q 300 450, 500 300 Q 700 150, 900 200 Q 1100 250, 1520 150"
                  stroke="#FF6A3D"
                  strokeWidth="12"
                  strokeOpacity="0.3"
                  fill="none"
                  strokeLinecap="round"
                  style={{ filter: 'blur(8px)' }}
                />
                {/* Main curved line */}
                <path
                  d="M 80 600 Q 300 450, 500 300 Q 700 150, 900 200 Q 1100 250, 1520 150"
                  stroke="#FF6A3D"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Step 2 Feature Box */}
              <div className="w-96 px-9 py-8 left-[40%] top-[210px] absolute rounded-[32px] inline-flex justify-start items-center gap-8">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-detour-gray900 text-3xl font-semibold font-inter leading-10">
                      Get a Smart, <br/>Playful Itinerary
                    </div>
                    <div className="self-stretch justify-start text-detour-gray700 text-base font-normal font-inter leading-snug tracking-tight">
                      Our smart suggestions fill your route with scenic detours, hidden gems, and must-see landmarks - automatically. Want to swap something out? Just click to replace or add your own custom spots.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 Feature Box */}
              <div className="w-80 py-8 px-8 right-[8%] top-[190px] absolute rounded-[32px] inline-flex justify-start items-center gap-8 overflow-hidden">
                <div className="w-80 inline-flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-detour-gray900 text-3xl font-semibold font-inter leading-10">
                      See It Come<br/>Alive in 2D & 3D
                    </div>
                    <div className="self-stretch justify-start text-detour-gray700 text-base font-normal font-inter leading-snug tracking-tight">
                      Our smart suggestions fill your route with scenic detours, hidden gems, and must-see landmarks - automatically. Want to swap something out? Just click to replace or add your own custom spots.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 1 Feature Box */}
              <div className="w-96 h-64 left-[17%] top-[460px] absolute rounded-[32px]">
                <div className="w-80 h-52 left-8 top-[51px] absolute">
                  <div className="w-80 left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-detour-gray900 text-3xl font-semibold font-inter leading-10">
                      Point on the Map,<br/>Set the pace
                    </div>
                    <div className="self-stretch justify-start text-detour-gray700 text-base font-normal font-inter leading-snug tracking-tight">
                      Enter your start and end points, pick your travel dates or trip duration, choose your ride and set your budget. Whether it&apos;s a weekend getaway or a month-long road trip, Detour adapts to your style and pace.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 1 Dot */}
              <div className="w-12 h-12 p-3 left-[17.2%] top-[420px] absolute bg-orange-400/25 rounded-3xl shadow-[0px_4px_16px_0px_rgba(255,123,82,0.15)] inline-flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full outline outline-1 outline-white"></div>
              </div>

              {/* Step 2 Dot */}
              <div className="w-12 h-12 p-3 left-[52%] top-[165px] absolute bg-orange-400/25 rounded-3xl shadow-[0px_4px_16px_0px_rgba(255,123,82,0.15)] inline-flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full outline outline-1 outline-white"></div>
              </div>

              {/* Step 3 Dot */}
              <div className="w-12 h-12 p-3 right-[12%] top-[153px] absolute bg-orange-400/25 rounded-3xl shadow-[0px_4px_16px_0px_rgba(255,123,82,0.15)] inline-flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full outline outline-1 outline-white"></div>
              </div>

              {/* Step 1 Label */}
              <div className="px-3 py-1 left-[22%] top-[390px] absolute bg-detour-gray900 rounded-full inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-lg font-medium font-inter leading-relaxed">Step 1</div>
              </div>

              {/* Step 2 Label */}
              <div className="px-3 py-1 left-[55%] top-[140px] absolute bg-detour-gray900 rounded-full inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-lg font-medium font-inter leading-relaxed">Step 2</div>
              </div>

              {/* Step 3 Label */}
              <div className="px-3 py-1 right-[15%] top-[120px] absolute bg-detour-gray900 rounded-full inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-lg font-medium font-inter leading-relaxed">Step 3</div>
              </div>
            </div>

            {/* Mobile Layout - Hidden on Desktop */}
            <div className="block lg:hidden mt-8 space-y-8">
              <div className="space-y-6">
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="px-3 py-1 bg-detour-gray900 rounded-full">
                      <span className="text-white text-sm font-medium">Step 1</span>
                    </div>
                    <div className="w-8 h-8 p-2 bg-orange-400/25 rounded-2xl inline-flex justify-center items-center">
                      <div className="w-4 h-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-detour-gray900 mb-3">
                    Point on the Map, Set the pace
                  </h3>
                  <p className="text-sm text-detour-gray700 leading-relaxed">
                    Enter your start and end points, pick your travel dates or trip duration, choose your ride and set your budget.
                  </p>
            </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="px-3 py-1 bg-detour-gray900 rounded-full">
                      <span className="text-white text-sm font-medium">Step 2</span>
                    </div>
                    <div className="w-8 h-8 p-2 bg-orange-400/25 rounded-2xl inline-flex justify-center items-center">
                      <div className="w-4 h-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-detour-gray900 mb-3">
                    Get a Smart, Playful Itinerary
                  </h3>
                  <p className="text-sm text-detour-gray700 leading-relaxed">
                    Our smart suggestions fill your route with scenic detours, hidden gems, and must-see landmarks.
                  </p>
            </div>

                <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="px-3 py-1 bg-detour-gray900 rounded-full">
                      <span className="text-white text-sm font-medium">Step 3</span>
                    </div>
                    <div className="w-8 h-8 p-2 bg-orange-400/25 rounded-2xl inline-flex justify-center items-center">
                      <div className="w-4 h-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-detour-gray900 mb-3">
                    See It Come Alive in 2D & 3D
                  </h3>
                  <p className="text-sm text-detour-gray700 leading-relaxed">
                    Our smart suggestions fill your route with scenic detours, hidden gems, and must-see landmarks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}