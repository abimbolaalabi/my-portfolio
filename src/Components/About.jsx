import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "./Section";
import MOCK_DATA from "../Mock_DATA";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const buttonVariants = {
  hover: {
    scale: [1, 1.1, 1.05, 1.15],
    rotate: [0, 3, -3, 0],
    textShadow: [
      "0px 0px 0px rgba(255,255,255,0)",
      "0px 0px 8px rgba(255,255,255,0.8)",
      "0px 0px 12px rgba(255,255,255,0.6)",
      "0px 0px 8px rgba(255,255,255,0.8)",
    ],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const About = () => (
  <Section
    id="about"
    title="About Me"
    icon={Briefcase}
    className="bg-white dark:bg-gray-800"
  >
    <motion.div
      className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-2xl space-y-6 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-3xl font-bold text-gray-900 dark:text-white"
        variants={itemVariants}
      >
        I'm Alabi Ibrahim Abimbola
      </motion.h3>

      <motion.p
        className="text-xl font-medium text-indigo-600 dark:text-indigo-400"
        variants={itemVariants}
      >
        {MOCK_DATA.title} | React Specialist
      </motion.p>

      <motion.p
        className="text-gray-700 dark:text-gray-400 leading-relaxed"
        variants={itemVariants}
      >
        I am a passionate and results-driven Frontend Developer with X years of
        experience building and deploying complex web applications. My expertise
        lies in the React ecosystem, including state management (Redux/Context),
        component design, and performance optimization.
      </motion.p>

      <motion.p
        className="text-gray-700 dark:text-gray-400 leading-relaxed"
        variants={itemVariants}
      >
        I thrive on turning design concepts into highly interactive and scalable
        user interfaces. I am committed to writing clean, maintainable code and
        staying current with the latest frontend technologies to deliver
        exceptional user experiences.
      </motion.p>

    <motion.a
  href="https://drive.google.com/file/d/1jkoF9qWhRs6rDlvX0tV3lQywFLlPsw9h/view?usp=sharing"

  className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg text-lg"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={buttonVariants.hover}
>
  Download CV
</motion.a>

    </motion.div>
  </Section>
);

export default About;
