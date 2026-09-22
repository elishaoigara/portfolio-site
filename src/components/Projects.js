import React, { useState, useRef, useEffect } from "react";
import projects from "../projectsData";
import ProjectVisual from "./ProjectVisual";
const categories = ["All work", ...new Set(projects.map((p) => p.category))];
export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (!selected) return;
    dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [selected]);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
  };
  const shown = projects.filter(
    (p) => filter === "All work" || filter === p.category,
  );
  return (
    <section className="section container work-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>
            Built to solve.
            <br />
            <span className="muted-heading">Designed to be used.</span>
          </h2>
        </div>
        <p>
          Six projects. Different challenges.
          <br />A shared focus on making technology useful.
        </p>
      </div>
      <div className="filter-row">
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              className={`proj-filter ${c === filter ? "is-active" : ""}`}
              aria-pressed={c === filter}
              onClick={() => setFilter(c)}
            >
              {c}
              {c === "All work" && <span>06</span>}
            </button>
          ))}
        </div>
        <span className="work-count" aria-live="polite">
          {String(shown.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      <div className="projects-grid">
        {shown.map((p) => (
          <article
            className={`project-card project-${p.visual}`}
            key={p.id}
            id={`project-${p.id}`}
          >
            <button
              className="project-preview"
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setSelected(p);
              }}
              aria-label={`Read ${p.title} case study`}
            >
              <ProjectVisual type={p.visual} />
              <span className="preview-arrow">↗</span>
              <span className="preview-label">ILLUSTRATIVE PREVIEW</span>
            </button>
            <div className="project-meta">
              <span>{p.label}</span>
              <span>2026</span>
            </div>
            <h3>{p.title}</h3>
            <p className="project-tagline">{p.tagline}</p>
            <p className="project-description">{p.description}</p>
            <div className="project-tags">
              {p.tech.slice(0, 3).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <button
              className="case-link"
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setSelected(p);
              }}
            >
              Inside the project <span className="sr-only">{p.title}</span>
              <span aria-hidden="true">↗</span>
            </button>
          </article>
        ))}
      </div>
      <div className="work-bottom">
        <span>A closer look at how I think, build, and solve.</span>
        <a
          className="text-link"
          href="https://github.com/elishaoigara"
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub ↗
        </a>
      </div>
      {selected && (
        <dialog
          ref={dialog}
          className="case-dialog"
          aria-labelledby="case-title"
          onCancel={close}
          onClose={() => setSelected(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="case-content">
            <div className="case-top">
              <span className="eyebrow">PROJECT NOTES / {selected.label}</span>
              <button
                className="close-dialog"
                onClick={close}
                aria-label="Close case study"
                autoFocus
              >
                ✕
              </button>
            </div>
            <h2 id="case-title">{selected.title}</h2>
            <p className="case-lede">{selected.tagline}</p>
            <span className="case-status">{selected.status}</span>
            <div className="case-section">
              <h3>The challenge</h3>
              <p>{selected.problem}</p>
            </div>
            <div className="case-section">
              <h3>What I built</h3>
              <p>{selected.implementation}</p>
            </div>
            <div className="case-section">
              <h3>What this demonstrates</h3>
              <p>{selected.value}</p>
            </div>
            <div className="project-tags">
              {selected.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="scope-note">{selected.scope}</p>
            <div className="case-actions">
              {selected.live && (
                <a
                  className="btn btn-primary"
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website ↗
                </a>
              )}
              {selected.code && (
                <a
                  className="btn btn-primary"
                  href={selected.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the source ↗
                </a>
              )}
              <a className="btn btn-outline" href="#contact" onClick={close}>
                Discuss a similar project ↗
              </a>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
