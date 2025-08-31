import { HTMLAttributes } from 'react'

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  accent?: string
  centered?: boolean
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  accent,
  centered = true,
  className = '',
  ...props 
}: SectionTitleProps) {
  const wrapperClasses = `space-y-4 ${centered ? 'text-center' : ''} ${className}`

  return (
    <div className={wrapperClasses} {...props}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-detour-gray900">
        {accent && (
          <span className="font-covered-by-your-grace text-detour-primary mr-2">
            {accent}
          </span>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-detour-gray700 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
