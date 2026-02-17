import { motion } from 'framer-motion'

const ticketTiers = [
  {
    id: 1,
    name: 'General Admission',
    price: '$199',
    features: [
      '3-Day Festival Access',
      'Access to All Stages',
      'Food & Drink Vendors',
      'Official Festival Merch',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'VIP',
    price: '$499',
    features: [
      'Everything in GA',
      'VIP Viewing Areas',
      'Complimentary Drinks',
      'VIP Restrooms',
      'Meet & Greet Opportunities',
      'Exclusive VIP Merch',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Platinum',
    price: '$999',
    features: [
      'Everything in VIP',
      'Backstage Access',
      'Artist Meet & Greets',
      'Premium Catering',
      'Private Bar',
      'Festival After-Party Access',
      'Limited Edition Merch',
    ],
    popular: false,
  },
]

export default function Tickets() {
  return (
    <section id="tickets" className="min-h-screen py-20 md:py-32 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
            Get Your Tickets
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your experience and join us for the ultimate festival
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative glass rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? '!border-2 !border-gold-light glow-gold scale-105'
                  : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span
                  className={`text-5xl font-black ${
                    tier.popular ? 'text-gradient-gold' : 'text-gradient'
                  }`}
                >
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className={`mt-1 ${
                        tier.popular ? 'text-gold-light' : 'text-purple-400'
                      }`}
                    >
                      ✓
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black hover:glow-gold shadow-lg shadow-yellow-500/50'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:glow'
                }`}
              >
                Buy Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
