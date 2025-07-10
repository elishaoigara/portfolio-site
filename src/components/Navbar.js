import React from 'react';
import Scrollspy from 'react-scrollspy';

function Navbar() {
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 9999,
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold text-light" href="#hero">
            Elisha
          </a>
          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop nav */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <Scrollspy
              items={navLinks.map(link => link.href.replace('#', ''))}
              currentClassName="active"
              componentTag="ul"
              className="navbar-nav ms-auto text-center"
              offset={-100}
            >
              {navLinks.map((link, idx) => (
                <li key={idx} className="nav-item">
                  <a
                    href={link.href}
                    className="nav-link text-light px-3"
                    style={{ transition: 'color 0.3s ease' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav text-center">
            {navLinks.map((link, idx) => (
              <li key={idx} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link text-white"
                  data-bs-dismiss="offcanvas"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
