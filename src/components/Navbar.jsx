import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="items">
        <Link
          activeClass="active"
          to="Hello"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="links"
        >
          HELLO
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="links"
        >
          SKILLS
        </Link>
        <Link
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="links"
        >
          PORTFOLIO
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="links"
        >
          ABOUT
        </Link>
      </div>
    </div>
  );
}
