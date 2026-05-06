import React, { useState } from 'react';
import { motion } from 'framer-motion';

const INFO = [
  {icon:'📧',label:'Email',   value:'elishaoigara50@gmail.com',   href:'mailto:elishaoigara50@gmail.com'},
  {icon:'💻',label:'GitHub',  value:'github.com/elishaoigara',    href:'https://github.com/elishaoigara'},
  {icon:'🔗',label:'LinkedIn',value:'linkedin.com/in/elishaoigara',href:'https://linkedin.com/in/elishaoigara'},
 
];
const LBL = {fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#4d6478',display:'block',marginBottom:6,textTransform:'uppercase',letterSpacing:'.1em'};
const inp = err => ({width:'100%',padding:'11px 14px',background:'#0b0f17',border:`1px solid ${err?'#ef4444':'rgba(255,255,255,0.12)'}`,borderRadius:10,color:'#e4ecf5',fontFamily:'DM Sans,sans-serif',fontSize:14,outline:'none',transition:'border-color .2s'});

export default function Contact() {
  const [form,setForm]     = useState({name:'',email:'',subject:'',message:''});
  const [errs,setErrs]     = useState({});
  const [status,setStatus] = useState('idle');

  const change = e => { const{name,value}=e.target; setForm(p=>({...p,[name]:value})); setErrs(p=>({...p,[name]:null})); };
  const validate = () => {
    const e={};
    if(!form.name) e.name='Required';
    if(!/^\S+@\S+\.\S+$/.test(form.email)) e.email='Valid email required';
    if(!form.subject) e.subject='Required';
    if(!form.message) e.message='Required';
    setErrs(e); return !Object.keys(e).length;
  };
  const submit = async e => {
    e.preventDefault(); if(!validate()) return; setStatus('sending');
    const fd=new FormData(); Object.entries(form).forEach(([k,v])=>fd.append(k,v));
    try {
      const r=await fetch('https://formspree.io/f/xanjryon',{method:'POST',body:fd,headers:{Accept:'application/json'}});
      setStatus(r.ok?'success':'error'); if(r.ok) setForm({name:'',email:'',subject:'',message:''});
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" style={{padding:'100px 0',backgroundColor:'#07090d'}}>
      <div className="container">
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <span className="section-label">{'// Contact'}</span>
          <h2 className="section-title">Let&apos;s Work<br/>
            <span style={{background:'linear-gradient(135deg,#00d4ff,#7b61ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Together</span>
          </h2>
          <div className="section-divider"/>
          <p style={{color:'#8fa3ba',maxWidth:480,marginBottom:52,fontSize:15}}>Whether you have a project, a job opportunity, or just want to chat — my inbox is open.</p>
        </motion.div>

        <div className="row g-5">
          <div className="col-lg-4">
            <motion.div initial={{opacity:0,x:-18}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:24}}>
                {INFO.map((c,i) => (
                  <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                    <div style={{padding:'13px 16px',borderRadius:12,display:'flex',alignItems:'center',gap:14,background:'#0f1520',border:'1px solid rgba(255,255,255,0.08)',transition:'border-color .2s'}}
                      onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(0,212,255,0.35)'}
                      onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}>
                      <span style={{fontSize:20}}>{c.icon}</span>
                      <div>
                        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'#4d6478',textTransform:'uppercase',letterSpacing:'.1em'}}>{c.label}</div>
                        <div style={{fontSize:13,color:'#e4ecf5',fontWeight:500}}>{c.value}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{padding:'18px 20px',borderRadius:14,background:'rgba(0,255,148,0.05)',border:'1px solid rgba(0,255,148,0.18)'}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'#00ff94',boxShadow:'0 0 8px #00ff94',flexShrink:0,display:'inline-block'}}/>
                  <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:11,color:'#00ff94',fontWeight:600}}>AVAILABLE FOR WORK</span>
                </div>
                <p style={{fontSize:13,color:'#8fa3ba',margin:0,lineHeight:1.65}}>Open to contracts, freelance, and full-time remote. Response within 24 hours.</p>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-8">
            <motion.div initial={{opacity:0,x:18}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.1}}>
              {status==='success' ? (
                <div style={{padding:'48px',borderRadius:20,background:'#0f1520',border:'1px solid rgba(0,255,148,0.22)',textAlign:'center'}}>
                  <div style={{fontSize:48,marginBottom:14}}>✅</div>
                  <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:700,marginBottom:8,color:'#e4ecf5'}}>Message Sent!</h3>
                  <p style={{color:'#8fa3ba'}}>I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={()=>setStatus('idle')} className="btn-outline-custom" style={{marginTop:20}}>Send Another</button>
                </div>
              ) : (
                <div style={{padding:'32px',borderRadius:20,background:'#0f1520',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <form onSubmit={submit}>
                    <div className="row g-3" style={{marginBottom:14}}>
                      {['name','email'].map(f=>(
                        <div key={f} className="col-md-6">
                          <label style={LBL}>{f}</label>
                          <input name={f} type={f==='email'?'email':'text'} placeholder={f==='name'?'John Doe':'john@company.com'}
                            value={form[f]} onChange={change} style={inp(errs[f])}
                            onFocus={e=>e.target.style.borderColor='#00d4ff'}
                            onBlur={e=>e.target.style.borderColor=errs[f]?'#ef4444':'rgba(255,255,255,0.12)'}/>
                          {errs[f]&&<span style={{fontSize:11,color:'#ef4444',marginTop:3,display:'block'}}>{errs[f]}</span>}
                        </div>
                      ))}
                    </div>
                    <div style={{marginBottom:14}}>
                      <label style={LBL}>Subject</label>
                      <select name="subject" value={form.subject} onChange={change} style={{...inp(errs.subject),cursor:'pointer'}}
                        onFocus={e=>e.target.style.borderColor='#00d4ff'}
                        onBlur={e=>e.target.style.borderColor=errs.subject?'#ef4444':'rgba(255,255,255,0.12)'}>
                        <option value="" style={{background:'#0b0f17'}}>Select a subject…</option>
                        {['Full-Stack Project','AI Integration','Frontend Development','Job Opportunity','API Development','Other'].map(o=>(
                          <option key={o} value={o} style={{background:'#0b0f17'}}>{o}</option>
                        ))}
                      </select>
                      {errs.subject&&<span style={{fontSize:11,color:'#ef4444',marginTop:3,display:'block'}}>{errs.subject}</span>}
                    </div>
                    <div style={{marginBottom:22}}>
                      <label style={LBL}>Message</label>
                      <textarea name="message" placeholder="Tell me about your project or opportunity…" rows={5}
                        value={form.message} onChange={change} style={{...inp(errs.message),resize:'vertical'}}
                        onFocus={e=>e.target.style.borderColor='#00d4ff'}
                        onBlur={e=>e.target.style.borderColor=errs.message?'#ef4444':'rgba(255,255,255,0.12)'}/>
                      {errs.message&&<span style={{fontSize:11,color:'#ef4444',marginTop:3,display:'block'}}>{errs.message}</span>}
                    </div>
                    {status==='error'&&<div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:8,padding:'10px 14px',marginBottom:14,fontSize:13,color:'#ef4444'}}>Something went wrong. Please try again or email me directly.</div>}
                    <button type="submit" className="btn-primary-custom" style={{width:'100%',justifyContent:'center',padding:14}} disabled={status==='sending'}>
                      {status==='sending'?<><span style={{width:14,height:14,border:'2px solid rgba(255,255,255,.3)',borderTopColor:'#fff',borderRadius:'50%',display:'inline-block',animation:'spin .8s linear infinite'}}/> Sending…</>:'Send Message →'}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}