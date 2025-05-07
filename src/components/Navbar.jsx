// // src/components/Navbar.jsx
// import { useState, useEffect } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     if (
//       theme === "dark" ||
//       (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }
//     setIsDark(!isDark);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
//         <Link
//           to="/"
//           className="text-2xl font-bold text-purple-700 dark:text-purple-300"
//         >
//           AstroWatch
//         </Link>

//         <div className="hidden md:flex space-x-6 items-center">
//           <Link
//             to="/"
//             className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
//           >
//             Contact
//           </Link>
//         </div>

//         <motion.button
//           onClick={toggleTheme}
//           className="text-xl p-2 rounded-full text-purple-600 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//           whileTap={{ rotate: 180, scale: 0.9 }}
//         >
//           {isDark ? <FaSun /> : <FaMoon />}
//         </motion.button>
//       </div>
//     </nav>
//   );
// }


// NAVBAR KA JITNA BHI KAAM HAI VO HEADER FILE KAREGA
