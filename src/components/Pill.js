import styled from "styled-components";

const Pill = styled.div`
  font-family: "PT Sans", sans-serif;
  text-transform: uppercase;
  border-radius: 40px;
  padding: 10px 9px 9px;
  text-align: center;
  line-height: 0;
  font-size: 14px;
  font-weight: lighter;
  margin-top: 10px;
  margin-right: 4px;
  margin-bottom: 7px;
  color: ${(props) => {
    if (props.type === "primary") return "var(--primary)";
    if (props.type === "secondary") return "var(--secondary)";
    return "black";
  }};
  border: 1px solid
    ${(props) => {
      if (props.type === "primary") return "var(--primary)";
      if (props.type === "secondary") return "var(--secondary)";
      return "black";
    }};
`;

export default Pill;
