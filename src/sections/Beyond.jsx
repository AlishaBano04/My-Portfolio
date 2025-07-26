import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const interests = [
  {
    name: "Reading",
    icon: "📚",
    preferences: ["You Got This", "Eat That Frog", "Master Your Emotions"],
  },
  {
    name: "Music",
    icon: "🎵",
    preferences: ["Lofi beats", "Instrumentals", "Indie Vibes"],
  },
  {
    name: "Cooking",
    icon: "🍳",
    preferences: ["Experimental dishes", "Indian Cuisine", "Quick recipes"],
  },
  {
    name: "Travelling",
    icon: "✈️",
    preferences: ["Mountains", "Beaches", "Cultural trips"],
  },
  {
    name: "Gardening",
    icon: "🌱",
    preferences: ["Indoor plants", "Herbs", "Succulents"],
  },
  {
    name: "Journaling",
    icon: "📝",
    preferences: ["Gratitude logs", "Daily reflections", "Goal setting"],
  },
  {
    name: "Movie Watching",
    icon: "🎬",
    preferences: ["Up", "Wake Up Sid", "The Social Network"],
  },
];

const Beyond = () => {
  return (
    <section
      id="beyond"
      className="w-full overflow-x-hidden py-20 px-4 md:px-8 transition-colors duration-300 bg-[#fefae0] dark:bg-black text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}>
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-4 text-[#A8C23B] dark:text-[#9fc900]">
          Off the Grid
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-10">
          A glimpse into what inspires me beyond the lines of code.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={container}>
          {interests.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative group">
              <span className="px-5 py-2 rounded-full font-medium bg-gradient-to-r from-[#9fc900] to-[#A8C23B] text-black dark:text-white shadow-md text-sm sm:text-base hover:scale-105 transition-transform duration-200 cursor-pointer">
                {item.name} {item.icon}
              </span>

              {/* Tooltip - size reduced */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 sm:w-56 bg-white dark:bg-gray-900 text-black dark:text-gray-100 text-xs px-3 py-2 rounded-lg border border-[#9fc900] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <h4 className="font-semibold mb-1 text-[#A8C23B] dark:text-[#9fc900] text-sm">
                  {item.name}
                </h4>
                <ul className="list-disc list-inside text-left space-y-0.5">
                  {item.preferences.map((pref, i) => (
                    <li key={i}>{pref}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Beyond;
