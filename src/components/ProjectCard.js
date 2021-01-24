import React from "react";
import "./ProjectCard.css";
import Pill from "./Pill";
import { ContentLabel, Paragraph, SectionHeader } from "./common";

const ProjectCard = (props) => {
  const { title, type, date, image, description, github } = props;

  return (
    <div className="projects-display">
      <div className="complete-project">
        <div className="project-top">
          <div className="project-name">
            <SectionHeader>{title}</SectionHeader>
          </div>
          <div className="project-h3">
            <Pill type="primary">{type}</Pill>
          </div>
        </div>
        <div className="project-bottom">
          <ContentLabel>{date}</ContentLabel>
          {image}
          <Paragraph>{description}</Paragraph>
          <div className="project-h3">
            <a href={github}>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
