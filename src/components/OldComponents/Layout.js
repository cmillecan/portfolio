import React from "react";
import "./Layout.css";
import Projects from "./Projects";
import About from "./About";
import LeftSection from "./LeftSection";
import Experience from "./Experience";
import Home from '../Home';

const Layout = () => {
    return (
        <div className="portfolio-container">
            <Home />
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

export default Layout;
