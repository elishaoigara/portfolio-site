import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'FinLog – Expense Tracker',
      description: 'A modern personal finance app to track income, expenses, and budgets with visual charts.',
      tech: ['React', 'Bootstrap', 'Chart.js', 'Firebase'],
      github: 'https://github.com/elishaoigara/finlog',
      demo: 'https://finlog-three.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-5 text-light" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="mb-5 text-center border-bottom border-secondary pb-3">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div
                className="card h-100 text-light border-secondary shadow"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="btn btn-outline-light btn-sm me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
