import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-name">
          eo<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Elisha Oigara</span>
        <span>Thoughtfully built in Nairobi.</span>
        <a href="#hero">Back to top ↑</a>
      </div>
    </footer>
  );
}
