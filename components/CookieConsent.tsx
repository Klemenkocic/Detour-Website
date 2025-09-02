'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  functional: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('detour-cookie-consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // Load existing preferences
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences.preferences)
        // Load analytics if user previously consented
        if (savedPreferences.preferences.analytics) {
          loadGoogleAnalytics()
        }
      } catch (error) {
        console.error('Error parsing cookie consent:', error)
      }
    }
  }, [])

  const saveConsent = (newPreferences: CookiePreferences) => {
    const consentData = {
      preferences: newPreferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }
    
    localStorage.setItem('detour-cookie-consent', JSON.stringify(consentData))
    setPreferences(newPreferences)
    
    // Load or remove analytics based on consent
    if (newPreferences.analytics) {
      loadGoogleAnalytics()
    } else {
      removeGoogleAnalytics()
    }
    
    setShowBanner(false)
    setShowSettings(false)
  }

  const loadGoogleAnalytics = () => {
    // Only load if not already loaded
    if (!window.gtag) {
      // Load gtag script
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q1H4YCWP11'
      document.head.appendChild(script)

      // Initialize gtag
      script.onload = () => {
        window.dataLayer = window.dataLayer || []
        window.gtag = function() {
          window.dataLayer.push(arguments)
        }
        window.gtag('js', new Date())
        window.gtag('config', 'G-Q1H4YCWP11', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        })
      }
    }
  }

  const removeGoogleAnalytics = () => {
    // Remove GA cookies
    const cookies = ['_ga', '_ga_G-Q1H4YCWP11', '_gid', '_gat_gtag_G_Q1H4YCWP11']
    cookies.forEach(cookie => {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.mydetour.co;`
    })
  }

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      functional: true
    })
  }

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      functional: false
    })
  }

  const handleSaveSettings = () => {
    saveConsent(preferences)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-4 right-4 z-[9999] max-w-sm"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {!showSettings ? (
            // Main Banner
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-detour-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-detour-gray900 text-sm mb-2">
                    We use cookies
                  </h3>
                  <p className="text-xs text-detour-gray600 leading-relaxed">
                    We use cookies to enhance your experience and analyze site usage. You can choose which cookies to accept.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full bg-detour-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-detour-primary/90 transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="w-full bg-gray-100 text-detour-gray700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="w-full text-detour-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-detour-primary/5 transition-colors"
                >
                  Cookie Settings
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex gap-4 text-xs">
                  <a href="/cookies" className="text-detour-primary hover:underline">
                    Cookie Policy
                  </a>
                  <a href="/privacy" className="text-detour-primary hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-detour-gray900 text-sm">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-3">
                    <h4 className="text-sm font-medium text-detour-gray900 mb-1">
                      Essential Cookies
                    </h4>
                    <p className="text-xs text-detour-gray600">
                      Required for website functionality. Cannot be disabled.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-5 bg-green-500 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-3">
                    <h4 className="text-sm font-medium text-detour-gray900 mb-1">
                      Analytics Cookies
                    </h4>
                    <p className="text-xs text-detour-gray600">
                      Help us understand how you use our website (Google Analytics).
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`w-10 h-5 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-detour-primary' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                        preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-3">
                    <h4 className="text-sm font-medium text-detour-gray900 mb-1">
                      Functional Cookies
                    </h4>
                    <p className="text-xs text-detour-gray600">
                      Remember your preferences and settings.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                      className={`w-10 h-5 rounded-full relative transition-colors ${
                        preferences.functional ? 'bg-detour-primary' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                        preferences.functional ? 'translate-x-5' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button
                  onClick={handleSaveSettings}
                  className="w-full bg-detour-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-detour-primary/90 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full bg-gray-100 text-detour-gray700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// Type declarations for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
