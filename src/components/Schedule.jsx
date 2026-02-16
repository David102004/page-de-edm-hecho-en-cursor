import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const schedule = {
  day1: [
    { time: '18:00', artist: 'Opening DJ Set', stage: 'Main Stage' },
    { time: '19:30', artist: 'Warm-up Act', stage: 'Bass Arena' },
    { time: '21:00', artist: 'Martin Garrix', stage: 'Main Stage' },
    { time: '22:30', artist: 'Skrillex', stage: 'Bass Arena' },
    { time: '00:00', artist: 'Deadmau5', stage: 'Main Stage' },
  ],
  day2: [
    { time: '18:00', artist: 'Opening DJ Set', stage: 'Trance Temple' },
    { time: '19:30', artist: 'Warm-up Act', stage: 'House Haven' },
    { time: '21:00', artist: 'Tiësto', stage: 'Main Stage' },
    { time: '22:30', artist: 'Armin van Buuren', stage: 'Trance Temple' },
    { time: '00:00', artist: 'David Guetta', stage: 'Main Stage' },
  ],
  day3: [
    { time: '18:00', artist: 'Opening DJ Set', stage: 'House Haven' },
    { time: '19:30', artist: 'Warm-up Act', stage: 'Bass Arena' },
    { time: '21:00', artist: 'Special Guest', stage: 'Main Stage' },
    { time: '22:30', artist: 'B2B Set', stage: 'All Stages' },
    { time: '00:00', artist: 'Closing Ceremony', stage: 'Main Stage' },
  ],
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1')

  return (
    <section id="schedule" className="min-h-screen py-20 md:py-32 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
            Schedule
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Plan your journey through three days of non-stop music
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['day1', 'day2', 'day3'].map((day, index) => (
            <motion.button
              key={day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeDay === day
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 glow'
                  : 'glass hover:bg-white/10'
              }`}
            >
              Day {index + 1}
            </motion.button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {schedule[activeDay].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:glow transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div className="text-2xl font-bold text-gradient">
                        {event.time}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {event.artist}
                        </h3>
                        <p className="text-gray-400">{event.stage}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
