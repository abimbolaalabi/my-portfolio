import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = ["Home", "About", "Skills", "Education", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

       
          <motion.div
            className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 cursor-pointer"
            onClick={() => scrollToSection("home")}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1
            }}
            whileHover={{
              scale: 1.05,
              rotateZ: [0, -1, 1, -1, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Alabi <span className="text-gray-900 dark:text-white">Ibrahim</span>
          </motion.div>

         
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 font-medium overflow-hidden group"
                onClick={() => scrollToSection(item.toLowerCase())}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                  delay: 0.4 + index * 0.1
                }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
                
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>

    
          <motion.button
            className="md:hidden text-gray-800 dark:text-gray-200 text-2xl relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{
              scale: 1.2,
              rotate: 180,
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.8 }}
          >
            {menuOpen ? (
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                ✖
              </motion.span>
            ) : (
              <motion.span
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1, 1.1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                ☰
              </motion.span>
            )}
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {menuOpen && (
            <motion.div
              className="md:hidden flex flex-col space-y-4 pb-4 mt-2 bg-white/95 dark:bg-gray-900/95 rounded-b-lg shadow-lg backdrop-blur-lg"
              initial={{ 
                opacity: 0,
                height: 0,
                scaleY: 0,
                transformOrigin: "top"
              }}
              animate={{ 
                opacity: 1,
                height: "auto",
                scaleY: 1
              }}
              exit={{ 
                opacity: 0,
                height: 0,
                scaleY: 0
              }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium px-4 py-2 overflow-hidden group"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    delay: index * 0.1
                  }}
                  whileHover={{
                    x: 20,
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item}
                  </motion.span>
                  {/* Ancient marker effect */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 dark:bg-indigo-400"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Ancient ripple effect for menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 -z-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;