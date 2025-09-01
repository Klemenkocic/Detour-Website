'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/Button'
import Container from './ui/Container'

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/detour/hero/hero.png"
          alt="Interactive map showing a scenic road trip route with multiple stops including landmarks and points of interest"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white max-w-4xl mx-auto"
        >
          {/* Accent Text */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-covered-by-your-grace text-detour-primary text-2xl md:text-3xl lg:text-4xl">
              Detour
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Your Next Trip, Planned<br />
            <span className="text-detour-primary">in Minutes</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Set your starting point and destination to begin your journey. 
            It&apos;s quick, simple, and built to get you moving.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link href="/quiz">
              <Button size="lg">
                Get Early Access
              </Button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-white/80 text-sm"
          >
            <p>✨ Plan epic road trips • 🎯 Smart stops • 🎨 Visual inspiration</p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
