'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SmartCTAButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function SmartCTAButton({ children, className = '', size = 'md' }: SmartCTAButtonProps) {
  const handleClick = () => {
    // Mark that user clicked the button (will submit form)
    localStorage.setItem('detour-tally-submitted', 'true')
    sessionStorage.setItem('detour-show-thanks', 'true')
    
    // Open Tally form in new tab
    window.open('/tally', '_blank')
  }

  const sizes = {
    sm: 'h-10 px-4 py-2 text-sm',
    md: 'h-12 px-5 py-2.5 text-base',
    lg: 'h-12 px-5 py-2.5 text-base'
  }

  const buttonClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2xl border border-white bg-gradient-to-b from-orange-400 to-orange-600 text-white hover:from-orange-500 hover:to-orange-700 focus:ring-orange-500 cursor-pointer ${sizes[size]} ${className}`

  return (
    <motion.button
      className={buttonClasses}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
