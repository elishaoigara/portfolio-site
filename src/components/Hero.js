import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/elisha.jpeg';

function Hero() {
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

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '64px' }}>
      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
        transition: 'transform 0.8s ease',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(123,97,255,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
        transition: 'transform 1s ease',
      }} />

      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '60px 24px' }}>
        <div className="row align-items-center" style={{ gap: '40px 0' }}>

          {/* Left content */}
          <div className="col-lg-7">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-3)', animation: 'pulse-glow 2s infinite', boxShadow: '0 0 8px var(--accent-3)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-3)', letterSpacing: '0.15em' }}>
                  Available for Work · Nairobi, Kenya
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(38px, 6vw, 72px)',
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: '12px',
                color: 'var(--text)',
              }}
            >
              Elisha<br />
              <span style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Oigara</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(16px, 2.5vw, 22px)',
                fontWeight: 600,
                color: 'var(--text-muted)',
                marginBottom: '24px',
                minHeight: '32px',
              }}
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer', 2500,
                  'AI-Powered Engineer', 2500,
                  'Backend & Frontend Dev', 2500,
                  'React + Node.js Builder', 2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              style={{
                color: 'var(--text-muted)',
                fontSize: '16px',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '36px',
              }}
            >
              I build end-to-end web applications — from pixel-perfect frontends to robust backends — leveraging AI tools <strong style={{ color: 'var(--text)' }}>every single day</strong> to ship faster, smarter, and better. ALX Software Engineering graduate, Front-End specialization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <a href="#projects" className="btn-primary-custom">
                View My Work →
              </a>
              <a href="#contact" className="btn-outline-custom">
                Let's Connect
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{ display: 'flex', gap: '20px', marginTop: '40px', alignItems: 'center' }}
            >
              <a href="https://github.com/elishaoigara" target="_blank" rel="noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '20px', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com/in/elishaoigara" target="_blank" rel="noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '20px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#0077b5'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://twitter.com/lambertElisha3" target="_blank" rel="noreferrer"
                style={{ color: 'var(--text-muted)', fontSize: '18px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <i className="fab fa-twitter" />
              </a>
              <div style={{ width: '1px', height: '20px', background: 'var(--border)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>
                elishaoigara50@gmail.com
              </span>
            </motion.div>
          </div>

          {/* Right: profile */}
          <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{ position: 'relative', width: '260px', height: '260px' }}
            >
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-3px',
                borderRadius: '50%',
                background: 'var(--gradient)',
                padding: '3px',
                animation: 'pulse-glow 3s infinite',
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg)' }} />
              </div>
              <img
                src={profilePic}
                alt="Elisha Oigara"
                style={{
                  position: 'absolute',
                  inset: '3px',
                  width: 'calc(100% - 6px)',
                  height: 'calc(100% - 6px)',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  zIndex: 1,
                  animation: 'float 5s ease-in-out infinite',
                }}
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                style={{
                  position: 'absolute', bottom: '-16px', right: '-20px',
                  background: 'var(--bg-3)', border: '1px solid var(--border-bright)',
                  borderRadius: '12px', padding: '10px 14px', zIndex: 2,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', fontWeight: 600 }}>AI-Powered</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text)', fontWeight: 600 }}>Full-Stack Dev</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                style={{
                  position: 'absolute', top: '-12px', left: '-24px',
                  background: 'var(--bg-3)', border: '1px solid var(--border-bright)',
                  borderRadius: '12px', padding: '10px 14px', zIndex: 2,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-3)' }}>Graduated 🎓</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text)', fontWeight: 600 }}>ALX SE · 2025</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="row"
          style={{ marginTop: '80px' }}
        >
          {[
            { num: '2+', label: 'Years Building' },
            { num: '10+', label: 'Projects Shipped' },
            { num: '5+', label: 'AI Tools Daily' },
            { num: '100%', label: 'Commitment' },
          ].map((stat, i) => (
            <div key={i} className="col-6 col-md-3" style={{ padding: '16px', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {stat.num}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
