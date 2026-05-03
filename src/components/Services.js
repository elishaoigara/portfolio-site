import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: '🧱',
      title: 'Full-Stack Web Development',
      description: 'End-to-end applications — React/Next.js frontend + Node.js/Express backend, database design, auth, and deployment.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Firebase'],
      price: 'From $300/project',
      highlight: true,
    },
    {
      icon: '🤖',
      title: 'AI-Integrated Applications',
      description: 'Integrate LLM APIs (OpenAI, Anthropic) into your product — chatbots, content generation, smart automation, and RAG pipelines.',
      tags: ['OpenAI API', 'Claude API', 'LangChain', 'Supabase'],
      price: 'From $400/project',
      highlight: true,
    },
    {
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'Pixel-perfect, responsive UIs using React/Next.js with Tailwind, animations, and performance optimization.',
      tags: ['React', 'Tailwind', 'TypeScript', 'Framer Motion'],
      price: 'From $150/project',
    },
    {
      icon: '🔌',
      title: 'REST API Development',
      description: 'Design and build clean, documented REST APIs with authentication, validation, and database integration.',
      tags: ['Node.js', 'Express', 'JWT', 'Swagger'],
      price: 'From $200/project',
    },
    {
      icon: '🚀',
      title: 'Web App Deployment',
      description: 'Full deployment pipeline — CI/CD, custom domain, SSL, env setup, monitoring on Vercel, Netlify, or Railway.',
      tags: ['Vercel', 'Netlify', 'Railway', 'GitHub Actions'],
      price: 'From $80/app',
    },
    {
      icon: '📊',
      title: 'Presentations & Design',
      description: 'Professional pitch decks, business proposals, and company profiles designed in Figma, Canva, or PowerPoint.',
      tags: ['Figma', 'Canva', 'PowerPoint'],
      price: '$8/slide',
    },
    {
      icon: '✍️',
      title: 'Technical Writing',
      description: 'API documentation, technical blog posts, README files, research reports, and academic writing assistance.',
      tags: ['Documentation', 'Research', 'Content'],
      price: 'From $10/page',
    },
  ];

  return (
    <section id="services" style={{ padding: '100px 0', background: 'linear-gradient(180deg, transparent 0%, rgba(13,17,23,0.5) 50%, transparent 100%)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="section-label">// Services</span>
          <h2 className="section-title">What I Can<br /><span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Build for You</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className={s.highlight ? 'col-lg-6' : 'col-lg-4'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass"
                style={{
                  padding: '28px',
                  borderRadius: '20px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: s.highlight ? '1px solid rgba(0,212,255,0.2)' : '1px solid var(--border)',
                  background: s.highlight ? 'rgba(0,212,255,0.03)' : 'var(--surface)',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{s.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text)', margin: 0 }}>{s.title}</h3>
                  {s.highlight && <span className="tag" style={{ marginLeft: '8px', flexShrink: 0 }}>Popular</span>}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, flex: 1, marginBottom: '16px' }}>{s.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {s.tags.map((t, j) => <span key={j} className="tag tag-purple" style={{ fontSize: '11px' }}>{t}</span>)}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>{s.price}</div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '16px' }}>
            Have a project in mind? Let's discuss scope and pricing.
          </p>
          <a href="#contact" className="btn-primary-custom" style={{ fontSize: '15px', padding: '14px 36px' }}>
            Start a Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
