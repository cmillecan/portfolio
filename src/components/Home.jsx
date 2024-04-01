import React from "react";
import MePic from "../images/medium.jpg";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-left-column">
          <div className="profile-card">
            <img
              className="profile-pic"
              src={MePic}
              alt="Connie in Barcelona"
            />
            <span className="name">Connie Millecan</span>
            <span className="software-engineer">software engineer</span>
            <div className="horizontal-divider" />

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/constance-m-8672151a1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="http://github.com/cmillecan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </div>
          </div>
        </div>
        <div className="home-right-column">
          <span className="hello">Hello, World!</span>

          <span className="about-me">
            I'm a Software Engineer focused on front-end development, with
            experience in creating React-based SaaS applications in agile
            environments.
          </span>
          <div className="cta-buttons">
            <Link to="/About" className="cta-primary">
              About
            </Link>
            <Link to="/projects" className="cta-secondary">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
