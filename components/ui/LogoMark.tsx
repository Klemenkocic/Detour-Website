import Image from 'next/image'

interface LogoMarkProps {
  variant?: 'horizontal' | 'vertical' | 'icon'
  theme?: 'light' | 'dark' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LogoMark({ 
  variant = 'horizontal', 
  theme = 'primary',
  size = 'md',
  className = '' 
}: LogoMarkProps) {
  // Simplified logo path - use the primary horizontal logo for now
  const logoPath = '/detour/branding/logo/horizontal/dark and primary.png'

  const sizes = {
    sm: { width: 80, height: 32 },
    md: { width: 120, height: 48 },
    lg: { width: 160, height: 64 }
  }

  const { width, height } = sizes[size]

  return (
    <Image
      src={logoPath}
      alt="Detour"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  )
}
