import styled from "styled-components";
import Pill from "../Pill";
import { SectionHeader, SectionLabel, SectionWrapper } from "../common";
import React from "react";

const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
      <SectionLabel>Proficient with:</SectionLabel>
      {proficiencies}
      <SectionLabel>Familiar with:</SectionLabel>
      {familiarities}
    </SectionWrapper>
  );
};

export default Technologies;
