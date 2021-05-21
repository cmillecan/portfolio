import React from "react";
import "./Footer.css";
import { ContentLabel } from "./common";
import flower from "../images/cmkoreansymbol.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={flower} alt="constance millecan website logo" />
        <ContentLabel>© 2021 Constance Millecan</ContentLabel>
      </div>
    </div>
  );
};

export default Footer;
