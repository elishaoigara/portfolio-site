import React from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  {institution:'University of the People',degree:'B.Sc. Computer Science',period:'2024 – Dec 2027',status:'In Progress',sc:'#00d4ff',desc:'Online US-accredited. Algorithms, data structures, software engineering, OS, databases, AI fundamentals.',icon:'🎓'},
  {institution:'Mount Kenya University',degree:'B.Sc. Business Information Technology',period:'2024 – Aug 2027',status:'In Progress',sc:'#00d4ff',desc:'Business strategy with software systems — project management, enterprise systems, business analysis.',icon:'🏛️'},
  {institution:'ALX Africa',degree:'Software Engineering — Front-End Specialisation',period:'May 2024 – Jul 2025',status:'Graduated ✓',sc:'#00ff94',desc:'Intensive 12-month programme: C, Python, JavaScript, React, Node.js, Linux, Shell scripting.',score:'72.01% overall · Month 1: 120.43%',certUrl:'https://savanna.alxafrica.com/certificates/PscX8Cf7FN',icon:'🚀'},
];

export default function Education() {
  return (
    <section id="education" style={{ padding:'100px 0', backgroundColor:'#0b0f17' }}>
      <div className="container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <span className="section-label">{'// Education'}</span>
          <h2 className="section-title">Academic<br/>
            <span style={{background:'linear-gradient(135deg,#00d4ff,#7b61ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Background</span>
          </h2>
          <div className="section-divider"/>
        </motion.div>

        <div style={{position:'relative'}}>
          <div style={{position:'absolute',left:23,top:0,bottom:0,width:1,background:'linear-gradient(180deg,#00d4ff,#7b61ff 50%,transparent)'}} className="d-none d-md-block"/>
          <div style={{display:'flex',flexDirection:'column',gap:24}}>
            {ITEMS.map((item,i) => (
              <motion.div key={i} initial={{opacity:0,x:-22}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.13}}
                style={{display:'flex',gap:28,alignItems:'flex-start'}}>
                <div className="d-none d-md-flex" style={{flexShrink:0,width:48,height:48,borderRadius:'50%',background:'#0b0f17',border:'2px solid rgba(255,255,255,0.12)',alignItems:'center',justifyContent:'center',fontSize:20,zIndex:1}}>
                  {item.icon}
                </div>
                <div style={{flex:1,padding:'24px 26px',borderRadius:16,background:'#0f1520',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <div style={{display:'flex',flexWrap:'wrap',gap:10,justifyContent:'space-between',marginBottom:8}}>
                    <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:18,color:'#e4ecf5',margin:0}}>{item.institution}</h3>
                    <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:11,padding:'3px 10px',borderRadius:'100px',border:`1px solid ${item.sc}50`,color:item.sc,background:`${item.sc}15`}}>{item.status}</span>
                  </div>
                  <p style={{color:'#00d4ff',fontWeight:600,fontSize:14,marginBottom:4}}>{item.degree}</p>
                  <p style={{fontFamily:'JetBrains Mono,monospace',fontSize:12,color:'#4d6478',marginBottom:12}}>{item.period}</p>
                  <p style={{color:'#8fa3ba',fontSize:14,lineHeight:1.7,marginBottom:item.score?10:0}}>{item.desc}</p>
                  {item.score && <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:12,color:'#00ff94',marginBottom:item.certUrl?12:0}}>📊 {item.score}</div>}
                  {item.certUrl && <a href={item.certUrl} target="_blank" rel="noreferrer" className="btn-outline-custom" style={{padding:'7px 16px',fontSize:12,marginTop:8}}>View Certificate ↗</a>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}