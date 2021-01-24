import styled from "styled-components";
import {
  ContentLabel,
  Paragraph,
  SectionHeader,
  SectionWrapper,
} from "../common";
import holberton from "../../images/holberton.jpeg";
import sfcm from "../../images/sfcm.jpeg";
import lb from "../../images/lb.jpeg";
import React from "react";

const SchoolItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const SchoolTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;

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
      <SchoolItem
        img={lb}
        name="California State University Long Beach — MM"
        award="MM"
        dates="Aug 2013 - May 2015"
        description="Completed a master’s degree program in violin performance."
      />
      <SchoolItem
        img={sfcm}
        name="San Francisco Conservatory of Music"
        award="BM"
        dates="Aug 2009 - May 2013"
        description="Completed undergraduate work in violin performance."
      />
    </SectionWrapper>
  );
};

export default Education;
