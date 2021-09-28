import React, { useState } from "react";
import "./ProjectCard.css";
import { ContentLabel, Paragraph, SectionHeader } from "./common";
import Pill from "./Pill";
import styled from "styled-components";

const ProjectLinkBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 8px;
  transition: 0.5s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isVisible ? "80%" : "0%")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const ProjectCard = (props) => {
  const { title, types, image, description, github, demo } = props;
  const [showProjectLinks, setShowProjectLinks] = useState(false);

  return (
    <div className="project-card">
      <div className="project-title">
        <h1>{title}</h1>
      </div>
      <div className="project-row">
        <div className="left">
          <div className="project-img">{image}</div>
          <ProjectLinkBackground
            isVisible={showProjectLinks}
            onMouseOver={() => setShowProjectLinks(true)}
            onMouseLeave={() => setShowProjectLinks(false)}
          >
            <div className="project-links">
              {github ? github : ""}
              {demo ? demo : ""}
            </div>
          </ProjectLinkBackground>
        </div>
        <div className="right">
          <ContentLabel className="technologies">
            {types.map((type) => {
              return <Pill key={type}>{type}</Pill>;
            })}
          </ContentLabel>
          <div className="project-description">
            <Paragraph>{description}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
