import React from "react";
import "./Layout.css";
import Projects from "./Projects";
import About from "./About";
import LeftSection from "./LeftSection";
import Experience from "./Experience";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="colorful-bar"/>
            <div className="left-content">
                <LeftSection />
            </div>
            <div className="right-content">
                <About />
                <Experience />
                <Projects />
            </div>
        </div>
    );
};

export default Portfolio;
