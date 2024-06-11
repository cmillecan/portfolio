import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMusic,
  faScissors,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const iconStyles = {
    powerlifting: { color: "var(--primary)" },
    music: { color: "var(--secondary)" },
    cooking: { color: "var(--secondarylight)" },
    crocheting: { color: "var(--primary)" },
  };

  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About</h1>
        <div className="about-info">
          <p className="fancy-first-letter">
            <span className="fancy-word">My </span> fascination with frontend
            development began over 15 years ago when I was in high school,
            sparked by countless hours devoted to building and maintaining my
            personal website. This ignited my passion for creating captivating
            and user-friendly web applications.
          </p>
          <p>
            Ultimately, I chose to pursue a career in music, and after immersing
            myself in the music world, I found myself missing the creativity of
            building something on the web and the challenges of learning new
            skills. This realization brought my journey full circle, leading me
            back to software development.
          </p>
          <p>
            What attracts me to software engineering, much like music, is the
            limitless potential for creativity, the meticulous attention to
            detail, the discipline needed to excel, and the constant evolution
            of technology that always offers new ways to grow and improve.
          </p>
          <div className="hobbies">My Interests and Hobbies:</div>

          <div className="hobbies-list">
            <div className="hobby">
              <FontAwesomeIcon
                icon={faDumbbell}
                size="sm"
                style={iconStyles.powerlifting}
              />
              <span>Powerlifting</span>
            </div>
            <div className="hobby">
              <FontAwesomeIcon
                icon={faMusic}
                size="sm"
                style={iconStyles.music}
              />
              <span>Music</span>
            </div>
            <div className="hobby">
              <FontAwesomeIcon
                icon={faUtensils}
                size="sm"
                style={iconStyles.cooking}
              />
              <span>Cooking</span>
            </div>
            <div className="hobby">
              <FontAwesomeIcon
                icon={faScissors}
                size="sm"
                style={iconStyles.crocheting}
              />
              <span>Crocheting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
