import React from 'react';

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 24px',
      background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 100%)',
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <a href="#hero" style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '20px',
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
            }}>
              Elisha Oigara
            </a>
            <p style={{ color: 'var(--text-dim)', fontSize: '13px', marginTop: '6px', marginBottom: 0 }}>
              Full-Stack Developer · AI Practitioner
            </p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              {[
                { href: 'https://github.com/elishaoigara', icon: 'fab fa-github' },
                { href: 'https://linkedin.com/in/elishaoigara', icon: 'fab fa-linkedin' },
                { href: 'https://twitter.com/lambertElisha3', icon: 'fab fa-twitter' },
                { href: 'mailto:elishaoigara50@gmail.com', icon: 'fas fa-envelope' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{ color: 'var(--text-dim)', fontSize: '18px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-4 text-md-end">
            <p style={{ color: 'var(--text-dim)', fontSize: '13px', margin: 0 }}>
              © {new Date().getFullYear()} Elisha Oigara. Built with React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
