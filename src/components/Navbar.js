import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const linkOffset = -145;

  return (
    <div className="nav-container">
      <nav className="navbar">
        <a className="logo" href="/">
          cm
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
          <a
            alt="resume"
            href="https://drive.google.com/file/d/1zq5WFNYFbK92trIyCjCY3HXs19BvRjfw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
      <div className="gradient-div" />
    </div>
  );
};

export default Navbar;
