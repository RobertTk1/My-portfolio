import React from "react";
import "../styles/Hello.scss";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div className="hello" id="Hello">
      <Navbar />
      <main>
        <h1>Hello.</h1>
        <h2>I am Robert</h2>
        <div className="Info">
          <h3>Software Developer</h3>

          {/**Link for GitHub contact and linked in */}

          <span>
            <a
              href="https://github.com/RobertTk1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </span>
          <span>
            <a className="Cv" href="mailto:robcontact6@gmail.com">
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
          <div className="Arrow">
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="link-arrow"
            >
              <i className="fas fa-chevron-down fa-2x"></i>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
