import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const artists = [
  {
    id: 1,
    name: 'Martin Garrix',
    genre: 'Progressive House',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
    description: 'Dutch DJ and record producer known for progressive house and big room house.',
    spotify: 'https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ',
    instagram: 'https://instagram.com/martingarrix',
  },
  {
    id: 2,
    name: 'Skrillex',
    genre: 'Dubstep',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: 'American DJ and producer, pioneer of modern dubstep and electronic music.',
    spotify: 'https://open.spotify.com/artist/5f5V0NyZlQ6pMyPZbLJZqV',
    instagram: 'https://instagram.com/skrillex',
  },
  {
    id: 3,
    name: 'Deadmau5',
    genre: 'Progressive House',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
    description: 'Canadian electronic music producer and DJ, known for progressive house.',
    spotify: 'https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx',
    instagram: 'https://instagram.com/deadmau5',
  },
  {
    id: 4,
    name: 'Tiësto',
    genre: 'Trance',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop',
    description: 'Dutch DJ and record producer, one of the most influential trance artists.',
    spotify: 'https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z',
    instagram: 'https://instagram.com/tiesto',
  },
  {
    id: 5,
    name: 'Armin van Buuren',
    genre: 'Trance',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
    description: 'Dutch DJ and record producer, five-time winner of DJ Mag Top 100.',
    spotify: 'https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5',
    instagram: 'https://instagram.com/arminvanbuuren',
  },
  {
    id: 6,
    name: 'David Guetta',
    genre: 'House',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
    description: 'French DJ and music producer, pioneer of electronic dance music.',
    spotify: 'https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai',
    instagram: 'https://instagram.com/davidguetta',
  },
]

export default function Lineup() {
  const [selectedArtist, setSelectedArtist] = useState(null)

  return (
    <section id="lineup" className="min-h-screen py-20 md:py-32 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
            The Lineup
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            World-class artists ready to take you on an unforgettable journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedArtist(artist)}
              className="relative cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl glow group-hover:glow-pink transition-all">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-1">{artist.name}</h3>
                  <p className="text-purple-400">{artist.genre}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtist(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="w-full md:w-64 h-64 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-4xl font-bold mb-2 text-gradient">
                    {selectedArtist.name}
                  </h3>
                  <p className="text-purple-400 mb-4">{selectedArtist.genre}</p>
                  <p className="text-gray-300 mb-6">
                    {selectedArtist.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={selectedArtist.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Spotify
                    </a>
                    <a
                      href={selectedArtist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:glow transition-all"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedArtist(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-purple-400 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
