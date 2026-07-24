import React from 'react';
import profilePic from '../assets/elisha.jpeg';

const CAPABILITIES = [
  'Frontend builds — React, responsive layout, interaction detail',
  'Backend & APIs — Node.js/Express, Firebase, REST design',
  'Databases — PostgreSQL, MongoDB, Firestore schema design',
  'AI-assisted workflow — Claude Code, Cursor, Copilot in daily use',
];

export default function About() {
  return (
    <section id="about" className="section section--paper">
      <div className="container about__grid">
        <div className="about__photo">
          <img src={profilePic} alt="Elisha Oigara" />
        </div>

        <div>
          <span className="eyebrow">About</span>
          <h2 className="section-title" data-aos="fade-up">
            From <em>database</em> to<br />deployed interface.
          </h2>

          <p className="about__p" data-aos="fade-up" data-aos-delay="60">
            I'm Lambert Elisha Oigara, a full-stack software engineer based in
            Nairobi, Kenya. I like owning a project end to end — designing the
            data model, building the API, then making the interface feel right
            to actually use.
          </p>
          <p className="about__p" data-aos="fade-up" data-aos-delay="100">
            AI tools are part of how I work, not a shortcut around learning —
            I use Claude Code, Cursor, and GitHub Copilot daily to move faster
            through boilerplate so I can spend more time on architecture and
            edge cases.
          </p>
          <p className="about__p" data-aos="fade-up" data-aos-delay="140">
            Currently studying Computer Science at the University of the
            People and Business Information Technology at Mount Kenya
            University, alongside building.
          </p>

          <ul className="about__caps" data-aos="fade-up" data-aos-delay="180">
            {CAPABILITIES.map(c => <li key={c}>{c}</li>)}
          </ul>

          <div className="about__ctas" data-aos="fade-up" data-aos-delay="220">
            <a href="#contact" className="btn btn--primary">Get in touch</a>
            <a href="https://github.com/elishaoigara" target="_blank" rel="noreferrer" className="btn btn--ghost">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 56px;
          align-items: start;
        }
        .about__photo img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: top center;
          border-radius: 4px;
          filter: sepia(0.18) contrast(1.02);
          border: 1px solid var(--border);
        }
        .about__p {
          font-size: 17px;
          line-height: 1.75;
          margin: 0 0 16px;
          max-width: 560px;
        }
        .about__caps {
          list-style: none;
          padding: 0;
          margin: 24px 0 32px;
          border-top: 1px solid var(--border-soft);
        }
        .about__caps li {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--muted);
          padding: 12px 0;
          border-bottom: 1px solid var(--border-soft);
        }
        .about__ctas { display: flex; gap: 14px; flex-wrap: wrap; }

        @media (max-width: 800px) {
          .about__grid { grid-template-columns: 1fr; gap: 32px; }
          .about__photo img { max-width: 220px; }
        }
      `}</style>
    </section>
  );
}
