import React from 'react';
import { FaCode, FaPaintBrush, FaTools, FaPenNib, FaSearch, FaChalkboardTeacher, FaLaptop } from 'react-icons/fa';
import { MdSlideshow } from 'react-icons/md';

function Services() {
  const services = [
    {
      icon: <FaCode size={24} />,
      title: 'Frontend Development',
      description: 'Responsive, modern UIs using React, Tailwind, Bootstrap, and more.',
      price: 'From $150/project',
    },
    {
      icon: <FaTools size={24} />,
      title: 'Web App Setup',
      description: 'End-to-end deployment: domain, hosting, auth, database, and backups.',
      price: 'From $200/app',
    },
    {
      icon: <FaPaintBrush size={24} />,
      title: 'UI/UX Design',
      description: 'Wireframing and designing with Figma, Canva, or Adobe XD.',
      price: 'From $100/design',
    },
    {
      icon: <FaPenNib size={24} />,
      title: 'Academic & Content Writing',
      description: 'Essays, reports, blog posts, and more — clear, concise, and original.',
      price: 'Starting at $10/page',
    },
    {
      icon: <FaSearch size={24} />,
      title: 'Research Assistance',
      description: 'Topic exploration, citations, referencing, and literature review support.',
      price: 'Starting at $10/page',
    },
    {
      icon: <MdSlideshow size={24} />,
      title: 'Presentations',
      description: 'Professionally designed slides using Google Slides, Canva, Figma, or PowerPoint — ideal for business pitches, investor decks, company profiles, and more.',
      price: '$8/slide',
    },
    {
      icon: <FaChalkboardTeacher size={24} />,
      title: 'Class Package (Turnkey)',
      description: 'Complete handling of writing, slides, and research for a full course or class.',
      price: 'From $250/class',
    },
  ];

  return (
    <section id="services" className="py-5 text-light" style={{ background: 'transparent' }} data-aos="fade-up">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold border-bottom border-secondary pb-3">Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
              <div
                className="p-4 h-100 rounded shadow-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div className="mb-3 text-primary">{service.icon}</div>
                <h5 className="fw-bold text-light">{service.title}</h5>
                <p className="text-light small">{service.description}</p>
                <p className="text-info fw-semibold mt-3">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
