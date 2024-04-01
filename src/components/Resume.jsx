import React from "react";
import "./Resume.css";
import resumeData from "./ResumeData";

const SkillsSection = (props) => {
  const { skills, sectionTitle } = props;

  return (
    <div className="resume-list">
      <div className="resume-left-column">
        <h2>{sectionTitle}</h2>
      </div>
      <div className="resume-right-column">
        <div className="skills-section">
          {skills.map((skill) => (
            <div className="tech-tag" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperiencesSection = (props) => {
  const { experiences, sectionTitle } = props;

  return (
    <div className="resume-list">
      <div className="resume-left-column">
        <h2>{sectionTitle}</h2>
      </div>
      <div className="entries-container">
        {experiences.map((exp, index) => {
          const { dates, title, description } = exp;
          const formattedDescriptions =
            description?.length > 1 ? (
              <ul>
                {description?.map((desc, descIndex) => (
                  <li key={descIndex}>
                    <p>{desc}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="description">{description[0]}</p>
            );
          return (
            <div key={index} className="resume-right-column">
              <div className="dates-and-title">
                <span className="dates">{dates}</span>
                <div className="title-and-description">
                  <span className="title-header">{title}</span>
                  <div className="description">{formattedDescriptions}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-section">
        <span className="page-title">
          <h1>Resume</h1>
        </span>
        <ExperiencesSection
          sectionTitle="Work Experience"
          experiences={resumeData.workExperience}
        />
        <ExperiencesSection
          sectionTitle="Education"
          experiences={resumeData.education}
        />
        <SkillsSection sectionTitle="Skills" skills={resumeData.skills} />
      </div>
    </div>
  );
};

export default Resume;
