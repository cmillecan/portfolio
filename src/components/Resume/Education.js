import styled from "styled-components";
import {
  ContentLabel,
  Paragraph,
  SectionHeader,
  SectionWrapper,
} from "../common";
import holberton from "../../images/holberton.jpeg";
import React from "react";

const SchoolItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;

  img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
`;

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 650px;
`;

const SchoolTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 5px;

  ${ContentLabel} {
    font-weight: bold;
    color: var(--primary);
  }
`;

const SchoolItem = ({ img, name, award, dates, description }) => {
  return (
    <SchoolItemWrapper>
      <ImageWrapper className="school-img">
        <img src={img} alt={name} />
      </ImageWrapper>
      <SchoolInfo>
        <SchoolTitle>
          <ContentLabel>
            {name} — {award}
          </ContentLabel>
          <ContentLabel>{dates}</ContentLabel>
        </SchoolTitle>
        <Paragraph>{description}</Paragraph>
      </SchoolInfo>
    </SchoolItemWrapper>
  );
};

const Education = (props) => {
  return (
    <SectionWrapper>
      <SectionHeader>Education</SectionHeader>
      <SchoolItem
        img={holberton}
        name="Holberton School of Software Engineering"
        award="Certificate"
        dates="Jan 2020 - Nov 2020"
        description="Completed a nine month project-based curriculum covering computer
              science fundamentals."
      />
      {/*<SchoolItem />*/}
      {/*<SchoolItem />*/}
    </SectionWrapper>
  );
};

export default Education;
