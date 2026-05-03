import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const items = [
    {
      institution: 'University of the People',
      degree: 'Bachelor of Science — Computer Science',
      period: '2024 – Expected Dec 2027',
      status: 'In Progress',
      statusColor: 'var(--accent)',
      description: 'Online US-accredited university. Covering algorithms, data structures, software engineering, OS, databases, and AI fundamentals.',
      icon: '🎓',
    },
    {
      institution: 'Mount Kenya University',
      degree: 'Bachelor of Science — Business Information Technology',
      period: '2024 – Expected Aug 2027',
      status: 'In Progress',
      statusColor: 'var(--accent)',
      description: 'Integrating business strategy with software systems — covering project management, enterprise systems, business analysis, and information systems architecture.',
      icon: '🏛️',
    },
    {
      institution: 'ALX Africa',
      degree: 'Software Engineering Programme',
      period: 'May 2024 – July 2025',
      status: 'Graduated ✓',
      statusColor: 'var(--accent-3)',
      description: 'Intensive 12-month programme covering C, Python, JavaScript, React, Node.js, Linux, Shell scripting, and software engineering principles. Specialization in Front-End.',
      score: '72.01% overall · Month 1 peak: 120.43%',
      certUrl: 'https://savanna.alxafrica.com/certificates/PscX8Cf7FN',
      icon: '🚀',
    },
  ];

  return (
    <section id="education" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">{'// Education'}</span>
          <h2 className="section-title">Academic<br /><span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Background</span></h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Line */}
          <div style={{
            position: 'absolute', left: '24px', top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(180deg, var(--accent) 0%, var(--accent-2) 50%, transparent 100%)',
          }} className="d-none d-md-block" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}
              >
                {/* Dot */}
                <div style={{
                  flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--bg-2)', border: '2px solid var(--border-bright)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', zIndex: 1,
                }} className="d-none d-md-flex">
                  {item.icon}
                </div>

                <div className="glass" style={{ flex: 1, padding: '28px', borderRadius: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text)', margin: 0 }}>
                      {item.institution}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '3px 10px',
                        borderRadius: '100px', border: `1px solid ${item.statusColor}30`,
                        color: item.statusColor, background: `${item.statusColor}10`,
                      }}>{item.status}</span>
                    </div>
                  </div>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{item.degree}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', marginBottom: '12px' }}>{item.period}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, marginBottom: item.score ? '12px' : 0 }}>{item.description}</p>
                  {item.score && (
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-3)', marginBottom: item.certUrl ? '12px' : 0 }}>
                      📊 {item.score}
                    </div>
                  )}
                  {item.certUrl && (
                    <a href={item.certUrl} target="_blank" rel="noreferrer" className="btn-outline-custom" style={{ padding: '7px 16px', fontSize: '12px', marginTop: '8px' }}>
                      View Certificate ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;