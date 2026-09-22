import React from "react";
const services = [
  [
    "01",
    "AI that fits the workflow.",
    "Assistants, coding tools, document context, and API integrations with clear controls around what the AI can do.",
    "AI INTEGRATION / AUTOMATION",
    "#project-ora-coding-agent",
  ],
  [
    "02",
    "Software for the business.",
    "Dashboards, internal tools, retail systems, and payment workflows built around how your team actually works.",
    "FULL-STACK / BUSINESS SYSTEMS",
    "#project-ora-pos",
  ],
  [
    "03",
    "Websites with a purpose.",
    "Responsive websites and web products that make your offering clear and give visitors a natural next step.",
    "WEB DEVELOPMENT / PRODUCT UI",
    "#project-samaritan",
  ],
];
export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / HOW I CAN HELP</p>
            <h2>
              Your next idea.
              <br />
              Let’s make it work.
            </h2>
          </div>
          <p>
            One developer who connects the interface,
            <br />
            the data, and the details in between.
          </p>
        </div>
        <div className="services-grid">
          {services.map(([n, title, description, label]) => (
            <article key={n}>
              <div className="service-top">
                <span>{n}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-label">{label}</span>
            </article>
          ))}
        </div>
        <div className="process">
          <span className="process-label">A CLEAR WAY FORWARD</span>
          <div>
            <b>Understand</b>
            <span>Define the problem.</span>
          </div>
          <i>→</i>
          <div>
            <b>Build</b>
            <span>Make it tangible.</span>
          </div>
          <i>→</i>
          <div>
            <b>Refine</b>
            <span>Test the details.</span>
          </div>
          <i>→</i>
          <div>
            <b>Deliver</b>
            <span>Set it up to run.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
