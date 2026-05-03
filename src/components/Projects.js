import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = {
  cyan:   '#00d4ff',
  purple: '#7b61ff',
  green:  '#00ff94',
  text:   '#dde6f0',
  text2:  '#8fa3b8',
  text3:  '#4d6478',
  card:   '#0f1520',
  border: 'rgba(255,255,255,0.07)',
};

const projects = [
  {
    title: 'ORA — Personal AI Operating System',
    description:
      "A full personal AI assistant and operating system built from scratch. ORA runs a FastAPI Python backend on Render with a React/Vite frontend on Vercel. Powered by Groq's LLaMA 3.3 70B, ChromaDB vector memory for RAG, and deep integrations with Google Calendar, Gmail, Drive, GitHub, weather, and RSS feeds.",
    tech: ['React', 'Vite', 'FastAPI', 'Python', 'Groq LLaMA 70B', 'ChromaDB', 'RAG', 'Google APIs', 'Render', 'Vercel'],
    github: 'https://github.com/elishaoigara/ORA',
    demo:   'https://ora-tan-three.vercel.app/',
    category: 'AI',
    featured: true,
    emoji: '🤖',
    highlights: [
      { icon: '🧠', text: 'LLaMA 3.3 70B via Groq API' },
      { icon: '💾', text: 'ChromaDB vector memory + RAG' },
      { icon: '📅', text: 'Google Calendar · Gmail · Drive' },
      { icon: '🎙️', text: 'Voice input + Telegram bot' },
      { icon: '💸', text: 'M-Pesa spend tracking' },
      { icon: '🎯', text: 'Goals, patterns & alerts' },
      { icon: '📄', text: 'Document ingestion pipeline' },
      { icon: '💻', text: 'Code agent + Research agent' },
    ],
  },
  {
    title: 'FinLog – Expense Tracker',
    description:
      'A modern personal finance app with income/expense tracking, budget categories, and real-time visual charts. Firebase auth with realtime sync.',
    tech: ['React', 'Bootstrap', 'Chart.js', 'Firebase'],
    github: 'https://github.com/elishaoigara/finlog',
    demo:   'https://finlog-three.vercel.app/',
    category: 'Full-Stack',
    emoji: '💰',
    accentColor: COLORS.green,
  },
  {
    title: 'SkyCast – Weather App',
    description:
      'Real-time weather app with city search, geolocation, unit toggle, and dynamic backgrounds via OpenWeatherMap API.',
    tech: ['React', 'Bootstrap', 'OpenWeatherMap API'],
    github: 'https://github.com/elishaoigara/SkyCast',
    demo:   'https://sky-cast-pied-one.vercel.app/',
    category: 'Frontend',
    emoji: '🌤️',
    accentColor: COLORS.cyan,
  },
  {
    title: 'Portfolio Website',
    description:
      'This portfolio — React, Framer Motion, tsParticles, smooth animations. Fully responsive, deployed on Vercel with CI/CD.',
    tech: ['React', 'Framer Motion', 'Bootstrap', 'Vercel'],
    github: 'https://github.com/elishaoigara/portfolio-site',
    demo:   'https://elisha-portfolio.vercel.app/',
    category: 'Frontend',
    emoji: '🌐',
    accentColor: COLORS.purple,
  },
];

