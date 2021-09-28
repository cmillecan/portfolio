import React from "react";
import "./Layout.css";
import Projects from "./Projects";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <div className="main-content">
        <Hero />
      </div>
      <div className="projects-container">
        <Projects />
      </div>
      <div className="main-section">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
