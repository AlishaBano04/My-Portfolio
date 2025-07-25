import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-10 px-4 border-t border-light-border dark:border-dark-border transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-5">
        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/AlishaBano04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9fc900] transition-colors duration-300"
            aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/alishabano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9fc900] transition-colors duration-300"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a
            href="mailto:alishabano4312@gmail.com"
            className="hover:text-[#9fc900] transition-colors duration-300 flex items-center gap-2 text-sm">
            <FaEnvelope className="text-base" />
            <span className="select-all">alishabano4312@gmail.com</span>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-16 bg-[#9fc900] opacity-40" />

        {/* Credit */}
        <div className="text-sm text-light-muted-text dark:text-dark-muted-text text-center">
          Designed & Developed by{" "}
          <span className="font-semibold text-black dark:text-white">
            Alisha
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-light-muted-text dark:text-dark-muted-text text-center">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
