import React from "react";
import "../styles/Skills.scss";

export default function s() {
  return (
    <div className="skills" id="Skills">
      <span className="title">SKILLS.</span>
      <div className="list">
        <div className="developement">
          <span className="devtitle">
            <i className="fas fa-cogs"></i> Development
          </span>
          <ul>
            {/**List of skills */}

            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <i className="fab fa-js fa-stack-1x"></i>
              </span>
              <p>JavaScript</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <i className="fab fa-html5 fa-stack-1x"></i>
              </span>
              <p>HTML5</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <i className="fab fa-css3-alt fa-stack-1x"></i>
              </span>
              <p>CSS3</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <i className="fab fa-react fa-stack-1x"></i>
              </span>
              <p>React</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <img
                  className="fa-stack-1x redux"
                  alt="redux"
                  src="https://img.icons8.com/windows/32/764abc/redux.png"
                />
              </span>

              <p>Redux</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <i className="fab fa-sass fa-stack-1x"></i>
              </span>
              <p>Sass</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <i className="fab fa-bootstrap fa-stack-1x"></i>
              </span>
              <p>Bootstrap</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <i className="fab fa-git-alt fa-stack-1x"></i>
              </span>
              <p>Git</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <img
                  className="fa-stack-1x"
                  alt="sql"
                  src="https://img.icons8.com/metro/28/00758F/sql.png"
                />
              </span>

              <p>SQL</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <img
                  className="fa-stack-1x"
                  alt="python"
                  src="https://img.icons8.com/color/30/000000/python.png"
                />
              </span>
              <p>Python</p>
            </li>
          </ul>
        </div>
        <div className="tools">
          <span className="tool-title">
            <i className="fas fa-tools"></i> Tools & Other
          </span>
          <ul>
            {/**list of tools */}

            <li>GitHub</li>
            <li>Vs Code</li>
            <li>PyCharm</li>
            <li>npm</li>
            <li>Travis CI</li>
            <li>Bash</li>
            <li>Ubuntu</li>
            <li>MySQL</li>
            <li>PopSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
