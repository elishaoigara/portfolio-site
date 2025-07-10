// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/elisha.jpeg';
import './Hero.css';

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center text-light position-relative"
      style={{ minHeight: '100vh' }} // Make sure it fills the screen
    >
      {/* Hero Content */}
      <div className="container text-center position-relative" style={{ zIndex: 1 }}>
        <motion.img
          src={profilePic}
          alt="Elisha Oigara"
          className="img-fluid rounded-circle shadow"
          style={{
            width: '160px',
            height: '160px',
            objectFit: 'cover',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        <motion.h1
          className="display-4 fw-bold stroked-text mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Elisha Oigara
        </motion.h1>

        <motion.div
          className="lead mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer', 2000,
              'React Enthusiast', 2000,
              'UI/UX Explorer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#projects" className="btn btn-outline-light me-3">View My Work</a>
          <a href="#contact" className="btn btn-primary">Let’s Connect</a>
        </motion.div>

        {/* Social Icons */}
        <div className="mt-4">
          <a href="https://github.com/elishaoigara" target="_blank" rel="noreferrer" className="me-3 text-light fs-4">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/elishaoigara" target="_blank" rel="noreferrer" className="me-3 text-primary fs-4">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-down mt-5">
          <a href="#about" className="text-light text-decoration-none fs-5">
            <i className="fas fa-chevron-down bounce"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
