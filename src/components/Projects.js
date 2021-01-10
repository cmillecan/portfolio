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
          type="web application"
          date="November 2020"
          image={
            <img
              src="https://i.imgur.com/d24RntH.png"
              width="350"
              alt="fitapp"
            />
          }
          description="FitApp is a web application for logging workouts. I created
                  this project as my final project at Holberton School. sldkfj
                  sdlkfjd lskfj sdkfjs skfjls dkjf skdj s f. FitApp is a web
                  application for logging workouts. I created this project as my
                  final project at Holberton School. FitApp is a web application
                  for logging workouts."
          github="http://github.com/cmillecan/fitapp"
        />

        <ProjectCard
          title="Simple Shell"
          type="linux and unix system programming"
          date="May 2020"
          image={
            <img
              src="https://i.imgur.com/JGtEbvS.jpg"
              width="350"
              height="223"
              alt="simple shell"
            />
          }
          description="FitApp is a web application for logging workouts. I created
                  this project as my final project at Holberton School. sldkfj
                  sdlkfjd lskfj sdkfjs skfjls dkjf skdj s f. FitApp is a web
                  application for logging workouts. I created this project as my
                  final project at Holberton School. FitApp is a web application
                  for logging workouts."
          github="http://github.com/cmillecan/simple_shell"
        />
      </div>
    </Section>
  );
};

export default Projects;
