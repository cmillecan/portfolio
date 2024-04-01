import React from "react";
import styled from "styled-components";

export const SectionHeader = styled.h2`
  margin-top: 10px;
  line-height: 0;
  font-weight: bolder;
  font-family: 'Manrope', sans-serif;
  text-transform: uppercase;
  font-size: 25px;
  color: var(--brown);
  background-image: linear-gradient(
    transparent 0,
    transparent 55%,
    var(--primarylight) 55%,
    var(--primarylight) 90%,
    transparent 90%,
    transparent 100%
  );
  background-repeat: no-repeat;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 40px;
`;

export const ContentLabel = styled.h4`
  font-family: "Quicksand", sans-serif;
  color: var(--primary);
  text-align: center;
  font-size: 14px;
  margin: 12px 0;
`;

export const Paragraph = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  font-weight: lighter;
  color: var(--font);
  margin: 0;
`;

const StyledUl = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledLi = styled.li`
  margin-bottom: 4px;
`;

export const List = ({ children }) => {
  return (
    <StyledUl>
      {children.map((child, i) => (
        <StyledLi key={i}>{child}</StyledLi>
      ))}
    </StyledUl>
  );
};
