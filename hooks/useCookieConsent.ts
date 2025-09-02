'use client'

import { useState, useEffect } from 'react'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  functional: boolean
}

interface ConsentData {
  preferences: CookiePreferences
  timestamp: string
  version: string
}

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('detour-cookie-consent')
    if (consent) {
      try {
        const consentData: ConsentData = JSON.parse(consent)
        setPreferences(consentData.preferences)
        setHasConsent(true)
      } catch (error) {
        console.error('Error parsing cookie consent:', error)
        setHasConsent(false)
      }
    } else {
      setHasConsent(false)
    }
  }, [])

  const updateConsent = (newPreferences: CookiePreferences) => {
    const consentData: ConsentData = {
      preferences: newPreferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
    
    localStorage.setItem('detour-cookie-consent', JSON.stringify(consentData))
    setPreferences(newPreferences)
    setHasConsent(true)
  }

  const clearConsent = () => {
    localStorage.removeItem('detour-cookie-consent')
    setPreferences({
      essential: true,
      analytics: false,
      functional: false
    })
    setHasConsent(false)
  }

  const canUseAnalytics = preferences.analytics && hasConsent
  const canUseFunctional = preferences.functional && hasConsent

  return {
    hasConsent,
    preferences,
    updateConsent,
    clearConsent,
    canUseAnalytics,
    canUseFunctional
  }
}
