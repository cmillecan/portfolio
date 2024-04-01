import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
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
          <Link to="/about">
            <FontAwesomeIcon
              icon={faAddressCard}
              className="icon"
              style={iconStyles.about}
            />
            About
          </Link>
        </div>
        <div className="nav-link-projects">
          <Link to="/projects">
            <FontAwesomeIcon
              icon={faTerminal}
              className="icon"
              style={iconStyles.projects}
            />
            Projects
          </Link>
        </div>
        <div className="nav-link-resume">
          <Link to="/resume">
            <FontAwesomeIcon
              icon={faFile}
              className="icon"
              style={iconStyles.resume}
            />
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
