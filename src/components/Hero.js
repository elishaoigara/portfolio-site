import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/elisha.jpeg';

const SOCIALS = [
  { href: 'https://github.com/elishaoigara', label: 'GitHub' },
  { href: 'https://linkedin.com/in/elishaoigara', label: 'LinkedIn' },
  { href: 'mailto:elishaoigara50@gmail.com', label: 'Email' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hand-note"
          >
            available for full-time roles →
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="hero__title"
          >
            Elisha Oigara builds
            <br />
            <em>full-stack software</em>,
            <br />
            end to end.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero__sub"
          >
            ALX Software Engineering graduate based in Nairobi, Kenya.
            I design the database, build the API, and ship the interface —
            using AI tools daily to move faster without cutting corners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero__ctas"
          >
            <a href="#projects" className="btn btn--primary">View my work</a>
            <a href="#contact" className="btn btn--ghost">Request my résumé</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero__socials"
          >
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hero__portrait"
        >
          <img src={profilePic} alt="Elisha Oigara" />
          <span className="hero__badge">ALX SE · 2025 grad</span>
        </motion.div>
      </div>

      <style>{`
        .hero {
          padding: 128px 0 60px;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }
        .hero__title {
          font-size: clamp(38px, 5.6vw, 68px);
          margin: 14px 0 22px;
        }
        .hero__sub {
          color: var(--muted);
          font-size: 18px;
          line-height: 1.65;
          max-width: 480px;
          margin: 0 0 32px;
        }
        .hero__ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }
        .hero__socials {
          display: flex;
          gap: 20px;
        }
        .hero__socials a {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--ink);
          border-bottom: 1px solid var(--border);
        }
        .hero__socials a:hover { color: var(--terracotta); border-color: var(--terracotta); }

        .hero__portrait {
          position: relative;
          justify-self: center;
        }
        .hero__portrait img {
          width: min(320px, 100%);
          aspect-ratio: 4/5;
          object-fit: cover;
          object-position: top center;
          border-radius: 4px;
          filter: sepia(0.18) contrast(1.02);
          border: 1px solid var(--border);
        }
        .hero__badge {
          position: absolute;
          bottom: -14px;
          left: -14px;
          background: var(--ink);
          color: var(--cream);
          font-family: var(--font-mono);
          font-size: 11.5px;
          padding: 8px 14px;
          border-radius: 3px;
        }

        @media (max-width: 860px) {
          .hero { padding: 110px 0 40px; text-align: left; }
          .hero__grid { grid-template-columns: 1fr; gap: 40px; }
          .hero__portrait { justify-self: start; }
        }
      `}</style>
    </section>
  );
}
