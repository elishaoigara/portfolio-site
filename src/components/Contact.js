import React, { useState } from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // X (Twitter)

function Contact() {
  const [status, setStatus] = useState("Send");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xanjryon", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message Sent ✅");
      e.target.reset();
    } else {
      setStatus("Failed to Send ❌");
    }
  };

  return (
    <section id="contact" className="py-5 text-light" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="mb-5 text-center text-light fw-bold border-bottom border-secondary pb-3">Contact Me</h2>
        <div className="row align-items-start g-4">
          <div className="col-md-5">
            <div
              className="p-4 rounded shadow-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h5 className="mb-3">Let’s connect 🤝</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaEnvelope className="me-2 text-light" />
                  <strong>Email:</strong><br />
                  <a href="mailto:elishaoigara50@gmail.com" className="text-decoration-none text-light">
                    elishaoigara50@gmail.com
                  </a>
                </li>
                <li className="mb-3">
                  <FaGithub className="me-2 text-light" />
                  <strong>GitHub:</strong><br />
                  <a href="https://github.com/elishaoigara" target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                    github.com/elishaoigara
                  </a>
                </li>
                <li>
                  <FaXTwitter className="me-2 text-light" />
                  <strong>Twitter:</strong><br />
                  <a href="https://twitter.com/lambertElisha3" target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                    twitter.com/lambertElisha3
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-7">
            <div
              className="p-4 rounded shadow-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name="name" className="form-control bg-dark text-light border-light" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control bg-dark text-light border-light" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea name="message" className="form-control bg-dark text-light border-light" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light w-100">{status}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
