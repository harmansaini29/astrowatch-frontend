import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}  // Start from left side
      animate={{ opacity: 1, x: 0 }}     // Slide into view
      exit={{ opacity: 0, x: 100 }}      // Exit to the right side
      transition={{ duration: 1 }}       // Duration for the transition
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
