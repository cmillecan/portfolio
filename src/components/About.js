import React from "react";
import Section from "./Section";
import "./About.css";
import styled from "styled-components";

const ResumeButton = styled.button`
  font-size: 14px;
  color: var(--white);
  background: transparent;
  border: 1px solid var(--white);
  padding: 10px;
  margin-top: 30px;

  &:hover {
    color: var(--pink);
    border: 1px solid var(--pink);
    cursor: pointer;
    transition: 0.2s;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <div className="name">
        <h1>Constance Millecan</h1>
      </div>
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
            Hi! I am a software engineer and musician passionate about
            creativity. I enjoy full-stack development and am especially
            enthusiastic about front-end development. As a software engineer,
            I'm always focused on how code feels, looks, and functions but am
            also detail-oriented about visual elements. I have enjoyed working
            on full-stack projects and learning how the front-end and back-end
            communicate with each other. What excites me the most about software
            engineering is that learning is never-ending and the small
            challenges that I continuously overcome motivate my curious mind to
            keep going.
          </p>
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1OWJhX5NrNC4ITwhz0lnHNkwgaZazszT2/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <ResumeButton>Download Resume</ResumeButton>
      </a>
    </Section>
  );
};

export default About;
