import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCode } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCertificate />,
    title: "Delta Course (Full Stack Development) – Apna College",
    description:
      "Completed Apna College's Delta program, gaining hands-on experience in building full-stack applications using MERN stack technologies.",
  },
  {
    icon: <FaCertificate />,
    title: "Alpha DSA Course (with Java) – Apna College",
    description:
      "Completed the Alpha course focused on mastering Data Structures & Algorithms using Java. Strengthened my foundation in problem-solving and core CS concepts.",
  },
  {
    icon: <FaCode />,
    title: "LeetCode Problem Solving",
    description: (
      <>
        Solved 100+ DSA problems on LeetCode, consistently improving
        logic-building and algorithmic thinking. <br />
        <a
          href="https://leetcode.com/u/Alisha_Bano/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline hover:opacity-80">
          View my profile
        </a>
      </>
    ),
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Achievements = () => {
  return (
    <section
      id="journey"
      className="py-20 px-6 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          My Growth Path
        </h2>
        <p className="text-light-muted-text dark:text-dark-muted-text text-lg max-w-2xl mx-auto text-center">
          I believe in consistent learning and upskilling. Here's a glimpse of
          my recent accomplishments in web development and problem-solving.
        </p>
      </div>

      <motion.div
        className="max-w-3xl mx-auto grid gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-5 shadow-md hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2 text-primary text-lg font-semibold">
              {item.icon}
              {item.title}
            </div>
            <p className="text-light-text dark:text-dark-muted-text text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
