// src/components/Skills.js
import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaGitAlt, FaGithub, FaPython
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFirebase, SiRedux, SiTypescript, SiSass, SiEslint
} from 'react-icons/si';
import { MdDevices } from 'react-icons/md';

function Skills() {
  const categories = {
    Languages: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
    Frontend: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'SASS', icon: <SiSass /> },
      { name: 'Responsive Design', icon: <MdDevices /> },
      { name: 'API Integration', icon: <FaReact /> },
    ],
    Tools: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'ESLint', icon: <SiEslint /> },
    ]
  };

  return (
    <section id="skills" className="py-5 text-light" style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="mb-4 text-center border-bottom border-secondary pb-3">Skills</h2>

        {Object.entries(categories).map(([category, skills], idx) => (
          <div key={category} className="mb-5">
            <h4 className="text-center mb-4 text-info">{category}</h4>
            <div className="row justify-content-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-column p-3 text-center h-100 shadow-sm"
                    style={{
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '12px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="fs-2 mb-2">{skill.icon}</div>
                    <span className="fw-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
