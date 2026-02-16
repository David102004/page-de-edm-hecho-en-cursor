import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FestivalExperience from './components/FestivalExperience'
import Lineup from './components/Lineup'
import Stages from './components/Stages'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import SoundToggle from './components/SoundToggle'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CursorGlow />
      <SoundToggle />
      <ParticleBackground />

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <FestivalExperience />
          <Lineup />
          <Stages />
          <Schedule />
          <Countdown />
          <Tickets />
          <Gallery />
          <Newsletter />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App
