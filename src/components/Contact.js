import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaUser, FaCommentDots } from 'react-icons/fa';
import { Toast, ToastContainer } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('Send');
  const [toast, setToast] = useState({ show: false, message: '', variant: 'success' });

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
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message, variant = 'success') => {
    setToast({ show: true, message, variant });
    setTimeout(() => setToast({ show: false, message: '', variant: 'success' }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('Sending...');
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      const response = await fetch('https://formspree.io/f/xanjryon', {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('Send');
        setFormData({ name: '', email: '', subject: '', message: '' });
        showToast('✅ Message sent successfully!');
      } else {
        showToast('❌ Failed to send message. Try again later.', 'danger');
      }
    } catch {
      showToast('❌ An error occurred. Please try again.', 'danger');
    }
  };

  return (
    <section id="contact" className="py-5 text-light" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="mb-5 text-center fw-bold border-bottom border-secondary pb-3">Contact Me</h2>
        <div className="row g-4">
          {/* Info */}
          <div className="col-12 col-md-5">
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
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="col-12 col-md-7">
            <div className="p-4 rounded shadow-sm" style={glassStyle}>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-light border-light"><FaUser /></span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`form-control bg-dark text-light border-light ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-light border-light"><FaEnvelope /></span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`form-control bg-dark text-light border-light ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Subject Dropdown */}
                <div className="mb-3">
                  <label className="form-label text-light">Subject</label>
                  <select
                    name="subject"
                    className={`form-select bg-dark text-light border-light ${errors.subject ? 'is-invalid' : ''}`}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Subject --</option>
                    <option value="Web Design">💻 Web Design</option>
                    <option value="Presentation Design">🖼️ Presentation Design</option>
                    <option value="Business Profile Creation">🏢 Business Profile Creation</option>
                    <option value="Research & Writing">📝 Research & Writing</option>
                    <option value="Other">❓ Other</option>
                  </select>
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                {/* Message */}
                <div className="input-group mb-3">
                  <span className="input-group-text bg-dark text-light border-light"><FaCommentDots /></span>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className={`form-control bg-dark text-light border-light ${errors.message ? 'is-invalid' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                {/* Submit */}
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

        {/* Toast Notification */}
        <ToastContainer className="p-3 position-fixed top-0 end-0" style={{ zIndex: 9999 }}>
          <Toast
            show={toast.show}
            bg={toast.variant}
            onClose={() => setToast({ ...toast, show: false })}
            delay={5000}
            autohide
          >
            <Toast.Body className="text-white">{toast.message}</Toast.Body>
          </Toast>
        </ToastContainer>
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
