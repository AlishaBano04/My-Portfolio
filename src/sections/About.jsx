import React from "react";
import {
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-light-background text-light-heading dark:bg-dark-background dark:text-dark-text transition-colors duration-500">
      {/* Heading & Description */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-light-heading dark:text-primary mb-4">
          Personal Information
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-light-muted-text dark:text-dark-muted-text text-lg max-w-3xl mx-auto text-justify">
          Hi, I'm Alisha — a full-stack web developer with a strong passion for
          building clean, responsive, and impactful web applications. I enjoy
          turning ideas into functional products that are both efficient and
          user-friendly. I'm also deeply interested in Artificial Intelligence
          and Data Science, and I love exploring how intelligent systems can
          solve real-world problems. With a solid foundation in Java and Data
          Structures & Algorithms, I approach development with a problem-solving
          mindset and write optimized, maintainable code. I’m constantly
          learning, improving, and striving to create technology that’s
          meaningful, modern, and scalable.
        </motion.p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={scaleFade}
        className="max-w-3xl mx-auto bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl px-6 py-8 shadow-md hover:shadow-primary/30 transition-all duration-300 mb-12">
        <h3 className="text-2xl font-semibold text-light-heading dark:text-primary mb-4 text-left">
          Education
        </h3>

        <ul className="space-y-4 text-left">
          <li className="flex items-start space-x-3">
            <FaGraduationCap className="text-primary mt-1" />
            <div>
              <p className="font-medium text-light-text dark:text-dark-text">
                Bachelor of Science (B.Sc.) – Mathematics, Physics & Computer
                Science
              </p>
              <p className="text-sm text-light-muted-text dark:text-dark-muted-text">
                Completed
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <FaGraduationCap className="text-primary mt-1" />
            <div>
              <p className="font-medium text-light-text dark:text-dark-text">
                Master of Computer Applications (MCA) – Specialization in AI &
                Data Science
              </p>
              <p className="text-sm text-light-muted-text dark:text-dark-muted-text">
                Pursuing
              </p>
            </div>
          </li>
        </ul>
      </motion.div>
      {/* Contact */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={scaleFade}
        className="max-w-3xl mx-auto bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-md hover:shadow-primary/20 transition-all duration-300">
        {/* Title */}
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-semibold text-light-heading dark:text-primary text-center mb-6">
          Reach out to me at
        </motion.h3>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/AlishaBano04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group transition duration-200">
            <FaGithub className="text-xl sm:text-2xl text-light-text dark:text-dark-text group-hover:text-primary transition-colors duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/alishabano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group transition duration-200">
            <FaLinkedin className="text-xl sm:text-2xl text-light-text dark:text-dark-text group-hover:text-primary transition-colors duration-200" />
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center">
          <div className="flex items-center gap-2 bg-light-muted-text/10 dark:bg-dark-muted-text/10 px-5 py-2 rounded-full text-sm sm:text-base text-light-muted-text dark:text-dark-muted-text backdrop-blur-md shadow-inner select-all">
            <FaEnvelope className="text-primary" />
            <span>alishabano4312@gmail.com</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
