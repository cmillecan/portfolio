import React from "react";
import "./Layout.css";
import { Link } from "react-scroll";
import Projects from "./Projects";
import About from "./About";

function Portfolio() {
  const linkOffset = -145;

  return (
    <div className="portfolio-container">
      {/*TODO: refactor NAVBAR to new component*/}
      <nav className="navbar">
        <div className="logo">CM</div>
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
            offset={linkOffset}
            duration={500}
          >
            Projects
          </Link>
          <a href="#contact">Contact</a>
        </div>
        <div className="social"></div>
      </nav>
      <div className="main-content">
        <About />
        <Projects />
        {/*TODO: refactor CONTACT to new component*/}
        <div className="contact-content">
          <a id="contact">
            <h1>Contact</h1>
          </a>

          <div className="contact-links">
            <a href="http://twitter.com/cmillecan">LinkedIn</a> -
            <a href="http://twitter.com/cmillecan">Twitter</a> -
            <a href="http://twitter.com/cmillecan">Twitter</a>
          </div>
        </div>
        {/*TODO: refactor FOOTER to new component*/}
        <div className="footer">
          <p>copyright 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
