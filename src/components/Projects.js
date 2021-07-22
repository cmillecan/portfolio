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
          title="Blog"
          type="React, Responsive Design, AWS Amplify"
          date="June 2021"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/STyTepY.png"
              alt="blog"
            />
          }
          description="A responsive blog that renders custom styled Markdown built with React. It was deployed using AWS Amplify. "
          demo={
            <a
              href="https://notesandbytes.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye" />
            </a>
          }
        />
        <ProjectCard
          title="Music Theory App"
          type="React, Tone.js"
          date="May-June 2021"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/1qzwezp.png?1"
              alt="music game"
            />
          }
          description="An interactive and educational game for learning Major, Minor, Augmented, and Diminished triads on a musical keyboard. As a former music teacher I liked discovering ways to make learning fun, and while working on this project I had my former students in mind! "
          github={
            <a
              href="http://github.com/cmillecan/music-app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          }
          demo={
            <a
              href="https://cmillecan.github.io/music-app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye" />
            </a>
          }
        />
        <ProjectCard
          title="Disneyland App"
          type="MongoDB, Express.js, React"
          date="April 2021"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/FfwZi9s.png"
              alt="disneyland app"
            />
          }
          description="This project primarily focuses on a back-end which stores information of a variety of Disney resources such as
attractions and park information. It includes APIs which follow RESTful principles to expose end-points of each
resource. "
          github={
            <a
              href="http://github.com/cmillecan/disneyland-app"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          }
        />
        <ProjectCard
          title="Memory Game"
          type="React"
          date="April 2021"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/gG2br1O.png"
              alt="memory game"
            />
          }
          description="Features include different difficulty levels, a progress tracker, and CSS animations as players interact with the game. The implementation of this project focuses on state management, props, and component lifecycle methods in the context of the React library. "
          demo={
            <a
              href="https://cmillecan.github.io/memory-game/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye" />
            </a>
          }
          github={
            <a
              href="http://github.com/cmillecan/memory-game"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          }
        />
        <ProjectCard
          title="Portfolio Site"
          type="React, Responsive Web Design"
          date="January 2021"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/uz67VLv.png"
              alt="portfolio"
            />
          }
          description="I built my portfolio site with React and used it as a fun opportunity to get even more familiar with the JavaScript library. I enjoy creating clean layouts and I also wanted my portfolio site to be responsive. It's still a work in progress as I plan to add more projects and features over time."
          github={
            <a
              href="http://github.com/cmillecan/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          }
        />
        <ProjectCard
          title="FitApp"
          type="MySQL, Express.js, React"
          date="November 2020"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/L7ukSpb.png"
              alt="fitapp"
            />
          }
          description="FitApp is a web application for logging workouts. I specifically chose to build the front and back-end of this app in JavaScript
         to get familiar with the language and to learn some of its frameworks. Built with React, Express, MySQL, and was deployed using AWS and Docker. "
          demo={
            <a
              href="https://youtu.be/LxdsR191p_c"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye" />
            </a>
          }
          github={
            <a
              href="http://github.com/cmillecan/fitapp"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          }
        />

        <ProjectCard
          title="Simple Shell"
          type="C"
          date="April 2020"
          image={
            <img
              className="project-img"
              src="https://i.imgur.com/JGtEbvS.jpg"
              alt="simple shell"
            />
          }
          description="Simple Shell reproduces the behavior of the Bash Shell, including a REPL-like mechanism to run programs in forked processes. This project was written in the C programming language."
          github={
            <a
              href="http://github.com/cmillecan/simple_shell"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          }
        />
      </div>
    </Section>
  );
};

export default Projects;
