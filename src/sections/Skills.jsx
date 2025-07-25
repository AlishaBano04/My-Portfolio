import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiSqlite,
} from "react-icons/si";

// Skill items
const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <SiSqlite /> },
  { name: "Git", icon: <FaGitAlt /> },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text transition-colors duration-500">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A8C23B] dark:text-primary mb-2">
          Skills
        </h2>
        <p className="text-light-muted-text dark:text-dark-muted-text text-lg">
          Technologies I’ve been working with
        </p>
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-center bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl py-6 shadow-md transition-all duration-300 hover:shadow-primary/30 hover:scale-105">
            <div className="text-4xl text-primary mb-2">{skill.icon}</div>
            <p className="text-sm font-medium text-light-text dark:text-dark-muted-text">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
