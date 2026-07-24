import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ENV_READY =
  !!process.env.REACT_APP_EMAILJS_SERVICE_ID &&
  !!process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
  !!process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email is invalid';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    if (!ENV_READY) {
      // eslint-disable-next-line no-console
      console.error(
        'EmailJS env vars are missing. Set REACT_APP_EMAILJS_SERVICE_ID, ' +
        'REACT_APP_EMAILJS_TEMPLATE_ID and REACT_APP_EMAILJS_PUBLIC_KEY in your .env file.'
      );
      setErrors({ form: 'The contact form isn\u2019t configured yet — please email me directly at elishaoigara50@gmail.com.' });
      return;
    }

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(err => {
        console.error(err);
        setErrors({ form: 'Something went wrong sending that. Try again, or email me directly at elishaoigara50@gmail.com.' });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="section">
      <div className="container contact__grid">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title" data-aos="fade-up">
            Let's talk about <em>your team</em>
          </h2>
          <p className="section-lede" data-aos="fade-up" data-aos-delay="60">
            Open to full-time roles and select freelance work. The fastest
            way to reach me is the form, or email directly.
          </p>
          <p className="contact__email" data-aos="fade-up" data-aos-delay="100">
            <a href="mailto:elishaoigara50@gmail.com">elishaoigara50@gmail.com</a>
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="80">
          {success && (
            <div className="contact__success">
              Message sent — thanks for reaching out. I'll reply as soon as I can.
            </div>
          )}
          {errors.form && <div className="contact__error">{errors.form}</div>}

          <form onSubmit={handleSubmit} className="contact__form" noValidate>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <div id="name-error" className="field__error">{errors.name}</div>}
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <div id="email-error" className="field__error">{errors.email}</div>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <div id="message-error" className="field__error">{errors.message}</div>}
            </div>

            <button type="submit" disabled={loading} className="btn btn--primary contact__submit">
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: start;
        }
        .contact__email a {
          font-family: var(--font-mono);
          font-size: 15px;
          border-bottom: 1px solid var(--terracotta);
        }
        .contact__success, .contact__error {
          font-size: 14px;
          padding: 14px 16px;
          border-radius: 3px;
          margin-bottom: 20px;
        }
        .contact__success { background: rgba(61,90,69,0.1); border: 1px solid var(--forest); color: var(--forest); }
        .contact__error { background: rgba(193,80,46,0.08); border: 1px solid var(--terracotta); color: var(--terracotta); }

        .contact__form { display: flex; flex-direction: column; gap: 20px; }
        .field label {
          display: block;
          font-family: var(--font-mono);
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--muted);
          margin-bottom: 8px;
        }
        .field input, .field textarea {
          width: 100%;
          padding: 12px 14px;
          background: var(--paper);
          border: 1px solid var(--border);
          border-radius: 3px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--ink);
          resize: vertical;
        }
        .field input:focus, .field textarea:focus { border-color: var(--terracotta); outline: none; }
        .field__error { color: var(--terracotta); font-size: 12.5px; margin-top: 6px; }
        .contact__submit { align-self: flex-start; margin-top: 4px; }

        @media (max-width: 800px) {
          .contact__grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}
