import React, { useState, useEffect, useRef } from 'react';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstDrawerLinkRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    firstDrawerLinkRef.current?.focus();
    const closeOnEscape = event => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#hero" className="nav__logo">Elisha Oigara</a>

        <div className="nav__links">
          {NAV.map(l => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn--primary nav__cta">Hire me</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="nav__drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {NAV.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              ref={index === 0 ? firstDrawerLinkRef : undefined}
              onClick={() => setOpen(false)}
              className="nav__drawer-link"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn--primary" style={{ marginTop: 20 }}>
            Hire me
          </a>
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--gutter);
          background: rgba(245, 240, 230, 0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid transparent;
          transition: all .25s ease;
        }
        .nav--scrolled {
          background: rgba(245, 240, 230, 0.96);
          border-bottom-color: var(--border-soft);
        }
        .nav__logo {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 19px;
          color: var(--ink);
          font-style: italic;
        }
        .nav__links {
          display: none;
          align-items: center;
          gap: 6px;
        }
        .nav__link {
          font-family: var(--font-mono);
          font-size: 13.5px;
          color: var(--muted);
          padding: 8px 14px;
          transition: color .15s ease;
        }
        .nav__link:hover { color: var(--terracotta); }
        .nav__cta { margin-left: 12px; padding: 9px 20px; font-size: 13px; }
        .nav__burger {
          background: none;
          border: none;
          font-size: 20px;
          color: var(--ink);
          cursor: pointer;
          width: 40px; height: 40px;
        }
        .nav__drawer {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: var(--cream);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .nav__drawer-link {
          font-family: var(--font-display);
          font-size: 30px;
          color: var(--ink);
          padding: 12px 0;
        }
        @media (min-width: 900px) {
          .nav__links { display: flex; }
          .nav__burger { display: none; }
        }
      `}</style>
    </>
  );
}
