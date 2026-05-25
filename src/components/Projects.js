import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../projectsData';

const FILTERS = ['All', 'Frontend', 'Backend', 'Fullstack', 'AI'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const filtered = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" style={{ padding:'100px 0', background:'#0b0f17' }}>
      <div className="container" style={{ padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:48, fontWeight:800, color:'#e4ecf5', marginBottom:16 }}>
            Featured <span style={{ background:'linear-gradient(135deg,#00d4ff,#7b61ff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Projects</span>
          </h2>
          <p style={{ color:'#8fa3ba', fontSize:18, maxWidth:600, margin:'0 auto' }}>
            A showcase of my recent work, demonstrating expertise across the full development stack.
          </p>
        </div>

        {/* filters */}
        <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:12, marginBottom:50 }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                padding:'10px 24px',
                fontFamily:'DM Sans,sans-serif',
                fontSize:14,
                fontWeight:600,
                borderRadius:30,
                border:'none',
                cursor:'pointer',
                background: filter === f 
                  ? 'linear-gradient(135deg,#00d4ff,#7b61ff)' 
                  : 'rgba(255,255,255,.06)',
                color: filter === f ? '#07090d' : '#8fa3ba',
                transition:'all .3s ease',
                boxShadow: filter === f ? '0 4px 20px rgba(0,212,255,.3)' : 'none'
              }}
              onMouseEnter={e => {
                if (filter !== f) {
                  e.target.style.background = 'rgba(255,255,255,.1)';
                  e.target.style.color = '#e4ecf5';
                }
              }}
              onMouseLeave={e => {
                if (filter !== f) {
                  e.target.style.background = 'rgba(255,255,255,.06)';
                  e.target.style.color = '#8fa3ba';
                }
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="row g-4">
          {filtered.map((p,i) => (
            <div key={p.id} className="col-md-6 col-lg-4">
              <motion.div 
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:'-100px' }}
                transition={{ duration:.5, delay:i*.1 }}
                style={{
                  background:'#07090d',
                  borderRadius:16,
                  overflow:'hidden',
                  border:'1px solid rgba(255,255,255,.07)',
                  height:'100%',
                  display:'flex',
                  flexDirection:'column'
                }}
              >
                <div style={{ height:200, overflow:'hidden' }}>
                  <img src={p.image} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                
                <div style={{ padding:24, flexGrow:1, display:'flex', flexDirection:'column' }}>
                  <div style={{ display:'flex', gap:8, marginBottom:16, flexWrap:'wrap' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ 
                        padding:'4px 12px', 
                        fontSize:12, 
                        background:'rgba(0,212,255,.12)', 
                        color:'#00d4ff', 
                        borderRadius:20,
                        fontFamily:'JetBrains Mono,monospace'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 style={{ 
                    fontFamily:'Syne,sans-serif', 
                    fontSize:22, 
                    fontWeight:700, 
                    color:'#e4ecf5', 
                    marginBottom:12,
                    flexGrow:1
                  }}>
                    {p.title}
                  </h3>
                  
                  <p style={{ 
                    color:'#8fa3ba', 
                    fontSize:14, 
                    lineHeight:1.6, 
                    marginBottom:20,
                    flexGrow:1
                  }}>
                    {p.description}
                  </p>
                  
                  <div style={{ display:'flex', gap:12, marginTop:'auto' }}>
                    <a href={p.live} target="_blank" rel="noreferrer"
                      style={{
                        padding:'8px 16px',
                        fontFamily:'DM Sans,sans-serif',
                        fontSize:13,
                        fontWeight:600,
                        borderRadius:8,
                        background:'linear-gradient(135deg,#00d4ff,#7b61ff)',
                        color:'#07090d',
                        textDecoration:'none',
                        display:'inline-flex',
                        alignItems:'center',
                        gap:6,
                        transition:'transform .2s, box-shadow .2s'
                      }}
                      onMouseEnter={e => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 16px rgba(0,212,255,.3)';
                      }}
                      onMouseLeave={e => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Live Demo <i className="fas fa-arrow-right" style={{ fontSize:10 }}/>
                    </a>
                    
                    <a href={p.code} target="_blank" rel="noreferrer"
                      style={{
                        padding:'8px 16px',
                        fontFamily:'DM Sans,sans-serif',
                        fontSize:13,
                        fontWeight:600,
                        borderRadius:8,
                        border:'1px solid rgba(255,255,255,.15)',
                        color:'#8fa3ba',
                        textDecoration:'none',
                        display:'inline-flex',
                        alignItems:'center',
                        gap:6,
                        transition:'all .2s'
                      }}
                      onMouseEnter={e => {
                        e.target.style.borderColor = '#00d4ff';
                        e.target.style.color = '#00d4ff';
                        e.target.style.background = 'rgba(0,212,255,.08)';
                      }}
                      onMouseLeave={e => {
                        e.target.style.borderColor = 'rgba(255,255,255,.15)';
                        e.target.style.color = '#8fa3ba';
                        e.target.style.background = 'transparent';
                      }}
                    >
                      <i className="fab fa-github"/>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}