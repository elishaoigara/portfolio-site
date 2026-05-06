import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {icon:'🧱',title:'Full-Stack Development',    desc:'End-to-end apps — React/Next.js + Node.js backend, DB design, auth, and deployment.',         tags:['React','Node.js','PostgreSQL','Firebase'],hot:true, price:'From $300/project'},
  {icon:'🤖',title:'AI-Integrated Applications',desc:'LLM API integrations (OpenAI, Claude) — chatbots, content gen, automation, RAG pipelines.',   tags:['OpenAI API','Claude API','LangChain'],    hot:true, price:'From $400/project'},
  {icon:'⚛️',title:'Frontend Development',       desc:'Pixel-perfect responsive UIs in React/Next.js with Tailwind and performance optimization.',   tags:['React','Tailwind','TypeScript'],                    price:'From $150/project'},
  {icon:'🔌',title:'REST API Development',       desc:'Clean documented REST APIs with authentication, validation, and database integration.',        tags:['Node.js','Express','JWT'],                          price:'From $200/project'},
  {icon:'🚀',title:'Web App Deployment',         desc:'Full CI/CD pipeline — custom domain, SSL, env setup on Vercel, Netlify, or Railway.',         tags:['Vercel','Netlify','GitHub Actions'],                price:'From $80/app'},
  {icon:'📊',title:'Presentations & Design',     desc:'Professional pitch decks and company profiles in Figma, Canva, or PowerPoint.',               tags:['Figma','Canva','PowerPoint'],                       price:'$8/slide'},
  {icon:'✍️',title:'Technical Writing',           desc:'API docs, technical blog posts, README files, research reports, and academic writing.',       tags:['Documentation','Research'],                        price:'From $10/page'},
];

export default function Services() {
  return (
    <section id="services" style={{ padding:'100px 0', backgroundColor:'#07090d' }}>
      <div className="container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <span className="section-label">{'// Services'}</span>
          <h2 className="section-title">What I Can<br/>
            <span style={{background:'linear-gradient(135deg,#00d4ff,#7b61ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Build for You</span>
          </h2>
          <div className="section-divider"/>
        </motion.div>

        <div className="row g-4">
          {SERVICES.map((s,i) => (
            <div key={i} className={s.hot?'col-lg-6':'col-lg-4'}>
              <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}
                style={{padding:'26px',borderRadius:16,height:'100%',display:'flex',flexDirection:'column',
                  background: s.hot ? '#0d1a24' : '#0f1520',
                  border: s.hot ? '1px solid rgba(0,212,255,0.22)' : '1px solid rgba(255,255,255,0.08)',
                  transition:'border-color .2s,transform .2s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=s.hot?'rgba(0,212,255,0.45)':'rgba(255,255,255,0.16)';e.currentTarget.style.transform='translateY(-3px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=s.hot?'rgba(0,212,255,0.22)':'rgba(255,255,255,0.08)';e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{fontSize:26,marginBottom:14}}>{s.icon}</div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}>
                  <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:17,color:'#e4ecf5',margin:0}}>{s.title}</h3>
                  {s.hot && <span className="tag" style={{marginLeft:8,flexShrink:0,fontSize:10}}>Popular</span>}
                </div>
                <p style={{color:'#8fa3ba',fontSize:13,lineHeight:1.72,flex:1,marginBottom:14}}>{s.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:14}}>
                  {s.tags.map((t,j) => <span key={j} className="tag tag-purple" style={{fontSize:11}}>{t}</span>)}
                </div>
                <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:13,color:'#00d4ff',fontWeight:600}}>{s.price}</div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} style={{textAlign:'center',marginTop:56}}>
          <p style={{color:'#8fa3ba',marginBottom:18,fontSize:15}}>Have a project in mind? Let&apos;s discuss scope and pricing.</p>
          <a href="#contact" className="btn-primary-custom" style={{fontSize:15,padding:'13px 36px'}}>Start a Project →</a>
        </motion.div>
      </div>
    </section>
  );
}