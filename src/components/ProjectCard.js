import React, { useState } from "react";
import "./ProjectCard.css";
import { ContentLabel, Paragraph } from "./common";
import Pill from "./Pill";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';

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
        <div className="left">
          <div className="project-img">{image}</div>
          <div className="project-links">
            {github && (
                <div className='link-icon'>
                  <a href={github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                </div>
            )}
            {demo && (
                <div className='link-icon'>
                  <a href={demo} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
            )}
          </div>
        </div>
        <div className="right">
          <div className='project-title'>
            <h2>{title}</h2>
          </div>

          <div className="project-description">
            <Paragraph>{description}</Paragraph>
          </div>
          <ContentLabel className="technologies">
            {types.map((type) => {
              return <Pill key={type}>{type}</Pill>;
            })}
          </ContentLabel>
        </div>
    </div>
  );
};

export default ProjectCard;
