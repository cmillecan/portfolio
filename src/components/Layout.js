import React from "react";
import "./Layout.css";
import Projects from "./Projects";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <div className="main-content">
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
