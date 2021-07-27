import React from "react";
import Section from "./Section";
import "./About.css";
import styled from "styled-components";

// const ResumeButton = styled.button`
//   font-size: 14px;
//   color: var(--white);
//   background: transparent;
//   border: 1px solid var(--white);
//   padding: 10px;
//   margin-top: 10px;
//
//   &:hover {
//     color: var(--pink);
//     border: 1px solid var(--pink);
//     cursor: pointer;
//     transition: 0.2s;
//   }
// `;

const About = () => {
  return (
    <Section id="about">
      <div className="about-div">
        <div className="name">
          <h1>Constance Millecan</h1>
          <h5>software engineer</h5>
        </div>
        <div className="about-box">
          <div className="about-left">
            <img
              className="about-pic"
              src="https://i.imgur.com/DOrIxZr.jpg"
              alt="headshot"
            />
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
          <div className="about-right">
            <p>
              Hi! I am a software engineer and musician passionate about
              creativity. I enjoy full-stack development and am especially
              enthusiastic about front-end development. As a software engineer,
              I'm always focused on how code feels, looks, and functions but am
              also detail-oriented about visual elements. I have enjoyed working
              on full-stack projects and learning how the front-end and back-end
              communicate with each other. What excites me the most about
              software engineering is that learning is never-ending and the
              small challenges that I continuously overcome motivate my curious
              mind to keep going.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
