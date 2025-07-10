import React from 'react';

function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript',
    'React.js', 'Bootstrap', 'Tailwind CSS',
    'Git & GitHub', 'Responsive Design',
    'API Integration', 'Firebase',
  ];

  return (
    <section id="skills" className="py-5 bg-black text-light">
      <div className="container">
        <h2 className="mb-4 text-center border-bottom border-secondary pb-3">Skills</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-secondary text-light m-2 px-3 py-2 fs-6"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
