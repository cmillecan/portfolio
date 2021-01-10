import React from "react";
import Section from "./Section";
import "./About.css";

const About = (props) => {
  return (
    <Section id="about">
      <h1>Constance Millecan</h1>
      <h5>software engineer</h5>
      <div className="about">
        <div className="about-left">
          <img
            className="about-pic"
            src="https://i.imgur.com/DOrIxZr.jpg"
            alt="fitapp"
          />
        </div>
        <div className="about-right">
          <p>
            Hi! I am a _____ and I am passionate about creativity. I have been
            studying _____ for the past _____ years. I had my first experience
            with web design over 15 years ago in high school when I had a web
            site and would spend hours designing and making little adjustments
            and I loved it. Although my professional background is in music, my
            interest in software never went away. I always had the desire to
            learn more and discover all the amazing things I can create. There
            is something about both music and software that brings me into a
            fascinating world. I am very excited to explore more in the field of
            software engineering.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
