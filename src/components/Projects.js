import React, { useMemo, useState } from 'react';
import projects from '../projectsData';

const CATS = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter(p => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="eyebrow">Selected work</span>
        <h2 className="section-title" data-aos="fade-up">
          What I've <em>shipped</em>
        </h2>
        <p className="section-lede" data-aos="fade-up" data-aos-delay="60">
          A few real builds, what problem each one solved, and where you can
          try or read the code yourself.
        </p>

        <div className="proj-filters" data-aos="fade-up" data-aos-delay="100">
          {CATS.map(c => (
            <button
              key={c}
              className={`proj-filter ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="proj-list">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className="proj-card"
              data-aos="fade-up"
              data-aos-delay={i * 70}
            >
              <div className="proj-card__head">
                <div>
                  <h3 className="proj-card__title">{p.title}</h3>
                  <p className="proj-card__tagline">{p.tagline}</p>
                </div>
                <span className="proj-card__year">{p.year}</span>
              </div>

              <p className="proj-card__problem">
                <span className="hand-note" aria-hidden="true">the problem —</span>{' '}
                {p.problem}
              </p>

              <p className="proj-card__desc">{p.description}</p>

              <p className="proj-card__outcome">
                <strong>Outcome:</strong> {p.outcome}
              </p>

              <div className="proj-card__tech">
                {p.tech.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="proj-card__links">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  View code ↗
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .proj-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }
        .proj-filter {
          font-family: var(--font-mono);
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all .18s ease;
        }
        .proj-filter:hover { border-color: var(--ink); color: var(--ink); }
        .proj-filter.is-active {
          background: var(--ink);
          border-color: var(--ink);
          color: var(--cream);
        }

        .proj-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .proj-card {
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 36px 40px;
          background: var(--paper);
          transition: border-color .2s ease, transform .2s ease;
        }
        .proj-card:hover { border-color: var(--terracotta); }

        .proj-card__head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 18px;
        }
        .proj-card__title {
          font-size: 26px;
          margin-bottom: 4px;
        }
        .proj-card__tagline {
          color: var(--muted);
          font-size: 15px;
          margin: 0;
        }
        .proj-card__year {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--muted);
          flex-shrink: 0;
          padding-top: 4px;
        }

        .proj-card__problem {
          font-size: 16px;
          margin: 0 0 14px;
        }
        .proj-card__desc {
          color: var(--ink);
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 14px;
          max-width: 640px;
        }
        .proj-card__outcome {
          font-size: 15px;
          color: var(--muted);
          margin: 0 0 22px;
        }
        .proj-card__outcome strong { color: var(--ink); }

        .proj-card__tech {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .proj-card__links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .proj-card { padding: 26px 22px; }
        }
      `}</style>
    </section>
  );
}
