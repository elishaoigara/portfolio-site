import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/elisha.jpeg';

function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    { icon: '🌍', label: 'Location', value: 'Nairobi, Kenya' },
    { icon: '⚡', label: 'Focus', value: 'Full-Stack · AI-Augmented Dev' },
    { icon: '🎓', label: 'Education', value: 'ALX SE · MKU BIT · CS (UoPeople)' },
    { icon: '🤖', label: 'Superpower', value: 'AI tools in every workflow' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(135deg, rgba(5,8,12,0.97) 0%, rgba(8,14,22,0.95) 100%)',
      }}
    >
      {/* ── Ambient Orbs ── */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)',
          borderRadius: '50%',
          transform: `translate(${mousePos.x * 0.2}px, ${
            mousePos.y * 0.2
          }px)`,
          transition: 'transform 1s ease',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* ── Grid Overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">{'// About Me'}</span>

          <h2 className="section-title">
            Engineer. Builder.
            <br />
            <span
              style={{
                background:
                  'linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI Practitioner.
            </span>
          </h2>

          <div className="section-divider" />
        </motion.div>

        <div className="row align-items-center g-5">
          {/* ── LEFT: IMAGE ── */}
          <div className="col-lg-5 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '320px',
              }}
            >
              {/* Gradient border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '20px',
                  background:
                    'conic-gradient(from 0deg, #00d4ff, #7b61ff, #00ff94, #00d4ff)',
                  animation: 'spin-slow 8s linear infinite',
                }}
              />

              {/* Image */}
              <img
                src={profilePic}
                alt="Elisha Oigara"
                style={{
                  width: '100%',
                  borderRadius: '18px',
                  position: 'relative',
                  zIndex: 1,
                  objectFit: 'cover',
                }}
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-20px',
                  background: 'rgba(13,17,23,0.95)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    color: '#00d4ff',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em',
                  }}
                >
                  ALX SE
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    color: '#f0f6ff',
                    marginTop: '2px',
                  }}
                >
                  Graduate '25
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT: CONTENT ── */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                background: 'rgba(13,17,23,0.85)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '32px',
                backdropFilter: 'blur(16px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at top right, rgba(0,212,255,0.06), transparent 60%)',
                  pointerEvents: 'none',
                }}
              />

              <p style={{ color: '#7a8fa8', lineHeight: 1.8 }}>
                I'm <strong style={{ color: '#f0f6ff' }}>Elisha Oigara</strong> —
                a full-stack engineer building scalable systems and polished web
                apps with a strong focus on performance and real-world impact.
              </p>

              <p style={{ color: '#7a8fa8', lineHeight: 1.8 }}>
                I integrate{' '}
                <strong style={{ color: '#00d4ff' }}>AI tools</strong> into every
                stage of development to ship faster, reduce bugs, and build
                production-grade applications.
              </p>

              {/* Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginTop: '24px',
                }}
              >
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    style={{
                      padding: '16px',
                      borderRadius: '14px',
                      background: 'rgba(13,17,23,0.9)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div style={{ fontSize: '18px' }}>{h.icon}</div>
                    <div style={{ fontSize: '11px', color: '#4a6680' }}>
                      {h.label}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: '#f0f6ff',
                        fontWeight: 600,
                      }}
                    >
                      {h.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
                <a href="#contact" className="btn-primary-custom">
                  Get in Touch
                </a>
                <a
                  href="https://github.com/elishaoigara"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-custom"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default About;