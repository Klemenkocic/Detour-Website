'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SmartCTAButton from './SmartCTAButton'

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
    <footer className="py-6 sm:py-8 bg-white overflow-hidden">
      <div className="max-w-none mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full px-4 sm:px-6 lg:px-16 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 relative bg-detour-gray900 rounded-2xl sm:rounded-3xl flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-14"
        >
          {/* Main CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-0"
          >
            {/* Left Side - Headline */}
            <div className="flex-1 max-w-full lg:max-w-[651px] justify-start text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-inter leading-tight lg:leading-[83.20px] text-center lg:text-left">
              Join the Adventure Today!
            </div>
            
            {/* Right Side - CTA Button */}
            <div className="w-full lg:flex-1 lg:max-w-[577px] flex flex-col justify-end items-center lg:items-start gap-4 text-center lg:text-left">
              <div className="self-stretch justify-start text-white text-base sm:text-lg font-normal font-inter leading-relaxed tracking-tight">
                Ready to explore the world? Start your journey with us today.
              </div>
              
              {/* CTA Button */}
              <div className="self-stretch flex justify-center lg:justify-start">
                <SmartCTAButton>
                  Get Early Access
                </SmartCTAButton>
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
                sizes="256px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                  sizes="120px"
                />
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:space-x-10 sm:gap-0">
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