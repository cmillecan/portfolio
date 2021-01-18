import React from "react";
import Section from "./Section";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <ProjectCard
          title="FitApp"
          type="full stack web application"
          date="November 2020"
          image={
            <img
              src="https://i.imgur.com/d24RntH.png"
              width="350"
              alt="fitapp"
            />
          }
          description="FitApp is a web application for logging workouts. This was my final project for Holberton School. I specifically chose to build the front and back-end of this app in JavaScript
         to get familiar with the language and to learn some of its frameworks. FitApp was built with React, Express, MySQL, and was deployed using AWS and Docker."
          github="http://github.com/cmillecan/fitapp"
        />

        <ProjectCard
          title="Simple Shell"
          type="linux and unix system programming"
          date="April 2020"
          image={
            <img
              src="https://i.imgur.com/JGtEbvS.jpg"
              width="350"
              height="223"
              alt="simple shell"
            />
          }
          description="Simple Shell reproduces the behavior of the Bash Shell, including a REPL-like mechanism to run programs in forked processes. This project was written in the C programming language."
          github="http://github.com/cmillecan/simple_shell"
        />
      </div>
    </Section>
  );
};

export default Projects;
