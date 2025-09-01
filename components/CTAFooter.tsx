'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function CTAFooter() {

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
    <footer className="py-8 bg-white">
      <div className="max-w-none mx-auto px-4 lg:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-6 sm:pb-8 relative bg-detour-gray900 rounded-3xl flex flex-col justify-start items-start gap-8 sm:gap-14"
        >
          {/* Main CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0"
          >
            {/* Left Side - Headline */}
            <div className="flex-1 max-w-[651px] justify-start text-white text-3xl sm:text-4xl lg:text-6xl font-semibold font-inter leading-tight lg:leading-[83.20px]">
              Join the Adventure Today!
            </div>
            
            {/* Right Side - CTA Button */}
            <div className="w-full lg:flex-1 lg:max-w-[577px] flex flex-col justify-end items-start gap-4">
              <div className="self-stretch justify-start text-white text-lg font-normal font-inter leading-relaxed tracking-tight">
                Ready to explore the world? Start your journey with us today.
              </div>
              
              {/* CTA Button */}
              <div className="self-stretch">
                <Link href="/quiz">
                  <button className="h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200">
                    Get Early Access
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Milan-Florence Image Section */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:flex w-64 h-32 absolute left-[293px] top-[171px] justify-center items-center"
          >
            <div className="w-64 h-32 relative">
              <Image
                src="/detour/features/Milan-Florence 1.png"
                alt="Milan to Florence route"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Footer Navigation */}
          <motion.div 
            variants={itemVariants}
            className="self-stretch flex flex-col justify-start items-start gap-4"
          >
            {/* Navigation Bar */}
            <div className="self-stretch min-h-14 bg-detour-gray900 rounded-2xl flex flex-col sm:flex-row justify-between items-center px-6 py-4 sm:py-0 gap-4 sm:gap-0 overflow-hidden">
              <div className="flex justify-start items-center gap-1.5">
                <Image
                  src="/detour/branding/logo/horizontal/all-white.png"
                  alt="Detour"
                  width={120}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:space-x-10 sm:gap-0">
                <a href="#how-it-works" className="text-white hover:text-detour-primary font-medium transition-colors text-sm">
                  How it Works
                </a>
                <a href="#features" className="text-white hover:text-detour-primary font-medium transition-colors text-sm">
                  Features
                </a>
                <a href="/docs" className="text-white hover:text-detour-primary font-medium transition-colors text-sm">
                  Documentation
                </a>
                <a href="/contact" className="text-white hover:text-detour-primary font-medium transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Bottom Links */}
            <div className="self-stretch flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <div className="text-white text-sm sm:text-base font-normal font-inter leading-tight">
                All rights reserved® Detour 2025
              </div>
              <div className="flex justify-start items-center gap-4 sm:gap-6">
                <a href="/cookies" className="text-white/60 text-sm sm:text-base font-medium font-inter leading-tight hover:text-white transition-colors">
                  Cookie Policy
                </a>
                <a href="/privacy" className="text-white/60 text-sm sm:text-base font-medium font-inter leading-tight hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}