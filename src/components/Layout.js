import React from "react";
import "./Layout.css";
import Projects from "./Projects";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <div className="main-content">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
