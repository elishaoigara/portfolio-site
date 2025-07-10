import React from 'react';
import { FaMapMarkerAlt, FaCode, FaLaptopCode, FaPenFancy, FaSlideshare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/elisha.jpeg';
import './About.css';

function About() {
  return (
    <section id="about" className="py-5 text-light d-flex justify-content-center">
      <motion.div
        className="glass-card container p-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-5 text-center fw-bold border-bottom border-secondary pb-3">
          About Me
        </h2>

        <div className="row align-items-center justify-content-center">
          {/* Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profilePic}
              alt="Elisha Oigara"
              className="img-fluid rounded-circle shadow"
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
            />
          </div>

          {/* Text Content */}
          <div className="col-md-7">
            <p className="lead">
              Hi! I'm <strong>Elisha Oigara</strong>, a passionate Frontend Developer and Creative Professional based in Kenya.
              I specialize in building clean, responsive user interfaces using <strong>React.js</strong>, <strong>Bootstrap</strong>, and <strong>Tailwind</strong>.
            </p>
            <p>
              Beyond coding, I also offer services in <strong>research & writing</strong>, <strong>presentation design</strong>,
              and <strong>business profile creation</strong>. Whether you're building a brand or pitching a big idea, I can help
              you communicate it effectively.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-warning" />
                <strong>Location:</strong> Nairobi, Kenya
              </li>
              <li className="mb-2">
                <FaLaptopCode className="me-2 text-info" />
                <strong>Focus:</strong> Frontend Development · UI/UX Design · Web Performance
              </li>
              <li className="mb-2">
                <FaCode className="me-2 text-success" />
                <strong>Stack:</strong> React · Bootstrap · Tailwind · Firebase
              </li>
              <li className="mb-2">
                <FaPenFancy className="me-2 text-primary" />
                <strong>Creative:</strong> Academic Writing · Business Profiles · Content Writing
              </li>
              <li className="mb-2">
                <FaSlideshare className="me-2 text-danger" />
                <strong>Design:</strong> Presentations · Pitch Decks · Canva Designs
              </li>
            </ul>

            {/* Hire Me Button */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#contact" className="btn btn-outline-light px-4 py-2">
                🚀 Hire Me
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
