import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [activeTab, setActiveTab] = useState('AI & Tools');

  const categories = {
    'AI & Tools': {
      color: 'var(--accent)',
      items: [
        { name: 'Claude Code', desc: 'Terminal agentic AI coding — daily driver', level: 95 },
        { name: 'Cursor', desc: 'AI-native IDE with codebase awareness', level: 90 },
        { name: 'GitHub Copilot', desc: 'Inline suggestions & agent workflows', level: 88 },
        { name: 'ChatGPT / GPT-5', desc: 'Architecture, debugging, ideation', level: 90 },
        { name: 'Windsurf', desc: 'VS Code alternative with deep AI features', level: 75 },
        { name: 'Bolt.new / Lovable', desc: 'Rapid prototyping & MVPs', level: 80 },
        { name: 'v0 by Vercel', desc: 'Figma-to-React component generation', level: 78 },
        { name: 'Perplexity AI', desc: 'Real-time research & knowledge retrieval', level: 85 },
        { name: 'Prompt Engineering', desc: 'Systematic prompting for complex tasks', level: 88 },
        { name: 'RAG / AI Integration', desc: 'Building AI-powered app features', level: 72 },
      ],
    },
    'Frontend': {
      color: 'var(--accent-2)',
      items: [
        { name: 'React.js', desc: 'SPA, hooks, state management', level: 92 },
        { name: 'TypeScript', desc: 'Type-safe development', level: 78 },
        { name: 'Tailwind CSS', desc: 'Utility-first styling', level: 90 },
        { name: 'Next.js', desc: 'SSR, SSG, App Router', level: 75 },
        { name: 'Framer Motion', desc: 'Animations & micro-interactions', level: 80 },
        { name: 'Redux / Zustand', desc: 'Global state management', level: 76 },
        { name: 'Bootstrap 5', desc: 'Responsive grid & components', level: 92 },
        { name: 'HTML5 / CSS3', desc: 'Semantic markup, modern CSS', level: 95 },
      ],
    },
    'Backend': {
      color: 'var(--accent-3)',
      items: [
        { name: 'Node.js / Express', desc: 'REST APIs, middleware', level: 80 },
        { name: 'Python', desc: 'Scripting, automation, data processing', level: 78 },
        { name: 'Firebase', desc: 'Auth, Firestore, realtime DB', level: 82 },
        { name: 'PostgreSQL / MySQL', desc: 'Relational DB design & queries', level: 72 },
        { name: 'MongoDB', desc: 'NoSQL document storage', level: 70 },
        { name: 'REST APIs', desc: 'Design, consume, document', level: 85 },
        { name: 'Authentication', desc: 'JWT, OAuth, session management', level: 76 },
        { name: 'C / C++', desc: 'Systems & ALX foundation', level: 70 },
      ],
    },
    'DevOps & Other': {
      color: '#f59e0b',
      items: [
        { name: 'Git / GitHub', desc: 'Version control, PRs, branching', level: 90 },
        { name: 'Vercel / Netlify', desc: 'CI/CD deployment pipelines', level: 85 },
        { name: 'Linux / Bash', desc: 'Shell scripting, server ops (ALX trained)', level: 78 },
        { name: 'Docker (basics)', desc: 'Containerization fundamentals', level: 55 },
        { name: 'VS Code', desc: 'Primary editor', level: 95 },
        { name: 'Figma', desc: 'UI prototyping & design collaboration', level: 72 },
        { name: 'Postman', desc: 'API testing & documentation', level: 80 },
        { name: 'Agile / Scrum', desc: 'Sprint planning, iterative delivery', level: 75 },
      ],
    },
  };

  const tabs = Object.keys(categories);
  const active = categories[activeTab];

  return (
    <section id="skills" style={{ padding: '100px 0', background: 'linear-gradient(180deg, transparent 0%, rgba(13,17,23,0.5) 50%, transparent 100%)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">// Tech Stack</span>
          <h2 className="section-title">Skills &<br /><span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Expertise</span></h2>
          <div className="section-divider" />
        </motion.div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                border: `1px solid ${activeTab === tab ? active.color : 'var(--border)'}`,
                background: activeTab === tab ? `${active.color}15` : 'transparent',
                color: activeTab === tab ? active.color : 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* AI banner */}
        {activeTab === 'AI & Tools' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass"
            style={{
              padding: '16px 24px',
              borderRadius: '12px',
              marginBottom: '32px',
              borderColor: 'rgba(0,212,255,0.2)',
              background: 'rgba(0,212,255,0.04)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '20px' }}>🤖</span>
            <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--accent)' }}>AI is my daily stack.</strong> I use these tools in every project — for code generation, architecture decisions, debugging, testing, and documentation. This is what modern development looks like in 2026.
            </p>
          </motion.div>
        )}

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="row g-3"
        >
          {active.items.map((skill, i) => (
            <div key={i} className="col-md-6 col-lg-4 col-xl-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="glass"
                style={{ padding: '20px', borderRadius: '14px', height: '100%' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--text)' }}>{skill.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: active.color }}>{skill.level}%</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginBottom: '12px', lineHeight: 1.4 }}>{skill.desc}</p>
                <div style={{ height: '3px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.04 + 0.3 }}
                    style={{ height: '100%', background: active.color, borderRadius: '2px' }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
