import React from "react";
import styled from "styled-components";

export const SectionHeader = styled.h2`
  margin: 20px auto;
  line-height: 0;
  font-weight: bolder;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 25px;
  color: var(--black);
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin: 0 40px;
`;

export const SectionLabel = styled.label`
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  font-family: "Inter", sans-serif;
  color: var(--black);
  font-weight: bolder;
`;

export const ContentLabel = styled.h4`
  font-family: "PT Sans", sans-serif;
  color: var(--black);
  text-transform: uppercase;
  text-align: center;
  line-height: 0;
  font-size: 16px;
  font-weight: lighter;
  margin-top: 10px;
  margin-bottom: 7px;
`;

export const Paragraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: var(--black);
  font-weight: bolder;
`;

const StyledUl = styled.ul`
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const List = ({ children }) => {
  return (
    <StyledUl>
      {children.map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </StyledUl>
  );
};
