import React from 'react';
import { motion } from 'framer-motion';

const SOCIALS = [
  { href:'https://github.com/elishaoigara',      icon:'fab fa-github'   },
  { href:'https://linkedin.com/in/elishaoigara', icon:'fab fa-linkedin' },
  { href:'mailto:elishaoigara50@gmail.com',      icon:'fas fa-envelope' },
];

export default function Footer() {
  return (
    <footer style={{ background:'#0b0f17', padding:'80px 0 40px' }}>
      <div className="container" style={{ padding:'0 24px' }}>
        <div className="row g-5">
          
          {/* LEFT */}
          <div className="col-lg-5">
            <motion.a 
              href="#hero" 
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              style={{
                fontFamily:"'Syne',sans-serif", 
                fontWeight:800, 
                fontSize:24,
                background:'linear-gradient(135deg,#00d4ff,#7b61ff)',
                WebkitBackgroundClip:'text', 
                WebkitTextFillColor:'transparent',
                textDecoration:'none', 
                display:'inline-block',
                marginBottom:20
              }}
            >
              EO<span style={{ fontSize:12, WebkitTextFillColor:'#00d4ff', marginLeft:4 }}>{'</>'}</span>
            </motion.a>
            
            <motion.p 
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{ delay:.1 }}
              style={{ color:'#8fa3ba', fontSize:16, lineHeight:1.7, maxWidth:400, marginBottom:28 }}
            >
              Building scalable, AI-powered web applications with modern technologies. 
              Let's create something amazing together.
            </motion.p>
            
            <motion.div 
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{ delay:.2 }}
              style={{ display:'flex', gap:16, alignItems:'center', flexWrap:'wrap' }}
            >
              {SOCIALS.map((s,i) => (
                <a 
                  key={i} 
                  href={s.href} 
                  target={s.href.startsWith('http') ? "_blank" : undefined} 
                  rel="noreferrer"
                  style={{
                    width:44,
                    height:44,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:'50%',
                    background:'rgba(255,255,255,.05)',
                    color:'#8fa3ba',
                    fontSize:18,
                    transition:'all .25s',
                    textDecoration:'none'
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = 'linear-gradient(135deg,#00d4ff,#7b61ff)';
                    e.target.style.color = '#07090d';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = 'rgba(255,255,255,.05)';
                    e.target.style.color = '#8fa3ba';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={`Visit my ${s.href.includes('github') ? 'GitHub' : s.href.includes('linkedin') ? 'LinkedIn' : 'email'}`}
                >
                  <i className={s.icon}/>
                </a>
              ))}
            </motion.div>
          </div>
          
          {/* RIGHT */}
          <div className="col-lg-6 offset-lg-1">
            <div className="row">
              {[
                { title:'Navigation', links:[
                  { href:'#hero',      label:'Home'      },
                  { href:'#about',     label:'About'     },
                  { href:'#skills',    label:'Skills'    },
                  { href:'#projects',  label:'Projects'  },
                ]},
                { title:'More', links:[
                  { href:'#services',  label:'Services'  },
                  { href:'#education', label:'Education' },
                  { href:'#contact',   label:'Contact'   },
                  { href:'https://github.com/elishaoigara', label:'GitHub', external:true },
                ]}
              ].map((col,i) => (
                <div key={i} className="col-sm-6 mb-4">
                  <motion.h3 
                    initial={{ opacity:0, y:10 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }}
                    transition={{ delay:.3+i*.1 }}
                    style={{ 
                      fontFamily:'Syne,sans-serif', 
                      fontSize:20, 
                      fontWeight:700, 
                      color:'#e4ecf5', 
                      marginBottom:20 
                    }}
                  >
                    {col.title}
                  </motion.h3>
                  <motion.div 
                    initial={{ opacity:0 }}
                    whileInView={{ opacity:1 }}
                    viewport={{ once:true }}
                    transition={{ delay:.4+i*.1 }}
                  >
                    {col.links.map((l,j) => (
                      <a 
                        key={j} 
                        href={l.href} 
                        target={l.external ? "_blank" : undefined} 
                        rel={l.external ? "noreferrer" : undefined}
                        style={{
                          display:'block',
                          color:'#8fa3ba',
                          fontSize:15,
                          textDecoration:'none',
                          marginBottom:12,
                          transition:'color .2s',
                          maxWidth:'max-content'
                        }}
                        onMouseEnter={e => e.target.style.color = '#00d4ff'}
                        onMouseLeave={e => e.target.style.color = '#8fa3ba'}
                      >
                        {l.label}
                      </a>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* BOTTOM */}
        <motion.div 
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ delay:.6 }}
          style={{ 
            borderTop:'1px solid rgba(255,255,255,.06)', 
            marginTop:60, 
            paddingTop:30, 
            display:'flex', 
            flexWrap:'wrap',
            justifyContent:'space-between',
            alignItems:'center',
            gap:20
          }}
        >
          <div style={{ color:'#4d6478', fontSize:14, fontFamily:'JetBrains Mono,monospace' }}>
            © {new Date().getFullYear()} Elisha Oigara. All rights reserved.
          </div>
          <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
            <a href="#" style={{ color:'#4d6478', fontSize:14, textDecoration:'none', transition:'color .2s' }}
              onMouseEnter={e => e.target.style.color = '#00d4ff'}
              onMouseLeave={e => e.target.style.color = '#4d6478'}>
              Privacy Policy
            </a>
            <a href="#" style={{ color:'#4d6478', fontSize:14, textDecoration:'none', transition:'color .2s' }}
              onMouseEnter={e => e.target.style.color = '#00d4ff'}
              onMouseLeave={e => e.target.style.color = '#4d6478'}>
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}