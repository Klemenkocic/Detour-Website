'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white hover:from-orange-500 hover:to-orange-700 focus:ring-orange-500',
      secondary: 'bg-detour-gray100 text-detour-gray900 hover:bg-detour-gray200 focus:ring-detour-gray300 rounded-2xl border border-white',
      outline: 'border-2 border-detour-primary text-detour-primary hover:bg-detour-primary hover:text-white focus:ring-detour-primary rounded-2xl'
    }
    
    const sizes = {
      sm: 'h-10 px-4 py-2 text-sm',
      md: 'h-12 px-5 py-2.5 text-base',
      lg: 'h-12 px-5 py-2.5 text-base'
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
