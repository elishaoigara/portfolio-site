import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const EMAIL = "elishaoigara50@gmail.com";
export default function Contact() {
  const configured = !!(
    process.env.REACT_APP_EMAILJS_SERVICE_ID &&
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const sending = useRef(false);
  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setStatus("");
  }
  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim())
      next.message = "Tell me a little about your project or opportunity.";
    setErrors(next);
    setStatus("");
    if (Object.keys(next).length) {
      formRef.current.elements[Object.keys(next)[0]]?.focus();
      return;
    }
    if (!configured) {
      const subject = encodeURIComponent(
        `Portfolio enquiry from ${form.name.trim()}`,
      );
      const body = encodeURIComponent(
        `${form.message.trim()}\n\nFrom: ${form.name.trim()}\nReply to: ${form.email.trim()}`,
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus(
        "Your email app will open with a draft. Send it there to complete your enquiry. If nothing opens, email me directly using the address alongside this form.",
      );
      return;
    }
    sending.current = true;
    setBusy(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY },
      );
      setStatus("Message sent. Thanks for getting in touch!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus(
        "The message could not be sent. Your details are still here. Please try again or email me directly.",
      );
    } finally {
      sending.current = false;
      setBusy(false);
    }
  }
  return (
    <section id="contact" className="contact section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">04 / LET’S MAKE SOMETHING USEFUL</p>
          <h2>
            Have a good
            <br />
            problem to solve<span>?</span>
          </h2>
          <p>
            A new product, a better website, an AI idea,
            <br className="desktop-only" /> or a role on your team. I’d love to
            hear about it.
          </p>
          <a className="email-link" href={`mailto:${EMAIL}`}>
            {EMAIL} <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-note">
            <i className="status-dot" /> Based in Nairobi. Open to working
            globally.
          </div>
          <a
            className="contact-github"
            href="https://github.com/elishaoigara"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <form
          ref={formRef}
          onSubmit={submit}
          noValidate
          className="contact-form"
        >
          <div className="form-row">
            {[
              ["name", "Your name", "text", "name"],
              ["email", "Email address", "email", "email"],
            ].map(([name, label, type, autoComplete]) => (
              <div className="field" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  autoComplete={autoComplete}
                  required
                  maxLength={name === "name" ? 100 : 254}
                  value={form[name]}
                  onChange={change}
                  aria-invalid={!!errors[name]}
                  aria-describedby={errors[name] ? `${name}-error` : undefined}
                />
                {errors[name] && (
                  <span className="field-error" id={`${name}-error`}>
                    {errors[name]}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="field">
            <label htmlFor="message">What do you have in mind?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              maxLength={5000}
              placeholder="A little about your project, goals, or opportunity…"
              value={form.message}
              onChange={change}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span className="field-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>
          <p className="form-note">
            {configured
              ? "Your details are used to respond to your enquiry."
              : "This prepares a message in your email app, ready for you to send."}
          </p>
          <button className="btn btn-light" type="submit" disabled={busy}>
            {busy ? "Sending…" : configured ? "Send message" : "Prepare email"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
          <p role="status" className="form-status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
