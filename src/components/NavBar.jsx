import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import Flower from "../images/cmkoreansymbol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faFile, faAddressCard } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  const iconStyles = {
    about: { color: "var(--secondarylight)" },
    resume: { color: "var(--primary)" },
    projects: { color: "var(--secondary)" },
  };

  return (
    <div className="nav">
      <div className="logo-name">
        <Link to="/">
          <img className="logo-symbol" src={Flower} alt="korean flower" />
        </Link>
        <span className="logo-font">
          <Link to="/">Connie Millecan</Link>
        </span>
        <span className="title-font">Software Engineer</span>
      </div>
      <div className="nav-links">
        <div className="nav-link-about">
          <NavLink to="/about" activeClassName="active">
            <FontAwesomeIcon
              icon={faAddressCard}
              className="icon"
              style={iconStyles.about}
            />
            About
          </NavLink>
        </div>
        <div className="nav-link-projects">
          <NavLink to="/projects" activeClassName="active">
            <FontAwesomeIcon
              icon={faTerminal}
              className="icon"
              style={iconStyles.projects}
            />
            Projects
          </NavLink>
        </div>
        <div className="nav-link-resume">
          <NavLink to="/resume" activeClassName="active">
            <FontAwesomeIcon
              icon={faFile}
              className="icon"
              style={iconStyles.resume}
            />
            Resume
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