const filters = ['All', 'AI', 'Full-Stack', 'Frontend'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-label">{'// Projects'}</span>
          <h2 className="section-title">
            Things I&apos;ve<br />
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7b61ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Built
            </span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '7px 20px',
                borderRadius: '100px',
                border: `1px solid ${filter === f ? COLORS.cyan : 'rgba(255,255,255,0.1)'}`,
                background: filter === f ? 'rgba(0,212,255,0.1)' : 'transparent',
                color: filter === f ? COLORS.cyan : COLORS.text2,
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 13,
                cursor: 'pointer',
                fontWeight: filter === f ? 600 : 400,
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="row g-4"
          >
            {filtered.map((project, i) => (
              <div key={project.title} className={project.featured ? 'col-12' : 'col-md-6 col-lg-4'}>
                {project.featured ? (
                  <FeaturedCard project={project} i={i} />
                ) : (
                  <RegularCard project={project} i={i} />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 64 }}
        >
          <p style={{ color: COLORS.text2, marginBottom: 16, fontSize: 15 }}>
            More projects on GitHub →
          </p>
          <a
            href="https://github.com/elishaoigara"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-custom"
          >
            <i className="fab fa-github" /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ── FEATURED CARD ─────────────────────────── */
function FeaturedCard({ project, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      style={{
        borderRadius: 20,
        border: '1px solid rgba(0,212,255,0.22)',
        background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(123,97,255,0.04) 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 3, background: 'linear-gradient(135deg,#00d4ff,#7b61ff)' }} />

      <div style={{ padding: '36px' }}>
        {/* Badges row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 20 }}>
          <span style={{ fontSize: 28 }}>🤖</span>
          <span style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '4px 12px',
            borderRadius: 100, background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.3)', color: COLORS.cyan,
          }}>⭐ Featured Project</span>
          <span style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '4px 12px',
            borderRadius: 100, background: 'rgba(0,255,148,0.1)', border: '1px solid rgba(0,255,148,0.25)', color: COLORS.green,
          }}>🟢 Live</span>
          <span style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '4px 12px',
            borderRadius: 100, background: 'rgba(123,97,255,0.1)', border: '1px solid rgba(123,97,255,0.25)', color: COLORS.purple,
          }}>AI · Full-Stack</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 800,
          fontSize: 'clamp(22px,3vw,32px)', marginBottom: 12,
          background: 'linear-gradient(135deg,#00d4ff,#7b61ff)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ color: COLORS.text2, fontSize: 14, lineHeight: 1.8, marginBottom: 28, maxWidth: 720 }}>
          {project.description}
        </p>

        {/* Two-column layout: highlights + tech */}
        <div className="row g-4" style={{ marginBottom: 28 }}>
          {/* Highlights */}
          <div className="col-lg-7">
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: COLORS.text3, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>
              Key Features
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {project.highlights.map((h, j) => (
                <div key={j} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px',
                  background: 'rgba(0,212,255,0.04)',
                  border: '1px solid rgba(0,212,255,0.1)',
                  borderRadius: 10,
                }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{h.icon}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: COLORS.text2, lineHeight: 1.4 }}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="col-lg-5">
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: COLORS.text3, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {project.tech.map((t, j) => (
                <span key={j} className="tag" style={{ fontSize: 11 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline-custom" style={{ padding: '10px 22px', fontSize: 14 }}>
            <i className="fab fa-github" /> Source Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary-custom" style={{ padding: '10px 22px', fontSize: 14 }}>
            Try ORA Live ↗
          </a>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: COLORS.text3, marginLeft: 4 }}>
            ⚡ ~30s cold start on free tier
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── REGULAR CARD ──────────────────────────── */
function RegularCard({ project, i }) {
  const accent = project.accentColor || COLORS.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      style={{
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,0.07)',
        background: COLORS.card,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.25s',
        cursor: 'default',
      }}
      whileHover={{ y: -5 }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${accent}50`}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      {/* Coloured top accent line */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Icon row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: `${accent}15`,
            border: `1px solid ${accent}25`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22,
          }}>
            {project.emoji}
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '3px 10px',
              borderRadius: 100,
              border: `1px solid ${COLORS.green}35`,
              color: COLORS.green,
              background: `${COLORS.green}10`,
            }}>Live</span>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '3px 10px',
              borderRadius: 100,
              border: `1px solid ${COLORS.purple}35`,
              color: COLORS.purple,
              background: `${COLORS.purple}10`,
            }}>{project.category}</span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 700,
          fontSize: 17, marginBottom: 10, color: COLORS.text, lineHeight: 1.3,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ color: COLORS.text2, fontSize: 13, lineHeight: 1.7, flex: 1, marginBottom: 18 }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
          {project.tech.map((t, j) => (
            <span key={j} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
              padding: '3px 9px', borderRadius: 100,
              background: `${accent}0d`,
              border: `1px solid ${accent}20`,
              color: accent,
            }}>{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '9px 14px', borderRadius: 9, fontSize: 13, fontWeight: 600,
              fontFamily: "'DM Sans',sans-serif",
              border: '1px solid rgba(255,255,255,0.12)', color: COLORS.text,
              background: 'transparent', textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = COLORS.text; }}
          >
            <i className="fab fa-github" /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '9px 14px', borderRadius: 9, fontSize: 13, fontWeight: 700,
              fontFamily: "'DM Sans',sans-serif",
              background: `linear-gradient(135deg, ${accent}, #7b61ff)`,
              color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s',
              boxShadow: `0 4px 16px ${accent}25`,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}