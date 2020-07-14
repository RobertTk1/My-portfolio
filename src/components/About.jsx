import React from "react";
import "../styles/About.scss";

export default function About() {
  return (
    <div className="about" id="About">
      <h3 className="about-title">
        ABOUT <span>ME.</span>
      </h3>

      <div className="about-info">
        <p>
          I’m a solution-focused, self-motivated, and technically competent
          Front-End Developer, with a good knowledge of databases and other
          back-end technologies. I believe our job is about delivering values,
          decreasing costs, and building solutions that perform. Matured by the
          experience gained in implementing various projects, I think there is
          no absolute right or wrong technology/stack, but the right tool for
          the specific job. Also, I’m willing to learn cutting edge technologies
          and modern programming techniques to address technical issues and
          situations according to the latest trends and recommendations.
        </p>
        <h6>Favorite quote</h6>
        <span>
          “The biggest goal can be accomplished if broken down into enough small
          steps” ~ Henry Ford
        </span>
      </div>
      <div className="about-links">
        <span>
          <a
            href="https://github.com/RobertTk1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </span>
        <span>
          <a className="contact" href="mailto:robcontact6@gmail.com">
            Contact Me.
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/robert-ekpai-3905751a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
