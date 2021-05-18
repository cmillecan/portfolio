import React from "react";
import styled from "styled-components";

export const SectionHeader = styled.h2`
  margin-top: 10px;
  line-height: 0;
  font-weight: bolder;
  font-family: "Source Sans Pro", sans-serif;
  text-transform: lowercase;
  font-size: 30px;
  text-align: left;
  color: var(--black);
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 40px;
`;

export const ContentLabel = styled.h4`
  font-family: "Inter", sans-serif;
  color: var(--secondary);
  font-weight: ${(props) => (props.bold ? "bolder" : "lighter")};
  text-transform: uppercase;
  //text-align: ${(props) => (props.left ? "flex-start" : "center")};
  line-height: 0;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  line-height: 18px;
  color: var(--black);
  font-weight: bolder;
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
