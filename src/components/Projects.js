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
          title="Portfolio Site"
          type="front-end web application"
          date="January 2021"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/lMjwc9j.png"
              alt="portfolio"
            />
          }
          description="I built my portfolio site using React and CSS. It was a fun opportunity to get even more familiar with React. I enjoy creating clean layouts and I also wanted my portfolio site to be responsive. It's still a work in progress as I plan to add more projects and features over time."
          github="http://github.com/cmillecan/portfolio"
        />
        <ProjectCard
          title="FitApp"
          type="full stack web application"
          date="November 2020"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/d24RntH.png"
              alt="fitapp"
            />
          }
          description="FitApp is a web application for logging workouts. I specifically chose to build the front and back-end of this app in JavaScript
         to get familiar with the language and to learn some of its frameworks. FitApp was built with React, Express, MySQL, and was deployed using AWS and Docker. "
          demo={
            <a href="https://youtu.be/LxdsR191p_c" target="_blank">
              Watch Demo
            </a>
          }
          github="http://github.com/cmillecan/fitapp"
        />

        <ProjectCard
          title="Simple Shell"
          type="linux and unix system programming"
          date="April 2020"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/JGtEbvS.jpg"
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
