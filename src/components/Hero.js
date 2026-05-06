import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/elisha.jpeg';

const SOCIALS = [
  { href:'https://github.com/elishaoigara',      icon:'fab fa-github'   },
  { href:'https://linkedin.com/in/elishaoigara', icon:'fab fa-linkedin' },

];
const STATS = [
  { n:'2+',   l:'Years Building'   },
  { n:'10+',  l:'Projects Shipped' },
  { n:'5+',   l:'AI Tools Daily'   },
  { n:'100%', l:'Commitment'       },
];

export default function Hero() {
  const [m, setM] = useState({ x:0, y:0 });
  useEffect(() => {
    const fn = e => setM({ x:(e.clientX/window.innerWidth-.5)*18, y:(e.clientY/window.innerHeight-.5)*18 });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <section id="hero" style={{ minHeight:'100vh', display:'flex', alignItems:'center', paddingTop:64, backgroundColor:'#07090d' }}>
      {/* parallax orb */}
      <div style={{ position:'absolute', bottom:'12%', left:'3%', width:340, height:340, borderRadius:'50%', background:'radial-gradient(circle,rgba(123,97,255,0.09) 0%,transparent 70%)', transform:`translate(${m.x*-.45}px,${m.y*-.45}px)`, transition:'transform 1.1s ease', pointerEvents:'none' }}/>

      <div className="container" style={{ padding:'64px 24px', position:'relative', zIndex:1 }}>
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-7">
            <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.55}}
              style={{display:'flex',alignItems:'center',gap:10,marginBottom:28}}>
              <span style={{width:9,height:9,borderRadius:'50%',background:'#00ff94',boxShadow:'0 0 0 3px rgba(0,255,148,.22)',flexShrink:0,display:'inline-block'}}/>
              <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:12,color:'#00ff94',letterSpacing:'.16em',textTransform:'uppercase'}}>
                Available for Work · Nairobi, Kenya
              </span>
            </motion.div>

            <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.1}}
              style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(52px,8vw,88px)',fontWeight:800,lineHeight:.93,marginBottom:18,letterSpacing:'-.025em'}}>
              <span style={{color:'#e4ecf5',display:'block'}}>Elisha</span>
              <span style={{background:'linear-gradient(135deg,#00d4ff,#7b61ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',display:'block'}}>Oigara</span>
            </motion.h1>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}} style={{marginBottom:20,minHeight:34}}>
              <span style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(17px,2.5vw,24px)',fontWeight:600,color:'#8fa3ba'}}>
                <TypeAnimation sequence={['Full-Stack Developer',2500,'AI-Powered Engineer',2500,'React + Node.js Builder',2500,'Backend & Frontend Dev',2500]} wrapper="span" speed={55} repeat={Infinity}/>
              </span>
            </motion.div>

            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}
              style={{color:'#8fa3ba',fontSize:15,lineHeight:1.82,maxWidth:500,marginBottom:36}}>
              I build complete web applications from pixel-perfect frontends to robust backends, leveraging AI tools{' '}
              <strong style={{color:'#e4ecf5'}}>every single day</strong> to ship faster and smarter. ALX Software Engineering graduate.
            </motion.p>

            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.6}} style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href="#projects" className="btn-primary-custom">View My Work →</a>
              <a href="#contact" className="btn-outline-custom">Let&apos;s Connect</a>
            </motion.div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.78}}
              style={{display:'flex',gap:16,marginTop:36,alignItems:'center',flexWrap:'wrap'}}>
              {SOCIALS.map((s,i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{color:'#4d6478',fontSize:20,transition:'color .2s,transform .2s',display:'flex',alignItems:'center'}}
                  onMouseEnter={e=>{e.currentTarget.style.color='#00d4ff';e.currentTarget.style.transform='translateY(-2px)'}}
                  onMouseLeave={e=>{e.currentTarget.style.color='#4d6478';e.currentTarget.style.transform='translateY(0)'}}>
                  <i className={s.icon}/>
                </a>
              ))}
              <div style={{width:1,height:18,background:'rgba(255,255,255,.09)'}}/>
              <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:12,color:'#3a5268'}}>elishaoigara50@gmail.com</span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
            <motion.div initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}} transition={{duration:.82,delay:.22}}
              style={{position:'relative',width:285,height:285}}>
              <div style={{position:'absolute',inset:-4,borderRadius:'50%',background:'conic-gradient(from 0deg,#00d4ff,#7b61ff,#00ff94,#00d4ff)',animation:'spin-slow 8s linear infinite'}}>
                <div style={{width:'100%',height:'100%',borderRadius:'50%',background:'#07090d'}}/>
              </div>
              <img src={profilePic} alt="Elisha Oigara" style={{position:'absolute',inset:4,width:'calc(100% - 8px)',height:'calc(100% - 8px)',borderRadius:'50%',objectFit:'cover',objectPosition:'center top',zIndex:1}}/>
              <motion.div animate={{y:[0,-5,0]}} transition={{duration:3,repeat:Infinity}}
                style={{position:'absolute',bottom:-10,right:-28,background:'#0b0f17',border:'1px solid rgba(0,212,255,.3)',borderRadius:12,padding:'10px 16px',zIndex:3,boxShadow:'0 8px 28px rgba(0,0,0,.7)'}}>
                <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#00d4ff',fontWeight:600,letterSpacing:'.1em'}}>AI-POWERED</div>
                <div style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'#e4ecf5',fontWeight:700,marginTop:2}}>Full-Stack Dev</div>
              </motion.div>
              <motion.div animate={{y:[0,5,0]}} transition={{duration:3.5,repeat:Infinity,delay:.8}}
                style={{position:'absolute',top:-10,left:-32,background:'#0b0f17',border:'1px solid rgba(0,255,148,.3)',borderRadius:12,padding:'10px 16px',zIndex:3,boxShadow:'0 8px 28px rgba(0,0,0,.7)'}}>
                <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#00ff94',letterSpacing:'.1em'}}>GRADUATED 🎓</div>
                <div style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'#e4ecf5',fontWeight:700,marginTop:2}}>ALX SE · 2025</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* stats */}
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.95}}
          style={{marginTop:80,display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid rgba(255,255,255,.06)',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
          {STATS.map((s,i) => (
            <div key={i} style={{padding:'22px 16px',borderRight:i<3?'1px solid rgba(255,255,255,.06)':'none',textAlign:'center'}}>
              <div style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(22px,3vw,36px)',fontWeight:800,background:'linear-gradient(135deg,#00d4ff,#7b61ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{s.n}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:11,color:'#4d6478',marginTop:4,textTransform:'uppercase',letterSpacing:'.08em'}}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <style>{`@keyframes spin-slow{to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}