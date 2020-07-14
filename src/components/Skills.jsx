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
                <svg
                  className="fa-stack-1x"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeliterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g>
                      <path
                        d="M61.64767,68.5205l-17.58342,9.72875c-0.65933,0.36192 -1.06425,1.03558 -1.06425,1.763v19.46825c0,0.72742 0.40492,1.3975 1.06425,1.763l17.587,9.73592c0.65575,0.36192 1.46917,0.36192 2.12492,0l17.58342,-9.73592c0.65217,-0.3655 1.05708,-1.03558 1.05708,-1.763v-19.46825c0,-0.72742 -0.40492,-1.3975 -1.06425,-1.763l-17.57983,-9.72875c-0.32967,-0.18275 -0.69875,-0.27233 -1.06425,-0.27233c-0.36908,0 -0.73458,0.08958 -1.06425,0.27233M152.11608,86.04658l-2.93117,1.61967c-0.11108,0.06092 -0.17558,0.172 -0.17558,0.29383v3.2465c0,0.12183 0.06808,0.23292 0.17558,0.29383l2.93117,1.62325c0.11108,0.06092 0.24367,0.06092 0.35475,0l2.93117,-1.62325c0.1075,-0.06092 0.17558,-0.172 0.17558,-0.29383v-3.2465c0,-0.12183 -0.06808,-0.23292 -0.17917,-0.29383l-2.93117,-1.61967c-0.05375,-0.03225 -0.11467,-0.04658 -0.17558,-0.04658c-0.06092,0 -0.12183,0.01433 -0.17558,0.04658"
                        fill="#388e3c"
                      ></path>
                      <path
                        d="M128.10775,47.88767l-8.56058,-4.77658c-0.26875,-0.1505 -0.59842,-0.14692 -0.86358,0.01075c-0.26517,0.15767 -0.43,0.44075 -0.43,0.74892l-0.00358,28.853l-7.89408,-4.36808c-0.32967,-0.18275 -0.69875,-0.27233 -1.06425,-0.27233c-0.3655,0 -0.73458,0.08958 -1.06425,0.27233h0.00358l-17.58342,9.72875c-0.65933,0.36192 -1.06425,1.03558 -1.06425,1.75942v19.46825c0,0.72742 0.40492,1.3975 1.06425,1.763l17.587,9.73592c0.65575,0.36192 1.46917,0.36192 2.12492,0l17.58342,-9.73592c0.65217,-0.36192 1.05708,-1.03558 1.05708,-1.763v-49.90508c0,-0.63067 -0.344,-1.21117 -0.89225,-1.51933zM117.76983,94.80783l-7.99083,4.42542c-0.29742,0.16483 -0.6665,0.16483 -0.96392,0l-7.99442,-4.42542c-0.30458,-0.16483 -0.48733,-0.473 -0.48733,-0.80267v-8.85083c0,-0.32967 0.18275,-0.63425 0.48375,-0.80267l7.99442,-4.42183h-0.00358c0.1505,-0.08242 0.31533,-0.12183 0.48375,-0.12183c0.16842,0 0.33325,0.043 0.48375,0.12183l7.99083,4.42183c0.301,0.16842 0.48375,0.47658 0.48375,0.80625v8.85083c0,0.32608 -0.18275,0.63425 -0.48017,0.79908z"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M61.64767,68.5205l-18.64767,30.96c0,0.72742 0.40492,1.3975 1.06425,1.763l17.587,9.73592c0.65575,0.36192 1.46917,0.36192 2.12492,0l18.6405,-30.96717c0,-0.72742 -0.40492,-1.3975 -1.06425,-1.763l-17.57983,-9.72875c-0.32967,-0.18275 -0.69875,-0.27233 -1.06425,-0.27233c-0.36908,0 -0.73458,0.08958 -1.06425,0.27233"
                        fill="#2e7d32"
                      ></path>
                      <path
                        d="M61.64767,68.5205l-17.58342,9.72875c-0.65933,0.36192 -1.06425,1.03558 -1.06425,1.763l18.64767,30.96717c0.65575,0.36192 1.46917,0.36192 2.12492,0l17.58342,-9.73592c0.65575,-0.3655 1.06067,-1.03558 1.06067,-1.763l-18.64408,-30.96c-0.32967,-0.18275 -0.69875,-0.27233 -1.06425,-0.27233c-0.36908,0 -0.73458,0.08958 -1.06425,0.27233"
                        fill="#4caf50"
                      ></path>
                      <path
                        d="M170.93575,78.08442l-17.57983,-9.72875c-0.32967,-0.18275 -0.69875,-0.27233 -1.06425,-0.27233c-0.3655,0 -0.73458,0.08958 -1.06425,0.27233h0.00358l-17.58342,9.72875c-0.65575,0.36192 -1.06425,1.04992 -1.06425,1.80242v19.38942c0,0.74892 0.4085,1.4405 1.06425,1.80242l17.587,9.73592c0.65933,0.3655 1.46558,0.3655 2.12492,0l8.10908,-4.48992c0.74175,-0.41208 0.73817,-1.47633 -0.00717,-1.88483l-17.64433,-9.62842c-0.29742,-0.16842 -0.48375,-0.48017 -0.48375,-0.817v-8.8365c0,-0.32967 0.17917,-0.63425 0.46583,-0.79192l8.00875,-4.429h-0.00358c0.1505,-0.08242 0.31533,-0.12183 0.48375,-0.12183c0.16842,0 0.33325,0.043 0.48375,0.12183l8.00875,4.43258c0.28667,0.15767 0.46583,0.46225 0.46583,0.79192v7.20967c0,0.30817 0.16483,0.59483 0.43358,0.74892c0.26875,0.1505 0.59842,0.1505 0.86717,-0.00358l8.59283,-4.99158c0.53033,-0.30817 0.86,-0.87792 0.86,-1.49425v-6.73667c0,-0.75608 -0.4085,-1.44767 -1.06425,-1.80958zM38.35242,78.08442l-17.57983,-9.72875c-0.32967,-0.18275 -0.69875,-0.27233 -1.06425,-0.27233c-0.3655,0 -0.73458,0.08958 -1.06425,0.27233h0.00358l-17.58342,9.72875c-0.65575,0.36192 -1.06425,1.04992 -1.06425,1.80242v26.74958c0,0.30817 0.16483,0.59483 0.43358,0.74892c0.26875,0.1505 0.59842,0.1505 0.86717,-0.00358l8.59283,-4.99158c0.53033,-0.30817 0.85642,-0.87792 0.85642,-1.49425v-15.74158c0,-0.32967 0.17917,-0.63425 0.46583,-0.79192l8.00875,-4.429v0c0.1505,-0.08242 0.31533,-0.12183 0.48375,-0.12183c0.16842,0 0.33325,0.043 0.48375,0.12183l8.00875,4.43258c0.28667,0.15767 0.46583,0.46225 0.46583,0.79192v15.74158c0,0.61633 0.32608,1.18608 0.86,1.49425l8.59283,4.99158c0.26875,0.15408 0.59842,0.15408 0.86717,0.00358c0.26517,-0.15767 0.43,-0.44433 0.43,-0.7525v-26.746c0,-0.7525 -0.4085,-1.44408 -1.06425,-1.806z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
              <p>Node.js</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <img
                  className="fa-stack-1x"
                  alt="mongodb"
                  src="https://img.icons8.com/color/40/000000/mongodb.png"
                />
              </span>

              <p>MongoDB</p>
            </li>
            <li>
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x icon-background"></i>
                <img
                  className="fa-stack-1x"
                  alt="sql"
                  src="https://img.icons8.com/nolan/40/sql.png"
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
            <li>Apollo Graphql</li>
            <li>Vs Code</li>
            <li>PyCharm</li>
            <li>Npm</li>
            <li>Travis CI</li>
            <li>Postman</li>
            <li>MySQL</li>
            <li>Bash</li>
            <li>Ubuntu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
