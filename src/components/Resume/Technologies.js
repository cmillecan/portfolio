import styled from "styled-components";
import Pill from "../Pill";
import { ContentLabel, SectionHeader, SectionWrapper } from "../common";
import React from "react";

const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const Technologies = () => {
  const renderTechList = (list) => (
    <TechWrapper>
      {list.map((item, i) => {
        return (
          <Pill key={i} type="secondary">
            {item}
          </Pill>
        );
      })}
    </TechWrapper>
  );

  const profList = ["Javascript", "HTML", "CSS"];
  const proficiencies = renderTechList(profList);

  const famList = [
    "Python",
    "C",
    "Vim",
    "React.js",
    "Express.js",
    "SQL",
    "MySQL",
    "Bash/Zsh",
    "Docker",
    "AWS",
    "Inkscape",
  ];
  const familiarities = renderTechList(famList);

  return (
    <SectionWrapper>
      <SectionHeader>Technologies</SectionHeader>
      <ContentLabel bold left>
        Proficient with
      </ContentLabel>
      {proficiencies}
      <ContentLabel bold left>
        Familiar with
      </ContentLabel>
      {familiarities}
    </SectionWrapper>
  );
};

export default Technologies;
