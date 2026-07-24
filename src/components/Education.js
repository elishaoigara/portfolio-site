import React from 'react';

const ITEMS = [
  {
    institution: 'University of the People',
    degree: 'B.Sc. Computer Science',
    period: '2024 – Dec 2027',
    status: 'In progress',
    desc: 'Online, US-accredited. Algorithms, data structures, software engineering, operating systems, databases, AI fundamentals.',
  },
  {
    institution: 'Mount Kenya University',
    degree: 'B.Sc. Business Information Technology',
    period: '2024 – Aug 2028',
    status: 'In progress',
    desc: 'Business strategy paired with software systems — project management, enterprise systems, business analysis.',
  },
  {
    institution: 'ALX Africa',
    degree: 'Software Engineering — Front-End Specialisation',
    period: 'May 2024 – Jul 2025',
    status: 'Graduated',
    desc: 'Intensive 12-month programme: C, Python, JavaScript, React, Node.js, Linux, shell scripting.',
    score: '72.01% overall',
    certUrl: 'https://savanna.alxafrica.com/certificates/PscX8Cf7FN',
  },
];

export default function Education() {
  return (
    <section id="education" className="section section--paper">
      <div className="container">
        <span className="eyebrow">Education</span>
        <h2 className="section-title" data-aos="fade-up">
          Academic <em>background</em>
        </h2>

        <div className="edu__list">
          {ITEMS.map((item, i) => (
            <div className="edu__item" key={item.institution} data-aos="fade-up" data-aos-delay={i * 70}>
              <div className="edu__item-top">
                <h3>{item.institution}</h3>
                <span className={`edu__status ${item.status === 'Graduated' ? 'is-done' : ''}`}>
                  {item.status}
                </span>
              </div>
              <p className="edu__degree">{item.degree}</p>
              <p className="edu__period">{item.period}</p>
              <p className="edu__desc">{item.desc}</p>
              {item.score && <p className="edu__score">Score: {item.score}</p>}
              {item.certUrl && (
                <a href={item.certUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" style={{ marginTop: 10 }}>
                  View certificate ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu__list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .edu__item {
          padding: 30px 0;
          border-bottom: 1px solid var(--border-soft);
        }
        .edu__item:first-child { border-top: 1px solid var(--border-soft); }
        .edu__item-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .edu__item-top h3 { font-size: 21px; }
        .edu__status {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
        }
        .edu__status.is-done { color: var(--forest); }
        .edu__degree { color: var(--terracotta); font-weight: 600; margin: 6px 0 2px; }
        .edu__period { font-family: var(--font-mono); font-size: 13px; color: var(--muted); margin: 0 0 12px; }
        .edu__desc { max-width: 620px; line-height: 1.65; margin: 0; }
        .edu__score { font-family: var(--font-mono); font-size: 13px; color: var(--forest); margin: 10px 0 0; }
      `}</style>
    </section>
  );
}
