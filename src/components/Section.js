import React from "react";
import "./Section.css";

const Section = (props) => {
  const { children, id } = props;
  return (
    <section id={id} className="layout-section">
      {children}
    </section>
  );
};

export default Section;
