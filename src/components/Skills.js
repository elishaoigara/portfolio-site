import React, { useState } from 'react';

const CATS = {
  'AI & Tools': [
    ['Claude Code', 'Terminal agentic coding — daily driver'],
    ['Cursor', 'AI-native IDE with codebase awareness'],
    ['GitHub Copilot', 'Inline suggestions & agent workflows'],
    ['ChatGPT / GPT-5', 'Architecture & debugging'],
    ['DeepSeek', 'Cost-efficient reasoning & code generation'],
    ['Kimi K2', 'Long-context analysis & agentic tasks'],
  ],
  Frontend: [
    ['React.js', 'SPA, hooks, state management'],
    ['TypeScript', 'Type-safe development'],
    ['Tailwind CSS', 'Utility-first styling'],
    ['Next.js', 'SSR, SSG, App Router'],
    ['Bootstrap 5', 'Responsive grids'],
  ],
  Backend: [
    ['Node.js / Express', 'REST APIs, middleware'],
    ['Python / FastAPI', 'AI apps & automation'],
    ['Firebase', 'Auth, Firestore, realtime DB'],
    ['PostgreSQL', 'Relational DB & queries'],
    ['MongoDB', 'NoSQL storage'],
  ],
  Tooling: [
    ['Git / GitHub', 'Version control, CI/CD'],
    ['Vercel / Netlify', 'Deployment pipelines'],
    ['Linux / Bash', 'Shell scripting, servers'],
    ['Postman', 'API testing & docs'],
    ['Figma', 'UI prototyping'],
  ],
};

export default function Skills() {
  const [tab, setTab] = useState('AI & Tools');

  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="eyebrow">Toolkit</span>
        <h2 className="section-title" data-aos="fade-up">
          What I <em>reach for</em>
        </h2>
        <p className="section-lede" data-aos="fade-up" data-aos-delay="60">
          I build with a full stable of AI models — not just one — picking
          whichever is sharpest for the job, on top of a fairly standard
          modern web stack.
        </p>

        <div
          className="skills__tabs"
          data-aos="fade-up"
          data-aos-delay="100"
          role="tablist"
          aria-label="Skills categories"
        >
          {Object.keys(CATS).map(t => {
            const tabId = `skills-tab-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            const panelId = `${tabId}-panel`;
            const isActive = t === tab;

            return (
              <button
                key={t}
                id={tabId}
                className={`skills__tab ${isActive ? 'is-active' : ''}`}
                onClick={() => setTab(t)}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div
          className="skills__grid"
          id={`skills-tab-${tab.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-panel`}
          role="tabpanel"
          aria-labelledby={`skills-tab-${tab.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          tabIndex="0"
        >
          {CATS[tab].map(([name, desc]) => (
            <div className="skills__item" key={name}>
              <div className="skills__item-name">{name}</div>
              <div className="skills__item-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          border-bottom: 1px solid var(--border-soft);
        }
        .skills__tab {
          font-family: var(--font-mono);
          font-size: 13.5px;
          padding: 10px 4px;
          margin-right: 22px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--muted);
          cursor: pointer;
        }
        .skills__tab.is-active { color: var(--ink); border-bottom-color: var(--terracotta); }

        .skills__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1px;
          background: var(--border-soft);
          border: 1px solid var(--border-soft);
        }
        .skills__item {
          background: var(--paper);
          padding: 20px;
        }
        .skills__item-name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 17px;
          margin-bottom: 6px;
        }
        .skills__item-desc {
          font-size: 13.5px;
          color: var(--muted);
        }
      `}</style>
    </section>
  );
}