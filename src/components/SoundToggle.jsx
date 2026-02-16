import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create ambient sound (using a data URL or external source)
    // For demo purposes, we'll use a placeholder
    if (audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.volume = 0.3
    }
  }, [])

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((err) => {
          console.log('Audio play failed:', err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleSound}
      className="fixed bottom-8 left-8 w-14 h-14 glass rounded-full flex items-center justify-center text-white text-2xl hover:glow transition-all z-40"
      aria-label="Toggle ambient sound"
    >
      {isPlaying ? '🔊' : '🔇'}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="auto"
      />
    </motion.button>
  )
}
