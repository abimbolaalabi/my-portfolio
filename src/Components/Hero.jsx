import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import MOCK_DATA from "../Mock_DATA";
import Section from "./Section";
import SocialIconLink from "./SocialIconLink";

// Motion Variants
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const avatarVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

// Continuous scroll animation for name
const scrollVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 12, ease: "linear" },
    },
  },
};

// Helper to scroll to section
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const name = MOCK_DATA.name;

  return (
    <Section
      id="home"
      className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT SIDE — TEXT */}
        <motion.div className="order-2 md:order-1 px-4 sm:px-0" variants={textVariant}>
          <motion.p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-2 sm:mb-3">
            Turning ideas into interactive web magic.
          </motion.p>

          {/* Scrolling Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-snug sm:leading-tight mb-4 overflow-hidden relative">
            <motion.span
              className="inline-block whitespace-nowrap"
              variants={scrollVariants}
              animate="animate"
            >
              {name} &nbsp; {name} &nbsp; {name} &nbsp; {name}
            </motion.span>
          </h1>

          <motion.p className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            {MOCK_DATA.title}
          </motion.p>

          <motion.p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 max-w-md sm:max-w-lg leading-relaxed">
            {MOCK_DATA.tagline}
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-3 sm:gap-4" variants={textVariant}>
            <SocialIconLink
              href={MOCK_DATA.contact.social.linkedin}
              Icon={FaLinkedin}
              label="LinkedIn"
            />
            <SocialIconLink
              href={MOCK_DATA.contact.social.github}
              Icon={FaGithub}
              label="GitHub"
            />
            <SocialIconLink
              href={MOCK_DATA.contact.social.website}
              Icon={FaGlobe}
              label="Website"
            />
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="px-5 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              Hire me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — AVATAR */}
        <motion.div className="order-1 md:order-2 flex justify-center" variants={avatarVariant}>
          <motion.div
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/40 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img
              src="/port.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x400/6366f1/ffffff?text=Avatar";
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;
