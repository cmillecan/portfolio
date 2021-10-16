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
          <h3>Hi, I'm Connie!</h3>
        </div>
        <div className="about-box">
          <div className="about-me-paragraph">
            <div className="about-pic-wrapper">
              <div className="about-pic">
                <img src="https://i.imgur.com/DOrIxZr.jpg" alt="headshot" />
              </div>
            </div>
            <p>
              I am a software engineer and musician passionate about creativity.
              I enjoy full-stack development and am especially enthusiastic
              about building beautiful and intuitive UIs on the front end.
            </p>
            <p>
              I had my first experience with web design at age 14 when I built
              my own website as a hobby. I loved spending hours designing and
              making improvements, and even ended up making a little money from
              it! Like music, it was another creative outlet for me and I
              continued to maintain my website for years.
            </p>
            <p>
              After graduating from music school, my spark was re-ignited as I
              was establishing my private teaching studio. It was the perfect
              excuse to make another website! This brought back the many fun
              hours I'd spent in the past and reminded me how there was always
              more that I wanted to learn.
            </p>
            <p>
              What excites me the most about software engineering is that
              learning is never-ending and the small challenges that I
              continuously overcome motivate my curious mind to keep going.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
