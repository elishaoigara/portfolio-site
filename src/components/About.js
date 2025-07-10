import React from 'react';

function About() {
  return (
    <section id="about" className="py-5 text-light" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="mb-4 text-center fw-bold border-bottom border-secondary pb-3">
          About Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="lead">
              Hi! I'm <strong>Elisha Oigara</strong>, a passionate Frontend Developer based in Kenya.
              I specialize in building modern, responsive web interfaces using <strong>React.js</strong> and <strong>Bootstrap</strong>.
            </p>
            <p>
              I enjoy crafting clean and accessible UIs, integrating APIs, and turning design ideas into working solutions.
              Currently, I’m focused on building personal projects and collaborating with global teams to sharpen my skills.
            </p>
            <p>
              <strong>📍 Location:</strong> Nairobi, Kenya <br />
              <strong>🔥 Passion:</strong> Frontend Engineering · UI/UX Design · Web Performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
