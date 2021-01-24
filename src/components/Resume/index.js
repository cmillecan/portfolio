import React from "react";
import Section from "../Section";
import "../Resume.css";
import styled from "styled-components";
import Education from "./Education";
import Experience from "./Experience";
import Technologies from "./Technologies";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResumeButton = styled.button`
  font-size: 13px;
  color: var(--white);
  background: var(--secondary);
  border: 0;
  border-radius: 2px;
  padding: 10px;
  margin-top: 30px;

  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

const Resume = () => {
  return (
    <>
      <ResumeButton onClick={() => {}}>Download Resume</ResumeButton>
      <Content>
        <Technologies />
        <Experience />
        <Education />
      </Content>
    </>
  );
};

export default Resume;
