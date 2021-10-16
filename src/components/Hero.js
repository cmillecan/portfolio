import React from "react";
import "./Hero.css";
import Heroimg from "../images/heroimg.png";
import Section from "./Section";
import "animate.css";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="hero-box">
        <div className="hero-left">
          <h1>Constance Millecan</h1>
          <h3 className="hero-role">Software Engineer</h3>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/constance-m-8672151a1/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="http://github.com/cmillecan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt" />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-pic" src={Heroimg} alt="hero image" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
