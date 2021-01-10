import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { title, type, date, image, description, github } = props;

  return (
    <div className="projects-display">
      <div className="complete-project">
        <div className="project-top">
          <div className="project-name">
            <h2>{title}</h2>
          </div>
          <div className="project-h3">
            <h3>{type}</h3>
          </div>
        </div>
        <div className="project-bottom">
          <h4>{date}</h4>
          {image}
          <p>{description}</p>
          <div className="project-h3">
            <a href={github}>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
