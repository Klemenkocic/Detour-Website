'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface ThankYouPopupProps {
  isVisible: boolean
  onClose: () => void
}

export default function ThankYouPopup({ isVisible, onClose }: ThankYouPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-detour-gray900 mb-4">
                  Thank you for helping us! 🎉
                </h2>

                {/* Message */}
                <p className="text-lg text-detour-gray700 leading-relaxed mb-6">
                  We appreciate you taking the time to share your travel preferences with us. We&apos;ll get back to you soon and help you plan more amazing adventures!
                </p>

                {/* CTA */}
                <button
                  onClick={onClose}
                  className="w-full h-12 px-5 py-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl border border-white text-white text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-200"
                >
                  Continue Exploring
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
