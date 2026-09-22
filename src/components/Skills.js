import React, { useState } from "react";
const groups = {
  "AI & integrations": [
    ["LLM APIs", "Streaming responses & tool workflows"],
    ["Agent orchestration", "Plans, approvals & bounded actions"],
    ["GitHub API", "Repository context & reviewable changes"],
    ["Payment APIs", "Checkout & payment confirmation"],
  ],
  Frontend: [
    ["React.js", "Interactive, stateful interfaces"],
    ["Next.js", "Full-stack web applications"],
    ["TypeScript", "Clear contracts across the stack"],
    ["Responsive CSS", "Layouts for mobile & desktop"],
  ],
  Backend: [
    ["Python / FastAPI", "APIs for AI-powered products"],
    ["PostgreSQL", "Relational data & transactions"],
    ["Authentication", "Sessions & role-based access"],
    ["Realtime & storage", "Connected applications & media"],
  ],
  Delivery: [
    ["Git / GitHub", "Version control & code review"],
    ["Vercel / Render", "Web & API deployment"],
    ["Automated checks", "Build, type & behavior checks"],
    ["Product thinking", "Scope, usability & iteration"],
  ],
};
const tabs = Object.keys(groups);
export default function Skills() {
  const [tab, setTab] = useState(tabs[0]);
  function navigate(event, index) {
    const keys = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index + tabs.length - 1) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    };
    if (keys[event.key] === undefined) return;
    event.preventDefault();
    const next = keys[event.key];
    setTab(tabs[next]);
    document.getElementById(`skill-tab-${next}`)?.focus();
  }
  return (
    <section id="skills" className="toolkit container">
      <div className="toolkit-intro">
        <p className="eyebrow">THE TOOLKIT</p>
        <h2>
          The right tools.
          <br />
          For the real problem.
        </h2>
      </div>
      <div className="toolkit-body">
        <div
          className="skill-tabs"
          role="tablist"
          aria-label="Skills categories"
        >
          {tabs.map((name, i) => (
            <button
              key={name}
              id={`skill-tab-${i}`}
              role="tab"
              aria-selected={name === tab}
              aria-controls={`skill-panel-${i}`}
              tabIndex={name === tab ? 0 : -1}
              onKeyDown={(e) => navigate(e, i)}
              onClick={() => setTab(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div
          id={`skill-panel-${tabs.indexOf(tab)}`}
          className="skill-grid"
          role="tabpanel"
          aria-labelledby={`skill-tab-${tabs.indexOf(tab)}`}
          tabIndex={0}
        >
          {groups[tab].map(([name, detail]) => (
            <div key={name}>
              <h3>{name}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
