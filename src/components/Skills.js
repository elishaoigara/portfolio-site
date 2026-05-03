import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [activeTab, setActiveTab] = useState('AI & Tools');
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

  const categories = {
    'AI & Tools': {
      color: '#00d4ff',
      items: [
        { name: 'Claude Code', desc: 'Terminal agentic AI coding', level: 95 },
        { name: 'Cursor', desc: 'AI-native IDE', level: 90 },
        { name: 'GitHub Copilot', desc: 'Inline suggestions', level: 88 },
        { name: 'ChatGPT / GPT-5', desc: 'Architecture & debugging', level: 90 },
        { name: 'Windsurf', desc: 'AI-first editor', level: 75 },
        { name: 'Bolt.new', desc: 'Rapid prototyping', level: 80 },
        { name: 'v0', desc: 'UI generation', level: 78 },
        { name: 'Perplexity', desc: 'Research AI', level: 85 },
      ],
    },
    Frontend: {
      color: '#7b61ff',
      items: [
        { name: 'React.js', desc: 'SPA & hooks', level: 92 },
        { name: 'TypeScript', desc: 'Typed dev', level: 78 },
        { name: 'Tailwind', desc: 'Utility CSS', level: 90 },
        { name: 'Next.js', desc: 'SSR/SSG', level: 75 },
        { name: 'Framer Motion', desc: 'Animations', level: 80 },
      ],
    },
    Backend: {
      color: '#00ff94',
      items: [
        { name: 'Node.js', desc: 'APIs', level: 80 },
        { name: 'Python', desc: 'Automation', level: 78 },
        { name: 'PostgreSQL', desc: 'Relational DB', level: 72 },
        { name: 'MongoDB', desc: 'NoSQL', level: 70 },
      ],
    },
  };

  const tabs = Object.keys(categories);
  const active = categories[activeTab];

  return (
    <section
      id="skills"
      style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(135deg, rgba(5,8,12,0.97), rgba(8,14,22,0.95))',
      }}
    >
      {/* Ambient orb background effect */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.06), transparent 65%)',
          borderRadius: '50%',
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
        }}
      />

      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <span className="section-label">// Tech Stack</span>
          <h2 className="section-title">
            Skills &<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: `1px solid ${
                  activeTab === tab ? active.color : 'rgba(255,255,255,0.1)'
                }`,
                background:
                  activeTab === tab ? `${active.color}20` : 'rgba(255,255,255,0.03)',
                color: activeTab === tab ? active.color : '#7a8fa8',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="row g-4">
          {active.items.map((skill, i) => (
            <div key={i} className="col-md-6 col-lg-4 col-xl-3">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 120 }}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: 'rgba(13,17,23,0.9)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(14px)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glow effect */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at top right, ${active.color}20, transparent 60%)`,
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#f0f6ff', fontWeight: 600 }}>
                    {skill.name}
                  </span>
                  <span style={{ color: active.color, fontSize: '12px' }}>
                    {skill.level}%
                  </span>
                </div>

                <p style={{ fontSize: '12px', color: '#7a8fa8', marginTop: '6px' }}>
                  {skill.desc}
                </p>

                {/* Progress bar */}
                <div
                  style={{
                    height: '4px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '2px',
                    marginTop: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    style={{
                      height: '100%',
                      background: active.color,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;