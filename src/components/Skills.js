import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CATS = {
  'AI & Tools': { color:'#00d4ff', items:[
    {name:'Claude Code',    desc:'Terminal agentic coding — daily driver',level:95},
    {name:'Cursor',         desc:'AI-native IDE with codebase awareness', level:90},
    {name:'GitHub Copilot', desc:'Inline suggestions & agent workflows',  level:88},
    {name:'ChatGPT / GPT-5',desc:'Architecture & debugging',              level:90},
    {name:'Windsurf',       desc:'AI-first editor',                       level:75},
    {name:'Bolt.new',       desc:'Rapid MVP prototyping',                 level:80},
    {name:'v0 by Vercel',   desc:'UI component generation',               level:78},
    {name:'Perplexity AI',  desc:'Research & knowledge retrieval',        level:85},
  ]},
  'Frontend': { color:'#7b61ff', items:[
    {name:'React.js',       desc:'SPA, hooks, state management',level:92},
    {name:'TypeScript',     desc:'Type-safe development',       level:78},
    {name:'Tailwind CSS',   desc:'Utility-first styling',       level:90},
    {name:'Next.js',        desc:'SSR, SSG, App Router',        level:75},
    {name:'Framer Motion',  desc:'Animations & interactions',   level:80},
    {name:'Bootstrap 5',    desc:'Responsive grids',            level:92},
  ]},
  'Backend': { color:'#00ff94', items:[
    {name:'Node.js / Express',desc:'REST APIs, middleware',  level:80},
    {name:'Python / FastAPI', desc:'AI apps & automation',   level:78},
    {name:'Firebase',         desc:'Auth, Firestore, RT DB', level:82},
    {name:'PostgreSQL',       desc:'Relational DB & queries', level:72},
    {name:'MongoDB',          desc:'NoSQL storage',           level:70},
    {name:'REST APIs',        desc:'Design, consume, docs',   level:85},
  ]},
  'DevOps': { color:'#f59e0b', items:[
    {name:'Git / GitHub',   desc:'Version control, CI/CD',  level:90},
    {name:'Vercel/Netlify', desc:'Deployment pipelines',     level:88},
    {name:'Linux / Bash',   desc:'Shell scripting, servers', level:78},
    {name:'Postman',        desc:'API testing & docs',       level:80},
    {name:'Figma',          desc:'UI prototyping',           level:72},
  ]},
};

export default function Skills() {
  const [tab, setTab] = useState('AI & Tools');
  const active = CATS[tab];

  return (
    <section id="skills" style={{ padding:'100px 0', backgroundColor:'#07090d' }}>
      <div className="container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <span className="section-label">{'// Tech Stack'}</span>
          <h2 className="section-title">Skills &<br/>
            <span style={{background:'linear-gradient(135deg,#00d4ff,#7b61ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Expertise</span>
          </h2>
          <div className="section-divider"/>
        </motion.div>

        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:36}}>
          {Object.keys(CATS).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding:'8px 20px',borderRadius:'100px',cursor:'pointer',fontSize:13,
              fontFamily:'DM Sans,sans-serif',fontWeight:t===tab?600:400,transition:'all .2s',
              border:`1px solid ${t===tab ? CATS[t].color : 'rgba(255,255,255,0.12)'}`,
              background: t===tab ? `${CATS[t].color}20` : 'transparent',
              color: t===tab ? CATS[t].color : '#8fa3ba',
            }}>{t}</button>
          ))}
        </div>

        {tab==='AI & Tools' && (
          <motion.div initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}}
            style={{padding:'14px 20px',borderRadius:12,background:'rgba(0,212,255,0.06)',border:'1px solid rgba(0,212,255,0.18)',display:'flex',alignItems:'center',gap:12,marginBottom:32}}>
            <span style={{fontSize:20}}>🤖</span>
            <p style={{color:'#8fa3ba',margin:0,fontSize:14}}>
              <strong style={{color:'#00d4ff'}}>AI is my daily stack.</strong> Every project — code gen, architecture, debugging, testing, docs.
            </p>
          </motion.div>
        )}

        <motion.div key={tab} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.3}} className="row g-3">
          {active.items.map((skill,i) => (
            <div key={i} className="col-md-6 col-lg-4 col-xl-3">
              <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.04}}
                style={{padding:'18px 20px',borderRadius:14,background:'#0f1520',border:'1px solid rgba(255,255,255,0.08)',height:'100%',transition:'border-color .2s,transform .2s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=`${active.color}66`;e.currentTarget.style.transform='translateY(-3px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
                  <span style={{fontFamily:'DM Sans,sans-serif',fontWeight:600,fontSize:14,color:'#e4ecf5'}}>{skill.name}</span>
                  <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:12,color:active.color}}>{skill.level}%</span>
                </div>
                <p style={{fontSize:12,color:'#4d6478',marginBottom:12,lineHeight:1.45}}>{skill.desc}</p>
                <div style={{height:3,background:'rgba(255,255,255,0.08)',borderRadius:2,overflow:'hidden'}}>
                  <motion.div initial={{width:0}} whileInView={{width:`${skill.level}%`}} viewport={{once:true}} transition={{duration:.8,delay:i*.04+.2}}
                    style={{height:'100%',background:active.color,borderRadius:2}}/>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}