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
          Hi, my name is Robert Ekpai. I am a Self-motivated Software Developer.
          Currently I am focused on front end with plans to evolve into a full
          stack developer. I don't like problems, so I enjoy solving them. I
          strongly believe in the power of knowledge and teamwork. As an
          engineer I like learning new cutting-edge technologies, I am curious
          and always eager to know what the next step is. I am multilingual and
          fluent in all the languages I know (English, French, Ewe and Kabye). I
          enjoy learning about self-improvement, and I am always thankful for
          the opportunities I get.
        </p>
        <h6>Favorite quote</h6>
        <span>
          “You can learn anything you need to learn to achieve any goal you set
          for yourself” ~ Brian Tracy
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
