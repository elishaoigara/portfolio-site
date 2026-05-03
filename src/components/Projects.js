import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'ORA — Personal AI Operating System',
      description:
        'A full personal AI assistant and operating system I built from scratch. ORA runs a FastAPI Python backend on Render with a React/Vite frontend deployed on Vercel. It uses Groq\'s LLaMA 3.3 70B as its brain, ChromaDB vector memory for RAG, and connects to Google Calendar, Gmail, Drive, GitHub, weather, and RSS feeds. Features include voice input, a Telegram bot, M-Pesa spend tracking, a goals engine, pattern recognition, proactive alerts, a knowledge base with document ingestion, and a code agent — all accessible through 10 purpose-built pages.',
      tech: ['React', 'Vite', 'FastAPI', 'Python', 'Groq LLaMA 70B', 'ChromaDB', 'RAG', 'Google APIs', 'Render', 'Vercel'],
      github: 'https://github.com/elishaoigara/ORA',
      demo: 'https://ora-tan-three.vercel.app/',
      category: 'AI',
      tag: 'Live 🤖',
      tagColor: 'var(--accent)',
      featured: true,
      emoji: '🤖',
      highlights: [
        'LLaMA 3.3 70B via Groq API',
        'ChromaDB vector memory + RAG',
        'Google Calendar · Gmail · Drive',
        'Voice input + Telegram bot',
        'M-Pesa spend tracking',
        'Goals, patterns & proactive alerts',
        'Document ingestion pipeline',
        'Code agent + Research agent',
      ],
    },
    {
      title: 'FinLog – Expense Tracker',
      description:
        'A modern personal finance app with income/expense tracking, budget categories, and real-time visual charts. Built with Firebase auth and realtime sync.',
      tech: ['React', 'Bootstrap', 'Chart.js', 'Firebase'],
      github: 'https://github.com/elishaoigara/finlog',
      demo: 'https://finlog-three.vercel.app/',
      category: 'Full-Stack',
      tag: 'Live',
      tagColor: 'var(--accent-3)',
      emoji: '💰',
    },
    {
      title: 'SkyCast – Weather App',
      description:
        'Real-time weather application fetching data from OpenWeatherMap API with city search, geolocation, unit toggle, and dynamic backgrounds.',
      tech: ['React', 'Bootstrap', 'OpenWeatherMap API'],
      github: 'https://github.com/elishaoigara/SkyCast',
      demo: 'https://sky-cast-pied-one.vercel.app/',
      category: 'Frontend',
      tag: 'Live',
      tagColor: 'var(--accent-3)',
      emoji: '🌤️',
    },
    {
      title: 'Portfolio Website',
      description:
        'This portfolio — built with React, Framer Motion, particles, and smooth animations. Fully responsive, deployed on Vercel with CI/CD.',
      tech: ['React', 'Framer Motion', 'Bootstrap', 'Vercel'],
      github: 'https://github.com/elishaoigara/portfolio-site',
      demo: 'https://elisha-portfolio.vercel.app/',
      category: 'Frontend',
      tag: 'Live',
      tagColor: 'var(--accent-3)',
      emoji: '🌐',
    },
  ];

  const filters = ['All', 'AI', 'Full-Stack', 'Frontend'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">// Projects</span>
          <h2 className="section-title">
            Things I've<br />
            <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Built
            </span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '7px 18px',
                borderRadius: '100px',
                border: `1px solid ${filter === f ? 'var(--accent)' : 'var(--border)'}`,
                background: filter === f ? 'rgba(0,212,255,0.1)' : 'transparent',
                color: filter === f ? 'var(--accent)' : 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map((project, i) => (
            <div key={i} className={project.featured ? 'col-12' : 'col-md-6 col-lg-4'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass"
                style={{
                  padding: project.featured ? '36px' : '28px',
                  borderRadius: '20px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  border: project.featured
                    ? '1px solid rgba(0,212,255,0.25)'
                    : '1px solid var(--border)',
                  background: project.featured
                    ? 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(123,97,255,0.04) 100%)'
                    : 'var(--surface)',
                }}
              >
                {/* Gradient top line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: project.featured
                    ? 'var(--gradient)'
                    : 'rgba(255,255,255,0.05)',
                }} />

                {project.featured ? (
                  /* ── FEATURED ORA CARD ── */
                  <>
                    {/* Header row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
                      <span style={{ fontSize: '28px' }}>🤖</span>
                      <span className="tag" style={{ fontSize: '11px', background: 'rgba(0,212,255,0.12)', borderColor: 'rgba(0,212,255,0.3)' }}>
                        ⭐ Featured Project
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '3px 10px',
                        borderRadius: '100px', border: '1px solid rgba(0,212,255,0.3)',
                        color: 'var(--accent)', background: 'rgba(0,212,255,0.08)',
                      }}>Live 🟢</span>
                      <span className="tag tag-purple">AI · Full-Stack</span>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800,
                      fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: '12px',
                      background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                      {project.title}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.75, marginBottom: '24px', maxWidth: '700px' }}>
                      {project.description}
                    </p>

                    {/* Feature highlights grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                      gap: '8px',
                      marginBottom: '24px',
                    }}>
                      {project.highlights.map((h, j) => (
                        <div key={j} style={{
                          display: 'flex', alignItems: 'center', gap: '8px',
                          padding: '8px 12px',
                          background: 'rgba(0,212,255,0.04)',
                          border: '1px solid rgba(0,212,255,0.1)',
                          borderRadius: '8px',
                          fontSize: '12px',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}>
                          <span style={{ color: 'var(--accent)', fontSize: '10px' }}>▸</span>
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
                      {project.tech.map((t, j) => (
                        <span key={j} className="tag" style={{ fontSize: '11px' }}>{t}</span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline-custom" style={{ padding: '10px 22px', fontSize: '14px' }}>
                        <i className="fab fa-github" /> Source Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary-custom" style={{ padding: '10px 22px', fontSize: '14px' }}>
                        Try ORA Live ↗
                      </a>
                    </div>

                    {/* Cold start note */}
                    <p style={{ marginTop: '14px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>
                      ⚡ Free tier on Render — cold start may take ~30s on first load
                    </p>
                  </>
                ) : (
                  /* ── REGULAR CARD ── */
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '42px', height: '42px', borderRadius: '10px',
                        background: 'rgba(0,212,255,0.07)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', fontSize: '20px',
                      }}>
                        {project.emoji}
                      </div>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '3px 10px',
                          borderRadius: '100px', border: `1px solid ${project.tagColor}30`,
                          color: project.tagColor, background: `${project.tagColor}10`,
                        }}>{project.tag}</span>
                        <span className="tag tag-purple">{project.category}</span>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', marginBottom: '10px', color: 'var(--text)' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, flex: 1, marginBottom: '20px' }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {project.tech.map((t, j) => (
                        <span key={j} className="tag" style={{ fontSize: '11px' }}>{t}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline-custom" style={{ padding: '8px 16px', fontSize: '13px' }}>
                        <i className="fab fa-github" /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary-custom" style={{ padding: '8px 16px', fontSize: '13px' }}>
                        Live Demo ↗
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>More projects on GitHub →</p>
          <a href="https://github.com/elishaoigara" target="_blank" rel="noreferrer" className="btn-outline-custom">
            <i className="fab fa-github" /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;