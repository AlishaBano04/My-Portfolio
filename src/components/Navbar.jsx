// import React, { useState, useEffect } from "react";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import { FaCode } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import ThemeToggle from "./ThemeToggle";

// const navItems = [
//   { label: "Home", id: "home" },
//   { label: "About", id: "about" },
//   { label: "Skills", id: "skills" },
//   { label: "Projects", id: "projects" },
//   { label: "Journey", id: "journey" },
//   { label: "Contact", id: "contact" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 100;

//       for (let item of navItems) {
//         const section = document.getElementById(item.id);
//         if (
//           section &&
//           section.offsetTop <= scrollPos &&
//           section.offsetTop + section.offsetHeight > scrollPos
//         ) {
//           setActiveSection(item.id);
//         }
//       }

//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "auto";
//   }, [menuOpen]);

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#fefae0]/80 dark:bg-black/70 backdrop-blur-md shadow-md"
//           : "bg-[#fefae0] dark:bg-black"
//       }`}>
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-between h-16 relative">
//         {/* Logo */}
//         <div className="text-[#9fc900] text-2xl font-bold">
//           <FaCode />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex justify-center w-full absolute left-0 right-0">
//           <ul className="flex space-x-8 text-sm font-medium tracking-wide justify-center">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item.id}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 + index * 0.1 }}>
//                 <a
//                   href={`#${item.id}`}
//                   className={`transition duration-300 ${
//                     activeSection === item.id
//                       ? "text-[#9fc900]"
//                       : "text-black dark:text-white"
//                   } hover:text-[#9fc900]`}>
//                   {item.label}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* Theme Toggle */}
//         <div className="absolute right-16 top-1/2 -translate-y-1/2">
//           <ThemeToggle />
//         </div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden text-black dark:text-white text-2xl z-50 relative">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu with Framer Motion */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="fixed inset-0 h-screen w-full bg-[#fefae0] dark:bg-black flex flex-col justify-center items-center space-y-8 text-xl font-medium z-40">
//             {navItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={() => setMenuOpen(false)}
//                 className={`transition duration-300 ${
//                   activeSection === item.id
//                     ? "text-[#9fc900]"
//                     : "text-black dark:text-white"
//                 } hover:text-[#9fc900]`}>
//                 {item.label}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Hobbies", id: "beyond" }, // ✅ New nav item
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(item.id);
        }
      }

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fefae0]/80 dark:bg-black/70 backdrop-blur-md shadow-md"
          : "bg-[#fefae0] dark:bg-black"
      }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-between h-16 relative">
        <div className="text-[#9fc900] text-2xl font-bold">
          <FaCode />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center w-full absolute left-0 right-0">
          <ul className="flex space-x-8 text-sm font-medium tracking-wide justify-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}>
                <a
                  href={`#${item.id}`}
                  className={`transition duration-300 ${
                    activeSection === item.id
                      ? "text-[#9fc900]"
                      : "text-black dark:text-white"
                  } hover:text-[#9fc900]`}>
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2">
          <ThemeToggle />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-black dark:text-white text-2xl z-50 relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 h-screen w-full bg-[#fefae0] dark:bg-black flex flex-col justify-center items-center space-y-8 text-xl font-medium z-40">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`transition duration-300 ${
                  activeSection === item.id
                    ? "text-[#9fc900]"
                    : "text-black dark:text-white"
                } hover:text-[#9fc900]`}>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
