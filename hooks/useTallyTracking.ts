'use client'

import { useState, useEffect } from 'react'

export function useTallyTracking() {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    // Check if user has submitted the form before
    const submitted = localStorage.getItem('detour-tally-submitted')
    if (submitted === 'true') {
      setHasSubmitted(true)
    }

    // Check if we should show thank you popup (user just returned from clicking button)
    const shouldShowThankYou = sessionStorage.getItem('detour-show-thanks')
    if (shouldShowThankYou === 'true') {
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        setShowThankYou(true)
        sessionStorage.removeItem('detour-show-thanks')
      }, 500)

      return () => clearTimeout(timer)
    }

    // Track when user focuses back on this page (returns from another tab)
    const handleFocus = () => {
      const shouldShowOnReturn = sessionStorage.getItem('detour-show-thanks')
      if (shouldShowOnReturn === 'true') {
        setShowThankYou(true)
        sessionStorage.removeItem('detour-show-thanks')
      }
    }

    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  const handleButtonClick = () => {
    // Mark that user clicked the button (will submit form)
    localStorage.setItem('detour-tally-submitted', 'true')
    sessionStorage.setItem('detour-show-thanks', 'true')
    
    // Open Tally form in new tab
    window.open('/tally', '_blank')
  }

  const closeThankYou = () => {
    setShowThankYou(false)
  }

  return {
    hasSubmitted,
    showThankYou,
    handleButtonClick,
    closeThankYou
  }
}
