'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    const baseStyles = 'w-full px-3 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-detour-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed'
    const errorStyles = error 
      ? 'border-red-300 focus:ring-red-500' 
      : 'border-detour-gray200 hover:border-detour-gray300'
    
    const classes = `${baseStyles} ${errorStyles} ${className}`

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-detour-gray700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={classes}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-detour-gray300">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
