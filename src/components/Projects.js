import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="project-image.jpg" alt="Project" />
        <h3>Chess</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src="project-image.jpg" alt="Project" />
        <h3>Blog</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src="project-image.jpg" alt="Project" />
        <h3>Mathematical Plotting</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src="project-image.jpg" alt="Project" />
        <h3>Anime Site</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
      <div className="project">
        <img src="project-image.jpg" alt="Project" />
        <h3>desktop application</h3>
        <p>using react native</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
