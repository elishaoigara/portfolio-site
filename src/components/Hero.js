import React from "react";
import ProjectVisual from "./ProjectVisual";
export default function Hero() {
  return (
    <section className="hero container" id="hero">
      <div className="hero-topline">
        <span>
          <i className="status-dot" /> Open to projects & opportunities
        </span>
        <span>Nairobi, Kenya · Working globally</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK DEVELOPER · AI PRODUCT BUILDER</p>
          <h1>
            Good ideas.
            <br />
            Thoughtful code.
            <br />
            <span>Useful products.</span>
          </h1>
          <p className="hero-intro">
            I’m Elisha. I build AI tools, business platforms, and web
            experiences that turn complex problems into software people can use.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#contact">
              Let’s build something <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" /> From the first idea to the interface,
            API, and deployment.
          </div>
        </div>
        <div className="hero-showcase">
          <div className="showcase-label">
            <span>IN FOCUS / 01</span>
            <span>AI × SOFTWARE</span>
          </div>
          <ProjectVisual type="agent" hero />
          <div className="showcase-caption">
            <div>
              <strong>ORA Coding Agent</strong>
              <span>AI assistance. Human control.</span>
            </div>
            <a href="#projects" aria-label="Explore selected projects">
              ↗
            </a>
          </div>
          <span className="visual-note">Illustrative product preview</span>
        </div>
      </div>
      <div className="hero-footer">
        <span>Built with purpose. Across the stack.</span>
        <div>
          <span>React & Next.js</span>
          <span>Python & FastAPI</span>
          <span>AI integrations</span>
        </div>
        <a href="#projects" aria-label="Scroll to selected work">
          SCROLL TO EXPLORE ↓
        </a>
      </div>
    </section>
  );
}
