import React from "react";
import Section from "./Section";
import "./About.css";

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
                <div className="about-header">
                    <h5>About</h5>
                </div>
                <p>
                    Hello! I'm a software engineer with experience in agile environments, primarily working with React and SaaS applications.
                </p>
                <p>
                    My fascination with frontend development began over 15 years ago when I was in high school, sparked by countless hours devoted to building and maintaining my personal website. This ignited my passion for creating captivating and user-friendly websites and applications.
                </p>
                <p>
                    Ultimately, I chose to pursue a career in music. After immersing myself in the music world, I found myself missing the creativity of building something on the web and the challenges of learning and mastering new skills. This realization brought my journey full circle, leading me back to software development.
                </p>
                <p>
                    What attracts me to software engineering, much like music, is the limitless potential for creativity, the meticulous attention to detail, the discipline needed to excel, and the constant evolution of technology that always offers new ways to grow and improve.

                </p>
            </div>
        </Section>
    );
};

export default About;
