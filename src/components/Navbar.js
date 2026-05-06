import React, { useState, useEffect } from 'react';

const NAV = [
  { href:'#hero',      label:'Home'      },
  { href:'#about',     label:'About'     },
  { href:'#skills',    label:'Skills'    },
  { href:'#projects',  label:'Projects'  },
  { href:'#services',  label:'Services'  },
  { href:'#education', label:'Education' },
  { href:'#contact',   label:'Contact'   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navBg = scrolled
    ? 'rgba(7,9,13,0.96)'
    : 'rgba(7,9,13,0.55)';

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:9999,
        padding:'0 32px', height:64,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background: navBg,
        backdropFilter:'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition:'all .3s',
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:20,
          background:'linear-gradient(135deg,#00d4ff,#7b61ff)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          textDecoration:'none', letterSpacing:'-.01em',
        }}>
          EO<span style={{ fontSize:10, WebkitTextFillColor:'#00d4ff', marginLeft:2 }}>{'</>'}</span>
        </a>

        {/* Desktop */}
        <div className="d-none d-lg-flex" style={{ gap:2, alignItems:'center' }}>
          {NAV.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:500,
              color:'#8fa3ba', padding:'6px 14px', borderRadius:8,
              transition:'all .2s', textDecoration:'none',
            }}
              onMouseEnter={e => { e.target.style.color='#00d4ff'; e.target.style.background='rgba(0,212,255,0.08)'; }}
              onMouseLeave={e => { e.target.style.color='#8fa3ba';  e.target.style.background='transparent'; }}
            >{l.label}</a>
          ))}
          <a href="#contact" className="btn-primary-custom" style={{ marginLeft:16, padding:'8px 22px', fontSize:13 }}>
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="d-lg-none"
          style={{ background:'none', border:'none', cursor:'pointer', color:'#e4ecf5', fontSize:22 }}>
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position:'fixed', inset:0, zIndex:9998,
          background:'rgba(7,9,13,0.98)', backdropFilter:'blur(24px)',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4,
        }}>
          {NAV.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:700,
              color:'#e4ecf5', padding:'14px 48px', textDecoration:'none', transition:'color .2s',
            }}
              onMouseEnter={e => e.target.style.color='#00d4ff'}
              onMouseLeave={e => e.target.style.color='#e4ecf5'}
            >{l.label}</a>
          ))}
        </div>
      )}
    </>
  );
}