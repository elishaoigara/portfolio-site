import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.subject) newErrors.subject = 'Required';
    if (!formData.message) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    const form = new FormData();
    Object.entries(formData).forEach(([k, v]) => form.append(k, v));
    try {
      const res = await fetch('https://formspree.io/f/xanjryon', {
        method: 'POST', body: form, headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--border)'}`,
    borderRadius: '10px',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'elishaoigara50@gmail.com', href: 'mailto:elishaoigara50@gmail.com' },
    { icon: '💻', label: 'GitHub', value: 'github.com/elishaoigara', href: 'https://github.com/elishaoigara' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/elishaoigara', href: 'https://linkedin.com/in/elishaoigara' },
    { icon: '🐦', label: 'Twitter / X', value: '@lambertElisha3', href: 'https://twitter.com/lambertElisha3' },
  ];

  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">{'// Contact'}</span>
          <h2 className="section-title">Let's Work<br /><span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Together</span></h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '56px' }}>
            Whether you have a project, a job opportunity, or just want to chat about technology — my inbox is open.
          </p>
        </motion.div>

        <div className="row g-5">
          {/* Left: info */}
          <div className="col-lg-4">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {contactInfo.map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="glass" style={{ padding: '16px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '14px', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      <span style={{ fontSize: '20px' }}>{c.icon}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</div>
                        <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{c.value}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability card */}
              <div className="glass" style={{ padding: '20px', borderRadius: '14px', borderColor: 'rgba(0,255,148,0.2)', background: 'rgba(0,255,148,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-3)', boxShadow: '0 0 8px var(--accent-3)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-3)', fontWeight: 600 }}>AVAILABLE FOR WORK</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Open to full-stack contracts, freelance projects, and full-time remote roles. Response time: within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <div className="col-lg-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              {status === 'success' ? (
                <div className="glass" style={{ padding: '48px', borderRadius: '20px', textAlign: 'center', borderColor: 'rgba(0,255,148,0.2)' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline-custom" style={{ marginTop: '20px' }}>Send Another</button>
                </div>
              ) : (
                <div className="glass" style={{ padding: '36px', borderRadius: '20px' }}>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3" style={{ marginBottom: '16px' }}>
                      <div className="col-md-6">
                        <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Name</label>
                        <input name="name" placeholder="John Doe" value={formData.name} onChange={handleChange}
                          style={inputStyle(errors.name)}
                          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                          onBlur={e => e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border)'}
                        />
                        {errors.name && <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                      </div>
                      <div className="col-md-6">
                        <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</label>
                        <input name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange}
                          style={inputStyle(errors.email)}
                          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                          onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)'}
                        />
                        {errors.email && <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Subject</label>
                      <select name="subject" value={formData.subject} onChange={handleChange}
                        style={{ ...inputStyle(errors.subject), cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border)'}
                      >
                        <option value="" style={{ background: 'var(--bg-2)' }}>Select a subject…</option>
                        <option value="Full-Stack Project" style={{ background: 'var(--bg-2)' }}>🧱 Full-Stack Project</option>
                        <option value="AI Integration" style={{ background: 'var(--bg-2)' }}>🤖 AI Integration</option>
                        <option value="Frontend Development" style={{ background: 'var(--bg-2)' }}>⚛️ Frontend Development</option>
                        <option value="Job Opportunity" style={{ background: 'var(--bg-2)' }}>💼 Job Opportunity</option>
                        <option value="API Development" style={{ background: 'var(--bg-2)' }}>🔌 API Development</option>
                        <option value="Other" style={{ background: 'var(--bg-2)' }}>💬 Other</option>
                      </select>
                      {errors.subject && <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', display: 'block' }}>{errors.subject}</span>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message</label>
                      <textarea name="message" placeholder="Tell me about your project or opportunity…" rows={5} value={formData.message} onChange={handleChange}
                        style={{ ...inputStyle(errors.message), resize: 'vertical' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)'}
                      />
                      {errors.message && <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                    </div>

                    {status === 'error' && (
                      <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#ef4444' }}>
                        Something went wrong. Please try again or email me directly.
                      </div>
                    )}

                    <button type="submit" className="btn-primary-custom" style={{ width: '100%', justifyContent: 'center', padding: '14px' }} disabled={status === 'sending'}>
                      {status === 'sending' ? (
                        <><span style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} /> Sending…</>
                      ) : 'Send Message →'}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

export default Contact;