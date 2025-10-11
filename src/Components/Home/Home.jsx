import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      {/* Animated Orbs */}
      <motion.div
        className="orb orb1"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb2"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="content">
        <motion.p
          className="intro"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ejaz Ahmad
        </motion.h1>

        <motion.p
          className="role"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building high-performance interfaces with clean aesthetics, motion depth, and purpose-driven design.
        </motion.p>

        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="/contact" className="btn primary">Get in Touch</a>
          <a href="/projects" className="btn secondary">View Projects</a>
        </motion.div>

        <motion.div
          className="socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="https://github.com/ejaz18" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ejaz-ahmad-74a002298/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/its_ejaj.18/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="mailto:ejaj101112@gmail.com"><FaEnvelope /></a>
        </motion.div>

        <motion.a
          href="/about"
          className="scroll-down"
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown />
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
