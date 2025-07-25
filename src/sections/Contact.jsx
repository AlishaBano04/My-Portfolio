import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY); // ✅ Correct way

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Web3Forms Error:", data);
      setResult("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-500">
      <motion.div
        className="text-center max-w-xl sm:max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}>
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-light-muted-text dark:text-dark-muted-text mt-2 text-base sm:text-lg">
          Whether you want to work together or just say hi — my inbox is always
          open.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          variants={fadeUp}
          className="mt-10 space-y-5 sm:space-y-6 w-full">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-[#fefae0] dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md text-light-text dark:text-dark-text shadow-md dark:shadow-none focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-[#fefae0] dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md text-light-text dark:text-dark-text shadow-md dark:shadow-none focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
          />

          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-[#fefae0] dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md text-light-text dark:text-dark-text shadow-md dark:shadow-none focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 sm:w-auto bg-primary text-black font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition duration-300 text-sm">
              Send Message
            </button>
          </div>

          {result && (
            <p className="mt-4 text-sm font-medium text-primary">{result}</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
