import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '20px',
          background: 'var(--gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
        }}>
          EO<span style={{ fontSize: '10px', WebkitTextFillColor: 'var(--accent)', marginLeft: '2px' }}>{'</>'}</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="d-none d-lg-flex">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              padding: '6px 14px',
              borderRadius: '6px',
              transition: 'all 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.background = 'rgba(0,212,255,0.07)'; }}
            onMouseLeave={e => { e.target.style.color = 'var(--text-muted)'; e.target.style.background = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary-custom" style={{ marginLeft: '12px', padding: '8px 20px', fontSize: '13px' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="d-lg-none"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', fontSize: '22px' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          background: 'rgba(8,12,16,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 700,
                color: 'var(--text)',
                padding: '12px 40px',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
