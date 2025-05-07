import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-purple-700 dark:text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="flex gap-10 justify-center flex-wrap">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "AstroWatch helped me find the perfect watch and align it with my life path. Truly magical!"
            </p>
            <p className="mt-4 text-purple-600 dark:text-purple-300">– Sarah L.</p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "The astrology consultation was spot-on. I finally understood my life's purpose. Highly recommended!"
            </p>
            <p className="mt-4 text-purple-600 dark:text-purple-300">– John D.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
