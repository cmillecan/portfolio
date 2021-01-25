import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const linkOffset = -145;

  return (
    <nav className="navbar">
      <a className="logo" href="/">
        CM
      </a>
      <div className="nav-links">
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          offset={linkOffset}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy
          smooth
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
      </div>
      <div className="social">
        <a
          href="http://linkedin.com/cmillecan"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="http://github.com/cmillecan" target="_blank" rel="noreferrer">
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
