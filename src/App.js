import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import PortfolioProjects from "./components/PortfolioProjects";
import AboutMe from "./components/AboutMe";
import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <AnimatedRoute>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<PortfolioProjects />} />
          </Routes>
        </AnimatedRoute>
      </div>
    </Router>
  );
}

export default App;
