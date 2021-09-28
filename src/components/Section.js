import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 70px;
  margin-bottom: 10px;
`;

const Section = (props) => {
  const { children, id } = props;
  return <SectionWrapper id={id}>{children}</SectionWrapper>;
};

export default Section;
