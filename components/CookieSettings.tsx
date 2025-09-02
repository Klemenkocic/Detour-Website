'use client'

import { useState } from 'react'
import { useCookieConsent } from '../hooks/useCookieConsent'

interface CookieSettingsProps {
  isOpen: boolean
  onClose: () => void
}

export default function CookieSettings({ isOpen, onClose }: CookieSettingsProps) {
  const { preferences, updateConsent } = useCookieConsent()
  const [tempPreferences, setTempPreferences] = useState(preferences)

  const handleSave = () => {
    updateConsent(tempPreferences)
    onClose()
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true
    }
    setTempPreferences(allAccepted)
    updateConsent(allAccepted)
    onClose()
  }

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      functional: false
    }
    setTempPreferences(essentialOnly)
    updateConsent(essentialOnly)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-detour-gray900">
              Cookie Settings
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-3">
                  <h3 className="font-medium text-detour-gray900 mb-1">
                    Essential Cookies
                  </h3>
                  <p className="text-sm text-detour-gray600">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-detour-gray500">
                Always active - Required for security, session management, and basic functionality.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-3">
                  <h3 className="font-medium text-detour-gray900 mb-1">
                    Analytics Cookies
                  </h3>
                  <p className="text-sm text-detour-gray600">
                    Help us understand how visitors interact with our website through Google Analytics.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setTempPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      tempPreferences.analytics ? 'bg-detour-primary' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                      tempPreferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
              <p className="text-xs text-detour-gray500">
                Collects anonymous data about page visits, user behavior, and site performance.
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-3">
                  <h3 className="font-medium text-detour-gray900 mb-1">
                    Functional Cookies
                  </h3>
                  <p className="text-sm text-detour-gray600">
                    Enable enhanced functionality and personalization features.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setTempPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      tempPreferences.functional ? 'bg-detour-primary' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                      tempPreferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
              <p className="text-xs text-detour-gray500">
                Remember your preferences, settings, and improve user experience.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <button
              onClick={handleSave}
              className="w-full bg-detour-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-detour-primary/90 transition-colors"
            >
              Save My Preferences
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleAcceptAll}
                className="bg-gray-100 text-detour-gray700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-gray-100 text-detour-gray700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>

          {/* Policy Links */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex gap-4 text-sm">
              <a href="/cookies" className="text-detour-primary hover:underline">
                Cookie Policy
              </a>
              <a href="/privacy" className="text-detour-primary hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
