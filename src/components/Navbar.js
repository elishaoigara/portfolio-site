import React, { useState, useEffect, useRef } from "react";
const links = [
  ["#projects", "Work"],
  ["#services", "Expertise"],
  ["#about", "About"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const panel = useRef(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector("a")?.focus();
    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 760) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  function goToSection(event) {
    setOpen(false);
    const target = document.querySelector(
      event.currentTarget.getAttribute("href"),
    );
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
  }
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="wordmark" href="#hero" aria-label="Elisha Oigara home">
          <span className="monogram" aria-hidden="true">
            eo.
          </span>
          <span>
            Elisha Oigara
            <span className="wordmark-role">Developer & product builder</span>
          </span>
        </a>
        <div className="nav__links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <button
          ref={toggle}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </nav>
      {open && (
        <nav
          ref={panel}
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, ["#contact", "Let’s talk"]].map(([href, label]) => (
            <a onClick={goToSection} key={href} href={href}>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
