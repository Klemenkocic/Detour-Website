'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function TallyForm() {
  useEffect(() => {
    // Set page title
    document.title = 'Detour - Get Early Access'
    
    // Add viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')
    }

    // Add styles
    const style = document.createElement('style')
    style.textContent = `
      html, body { 
        margin: 0 !important; 
        height: 100% !important; 
        overflow: hidden !important; 
      }
      .tally-container iframe { 
        position: absolute !important; 
        top: 0 !important; 
        right: 0 !important; 
        bottom: 0 !important; 
        left: 0 !important; 
        border: 0 !important; 
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <div className="tally-container fixed inset-0">
        <iframe 
          data-tally-src="https://tally.so/r/n0KZEB?transparentBackground=1" 
          width="100%" 
          height="100%" 
          frameBorder={0} 
          marginHeight={0} 
          marginWidth={0} 
          title="Detour"
        />
      </div>
    </>
  )
}
