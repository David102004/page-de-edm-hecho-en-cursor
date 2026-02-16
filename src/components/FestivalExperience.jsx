import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FestivalExperience() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Animations handled by Framer Motion
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 md:py-32 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-6">
              The Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              ASTRALIS WORLD FESTIVAL is more than just music—it's a journey
              into a realm where sound, light, and energy converge. Immerse
              yourself in cutting-edge production, mind-blowing visuals, and an
              atmosphere that transcends reality.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              From sunrise sets to midnight bangers, experience three days of
              non-stop electronic music across multiple stages, each with its
              own unique vibe and world-class sound systems.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {['3 Days', '50+ Artists', '5 Stages', '100K+ Attendees'].map(
                (stat, index) => (
                  <motion.div
                    key={stat}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass px-6 py-3 rounded-lg"
                  >
                    <p className="text-2xl font-bold text-gradient">{stat}</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl glow">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop"
                alt="Festival Experience"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
