import styled from "styled-components";
import {
  ContentLabel,
  List,
  Paragraph,
  SectionHeader,
  SectionWrapper,
} from "../common";
import React from "react";

const ExpHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  flex-wrap: wrap;
  flex-direction: row;

  h4 {
    font-weight: bold;
    color: var(--primary);
  }
`;

const ExpTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ExpItem = (props) => {
  const { name, location, role, dates, descriptions } = props;
  return (
    <>
      <ExpHeader>
        <ExpTitle>
          <ContentLabel>
            {name} ({location}) - {role}
          </ContentLabel>
        </ExpTitle>
        <ContentLabel>{dates}</ContentLabel>
      </ExpHeader>
      <List>
        {descriptions.map((d, i) => (
          <Paragraph key={i}>{d}</Paragraph>
        ))}
      </List>
    </>
  );
};

const Experience = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Experience</SectionHeader>
      <ExpItem
        name="Amabile School of Music"
        location="San Francisco, CA"
        role="Music Teacher"
        dates="Aug 2017 - Dec 2019"
        descriptions={[
          "Managed a teaching studio of over 30 private students.",
          "Prepared students for recitals, exams, and competitions.",
          "Facilitated group classes on music theory and ensemble playing.",
        ]}
      />
      <ExpItem
        name="Han Quartet"
        location="Long Beach, CA"
        role="Performer"
        dates="Aug 2013 - May 2015"
        descriptions={[
          "Performed concerts regularly in the Southern California region.",
          "Prepared works as requested by clients.",
          "Participated in education out-reach programs within public schools.",
        ]}
      />
    </SectionWrapper>
  );
};

export default Experience;
