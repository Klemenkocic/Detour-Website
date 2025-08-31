import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Container({ 
  children, 
  size = 'lg', 
  className = '', 
  ...props 
}: ContainerProps) {
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8'
  
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none'
  }

  const classes = `${baseStyles} ${sizes[size]} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
