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
                <a 
                  href="https://instagram.com/detour" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-detour-primary transition-colors p-1"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
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