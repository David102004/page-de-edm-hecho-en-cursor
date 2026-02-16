import { motion } from 'framer-motion'

const stages = [
  {
    id: 1,
    name: 'Main Stage',
    theme: 'Cosmic Horizon',
    description:
      'The heart of ASTRALIS. Experience mind-blowing production with state-of-the-art visuals and sound systems.',
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Bass Arena',
    theme: 'Underground Pulse',
    description:
      'Where the bass drops and the ground shakes. Home to the heaviest beats and most intense energy.',
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Trance Temple',
    theme: 'Ethereal Journey',
    description:
      'A sanctuary for trance lovers. Lose yourself in melodic journeys and uplifting anthems.',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'House Haven',
    theme: 'Groove Paradise',
    description:
      'The ultimate house music experience. Feel the groove and dance until sunrise.',
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop',
  },
]

const colorClasses = {
  purple: 'from-purple-600 to-purple-800 glow',
  pink: 'from-pink-600 to-pink-800 glow-pink',
  blue: 'from-blue-600 to-blue-800 glow-blue',
  cyan: 'from-cyan-600 to-cyan-800',
}

export default function Stages() {
  return (
    <section id="stages" className="min-h-screen py-20 md:py-32 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
            The Stages
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each stage is a world of its own, designed to amplify the music and
            elevate your experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClasses[stage.color]} transition-all`}
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={stage.image}
                    alt={stage.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">{stage.theme}</p>
                  <p className="text-gray-400">{stage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
