import Link from 'next/link'
import { motion } from 'framer-motion'
import SmartCTAButton from './SmartCTAButton'

export default function TripStyleQuiz() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Blue Container - Made responsive */}
          <motion.div variants={itemVariants} className="bg-detour-sky rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 relative">
          {/* Handwritten text with arrow - positioned outside and angled - hidden on mobile */}
          <div className="hidden md:block absolute -top-12 left-16 transform -rotate-12">
            <span className="text-black text-2xl lg:text-3xl font-covered-by-your-grace block">
              Hey, can you help us improve? :)
            </span>
            {/* Arrow pointing to button - positioned to not cover text */}
            <svg 
              className="absolute w-20 lg:w-24 h-10 lg:h-12 transform rotate-45 z-10" 
              style={{ top: '60px', right: '-28px' }}
              viewBox="0 0 64 32" 
              fill="none"
            >
              <path 
                d="M2 16C10 10 20 8 30 12C40 16 50 20 58 16" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M52 12L58 16L52 20" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                fill="none"
              />
            </svg>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-detour-gray900 mb-4 sm:mb-6 leading-tight">
              How do you usually<br />plan a trip?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-detour-gray700 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Take a quick poll and tell us about your travel style<br className="hidden sm:block" />
              it only takes a minute!
            </p>
            
            {/* CTA Button */}
            <SmartCTAButton>
              Get Early Access
            </SmartCTAButton>
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
