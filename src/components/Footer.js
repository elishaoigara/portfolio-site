import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="text-white text-center py-4 mt-5"
      style={{
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.2))',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        <p className="mb-2">Made with ❤️ by Elisha Oigara</p>

        <div className="d-flex justify-content-center gap-4 mb-2 flex-wrap">
          {/* GitHub */}
          <a
            href="https://github.com/elishaoigara"
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
            style={{ transition: 'transform 0.2s ease-in-out' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FaGithub /> GitHub
          </a>

          {/* Email */}
          <a
            href="mailto:elishaoigara50@gmail.com"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
            style={{ transition: 'transform 0.2s ease-in-out' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FaEnvelope /> Email
          </a>

          {/* Twitter/X */}
          <a
            href="https://twitter.com/lambertElisha3"
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
            style={{ transition: 'transform 0.2s ease-in-out' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="me-1"
            >
              <path d="M370.6 0H460L295.6 212.3 489 512H342.3L229.7 339.4 99.5 512H10.5L187.6 280.6 1 0H150.2l102.6 152L370.6 0z" />
            </svg>
            Twitter
          </a>
        </div>

        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Elisha Oigara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
