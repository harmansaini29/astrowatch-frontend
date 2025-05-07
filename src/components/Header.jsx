import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/store", label: "WatchStore" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm px-6 py-4"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-purple-800 dark:text-purple-300"
        >
          <Link to="/">AstroWatch</Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative inline-block px-4 py-2 text-sm font-medium text-purple-800 dark:text-purple-300 transition-all duration-300 rounded-xl border border-transparent hover:text-white hover:bg-purple-600 dark:hover:bg-purple-500 hover:shadow-md"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: Theme toggle & mobile menu toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden text-3xl text-purple-800 dark:text-purple-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 flex flex-col space-y-3"
          >
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)} // close menu on click
                className="block w-full px-4 py-2 rounded-md text-center text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800"
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
