import React from "react";
import Section from "./Section";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import FitApp from "../../images/projects/portfolio-fitapp.png";
import Disney from "../../images/projects/portfolio-disney.png";
import Music from "../../images/projects/portfolio-music.png";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="projects-content">
          <span className='projects-header'>
              <h5>Projects</h5>
          </span>
        <ProjectCard
          title="Music Theory App"
          types={["React", "Tone.js"]}
          date="May-June 2021"
          image={<img className="project-img" src={Music} alt="music game" />}
          description="An interactive and educational game for learning Major, Minor, Augmented, and Diminished triads on a musical keyboard. As a former music teacher I liked discovering ways to make learning fun, and while working on this project I had my former students in mind! "
          github="http://github.com/cmillecan/music-app"
          demo="https://cmillecan.github.io/music-app/"
        />
        <ProjectCard
          title="Disneyland App"
          types={["MongoDB", "Express.js", "React"]}
          date="April 2021"
          image={
            <img className="project-img" src={Disney} alt="disneyland app" />
          }
          description="This project primarily focuses on a back-end which stores information of a variety of Disney resources such as
           attractions and park information. It includes APIs which follow RESTful principles to expose end-points of each
           resource. "
          github="http://github.com/cmillecan/disneyland-app"
        />
        <ProjectCard
          title="FitApp"
          types={["MySQL", "Express.js", "React"]}
          date="November 2020"
          image={<img className="project-img" src={FitApp} alt="fitapp" />}
          description="FitApp is a web application for logging workouts. I specifically chose to build the front and back-end of this app in JavaScript
          to get familiar with the language and to learn some of its frameworks. Built with React, Express, MySQL, and was deployed using AWS and Docker. "
          demo="https://youtu.be/LxdsR191p_c"
          github="http://github.com/cmillecan/fitapp"
        />
      </div>
    </Section>
  );
};

export default Projects;
