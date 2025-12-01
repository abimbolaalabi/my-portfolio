import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Section from "./Section";

// Skills data with logos
const skillsData = [
  { name: "ReactJS", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", category: "frontend" },
  { name: "JavaScript (ES6+)", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", category: "frontend" },
  { name: "Git & GitHub", icon: ["https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"], category: "tools" },
  { name: "Figma/Design", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", category: "tools" },
  { name: "Webpack/Vite", icon: ["https://webpack.js.org/assets/icon-square-big.svg", "https://vitejs.dev/logo.svg"], category: "tools" },
];

// Motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

const SkillCard = ({ skill }) => {
  const { name, icon } = skill;

  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg border border-transparent cursor-pointer group"
      variants={itemVariants}
      whileHover={{ scale: 1.1, rotate: 3, transition: { type: "spring", stiffness: 300 } }}
    >
      <div className="mb-3 flex items-center justify-center gap-3">
        {Array.isArray(icon) ? (
          icon.map((url, idx) => (
            <motion.img
              key={idx}
              src={url}
              alt={`${name} ${idx + 1}`}
              className="w-10 h-10 object-contain"
              whileHover={{ scale: 1.2 }}
              onError={(e) => (e.target.src = "https://via.placeholder.com/36?text=?")}
            />
          ))
        ) : (
          <motion.img
            src={icon}
            alt={name}
            className="w-12 h-12 object-contain"
            whileHover={{ scale: 1.2 }}
            onError={(e) => (e.target.src = "https://via.placeholder.com/36?text=?")}
          />
        )}
      </div>
      <p className="text-lg font-semibold text-white text-center">{name}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [filter, setFilter] = useState("all");
  const filters = ["all"];

  const filteredSkills = skillsData.filter(skill => filter === "all" || skill.category === filter);

  const filterButtonClasses = (currentFilter) =>
    `px-6 py-2 rounded-full font-medium transition duration-300 text-sm md:text-base ${
      filter === currentFilter
        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
        : "bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
    }`;

  return (
    <Section id="skills" title="Skills & Abilities" icon={Code} className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center space-x-3 mb-10">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={filterButtonClasses(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {filteredSkills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
        </motion.div>
      </div>
    </Section>
  );
};

export default SkillsSection;
