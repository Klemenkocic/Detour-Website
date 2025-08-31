import { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'info'
  size?: 'sm' | 'md'
  children: React.ReactNode
}

export default function Badge({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full'
  
  const variants = {
    primary: 'bg-detour-primarySoft text-detour-primary',
    secondary: 'bg-detour-gray100 text-detour-gray700',
    success: 'bg-detour-mint text-detour-green',
    info: 'bg-detour-sky text-detour-blue'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
