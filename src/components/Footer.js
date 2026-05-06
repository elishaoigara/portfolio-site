import React from 'react';

const C = {
  cyan:'#00d4ff',
  purple:'#7b61ff',
  green:'#00ff94',
  t1:'#e4ecf5',
  t2:'#8fa3ba',
  t3:'#4d6478',
};

function Footer() {
  return (
    <footer style={{
      padding:'60px 24px',
      background:'#0b0f17',
      borderTop:'1px solid rgba(255,255,255,0.06)',
      position:'relative',
      overflow:'hidden'
    }}>

      {/* subtle glow background */}
      <div style={{
        position:'absolute',
        inset:0,
        background:'radial-gradient(circle at 50% 0%, rgba(0,212,255,0.08), transparent 60%)',
        pointerEvents:'none'
      }}/>

      <div className="container" style={{position:'relative'}}>

        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-md-4 mb-4 mb-md-0">
            <a href="#hero" style={{
              fontFamily:"'Syne',sans-serif",
              fontWeight:800,
              fontSize:20,
              textDecoration:'none',
              background:'linear-gradient(135deg,#00d4ff,#7b61ff)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent'
            }}>
              Elisha Oigara
            </a>

            <p style={{
              color:C.t2,
              fontSize:13,
              marginTop:8
            }}>
              Full-Stack Developer · AI Systems Builder
            </p>
          </div>

          {/* CENTER SOCIALS */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <div style={{
              display:'flex',
              gap:18,
              justifyContent:'center'
            }}>

              {[
                { href:'https://github.com/elishaoigara', icon:'fab fa-github' },
                { href:'https://linkedin.com', icon:'fab fa-linkedin' },
                { href:'mailto:elishaoigara50@gmail.com', icon:'fas fa-envelope' },
              ].map((s,i)=>(
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width:42,
                    height:42,
                    borderRadius:12,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    color:C.t2,
                    border:'1px solid rgba(255,255,255,0.08)',
                    background:'rgba(255,255,255,0.02)',
                    transition:'all .25s ease',
                    fontSize:16
                  }}
                  onMouseEnter={e=>{
                    e.currentTarget.style.color=C.cyan;
                    e.currentTarget.style.borderColor='rgba(0,212,255,0.4)';
                    e.currentTarget.style.boxShadow='0 0 20px rgba(0,212,255,0.2)';
                    e.currentTarget.style.transform='translateY(-2px)';
                  }}
                  onMouseLeave={e=>{
                    e.currentTarget.style.color=C.t2;
                    e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow='none';
                    e.currentTarget.style.transform='translateY(0)';
                  }}
                >
                  <i className={s.icon}/>
                </a>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-4 text-md-end">
            <p style={{
              color:C.t3,
              fontSize:12,
              margin:0
            }}>
              © {new Date().getFullYear()} Built with React + Framer Motion
            </p>

            <p style={{
              color:C.t2,
              fontSize:12,
              marginTop:6
            }}>
              Designed as an AI-powered developer portfolio
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;