import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/elisha.jpeg';

const HIGHLIGHTS = [
  { icon:'🌍', label:'Location',   value:'Nairobi, Kenya' },
  { icon:'⚡', label:'Focus',      value:'Full-Stack · AI Dev' },
  { icon:'🎓', label:'Education',  value:'ALX SE · MKU · UoPeople' },
  { icon:'🤖', label:'Superpower', value:'AI in every workflow' },
];

export default function About() {
  return (
    <section id="about" style={{ padding:'100px 0', backgroundColor:'#0b0f17' }}>
      <div className="container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <span className="section-label">{'// About Me'}</span>
          <h2 className="section-title">Engineer. Builder.<br/>
            <span style={{background:'linear-gradient(135deg,#00d4ff,#7b61ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>AI Practitioner.</span>
          </h2>
          <div className="section-divider"/>
        </motion.div>

        <div className="row align-items-center g-5">
          <div className="col-lg-4 d-flex justify-content-center">
            <motion.div initial={{opacity:0,x:-22}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
              style={{position:'relative',width:'100%',maxWidth:300}}>
              <div style={{position:'absolute',inset:-3,borderRadius:20,background:'conic-gradient(from 0deg,#00d4ff,#7b61ff,#00ff94,#00d4ff)',animation:'spin-slow 8s linear infinite'}}/>
              <img src={profilePic} alt="Elisha" style={{width:'100%',borderRadius:18,position:'relative',zIndex:1,objectFit:'cover',aspectRatio:'1',display:'block'}}/>
              <motion.div animate={{y:[0,-5,0]}} transition={{duration:3,repeat:Infinity}}
                style={{position:'absolute',bottom:-14,right:-16,background:'#0b0f17',border:'1px solid rgba(0,212,255,.3)',borderRadius:12,padding:'10px 16px',zIndex:3,boxShadow:'0 8px 24px rgba(0,0,0,.6)'}}>
                <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#00d4ff',letterSpacing:'.1em'}}>ALX SE</div>
                <div style={{fontFamily:'DM Sans,sans-serif',fontSize:14,color:'#e4ecf5',fontWeight:700}}>Graduate '25</div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-8">
            <motion.div initial={{opacity:0,x:22}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.1}}>
              <p style={{color:'#8fa3ba',fontSize:15,lineHeight:1.88,marginBottom:16}}>
                I'm <strong style={{color:'#e4ecf5'}}>Lambert Elisha Oigara</strong> — a full-stack software engineer based in Nairobi. I build complete web applications from database design to polished UIs.
              </p>
              <p style={{color:'#8fa3ba',fontSize:15,lineHeight:1.88,marginBottom:16}}>
                I integrate <strong style={{color:'#00d4ff'}}>AI tools into every stage of development</strong> — using Claude Code, Cursor, GitHub Copilot, and others daily to ship faster.
              </p>
              <p style={{color:'#8fa3ba',fontSize:15,lineHeight:1.88,marginBottom:32}}>
                Currently studying <strong style={{color:'#e4ecf5'}}>Business IT at Mount Kenya University</strong> and <strong style={{color:'#e4ecf5'}}>Computer Science at University of the People</strong>.
              </p>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:32}}>
                {HIGHLIGHTS.map((h,i) => (
                  <div key={i} style={{padding:'14px 16px',borderRadius:12,background:'#0f1520',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{fontSize:18,marginBottom:5}}>{h.icon}</div>
                    <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#4d6478',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:3}}>{h.label}</div>
                    <div style={{fontSize:13,fontWeight:600,color:'#e4ecf5'}}>{h.value}</div>
                  </div>
                ))}
              </div>

              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <a href="#contact" className="btn-primary-custom">Get in Touch</a>
                <a href="https://github.com/elishaoigara" target="_blank" rel="noreferrer" className="btn-outline-custom">
                  <i className="fab fa-github"/> GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin-slow{to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}