import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const linkOffset = -145;

  return (
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
        <Link
          activeClass="active"
          to="contact"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <div className="social"></div>
    </nav>
  );
};

export default Navbar;
