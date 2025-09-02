'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LocalVsTourist from '../components/LocalVsTourist'
import TripStyleQuiz from '../components/TripStyleQuiz'
import WhyTravelWithUs from '../components/WhyTravelWithUs'
import IdeaToAdventure from '../components/IdeaToAdventure'
import SeeBeforeBegins from '../components/SeeBeforeBegins'
import CTAFooter from '../components/CTAFooter'
import ThankYouPopup from '../components/ThankYouPopup'
import { useTallyTracking } from '../hooks/useTallyTracking'

export default function Home() {
  const { showThankYou, closeThankYou } = useTallyTracking()

  return (
    <>
      <Navbar />

      <Hero />

      <LocalVsTourist />

      <TripStyleQuiz />

      <WhyTravelWithUs />

      <IdeaToAdventure />

      <SeeBeforeBegins />

      <CTAFooter />
      
      {/* Thank You Popup */}
      <ThankYouPopup isVisible={showThankYou} onClose={closeThankYou} />
    </>
  )
}
