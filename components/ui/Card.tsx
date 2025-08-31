'use client'

import { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export default function Card({ children, hover = true, className = '', ...props }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-detour-gray100'
  const classes = `${baseStyles} ${className}`

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
        }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
