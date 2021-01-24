import React from "react";
import "./ResumeLayout.css";
import sfcm from "../images/sfcm.jpeg";
import lb from "../images/lb.jpeg";
import holberton from "../images/holberton.jpeg";

const ResumeLayout = (props) => {
  const { name, technologies, projects, experience, education } = props;

  return (
    <div className="resume-content">
      <div className="education">
        <div className="education-div">
          <div className="school-img">
            <img src={lb} alt="California State University Long Beach" />
          </div>
          <div className="education-info">
            <div className="education-title">
              <h4>California State University Long Beach — MM</h4>
              <h4>AUGUST 2013 - MAY 2015</h4>
            </div>
            <p>Completed a master’s degree program in violin performance.</p>
          </div>
        </div>
        <div className="education-div">
          <div className="school-img">
            <img src={sfcm} alt="San Francisco Conservatory of Music" />
          </div>
          <div className="education-info">
            <div className="education-title">
              <h4>San Francisco Conservatory of Music — BM</h4>
              <h4>AUGUST 2009 - MAY 2013</h4>
            </div>
            <p>Completed undergraduate work in violin performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLayout;
