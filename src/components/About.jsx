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
        <p className="mb-8">
          We believe time is sacred. By understanding your cosmic blueprint, we
          help you align your life's most important moments with divine timing.
        </p>

        {/* New Paragraph from Harman Saini */}
        <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <p className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Hii... Sir/Madam, This is Harman Saini, a Watch-Analyst Professional Expert.
          </p>
          <p className="mb-2">
            With over 4+ years of experience, I have analysed 5000+ watches and crafted 4000+ personalized timepieces — each creating outstanding transformations in people's lives.
          </p>
          <p className="mb-2">
            Initialize your gear, take that first step, and become a part of our AstroWatch family. I will personally analyse your watch to understand your past and present also i'll speak to you about it, identify life challenges, and then craft an energized, personalized watch that aligns with your *AURA*.
          </p>
          <p>
            The result? A 360-degree shift toward a **happier**, **healthier**, and **wealthier** life.
            <br />
            <strong className="text-purple-700 dark:text-purple-300">Thank you.</strong>
          </p>
        </div>
      </motion.div>

      {/* FAQ section can be re-enabled if needed */}
      {/* <section className="mt-16 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-800 dark:text-purple-300 mb-8">
          Frequently Asked Questions
        </h2>
        <FAQAccordion />
      </section> */}
    </div>
  );
}
