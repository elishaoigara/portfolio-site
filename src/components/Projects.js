import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ================== COLORS ================== */
const C = {
  cyan:'#00d4ff',
  purple:'#7b61ff',
  green:'#00ff94',
  t1:'#e4ecf5',
  t2:'#8fa3ba',
};

/* ================== DATA ================== */
const PROJECTS = [
  {
    title:'ORA — Personal AI Operating System',
    description:'AI-powered assistant with memory, automation, and integrations.',
    tech:['React','FastAPI','Groq','ChromaDB'],
    github:'https://github.com/elishaoigara/ORA',
    demo:'https://ora-tan-three.vercel.app/',
    category:'AI',
    featured:true,
    emoji:'🤖',
    image:'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title:'Market Mint — Smart Trading Platform',
    description:'A sleek market dashboard for tracking assets and trends in real time.',
    tech:['React','Vite','Chart.js','REST API'],
    github:'https://github.com/elishaoigara/market-mint',
    demo:'https://market-mint.vercel.app/',
    category:'Frontend',
    emoji:'📈',
    accent:C.green,
    image:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title:'FinLog – Expense Tracker',
    description:'Track income, expenses, and budgets with analytics.',
    tech:['React','Firebase','Chart.js'],
    github:'https://github.com/elishaoigara/finlog',
    demo:'https://finlog-three.vercel.app/',
    category:'Full-Stack',
    emoji:'💰',
    accent:C.green,
    image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title:'SkyCast – Weather App',
    description:'Real-time weather app with clean UI and API integration.',
    tech:['React','API'],
    github:'https://github.com/elishaoigara/SkyCast',
    demo:'https://sky-cast-pied-one.vercel.app/',
    category:'Frontend',
    emoji:'🌤️',
    accent:C.cyan,
    image:'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=1200&auto=format&fit=crop'
  },
];

const FILTERS = ['All','AI','Full-Stack','Frontend'];

/* ================== MAIN ================== */
export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter==='All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category===filter);

  return (
    <section id="projects" style={{padding:'100px 0', background:'#0b0f17'}}>
      <div className="container">

        {/* HEADER */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <span className="section-label">{'// Projects'}</span>
          <h2 className="section-title">
            Things I&apos;ve<br/>
            <span style={{
              background:'linear-gradient(135deg,#00d4ff,#7b61ff)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent'
            }}>
              Built
            </span>
          </h2>
          <div className="section-divider"/>
        </motion.div>

        {/* FILTERS */}
        <div style={{display:'flex',gap:10,margin:'40px 0',flexWrap:'wrap'}}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={()=>setFilter(f)}
              style={{
                padding:'8px 18px',
                borderRadius:100,
                cursor:'pointer',
                fontSize:13,
                border:`1px solid ${f===filter ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                background:f===filter
                  ? 'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(123,97,255,0.15))'
                  : 'rgba(255,255,255,0.02)',
                color:f===filter ? C.cyan : C.t2,
                boxShadow:f===filter ? '0 0 20px rgba(0,212,255,0.2)' : 'none'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-10}}
            className="row g-4"
          >
            {filtered.map((p,i)=>(
              <div key={p.title} className={p.featured ? 'col-12' : 'col-md-6 col-lg-4'}>
                {p.featured
                  ? <FeaturedCard p={p}/>
                  : <RegularCard p={p} i={i}/>
                }
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ================== FEATURED ================== */
function FeaturedCard({p}) {
  return (
    <motion.div
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      style={{
        borderRadius:20,
        overflow:'hidden',
        border:'1px solid rgba(0,212,255,0.25)',
        background:'linear-gradient(135deg,rgba(0,212,255,0.08),rgba(123,97,255,0.06),#0b0f17)',
        boxShadow:'0 20px 60px rgba(0,0,0,0.6)'
      }}
    >

      {/* IMAGE */}
      <div style={{height:260,overflow:'hidden'}}>
        <img src={p.image} alt={p.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      </div>

      <div style={{padding:30}}>
        <h3 style={{
          fontSize:26,
          fontWeight:800,
          marginBottom:12,
          background:'linear-gradient(135deg,#00d4ff,#7b61ff)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent'
        }}>
          {p.title}
        </h3>

        <p style={{color:C.t2,marginBottom:20,lineHeight:1.7}}>
          {p.description}
        </p>

        <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:20}}>
          {p.tech.map((t,i)=><span key={i} className="tag">{t}</span>)}
        </div>

        <div style={{display:'flex',gap:10}}>
          <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline-custom">
            GitHub
          </a>
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary-custom">
            Live Demo ↗
          </a>
        </div>
      </div>

    </motion.div>
  );
}

/* ================== REGULAR ================== */
function RegularCard({p,i}) {
 

  return (
    <motion.div
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      transition={{delay:i*0.08}}
      whileHover={{y:-10, scale:1.02}}
      style={{
        borderRadius:20,
        overflow:'hidden',
        border:'1px solid rgba(255,255,255,0.06)',
        background:'linear-gradient(180deg,#0f1520,#0b0f17)',
      }}
    >

      {/* IMAGE */}
      <div style={{height:180,overflow:'hidden'}}>
        <motion.img
          src={p.image}
          alt={p.title}
          style={{width:'100%',height:'100%',objectFit:'cover'}}
          whileHover={{scale:1.08}}
        />
      </div>

      <div style={{padding:20}}>

        <div style={{fontSize:22,marginBottom:8}}>{p.emoji}</div>

        <h3 style={{color:C.t1,fontSize:18,marginBottom:10}}>
          {p.title}
        </h3>

        <p style={{color:C.t2,fontSize:13,lineHeight:1.6,marginBottom:16}}>
          {p.description}
        </p>

        <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:16}}>
          {p.tech.map((t,i)=><span key={i} className="tag">{t}</span>)}
        </div>

        <div style={{display:'flex',gap:8}}>
          <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline-custom">
            Code
          </a>
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary-custom">
            Live ↗
          </a>
        </div>

      </div>

    </motion.div>
  );
}