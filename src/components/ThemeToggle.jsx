import { useState, useEffect } from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <motion.div
      onClick={toggleDarkMode}
      className="cursor-pointer"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative w-16 h-8 flex items-center bg-purple-300 dark:bg-gray-700 rounded-full p-1 shadow-inner transition-colors duration-500">
        <motion.div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-500 ${
            darkMode ? 'translate-x-8' : ''
          }`}
          animate={{
            boxShadow: darkMode
              ? '0 0 8px #a78bfa' // purple glow for dark
              : '0 0 8px #facc15', // yellow glow for light
          }}
        />
        <div className="flex justify-between w-full px-2 text-xs z-10">
          {/* Swapped order: Sun icon first, then Moon icon */}
          <BsSunFill
            className={`transition-colors duration-500 ${
              darkMode ? 'text-yellow-400' : 'text-purple-700'
            }`}
          />
          <BsMoonStarsFill
            className={`transition-colors duration-500 ${
              darkMode ? 'text-purple-500' : 'text-yellow-400'
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeToggle;
