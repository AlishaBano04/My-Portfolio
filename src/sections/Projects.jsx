import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Wanderlust",
    description:
      "A full-stack travel platform where users can list, book, and review properties. Inspired by Airbnb, with authentication, reviews, and search.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js"],
    github: "https://github.com/AlishaBano04/Wanderlust",
    link: "https://wanderlust-j666.onrender.com/listings",
  },
  {
    title: "ChatHub",
    description:
      "Real-time chat app powered by Socket.io for seamless communication between users. Includes room-based chatting, typing indicators, and user presence.",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    github: "https://github.com/AlishaBano04/ChatHub",
    link: "https://chat-hub-blue.vercel.app/login",
  },
  {
    title: "Weather App",
    description:
      "A modern weather forecast application with real-time data, responsive UI, and animated weather icons. Built using OpenWeather API.",
    tech: ["React", "Material UI", "Open Weather API"],
    github: "https://github.com/AlishaBano04/Weather-App",
    link: "https://weather-app-nu-puce.vercel.app/",
  },
  {
    title: "My Developer's Portfolio",
    description:
      "This portfolio is a reflection of my journey — combining creativity, clean code, and seamless user experience.",
    tech: ["React", "Tailwind CSS", "React icons", "Framer Motion"],
    github: "https://github.com/AlishaBano04/My-Portfolio",
    link: "#home",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-500">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          My Recent Work
        </h2>
        <p className="text-light-muted-text dark:text-dark-muted-text text-lg">
          A selection of things I’ve built
        </p>
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            className="bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border p-6 shadow-md hover:shadow-primary/40 transition-all duration-300 group">
            <div className="flex justify-end mb-4 space-x-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text dark:text-dark-muted-text dark:hover:text-[#9fc900] hover:text-primary transition duration-300 text-lg">
                <FaGithub />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text dark:hover:text-[#9fc900] dark:text-dark-muted-text hover:text-primary transition duration-300 text-lg">
                <FaExternalLinkAlt />
              </a>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-light-muted-text dark:text-dark-muted-text mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
