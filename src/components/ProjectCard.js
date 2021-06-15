import React from "react";
import "./ProjectCard.css";
// import Pill from "./Pill";
import { ContentLabel, Paragraph, SectionHeader } from "./common";

const ProjectCard = (props) => {
  const { title, type, image, description, github, demo } = props;

  return (
    <div className="projects-display">
      <div className="complete-project">
        <div className="project-card">
          <div className="project-img">{image}</div>
          <div className="project-name">
            <SectionHeader>{title}</SectionHeader>
          </div>
          <ContentLabel type="primary">{type}</ContentLabel>
          <div className="project-description">
            <Paragraph>{description}</Paragraph>
            <div className="project-links">
              {github}
              {demo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
