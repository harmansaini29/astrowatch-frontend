import { motion } from "framer-motion";
// import FAQAccordion from "../components/FAQAccordion";


export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-br from-pink-100 to-white dark:from-gray-800 dark:to-black">
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About AstroWatch
      </motion.h2>

      <motion.div
        className="max-w-3xl text-center text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="mb-6">
          At AstroWatch, we blend the ancient wisdom of astrology with the
          modern precision of watchmaking. Our journey started with a vision to
          guide individuals to their perfect moments — whether it's a decision,
          a relationship, or a career move.
        </p>
        <p>
          We believe time is sacred. By understanding your cosmic blueprint, we
          help you align your life's most important moments with divine timing.
        </p>
      </motion.div>
      {/* <section className="mt-16 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 dark:text-purple-300 mb-8">
          Frequently Asked Questions
        </h2>
        <FAQAccordion />
      </section> */}
    </div>
  );
}
