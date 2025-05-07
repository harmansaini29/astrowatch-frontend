// src/components/Store.jsx
import { motion } from "framer-motion";
import WatchStore from "./WatchStore";

export default function Store() {
  return (
    <div className="pt-20 px-6 pb-10 bg-gradient-to-br from-purple-100 via-pink-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-purple-800 dark:text-purple-300">
          Luxury Watch Store
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg max-w-xl mx-auto">
          Discover timepieces designed with astrology in mind. Choose one that aligns with your sign and style.
        </p>
      </motion.div>

      <WatchStore />
    </div>
  );
}
