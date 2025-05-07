import { motion } from 'framer-motion';

const services = [
  {
    title: 'Personal Horoscope Analysis',
    description: 'Unlock the secrets of your stars with a detailed personal horoscope report.',
    emoji: '🔮',
  },
  {
    title: 'Watch Time Consultation',
    description: 'Choosing the right moment for your success — let us find your perfect timepiece.',
    emoji: '⌚',
  },
  {
    title: 'Astrological Matchmaking',
    description: 'Find compatibility between you and your ambitions or relationships.',
    emoji: '💑',
  },
];

export default function Services() {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-black">
      <motion.h2 
        className="text-4xl font-bold mb-10 text-purple-700 dark:text-purple-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl backdrop-blur-lg bg-opacity-80 dark:bg-opacity-60 transition transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl mb-4">{service.emoji}</div>
            <h3 className="text-2xl font-bold mb-2 text-purple-600 dark:text-purple-300">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
