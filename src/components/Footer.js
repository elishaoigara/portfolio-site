import React from 'react';
import { FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">Made with ❤️ by Elisha Oigara</p>
        <div>
          <a
            href="https://github.com/elishaoigara"
            className="text-white me-3"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="me-1" /> GitHub
          </a>
          <a
            href="mailto:elishaoigara50@gmail.com"
            className="text-white me-3"
          >
            <FaEnvelope className="me-1" /> Email
          </a>
          <a
            href="https://twitter.com/lambertElisha3"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="me-1" /> Twitter
          </a>
        </div>
        <p className="mt-3 mb-0">
          &copy; {new Date().getFullYear()} Elisha Oigara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
