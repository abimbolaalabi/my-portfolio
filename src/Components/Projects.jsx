import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";
import MOCK_DATA from "../Mock_DATA";

// Motion variants for obvious animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition duration-300"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x250/2563eb/ffffff?text=Project+Preview";
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 font-medium text-sm transition duration-300 flex items-center"
        >
          View Project <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <Section
    id="projects"
    title="My Projects"
    icon={Briefcase}
    className="bg-gray-50 dark:bg-gray-900"
  >
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {MOCK_DATA.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  </Section>
);

export default Projects;
