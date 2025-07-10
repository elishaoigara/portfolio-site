import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaUser, FaCommentDots } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('Send');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('Sending...');
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      const response = await fetch("https://formspree.io/f/xanjryon", {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('Message Sent ✅');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to Send ❌');
      }
    } catch {
      setStatus('Error ❌');
    }
  };

  return (
    <section id="contact" className="py-5 text-light" style={{ background: 'transparent' }} data-aos="fade-up">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold border-bottom border-secondary pb-3">Contact Me</h2>
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5" data-aos="fade-right">
            <div className="p-4 rounded shadow-sm" style={glassStyle}>
              <h5 className="mb-3">Let’s connect 🤝</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaEnvelope className="me-2 text-light" />
                  <strong>Email:</strong><br />
                  <a href="mailto:elishaoigara50@gmail.com" className="text-light text-decoration-none">
                    elishaoigara50@gmail.com
                  </a>
                </li>
                <li className="mb-3">
                  <FaGithub className="me-2 text-light" />
                  <strong>GitHub:</strong><br />
                  <a
                    href="https://github.com/elishaoigara"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light text-decoration-none"
                  >
                    github.com/elishaoigara
                  </a>
                </li>
                <li>
                  <span className="me-2 text-light" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M370.6 0H460L295.6 212.3 489 512H342.3L229.7 339.4 99.5 512H10.5L187.6 280.6 1 0H150.2l102.6 152L370.6 0z" />
                    </svg>
                  </span>
                  <strong>X (Twitter):</strong><br />
                  <a
                    href="https://twitter.com/lambertElisha3"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light text-decoration-none"
                  >
                    twitter.com/lambertElisha3
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7" data-aos="fade-left">
            <div className="p-4 rounded shadow-sm" style={glassStyle}>
              <form onSubmit={handleSubmit} aria-label="Contact form">
                {/* Name Field */}
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-light border-light"><FaUser /></span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`form-control bg-dark text-light border-light ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'Sending...'}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Email Field */}
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-light border-light"><FaEnvelope /></span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`form-control bg-dark text-light border-light ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'Sending...'}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Message Field */}
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-light border-light"><FaCommentDots /></span>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className={`form-control bg-dark text-light border-light ${errors.message ? 'is-invalid' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'Sending...'}
                    required
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-outline-light w-100" disabled={status === 'Sending...'}>
                  {status === 'Sending...' && (
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  )}
                  {status}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '10px',
  boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
};

export default Contact;
