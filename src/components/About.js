import React from "react";
import profile from "../assets/elisha.jpeg";
export default function About() {
  return (
    <section id="about" className="about section container">
      <div className="about-image">
        <img
          src={profile}
          alt="Elisha Oigara"
          loading="lazy"
          width="420"
          height="490"
        />
        <div className="photo-caption">
          <span>ELISHA OIGARA</span>
          <span>NAIROBI, KE ↗</span>
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">03 / THE PERSON BEHIND THE CODE</p>
        <h2>
          Curious by nature.
          <br />
          <span className="muted-heading">A builder by choice.</span>
        </h2>
        <p>
          I’m Elisha Oigara, a full-stack developer based in Nairobi. I enjoy
          taking an idea apart, understanding what makes it useful, and turning
          it into something people can actually work with.
        </p>
        <p>
          My work spans AI assistants, retail software, social products, and
          business websites. I connect the user experience with the systems
          behind it: interfaces, APIs, data, and integrations.
        </p>
        <p>
          I use AI tools in my development process, with a focus on
          understanding the code, reviewing changes, and testing the result.
        </p>
        <div className="about-facts">
          <div>
            <span>BASED IN</span>
            <b>Nairobi, Kenya</b>
          </div>
          <div>
            <span>MY FOCUS</span>
            <b>Useful, thoughtful software</b>
          </div>
        </div>
        <a
          className="text-link"
          href="mailto:elishaoigara50@gmail.com?subject=CV%20request"
        >
          Request my résumé ↗
        </a>
      </div>
    </section>
  );
}
