import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 bg-light-background dark:bg-dark-background transition-colors duration-500">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center">
        {/* Profile Image */}
        <motion.img
          variants={fadeUp}
          src="/projects/profile.png"
          alt="Profile"
          className="w-48 h-48 mb-6 object-cover"
        />

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-light-heading dark:text-primary">
          Hi, I'm Alisha
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          variants={fadeUp}
          className="mt-4 text-lg sm:text-xl text-light-text dark:text-dark-text">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "AI Enthusiast",
                "Deep diving into DSA with Java",
                "Lifelong Learner :)",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-md text-light-text dark:text-dark-text max-w-2xl">
          Full Stack Developer with a growing passion for Artificial
          Intelligence and Data Science — building smart, scalable, and
          user-focused web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#A8C23B] dark:bg-[#9fc900] text-black rounded-full font-semibold transition duration-300 
             hover:brightness-110 hover:shadow-[0_0_12px_#A8C23B] dark:hover:shadow-[0_0_12px_#9fc900] hover:scale-105">
            My Recent Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:border-primary hover:shadow-[0_0_12px_#9fc900] transition duration-300">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
