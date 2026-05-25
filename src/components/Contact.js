import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]:value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]:'' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSuccess(true);
      setForm({ name:'', email:'', message:'' });
      setTimeout(() => setSuccess(false), 5000);
    }).catch(err => {
      console.error(err);
      alert('Failed to send message. Please try again.');
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" style={{ padding:'100px 0', background:'#07090d' }}>
      <div className="container" style={{ padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:48, fontWeight:800, color:'#e4ecf5', marginBottom:16 }}>
            Get In <span style={{ background:'linear-gradient(135deg,#00d4ff,#7b61ff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Touch</span>
          </h2>
          <p style={{ color:'#8fa3ba', fontSize:18, maxWidth:600, margin:'0 auto' }}>
            Have a project in mind? Let's collaborate and bring your ideas to life.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {success ? (
              <motion.div 
                initial={{ opacity:0, scale:.9 }}
                animate={{ opacity:1, scale:1 }}
                style={{
                  background:'rgba(0,255,148,.1)',
                  border:'1px solid #00ff94',
                  borderRadius:16,
                  padding:40,
                  textAlign:'center',
                  marginBottom:40
                }}
              >
                <div style={{ fontSize:48, marginBottom:16 }}>🎉</div>
                <h3 style={{ 
                  fontFamily:'Syne,sans-serif', 
                  fontSize:28, 
                  fontWeight:700, 
                  color:'#00ff94',
                  marginBottom:12
                }}>
                  Message Sent!
                </h3>
                <p style={{ color:'#8fa3ba', fontSize:16, lineHeight:1.6 }}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : null}

            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:.5 }}
              style={{
                background:'#0b0f17',
                border:'1px solid rgba(255,255,255,.07)',
                borderRadius:16,
                padding:32
              }}
            >
              <div className="mb-4">
                <label htmlFor="name" style={{ 
                  display:'block', 
                  marginBottom:8, 
                  fontFamily:'DM Sans,sans-serif', 
                  fontSize:14, 
                  fontWeight:500, 
                  color:'#e4ecf5' 
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  style={{
                    width:'100%',
                    padding:'14px 18px',
                    background:'rgba(255,255,255,.05)',
                    border:`1px solid ${errors.name ? '#ff4d4d' : 'rgba(255,255,255,.1)'}`,
                    borderRadius:10,
                    color:'#e4ecf5',
                    fontSize:16,
                    transition:'border-color .2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#00d4ff'}
                  onBlur={e => e.target.style.borderColor = errors.name ? '#ff4d4d' : 'rgba(255,255,255,.1)'}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <div id="name-error" style={{ 
                    color:'#ff4d4d', 
                    fontSize:13, 
                    marginTop:6,
                    fontFamily:'DM Sans,sans-serif'
                  }}>
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" style={{ 
                  display:'block', 
                  marginBottom:8, 
                  fontFamily:'DM Sans,sans-serif', 
                  fontSize:14, 
                  fontWeight:500, 
                  color:'#e4ecf5' 
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  style={{
                    width:'100%',
                    padding:'14px 18px',
                    background:'rgba(255,255,255,.05)',
                    border:`1px solid ${errors.email ? '#ff4d4d' : 'rgba(255,255,255,.1)'}`,
                    borderRadius:10,
                    color:'#e4ecf5',
                    fontSize:16,
                    transition:'border-color .2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#00d4ff'}
                  onBlur={e => e.target.style.borderColor = errors.email ? '#ff4d4d' : 'rgba(255,255,255,.1)'}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <div id="email-error" style={{ 
                    color:'#ff4d4d', 
                    fontSize:13, 
                    marginTop:6,
                    fontFamily:'DM Sans,sans-serif'
                  }}>
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="message" style={{ 
                  display:'block', 
                  marginBottom:8, 
                  fontFamily:'DM Sans,sans-serif', 
                  fontSize:14, 
                  fontWeight:500, 
                  color:'#e4ecf5' 
                }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  style={{
                    width:'100%',
                    padding:'14px 18px',
                    background:'rgba(255,255,255,.05)',
                    border:`1px solid ${errors.message ? '#ff4d4d' : 'rgba(255,255,255,.1)'}`,
                    borderRadius:10,
                    color:'#e4ecf5',
                    fontSize:16,
                    resize:'vertical',
                    transition:'border-color .2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#00d4ff'}
                  onBlur={e => e.target.style.borderColor = errors.message ? '#ff4d4d' : 'rgba(255,255,255,.1)'}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <div id="message-error" style={{ 
                    color:'#ff4d4d', 
                    fontSize:13, 
                    marginTop:6,
                    fontFamily:'DM Sans,sans-serif'
                  }}>
                    {errors.message}
                  </div>
                )}
              </div>

              <button 
                type="submit" 
                disabled={loading}
                style={{
                  width:'100%',
                  padding:'16px 24px',
                  background:'linear-gradient(135deg,#00d4ff,#7b61ff)',
                  border:'none',
                  borderRadius:10,
                  color:'#07090d',
                  fontFamily:'DM Sans,sans-serif',
                  fontSize:16,
                  fontWeight:700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition:'transform .2s, box-shadow .2s',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseEnter={e => !loading && (e.target.style.transform = 'translateY(-2px)', e.target.style.boxShadow = '0 6px 16px rgba(0,212,255,.3)')}
                onMouseLeave={e => !loading && (e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = 'none')}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}