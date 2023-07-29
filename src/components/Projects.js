import React from 'react';
import project1jpg from '../aca.jpg';
import mathy from "../mandelbrot.jpeg"
import blogger from "../download.png"
import epa from "../epa.png"
import manager from "../manager.jpeg"
const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src={project1jpg} alt="aca" />
        <h3>Chess</h3>
        <p>Webapp created in JS</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src={blogger} alt="Project" />
        <h3>Blog</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src={mathy} alt="Project" />
        <h3>Mathematical Plotting</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src={epa} alt="Project" />
        <h3>Anime Site</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src={manager} alt="Project" />
        <h3>Password Manager</h3>
        <p>desktop application using react native</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
