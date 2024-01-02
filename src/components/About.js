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
                    Hello! I'm a software engineer with experience in agile environments, primarily working with React and SaaS applications. I have a deep passion for frontend development, where I focus on crafting clean, efficient code and prioritizing user-friendly experiences.
                </p>
                <p>
                    But here's a fun twist - I'm also a musician! This part of my life has been a huge influence on how I approach software engineering. It's where I learned the magic of blending creativity with discipline and the importance of sweating the small stuff. These skills are key assets in my coding and design work, helping me create apps that are functional and intuitive.                </p>
                <p>
                    What really excites me about software engineering is its constant evolution – it's a field where learning never stops, and there's always a new challenge just around the corner. With every project I dive into, I get to combine technical skill with creativity, aiming to create impactful and user-centric solutions.
                </p>
            </div>
        </Section>
    );
};

export default About;
