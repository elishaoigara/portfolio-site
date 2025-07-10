import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-light" href="#">Elisha</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
