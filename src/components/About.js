import React from "react";
import Section from "./Section";
import "./About.css";
import styled from "styled-components";

const ResumeButton = styled.button`
  font-size: 13px;
  color: var(--white);
  background: var(--secondary);
  border: 0;
  border-radius: 2px;
  padding: 10px;
  margin-top: 30px;

  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

const About = () => {
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
            Hi! I am a software engineer and musician passionate about
            creativity. Originally I had studied music in college, but recently
            I pursued and finished an education in computer science. I had my
            first experience with web design over 15 years ago when I was
            building my own website as a hobby. I loved spending hours designing
            and making improvements, and even ended up making a little money
            from it. My interest in software never went away, as I've continued
            to have the desire to learn more. Although my professional
            background has been in music so far, I am currently very excited to
            focus on my software career.
          </p>
        </div>
      </div>
      <ResumeButton onClick={() => {}}>Download Resume</ResumeButton>
    </Section>
  );
};

export default About;
