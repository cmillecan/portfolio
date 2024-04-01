import React from "react";
import projects from "./ProjectsData";
import "./PorfolioProjects.css";

const PortfolioProjects = () => {
  return (
    <div className="projects-container">
      <div className="projects-section">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-left-column">
              <h2>{project.title}</h2>
              <div className="project-links">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it out!
                  </a>
                ) : null}
                {project.videoUrl ? (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Demo
                  </a>
                ) : null}
              </div>

              <p>{project.description}</p>
              <div className="project-tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-right-column">
              <img
                className="project-image"
                src={project.imageUrl}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;
