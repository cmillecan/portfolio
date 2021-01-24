import React from "react";
import Section from "../Section";
import "../Resume.css";
import styled from "styled-components";
import Education from "./Education";
import Experience from "./Experience";
import Technologies from "./Technologies";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Resume = () => {
  return (
    <Section id="resume">
      <h1>Resume</h1>
      <button onClick={() => {}}>Download PDF</button>
      <Content>
        <Technologies />
        <Experience />
        <Education />
      </Content>
    </Section>
  );
};

export default Resume;
