import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 20px; /* Example change */
    margin-bottom: 0;
  }
`;

const Section = (props) => {
  const { children, id } = props;
  return <SectionWrapper id={id}>{children}</SectionWrapper>;
};

export default Section;
