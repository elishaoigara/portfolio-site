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
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
        /* Strong dark overlay so particles don't wash out text */
        background: 'linear-gradient(135deg, rgba(4,8,12,0.97) 0%, rgba(8,14,22,0.95) 100%)',
      }}
    >
      {/* Ambient colour orbs — very subtle */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 65%)',
        borderRadius: '50%', pointerEvents: 'none',
        transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)`,
        transition: 'transform 1s ease',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '0%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 65%)',
        borderRadius: '50%', pointerEvents: 'none',
        transform: `translate(${mousePos.x * -0.15}px, ${mousePos.y * -0.15}px)`,
        transition: 'transform 1.2s ease',
      }} />

      {/* Faint grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '60px 24px' }}>
        <div className="row align-items-center g-5">

          {/* ── LEFT: text content ── */}
          <div className="col-lg-7">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}
            >
              <span style={{
                width: '9px', height: '9px', borderRadius: '50%',
                background: '#00ff94',
                boxShadow: '0 0 0 3px rgba(0,255,148,0.25)',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: '#00ff94',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                Available for Work · Nairobi, Kenya
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(52px, 8vw, 86px)',
                fontWeight: 800,
                lineHeight: 0.95,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: '#f0f6ff', display: 'block' }}>Elisha</span>
              <span style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
              }}>
                Oigara
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{ marginBottom: '24px', minHeight: '36px' }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.8vw, 26px)',
                fontWeight: 600,
                color: '#8aa4c8',
              }}>
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2500,
                    'AI-Powered Engineer', 2500,
                    'Backend & Frontend Dev', 2500,
                    'React + Node.js Builder', 2500,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                color: '#7a8fa8',
                fontSize: '16px',
                lineHeight: 1.75,
                maxWidth: '500px',
                marginBottom: '36px',
              }}
            >
              I build end-to-end web applications — from pixel-perfect frontends to
              robust backends — leveraging AI tools{' '}
              <strong style={{ color: '#cde0f5', fontWeight: 600 }}>every single day</strong>{' '}
              to ship faster, smarter, and better. ALX Software Engineering graduate.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
            >
              <a
                href="#projects"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 30px',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%)',
                  color: '#fff', fontFamily: 'var(--font-body)',
                  fontWeight: 700, fontSize: '15px', borderRadius: '10px',
                  textDecoration: 'none', border: 'none',
                  boxShadow: '0 4px 24px rgba(0,212,255,0.25)',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                View My Work →
              </a>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 30px',
                  background: 'transparent',
                  color: '#cde0f5', fontFamily: 'var(--font-body)',
                  fontWeight: 600, fontSize: '15px', borderRadius: '10px',
                  textDecoration: 'none',
                  border: '1px solid rgba(205,224,245,0.25)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00d4ff'; e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(205,224,245,0.25)'; e.currentTarget.style.color = '#cde0f5'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Let&apos;s Connect
              </a>
            </motion.div>

            {/* Socials row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              style={{
                display: 'flex', gap: '16px', marginTop: '40px',
                alignItems: 'center', flexWrap: 'wrap',
              }}
            >
              {[
                { href: 'https://github.com/elishaoigara', icon: 'fab fa-github' },
                { href: 'https://linkedin.com/in/elishaoigara', icon: 'fab fa-linkedin' },
                { href: 'https://twitter.com/lambertElisha3', icon: 'fab fa-twitter' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#4a6680', fontSize: '20px',
                    transition: 'color 0.2s, transform 0.2s',
                    display: 'flex', alignItems: 'center',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#4a6680'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <i className={s.icon} />
                </a>
              ))}
              <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#3a5268' }}>
                elishaoigara50@gmail.com
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: profile photo ── */}
          <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25 }}
              style={{ position: 'relative', width: '280px', height: '280px' }}
            >
              {/* Spinning gradient ring */}
              <div style={{
                position: 'absolute', inset: '-4px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #00d4ff, #7b61ff, #00ff94, #00d4ff)',
                padding: '4px',
                animation: 'spin-slow 8s linear infinite',
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#080c10' }} />
              </div>

              {/* Photo */}
              <img
                src={profilePic}
                alt="Elisha Oigara"
                style={{
                  position: 'absolute', inset: '4px',
                  width: 'calc(100% - 8px)',
                  height: 'calc(100% - 8px)',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  zIndex: 1,
                }}
              />

              {/* Badge: bottom-right */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute', bottom: '-10px', right: '-28px',
                  background: 'rgba(13,17,23,0.95)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  borderRadius: '12px', padding: '10px 16px', zIndex: 3,
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#00d4ff', fontWeight: 600, letterSpacing: '0.1em' }}>AI-POWERED</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#f0f6ff', fontWeight: 700, marginTop: '2px' }}>Full-Stack Dev</div>
              </motion.div>

              {/* Badge: top-left */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
                style={{
                  position: 'absolute', top: '-10px', left: '-32px',
                  background: 'rgba(13,17,23,0.95)',
                  border: '1px solid rgba(0,255,148,0.3)',
                  borderRadius: '12px', padding: '10px 16px', zIndex: 3,
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#00ff94', letterSpacing: '0.1em' }}>GRADUATED 🎓</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#f0f6ff', fontWeight: 700, marginTop: '2px' }}>ALX SE · 2025</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {[
            { num: '2+', label: 'Years Building' },
            { num: '10+', label: 'Projects Shipped' },
            { num: '5+', label: 'AI Tools Daily' },
            { num: '100%', label: 'Commitment' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '24px 16px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3vw, 38px)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
              }}>
                {stat.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: '#4a6680',
                marginTop: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default Hero;