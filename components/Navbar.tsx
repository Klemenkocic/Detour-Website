'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import SmartCTAButton from './SmartCTAButton'

export default function Navbar() {
  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuPanel = document.getElementById('mobile-menu-panel')
    const mobileMenuClose = document.getElementById('mobile-menu-close')
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop')

    const openMenu = () => {
      mobileMenu?.classList.remove('hidden')
      setTimeout(() => {
        mobileMenuPanel?.classList.remove('translate-x-full')
      }, 10)
      document.body.style.overflow = 'hidden'
    }

    const closeMenu = () => {
      mobileMenuPanel?.classList.add('translate-x-full')
      setTimeout(() => {
        mobileMenu?.classList.add('hidden')
      }, 300)
      document.body.style.overflow = 'unset'
    }

    mobileMenuButton?.addEventListener('click', openMenu)
    mobileMenuClose?.addEventListener('click', closeMenu)
    mobileMenuBackdrop?.addEventListener('click', closeMenu)

    return () => {
      mobileMenuButton?.removeEventListener('click', openMenu)
      mobileMenuClose?.removeEventListener('click', closeMenu)
      mobileMenuBackdrop?.removeEventListener('click', closeMenu)
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="cursor-pointer">
              <Image
                src="/detour/branding/logo/horizontal/dark and primary.png"
                alt="Detour"
                width={140}
                height={40}
                className="object-contain"
                priority
              />
            </a>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/docs" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors text-sm">Documentation</a>
            <a href="/contact" className="text-detour-gray700 hover:text-detour-primary font-medium transition-colors text-sm">Contact</a>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <SmartCTAButton>
              Get Early Access
            </SmartCTAButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" className="hidden md:hidden fixed inset-0 z-[10000]">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/50 z-[10000]" id="mobile-menu-backdrop"></div>
        
        {/* Mobile Menu Panel */}
        <div className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-[10001]" id="mobile-menu-panel">
          <div className="flex flex-col h-screen bg-white">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
              <a href="/" className="cursor-pointer">
                <Image
                  src="/detour/branding/logo/horizontal/dark and primary.png"
                  alt="Detour"
                  width={120}
                  height={32}
                  className="object-contain"
                />
              </a>
              <button
                id="mobile-menu-close"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex-1 px-6 py-8 bg-white">
              <div className="space-y-6">
                <a 
                  href="/docs" 
                  className="block text-lg font-medium text-detour-gray700 hover:text-detour-primary transition-colors duration-200"
                >
                  Documentation
                </a>
                <a 
                  href="/contact" 
                  className="block text-lg font-medium text-detour-gray700 hover:text-detour-primary transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </nav>

            {/* Mobile CTA Button */}
            <div className="p-6 border-t border-gray-200 bg-white">
              <SmartCTAButton className="w-full">
                Get Early Access
              </SmartCTAButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
