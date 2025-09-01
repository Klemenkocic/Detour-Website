'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LocalVsTourist() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section className="py-24 bg-white">
      <div className="w-full px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-detour-gray900 mb-4">
              Don&apos;t travel as a tourist
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl text-detour-primary font-covered-by-your-grace mb-6">
              be a local
            </p>
            <p className="text-lg text-detour-gray700 max-w-2xl mx-auto leading-relaxed">
              Detour makes it effortless to plan epic road trips — complete with local gems, hidden stops, and a memorable itinerary that feels like a local created it.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full">
            <div className="relative w-full max-w-6xl mx-auto">
              {/* 4 Image Boxes Container */}
              <div className="grid grid-cols-2 md:flex md:justify-center md:items-end gap-4 md:gap-6 relative">
                {/* Box 1 - Tall Left */}
                <motion.div 
                  variants={itemVariants}
                  className="relative h-80 md:h-[456px] md:flex-1 rounded-[32px] overflow-hidden shadow-lg"
                >
                  <Image
                    src="/detour/strips/LVT1.png"
                    alt="Local adventure experience - exploring hidden gems and authentic local culture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                
                {/* Box 2 - Short Middle Left */}
                <motion.div 
                  variants={itemVariants}
                  className="relative h-80 md:flex-1 rounded-[32px] overflow-hidden shadow-lg"
                >
                  <Image
                    src="/detour/strips/LVT2.png"
                    alt="Local dining experience - authentic cuisine and hidden restaurants"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                
                {/* Box 3 - Short Middle Right */}
                <motion.div 
                  variants={itemVariants}
                  className="relative h-80 md:flex-1 rounded-[32px] overflow-hidden shadow-lg"
                >
                  <Image
                    src="/detour/strips/LVT3.png"
                    alt="Local cultural experience - authentic moments and community connections"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                
                {/* Box 4 - Tall Right */}
                <motion.div 
                  variants={itemVariants}
                  className="relative h-80 md:h-[456px] md:flex-1 rounded-[32px] overflow-hidden shadow-lg"
                >
                  <Image
                    src="/detour/strips/LVT4.png"
                    alt="Local scenic experience - breathtaking viewpoints and hidden natural wonders"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                
                {/* Weaved Line Overlay - Only visible on desktop */}
                <div className="hidden md:block absolute inset-0 flex items-center justify-center pointer-events-none z-10 translate-y-[120px]">
                  <Image
                    src="/detour/strips/LVT Line.png"
                    alt=""
                    width={1038}
                    height={288}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
