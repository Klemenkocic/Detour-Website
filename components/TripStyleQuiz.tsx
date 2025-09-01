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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Blue Container - Made bigger */}
          <motion.div variants={itemVariants} className="bg-detour-sky rounded-3xl p-16 relative">
          {/* Handwritten text with arrow - positioned outside and angled */}
          <div className="absolute -top-12 left-16 transform -rotate-12">
            <span className="text-black text-2xl md:text-3xl font-covered-by-your-grace block">
              Hey, can you help us improve? :)
            </span>
            {/* Arrow pointing to button - positioned to not cover text */}
            <svg 
              className="absolute w-24 h-12 transform rotate-45 z-10" 
              style={{ top: '70px', right: '-32px' }}
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-detour-gray900 mb-6">
              How do you usually<br />plan a trip?
            </h2>
            <p className="text-xl text-detour-gray700 mb-10">
              Take a quick poll and tell us about your travel style<br />
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
