import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center z-20">
      <motion.div
        style={{ y: scrolling * 0.4 }}
        className="text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-2xl relative text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-500 animate-shimmer"
          animate={{ y: -8 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            type: "tween",
          }}
        >
          AstroWatch
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl mt-4 font-[Montserrat] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold underline decoration-4 decoration-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          by Harman Saini
        </motion.p>

        <p className="text-purple-300 text-xl mt-4">
          Where Luxury Meets Destiny
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 w-full flex justify-center z-30"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={scrollToSection}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-purple-500 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Scroll Down"
        >
          <ChevronDown size={32} className="text-purple-300 drop-shadow-xl" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
