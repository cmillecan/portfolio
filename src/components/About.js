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
                <div className="about-header">
                <h5>About</h5>
                </div>
                <p>
                    I'm a software engineer with experience in agile environments, primarily working with React and SaaS applications.
                    I have a deep passion for frontend development, where I focus on crafting clean, efficient code and prioritizing user-friendly experiences.
                </p>
                <p>
                    My journey as a musician has been instrumental in shaping my approach to software engineering.
                    The creativity, discipline, and attention to detail I developed in music are key assets in my coding and design work.
                    This combination of artistic and technical skills enables me to develop applications that are functional, intuitive, and engaging.
                </p>
                <p>
                    I'm driven by the ever-evolving nature of software engineering, where continuous learning and overcoming daily
                    challenges fuel my professional growth.
                    Each project is a chance to blend technical skill with creativity, focusing on creating impactful and user-centric solutions.
                </p>
            </div>
        </Section>
    );
};

export default About;
