import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import smoke from "../assets/smoke2.mp4";
import HoroscopeWidget from "./HoroscopeWidget";
import BirthChart from "./BirthChart";
import HeroSection from "./HeroSection";

export default function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleContactClick = () => navigate("/contact");

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={smoke}
        className="fixed top-0 left-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black z-20">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-purple-800 dark:text-purple-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to AstroWatch
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center max-w-2xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Bridging the timeless knowledge of Astrology with the elegance of
          Timepieces. Your destiny, your perfect moment.
        </motion.p>

        {/* Social Icons */}
        <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-10 flex-wrap justify-center">
          <motion.a
            href="https://wa.me/7666222422"
            target="_blank"
            className="text-3xl sm:text-4xl text-green-500 hover:text-green-700 p-3 sm:p-4 rounded-full bg-green-100 hover:bg-green-200 shadow-xl transition transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
  href="https://www.instagram.com/astrowatch2025"
  className="text-3xl sm:text-4xl text-pink-500 hover:text-pink-700 p-3 sm:p-4 rounded-full bg-pink-100 hover:bg-pink-200 shadow-xl transition transform hover:scale-110"
  whileHover={{ scale: 1.2 }}
>
  <FaInstagram />
</motion.a>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 w-full max-w-6xl px-2 sm:px-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl transform transition hover:scale-105 hover:bg-purple-50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-300">
                {
                  [
                    "Personal Horoscope Analysis",
                    "Watch Time Consultation",
                    "Astrological Matchmaking",
                  ][i]
                }
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3">
                {
                  [
                    "Get personalized insights into your life's path and destiny based on your birth chart.",
                    "Choose the right timepiece for your personality and destiny — customized just for you.",
                    "Find the perfect connection based on astrological compatibility for relationships or business.",
                  ][i]
                }
              </p>
            </motion.div>
          ))}
        </div>

        {/* Birth Chart Section */}
        <div className="mt-16 sm:mt-20 w-full max-w-2xl px-4">
          <motion.div
            className="group-hover:opacity-100 opacity-80 transition-opacity duration-300"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
          >
            <BirthChart />
          </motion.div>
        </div>

        {/* Horoscope Widget Section */}
        <div className="mt-16 sm:mt-20 w-full max-w-2xl px-4">
          <motion.div
            className="group-hover:opacity-100 opacity-80 transition-opacity duration-300"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
          >
            <HoroscopeWidget />
          </motion.div>
        </div>

        {/* Book Consultation CTA (opens modal) */}
        <motion.div
          className="mt-14 sm:mt-16 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <button
            onClick={handleOpenModal}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white font-semibold text-base sm:text-xl rounded-full shadow-lg hover:bg-purple-700 transition transform hover:scale-105 backdrop-blur-md"
          >
            Book Your Consultation Now
          </button>
        </motion.div>

        {/* Contact Me CTA */}
        <motion.div
          className="mt-6 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button
            onClick={handleContactClick}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 text-white font-semibold text-base sm:text-xl rounded-full shadow-lg hover:bg-gray-800 transition transform hover:scale-105 backdrop-blur-md"
          >
            Have Queries? Contact Me
          </button>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">
              Pay via UPI
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Please select a method to pay via UPI:
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="/payment"
                className="bg-green-600 text-white py-3 rounded-xl text-center font-semibold hover:bg-green-700 transition"
              >
                Pay ₹501 – Basic Reading
              </a>
              <a
                href="/payment"
                className="bg-purple-600 text-white py-3 rounded-xl text-center font-semibold hover:bg-purple-700 transition"
              >
                Pay ₹1001 – Premium Reading
              </a>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
