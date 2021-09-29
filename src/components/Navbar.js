import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../images/logo.png";

const Navbar = () => {
  const linkOffset = -145;

  return (
    <nav className="navbar">
      <Link
        activeClass="active"
        to="hero"
        spy
        smooth
        offset={linkOffset}
        duration={500}
      >
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <div className="nav-links">
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
        <a
          alt="resume"
          href="https://drive.google.com/file/d/1DLkK7UinY0729XbSHJUKW933GzykpoXc/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
