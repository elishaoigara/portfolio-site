import React from 'react';

const SOCIALS = [
  { href: 'https://github.com/elishaoigara', label: 'GitHub' },
  { href: 'https://linkedin.com/in/elishaoigara', label: 'LinkedIn' },
  { href: 'mailto:elishaoigara50@gmail.com', label: 'Email' },
];

const LINKS = ['about', 'skills', 'projects', 'education', 'contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#hero" className="footer__logo">Elisha Oigara</a>
          <p className="footer__tag">Full-stack software engineer, Nairobi.</p>
        </div>

        <nav className="footer__nav">
          {LINKS.map(l => (
            <a key={l} href={`#${l}`}>{l.charAt(0).toUpperCase() + l.slice(1)}</a>
          ))}
        </nav>

        <div className="footer__socials">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        © {new Date().getFullYear()} Elisha Oigara.
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border-soft);
          padding: 56px 0 28px;
          background: var(--paper);
        }
        .footer__grid {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
          margin-bottom: 36px;
        }
        .footer__logo {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 20px;
          color: var(--ink);
        }
        .footer__tag { color: var(--muted); font-size: 14px; margin: 8px 0 0; }
        .footer__nav, .footer__socials {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer__nav a, .footer__socials a {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--muted);
        }
        .footer__nav a:hover, .footer__socials a:hover { color: var(--terracotta); }
        .footer__bottom {
          border-top: 1px solid var(--border-soft);
          padding-top: 20px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
        }
      `}</style>
    </footer>
  );
}
