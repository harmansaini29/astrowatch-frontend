import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div 
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
    >
      <motion.div
        className="text-4xl font-bold text-purple-700"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 1 }}
      >
        AstroWatch
      </motion.div>
    </motion.div>
  );
}
