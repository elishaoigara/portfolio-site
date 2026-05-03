import React, { useState } from 'react';

function ReachMeModal() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Email Me', href: 'mailto:elishaoigara50@gmail.com', icon: '📧', color: 'var(--accent)' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/elishaoigara', icon: '🔗', color: '#0077b5' },
    { label: 'GitHub', href: 'https://github.com/elishaoigara', icon: '💻', color: 'var(--text)' },
    { label: 'Twitter / X', href: 'https://twitter.com/lambertElisha3', icon: '🐦', color: '#1da1f2' },
  ];

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 9000,
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'var(--gradient)', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', boxShadow: '0 4px 20px rgba(0,212,255,0.3)',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: '92px', right: '28px', zIndex: 8999,
          display: 'flex', flexDirection: 'column', gap: '8px',
        }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 16px', borderRadius: '100px',
                background: 'rgba(13,17,23,0.95)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--text)', fontSize: '13px', fontWeight: 500,
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s', animation: `fadeUp 0.2s ease ${i * 0.05}s both`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = l.color; e.currentTarget.style.color = l.color; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
            >
              <span>{l.icon}</span> {l.label}
            </a>
          ))}
        </div>
      )}
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </>
  );
}

export default ReachMeModal;
