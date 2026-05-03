import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/elisha.jpeg';

function About() {
  const highlights = [
    { icon: '🌍', label: 'Location', value: 'Nairobi, Kenya' },
    { icon: '⚡', label: 'Focus', value: 'Full-Stack · AI-Augmented Dev' },
    { icon: '🎓', label: 'Education', value: 'ALX SE Graduate · BIT · CS (UoPeople)' },
    { icon: '🤖', label: 'Superpower', value: 'AI tools in every workflow, daily' },
  ];

  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">{'// About Me'}</span>
          <h2 className="section-title">Engineer. Builder.<br /><span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Practitioner.</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ position: 'relative' }}
            >
              <div style={{
                position: 'absolute', inset: 0, background: 'var(--gradient)', borderRadius: '20px', opacity: 0.1, transform: 'rotate(3deg)',
              }} />
              <img
                src={profilePic}
                alt="Elisha Oigara"
                style={{ width: '100%', borderRadius: '16px', position: 'relative', objectFit: 'cover', aspectRatio: '1', border: '1px solid var(--border)' }}
              />
              {/* Experience badge */}
              <div style={{
                position: 'absolute', bottom: '20px', right: '-20px',
                background: 'var(--bg-2)', border: '1px solid var(--border-bright)',
                borderRadius: '12px', padding: '16px 20px', backdropFilter: 'blur(20px)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ALX</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>SE Graduate '25</div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                I'm <strong style={{ color: 'var(--text)' }}>Lambert Elisha Oigara</strong> — a full-stack software engineer based in Nairobi, Kenya. I build complete web applications from database design to polished user interfaces, with a sharp focus on performance, clean code, and real-world impact.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                What sets me apart? I integrate <strong style={{ color: 'var(--accent)' }}>AI tools into every stage of my development workflow</strong> — using Claude Code, Cursor, GitHub Copilot, and other cutting-edge tools daily to accelerate delivery, reduce bugs, and write production-grade code at speed. AI isn't a trend for me; it's my development stack.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
                I'm currently advancing my formal education in <strong style={{ color: 'var(--text)' }}>Business Information Technology</strong> and <strong style={{ color: 'var(--text)' }}>Computer Science at University of the People</strong>, combining academic depth with hands-on project experience.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
                {highlights.map((h, i) => (
                  <div key={i} className="glass" style={{ padding: '16px', borderRadius: '12px' }}>
                    <div style={{ fontSize: '18px', marginBottom: '4px' }}>{h.icon}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>{h.label}</div>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{h.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-primary-custom">Get in Touch</a>
                <a href="https://github.com/elishaoigara" target="_blank" rel="noreferrer" className="btn-outline-custom">
                  <i className="fab fa-github" /> GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;