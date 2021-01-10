import React from "react";
import "./Contact.css";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="contact-content">
        <h1>Contact</h1>

        <div className="contact-links">
          <a href="http://twitter.com/cmillecan">LinkedIn</a> -
          <a href="http://twitter.com/cmillecan">Twitter</a> -
          <a href="http://twitter.com/cmillecan">Twitter</a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
